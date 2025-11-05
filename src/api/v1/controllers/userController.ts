import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import admin from '../../../config/firebaseAdmin';


export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid } = req.params;
        const userRecord = await admin.auth().getUser(uid);
        res.status(200).json(userRecord);
    } catch (err) {
        logger.error(err as string);
        next(err);
    }
};

export const setCustomClaims = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { uid } = req.params;
        const { role } = req.body;
        await admin.auth().setCustomUserClaims(uid, { role });
        res.status(200).json({ message: `Role ${role} set for user ${uid}` });
    } catch (err) {
        logger.error(err as string);
        next(err);
    }
};
