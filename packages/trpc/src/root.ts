import { createTRPCRouter, publicProcedure } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	test: publicProcedure.query(() => {
		return "Hello from TRPC";
	}),
});

export type AppRouter = typeof appRouter;
