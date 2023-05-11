import { AccountModel } from "../mongodb.ts";

export const find = async () => {
  return await AccountModel.find().toArray();
};
