import * as mongoose from "mongoose";
export declare let CourseSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    duration: any[];
    id?: number;
    name?: string;
    description?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    duration: any[];
    id?: number;
    name?: string;
    description?: string;
}>> & Omit<mongoose.FlatRecord<{
    duration: any[];
    id?: number;
    name?: string;
    description?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
