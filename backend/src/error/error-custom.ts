import { HttpStatusEnum } from '../enums';

export class ErrorCustom extends Error {
    status: HttpStatusEnum;

    constructor(message: string, status: HttpStatusEnum) {
        super(message);
        this.status = status;

        Error.captureStackTrace(this, this.constructor);
    }
}
