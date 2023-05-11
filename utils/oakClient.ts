import { Application, ListenOptions, Router } from "oak";
export { Router };

export const oakClient = async (
  options: ListenOptions,
  router: Router<Record<string, any>>,
) => {
  const app = new Application();

  app.use(router.routes());

  app.use(router.allowedMethods());

  await app.listen(options);
};
