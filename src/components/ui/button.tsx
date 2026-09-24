import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-[2px] text-sm font-medium whitespace-nowrap transition-all duration-200 ease-out outline-none select-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-neutral-200 active:scale-[0.99] border border-transparent",
        secondary:
          "bg-surface-dark text-foreground hover:bg-surface-elevated hover:text-white border border-border-subtle active:scale-[0.99]",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-white/[0.05] hover:border-white/[0.2] active:bg-white/[0.08]",
        ghost:
          "bg-transparent text-muted-foreground hover:text-foreground hover:bg-white/[0.04]",
        link:
          "text-foreground underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        default: "h-10 gap-2 px-5 text-sm",
        sm: "h-8 gap-1.5 px-3 text-xs",
        lg: "h-12 gap-2.5 px-7 text-base tracking-tight",
        icon: "size-10",
        touch: "min-h-[48px] min-w-[48px] px-6 text-sm gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
