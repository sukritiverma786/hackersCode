import * as mongoose from "mongoose";

import { Model } from "mongoose";

type ResultType = ResultModel & mongoose.Document;

export interface ResultModel {
  Result: {
    type: string;
    required: true;
  };
}

const ResultSchema = new mongoose.Schema({
  Result: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, required: true, default: Date.now },
});

const Result: Model<ResultType> = mongoose.model<ResultType>("Result", ResultSchema);

export default Result;
