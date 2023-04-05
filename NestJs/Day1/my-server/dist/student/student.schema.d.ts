import * as mongoose from "mongoose";
export declare let StudentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    courseIds: any[];
    id?: number;
    name?: string;
    age?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    courseIds: any[];
    id?: number;
    name?: string;
    age?: number;
}>> & Omit<mongoose.FlatRecord<{
    courseIds: any[];
    id?: number;
    name?: string;
    age?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
