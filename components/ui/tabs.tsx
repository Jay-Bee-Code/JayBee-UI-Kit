"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      // Track Style: قناة محفورة (Inset) تحتوي الأزرار
      "inline-flex h-16 w-full items-center justify-center rounded-3xl p-2 text-muted-foreground",
      "neo-inset", // كلاس الحفر القوي الذي أنشأناه
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // Base Button Style
      "inline-flex h-full items-center justify-center whitespace-nowrap rounded-2xl px-8 py-3 text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      
      // Active State: الزر يبرز (Pops out) ويصبح ملوناً عند الاختيار
      "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
      "data-[state=active]:shadow-neo-light-flat dark:data-[state=active]:shadow-neo-dark-flat",
      
      // Inactive State: مجرد نص يندمج مع الخلفية
      "data-[state=inactive]:bg-transparent data-[state=inactive]:shadow-none hover:text-foreground",
      
      "flex-1", // لجعل الأزرار تأخذ مساحة متساوية
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      // إضافة أنيميشن بسيط عند تغيير التبويب
      "animate-in fade-in-50 zoom-in-95 duration-200",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }