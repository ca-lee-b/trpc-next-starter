import { Button } from "@app/ui/button";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
// import { trpc } from "@/trpc/server";

export default async function Home() {
	// console.log(await trpc.test());

	return (
		<div className="p-5">
			<h1 className="font-bold text-7xl">Home</h1>
			<div className="space-x-2">
				<Button className="group relative w-20 space-x-0 duration-200 hover:w-26">
					<span className="mr-0 duration-200 group-hover:mr-4">Button</span>
					<ArrowRight className="absolute right-4 opacity-0 duration-100 group-hover:opacity-100" />
				</Button>
				<Button
					variant="secondary"
					className="group relative w-20 space-x-0 duration-200 hover:w-26"
				>
					<span className="mr-0 duration-200 group-hover:mr-4">Button</span>
					<ArrowRight className="absolute right-4 opacity-0 duration-100 group-hover:opacity-100" />
				</Button>
			</div>
		</div>
	);
}
