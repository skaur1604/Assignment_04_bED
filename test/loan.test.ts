import request from 'supertest';
import app from '../src/app';
import admin from '../src/config/firebaseAdmin';

jest.mock('../src/config/firebaseAdmin');

describe('Loan Endpoints', () => {
  beforeEach(() => {
    (admin.auth().verifyIdToken as jest.Mock).mockResolvedValue({ uid: '123', role: 'officer' });
  });

  it('should return all loans', async () => {
    const res = await request(app)
      .get('/api/v1/loans')
      .set('Authorization', 'Bearer valid-token');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
  });

  it('should create a new loan', async () => {
    const res = await request(app)
      .post('/api/v1/loans')
      .set('Authorization', 'Bearer valid-token')
      .send({ applicantName: 'Alice', amount: 1000, riskLevel: 'high' });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('Loan created');
  });
});
