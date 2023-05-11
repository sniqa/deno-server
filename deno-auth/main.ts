import { oakClient, Router } from "utils/oakClient.ts";
import { find } from "./controllers/find.ts";

const router = new Router();

router.get("/", (ctx) => ctx.response.body = "hello");

router.get("/find", async (ctx) => ctx.response.body = await find());

await oakClient({ port: 8000 }, router);
