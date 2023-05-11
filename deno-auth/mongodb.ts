import { mongodb } from "utils/mongodb.ts";
import { AccountBase } from "types/account.ts";

const db = await mongodb("account");

// mongodb account shcema
export const AccountModel = db.collection<AccountBase>("accounts");
