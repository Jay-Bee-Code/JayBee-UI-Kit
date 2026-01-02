"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Wallet, 
  LogOut,
  ClipboardList // أيقونة جديدة للمهام
} from "lucide-react"

// تحديث القائمة لتشمل صفحة Tasks
const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: ClipboardList, label: "Tasks", href: "/tasks" }, // <-- تمت الإضافة هنا
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-72 border-r border-white/20 bg-background transition-all">
      <div className="flex h-full flex-col px-6 py-8">
        
        {/* 1. Logo Section */}
        <div className="mb-10 flex items-center gap-4 px-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-primary shadow-neo-light-flat dark:shadow-neo-dark-flat">
            <span className="text-xl font-bold">JB</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-foreground">JayBee UI</span>
            <span className="text-xs text-muted-foreground">v1.0.0</span>
          </div>
        </div>

        {/* 2. Navigation Items */}
        <nav className="flex flex-1 flex-col gap-3">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-background text-primary shadow-neo-light-flat dark:shadow-neo-dark-flat scale-[1.02]" // Active Style
                    : "text-muted-foreground hover:bg-background/50 hover:text-foreground hover:shadow-neo-light-pressed dark:hover:shadow-neo-dark-pressed" // Inactive Style
                )}
              >
                <item.icon className={cn("h-5 w-5 transition-colors", isActive && "fill-current")} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* 3. Footer */}
        <div className="mt-auto pt-8 border-t border-white/10">
          <Link
            href="#"
            className="flex items-center gap-4 rounded-2xl px-5 py-4 text-sm font-medium text-muted-foreground transition-all hover:text-destructive hover:bg-red-500/5"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Link>
        </div>
        
      </div>
    </aside>
  )
}