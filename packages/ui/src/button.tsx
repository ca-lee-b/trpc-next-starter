import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { twMerge } from "tailwind-merge";

export const ButtonVariants = cva(
	"inline-flex items-center justify-center space-x-2 text-sm font-medium duration-200 outline-none ring-none rounded cursor-pointer focus-visible:outline-offset-2 focus-visible:outline-offset-background",
	{
		variants: {
			variant: {
				primary: "bg-accent-1000 text-white hover:bg-accent-1000/90",
				secondary: "bg-accent-400 text-accent-1100 hover:bg-accent-400/90",
			},
			size: {
				md: "h-10 px-4 [&_svg]:size-4",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export function Button({
	className,
	size,
	variant,
	asChild = false,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof ButtonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			className={twMerge(ButtonVariants({ size, variant }), className)}
			{...props}
		/>
	);
}
