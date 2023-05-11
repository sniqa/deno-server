import { oakClient, Router } from "utils/oakClient.ts";
import { create_account } from "./controllers/create.ts";
import { find } from "./controllers/find.ts";

const router = new Router();

router.get("/api", (ctx) => ctx.response.body = "hello");

router.get("/api/find", async (ctx) => ctx.response.body = await find());

router.post(
  "/api/create_account",
  async (ctx) => {
    const result = await create_account(ctx.request.body() as any)
      .catch((res) => res);

    ctx.response.body = result;
  },
);

await oakClient({ port: 8000 }, router);
