import express, { Request, Response, NextFunction } from 'express'
import { z, AnyZodObject } from 'zod'

const validate = (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            let parsed_data = schema.parse(req.body);
            req.body = parsed_data;
            next();
        } catch (error) {
            console.log(error);
            return res.status(400).send({ message: error });
        }
    };

export default validate;