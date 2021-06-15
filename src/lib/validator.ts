import { validationResult } from 'express-validator';
import { OutputMessage } from './output-message'

export function validate(req: any, res: any, next: any) {

    const errors = validationResult(req);

    if (errors.isEmpty()) return next();

    let extractedErrors: any[] = [];

    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    const message = new OutputMessage(400, 'Bad Request', extractedErrors, '');
    return res.status(400).json(message);
};
