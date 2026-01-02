import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/sidebar";
import { OverviewChart } from "@/components/overview-chart";
import { TransactionsTable } from "@/components/transactions-table";
import { CreditCard } from "@/components/credit-card"; // استيراد البطاقة الجديدة
import { Globe, Search, Bell, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors font-sans selection:bg-primary/20">
      
      {/* 1. Sidebar (Fixed on Left) */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <main className="ml-72 min-h-screen p-8 relative overflow-hidden flex flex-col gap-8">
        
        {/* Background Decor (Subtle & Clean) */}
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        {/* --- Header Section --- */}
        <header className="flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
            <p className="text-muted-foreground mt-1">Welcome back, JayBee 👋</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 h-12 neo-inset border-none rounded-2xl" />
            </div>
            
            {/* Notifications */}
            <Button size="icon" variant="ghost" className="rounded-2xl h-12 w-12 shadow-neo-light-flat dark:shadow-neo-dark-flat text-muted-foreground hover:text-primary bg-background">
              <Bell className="h-5 w-5" />
            </Button>
            
            {/* Theme Toggle */}
            <ModeToggle />
          </div>
        </header>

        {/* --- ROW 1: Auth System & Wallet Widgets (50% / 50%) --- */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 relative z-10">
          
          {/* COLUMN 1: Authentication Module */}
          <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">Auth System</h2>
              <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-1 rounded-md">v2.1 Stable</span>
            </div>
            
            <Card className="border-white/20 w-full shadow-neo-light-flat dark:shadow-neo-dark-flat h-full">
              <CardHeader className="text-center pb-6 pt-8">
                <CardTitle className="text-2xl">User Access</CardTitle>
                <CardDescription>Secure Neomorphic login portal</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="w-full max-w-md mx-auto">
                  <TabsList className="mb-8 w-full">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold ml-3 text-muted-foreground uppercase">Email</label>
                      <Input type="email" placeholder="user@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold ml-3 text-muted-foreground uppercase">Password</label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                    <div className="flex items-center space-x-3 pt-2 ml-1">
                      <Switch id="remember" />
                      <label htmlFor="remember" className="text-sm font-medium text-muted-foreground cursor-pointer select-none">Remember me</label>
                    </div>
                    <Button variant="primary" className="w-full h-12 shadow-lg shadow-primary/30 hover:shadow-primary/50 mt-2 text-md">
                      Sign In
                    </Button>
                  </TabsContent>

                  <TabsContent value="register" className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold ml-3 text-muted-foreground uppercase">Full Name</label>
                      <Input type="text" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold ml-3 text-muted-foreground uppercase">Email</label>
                      <Input type="email" placeholder="user@example.com" />
                    </div>
                    <Button variant="default" className="w-full h-12 mt-4 text-md">
                      Create Account
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* COLUMN 2: My Wallet & Tools */}
          <section className="flex flex-col gap-4">
             <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground">My Wallet</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full content-start">
              
              {/* Widget 1: Credit Card (Takes full width of column) */}
              <div className="md:col-span-2">
                 <CreditCard />
              </div>

              {/* Widget 2: Total Balance */}
              <div className="rounded-3xl p-6 flex flex-col justify-center gap-1 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat min-h-[160px]">
                  <div className="flex items-center justify-between mb-2">
                     <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Total Balance</span>
                     <div className="h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <TrendingUp className="h-4 w-4" />
                     </div>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">$12,450.00</h3>
                  <div className="flex items-center gap-2 mt-2 text-xs font-medium text-green-500 bg-green-500/10 px-3 py-1.5 rounded-lg w-fit">
                     +14% this month
                  </div>
              </div>

              {/* Widget 3: Region Selector */}
              <div className="rounded-3xl p-6 flex flex-col justify-between gap-4 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat min-h-[160px]">
                <div className="flex items-start justify-between">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center text-primary neo-inset shadow-none">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-sm">Region</h4>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-full h-10 text-xs">
                      <SelectValue placeholder="Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">USA (USD)</SelectItem>
                      <SelectItem value="fr">Europe (EUR)</SelectItem>
                      <SelectItem value="ar">Algeria (DZD)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Widget 4: Quick Money Actions */}
              <div className="md:col-span-2 rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat flex flex-wrap gap-4 items-center justify-between">
                 <div className="flex gap-4 w-full sm:w-auto">
                    <Button className="flex-1 sm:flex-none rounded-2xl px-8 h-12 text-md shadow-lg shadow-primary/20">Send Money</Button>
                    <Button variant="outline" className="flex-1 sm:flex-none rounded-2xl px-8 h-12 text-md border-2 bg-transparent hover:bg-accent">Top Up</Button>
                 </div>
                 <Button size="icon" variant="ghost" className="rounded-2xl w-12 h-12 neo-inset text-muted-foreground hover:text-primary"><Bell className="h-5 w-5" /></Button>
              </div>

            </div>
          </section>

        </div>
        
        {/* --- ROW 2: Data Visualization (Chart 66% / Table 33%) --- */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 pb-12">
           
           {/* Chart Area */}
           <div className="xl:col-span-2">
              <OverviewChart />
           </div>

           {/* Transactions Table */}
           <div className="xl:col-span-1 h-full">
              <TransactionsTable />
           </div>

        </div>

        {/* Footer */}
        <p className="mt-auto text-center text-xs text-muted-foreground opacity-40 pb-4">
          Powered by JayBee UI Kit © 2026 • Open Source Neomorphism
        </p>

      </main>
    </div>
  );
}