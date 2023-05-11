import { AccountBase } from "types/account.ts";
import { isExistInMongodb, Joi, validate } from "utils/process.ts";
import { AccountModel } from "../mongodb.ts";

const validSchema = Joi.object({
  account: Joi.string().required(),
  password: Joi.string().required(),
});

export const create_account = async (query: AccountBase) => {
  validate(validSchema, query);

  await isExistInMongodb(AccountModel, { account: query.account });
};
