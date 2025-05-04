import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter, createTRPCContext } from "@app/trpc";
import { headers } from "next/headers";

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouter,
		createContext: async () => createTRPCContext({ headers: await headers() }),
	});

export { handler as GET, handler as POST };
