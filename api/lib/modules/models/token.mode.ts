import { Schema } from "mongoose";

export interface IToken {
    userId: Schema.Types.ObjectId;
    createData: Number;
    type: string;
    value: string;

}