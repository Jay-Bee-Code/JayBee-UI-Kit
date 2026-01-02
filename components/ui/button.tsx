import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base styles:
  // إضافة active:scale-[0.98] ليعطي شعوراً واقعياً بالضغط (Tactile feel)
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          // Gradient Subtle: تدرج لوني خفيف جداً يعطي تكوراً للزر
          "bg-gradient-to-br from-[#ffffff]/40 to-[#000000]/5 " +
          "dark:from-[#ffffff]/5 dark:to-[#000000]/20 " +
          "bg-background text-foreground " +
          // Shadows
          "shadow-JayBee-light-flat dark:shadow-JayBee-dark-flat " +
          "active:shadow-JayBee-light-pressed dark:active:shadow-JayBee-dark-pressed " +
          // Border: لمسة خفيفة جداً لتحديد الحواف
          "border border-white/40 dark:border-white/5",

        primary:
          "bg-primary text-primary-foreground " +
          "shadow-lg shadow-primary/30 " + // ظل ملون للزر الأساسي
          "hover:brightness-110 " + 
          "active:translate-y-0",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 " +
          "shadow-JayBee-light-flat dark:shadow-JayBee-dark-flat",

        outline:
          "border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground",

        ghost: 
          "hover:bg-accent hover:text-accent-foreground " + 
          "active:shadow-JayBee-light-pressed dark:active:shadow-JayBee-dark-pressed rounded-xl",
          
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 min-w-[120px]", 
        sm: "h-10 rounded-xl px-4",
        lg: "h-16 rounded-2xl px-10 text-base",
        icon: "h-12 w-12 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }