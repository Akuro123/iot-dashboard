import { Schema, model } from "mongoose";
import { IToken } from "modules/models/token.mode";
const tokenTypeEnum = {
    authorization: 'authorization'

};

const tokenTypes = [tokenTypeEnum.authorization];

const TokenSchema = new Schema<IToken>({
    userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    createData: { type: Number, required: true },
    type: { type: String, enum: tokenTypes, required: true },
    value: { type: String, required: true }

});
export default model<IToken>('Token-JW', TokenSchema);