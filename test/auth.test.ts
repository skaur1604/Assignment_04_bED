import request from 'supertest';
import app from '../src/app';
import admin from '../src/config/firebaseAdmin';

jest.mock('../src/config/firebaseAdmin');

describe('Authentication Middleware', () => {
  it('should allow valid token', async () => {
    (admin.auth().verifyIdToken as jest.Mock).mockResolvedValue({ uid: '123', role: 'officer' });

    const res = await request(app)
      .get('/api/v1/loans')
      .set('Authorization', 'Bearer valid-token');

    expect(res.statusCode).toBe(200);
  });

  it('should reject missing token', async () => {
    const res = await request(app).get('/api/v1/loans');
    expect(res.statusCode).toBe(401);
  });

  it('should reject invalid token', async () => {
    (admin.auth().verifyIdToken as jest.Mock).mockRejectedValue(new Error('Invalid token'));

    const res = await request(app)
      .get('/api/v1/loans')
      .set('Authorization', 'Bearer invalid-token');

    expect(res.statusCode).toBe(401);
  });
});
