import "server-only";

import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cache } from "react";
import { appRouter, createCallerFactory, createTRPCContext } from "@app/trpc";
import { makeQueryClient } from "./query-client";
import { headers } from "next/headers";

export const getQueryClient = cache(makeQueryClient);

const caller = createCallerFactory(appRouter)(async () =>
	createTRPCContext({ headers: await headers() }),
);

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
	caller,
	getQueryClient,
);
