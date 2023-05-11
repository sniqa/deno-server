// deno-lint-ignore-file
import * as Joi from "joi";
import { Collection, Document, Filter, FindOptions } from "mongo";

export { Joi };

export const validate = (
  schema: Joi.ObjectSchema<any>,
  value: any,
  options?: Joi.ValidationOptions,
) => {
  const { error } = schema.validate(value, options);

  if (error) {
    throw error;
  }
};

export const isExistInMongodb = async <T extends Document>(
  collection: Collection<T>,
  filter?: Filter<T>,
  options?: FindOptions,
) => {
  const isExist = await collection.findOne(filter, options);

  if (isExist) {
    throw `exist`;
  }
};

export const isNotExistInMongodb = async (
  collection: Collection<Document>,
  filter?: Filter<Document>,
  options?: FindOptions,
) => {
  const isExist = await collection.findOne(filter, options);

  if (!isExist) {
    throw `not exist`;
  }
};
