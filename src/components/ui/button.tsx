import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-[8px] text-sm font-medium whitespace-nowrap transition-all duration-200 ease-out outline-none select-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[#101828] text-white hover:bg-[#1E293B] shadow-sm active:scale-[0.99] border border-[#101828]",
        primary:
          "bg-[#315EFA] text-white hover:bg-[#254BD8] shadow-sm shadow-[#315EFA]/20 active:scale-[0.99] border border-transparent",
        secondary:
          "bg-[#F7F8FA] text-[#101828] hover:bg-[#F1F3F6] border border-[#E6E9EF] active:scale-[0.99]",
        outline:
          "border border-[#E6E9EF] bg-white text-[#101828] hover:bg-[#F7F8FA] hover:border-[#D0D5DD] shadow-sm active:bg-[#F1F3F6]",
        ghost:
          "bg-transparent text-[#667085] hover:text-[#101828] hover:bg-[#F7F8FA]",
        link:
          "text-[#315EFA] underline-offset-4 hover:underline p-0 h-auto font-normal",
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
