import { Request } from "express";

import {IUserDto} from "./dto";

export interface IRequest extends Request{
    user?: IUserDto
}
