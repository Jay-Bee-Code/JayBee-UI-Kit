"use client"

import { cn } from "@/lib/utils"
import { Wifi } from "lucide-react"

export function CreditCard() {
  return (
    // الحاوية الرئيسية: تأثير النيومورفيزم للإطار
    <div className="relative h-56 w-full overflow-hidden rounded-3xl bg-background shadow-neo-light-flat dark:shadow-neo-dark-flat transition-all hover:scale-[1.02] duration-300">
      
      {/* الخلفية الملونة (Gradient Blob) لتعطي تأثير الزجاج */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
      <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-purple-500/30 blur-3xl" />

      {/* طبقة الزجاج (Frosted Glass) */}
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-md" />

      {/* المحتوى */}
      <div className="relative flex h-full flex-col justify-between p-6">
        
        {/* Header: Chip & Wifi */}
        <div className="flex items-start justify-between">
            <div className="h-10 w-14 rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-sm border border-yellow-400/50" />
            <Wifi className="h-8 w-8 rotate-90 text-foreground/50" />
        </div>

        {/* Card Number */}
        <div className="mt-4 flex items-center gap-4">
            <span className="text-xl font-mono font-bold tracking-widest text-foreground">
                •••• •••• •••• 4289
            </span>
        </div>

        {/* Footer: Name & Expiry */}
        <div className="flex items-end justify-between">
            <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Card Holder</span>
                <span className="font-bold tracking-wide text-foreground">JAYBEE DEV</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Expires</span>
                <span className="font-bold tracking-wide text-foreground">09/28</span>
            </div>
        </div>

        {/* Visa Logo (Simple CSS shapes) */}
        <div className="absolute bottom-6 right-6 flex opacity-80">
            <div className="h-8 w-8 rounded-full bg-red-500/80 mix-blend-multiply dark:mix-blend-screen" />
            <div className="-ml-4 h-8 w-8 rounded-full bg-orange-500/80 mix-blend-multiply dark:mix-blend-screen" />
        </div>
      </div>
      
      {/* لمسة لمعان على الحدود (Border Shine) */}
      <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none" />
    </div>
  )
}