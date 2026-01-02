"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    {/* 1. المسار الخلفي (The Track) - محفور */}
    <SliderPrimitive.Track
      className={cn(
        "relative h-3 w-full grow overflow-hidden rounded-full",
        // هنا نستخدم كلاس الحفر القوي لتبدو كقناة
        "neo-inset"
      )}
    >
      {/* الجزء الملون الذي يملأ المسار */}
      <SliderPrimitive.Range className="absolute h-full bg-primary/80" />
    </SliderPrimitive.Track>

    {/* 2. المقبض (The Thumb) - بارز */}
    <SliderPrimitive.Thumb
      className={cn(
        "block h-6 w-6 rounded-full border-2 border-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        "bg-background",
        // الظل البارز ليطفو فوق المسار
        "shadow-neo-light-flat dark:shadow-neo-dark-flat",
        // تأثير عند الضغط عليه
        "active:scale-110 transition-transform duration-100 cursor-grab active:cursor-grabbing"
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }