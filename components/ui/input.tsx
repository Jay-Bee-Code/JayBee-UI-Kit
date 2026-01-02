import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative group w-full">
        <input
          type={type}
          className={cn(
            // Base Styles
            "flex h-12 w-full rounded-2xl border-none px-4 py-2 text-sm transition-all duration-200",
            
            // Text Styles
            "file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-foreground",
            
            // THE FIX: استخدام الكلاس اليدوي القوي بدلاً من كلاسات تيلويند التلقائية
            "neo-inset",

            // Focus State (إضاءة خفيفة عند التركيز)
            "focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:ring-offset-background",
            
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }