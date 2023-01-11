import { Document, Model, Schema, model } from "mongoose";

export interface IUniversityInterface {
  alpha_two_code: string;
  name: string;
  web_pages: string[];
  'state-province': string | null;
  domains: string[];
  country: string;
}

interface IUniversityInput extends Document {
  alpha_two_code: string;
  name: string;
  web_pages: string[];
  'state-province': string | null;
  domains: string[];
  country: string;
}

const UniversitySchema = new Schema<IUniversityInput>(
  {
    alpha_two_code: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    web_pages: {
      type: [String],
      required: true
    },
    'state-province': {
      type: String,
      required: false,
      default: null
    },
    domains: {
      type: [String],
      required: true
    },
    country: {
      type: String,
      required: true
    },
  },
);

const universityModel: Model<IUniversityInput> = model("test", UniversitySchema);
export default universityModel;