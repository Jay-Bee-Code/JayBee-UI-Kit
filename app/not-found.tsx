import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[20%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 404 Container */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-8 p-8">
        
        {/* Big Engraved 404 */}
        <div className="relative">
            <h1 className="text-[150px] font-black leading-none text-background neo-inset select-none" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.1), -2px -2px 4px rgba(0,0,0,0.5)' }}>
                404
            </h1>
            <AlertTriangle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 text-red-500/50" />
        </div>

        <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Page Not Found</h2>
            <p className="text-muted-foreground max-w-[400px]">
                Oops! The page you are looking for seems to have vanished into the digital void.
            </p>
        </div>

        {/* Go Home Button */}
        <Link href="/">
            <Button size="lg" className="rounded-2xl px-8 h-14 text-md shadow-lg shadow-primary/20 gap-3">
                <Home className="h-5 w-5" /> Return Dashboard
            </Button>
        </Link>
      </div>
      
      <p className="absolute bottom-8 text-xs text-muted-foreground opacity-40">
        JayBee UI Kit • Error 404
      </p>
    </div>
  )
}