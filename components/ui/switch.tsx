"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      // 1. Base Layout
      "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      
      // 2. The Track Style (شكل القناة الخلفية)
      // في الحالة العادية (مغلق): يكون محفوراً (Inset) ولونه رمادي فاتح
      "data-[state=unchecked]:bg-background data-[state=unchecked]:neo-inset",
      
      // في حالة التفعيل (مفتوح): يمتلئ باللون الأساسي ويصبح مسطحاً
      "data-[state=checked]:bg-primary",
      
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        // 3. The Thumb Style (الكرة المتحركة)
        "pointer-events-none block h-6 w-6 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
        
        // الكرة دائماً بارزة لتعطي شعور الواقعية
        "shadow-neo-light-flat dark:shadow-neo-dark-flat"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }