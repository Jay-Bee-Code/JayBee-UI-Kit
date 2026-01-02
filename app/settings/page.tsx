"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/sidebar";
import { 
  Bell, 
  Shield, 
  User, 
  Mail, 
  Smartphone, 
  Camera,
  Globe
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors font-sans selection:bg-primary/20">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-72 min-h-screen p-8 relative overflow-hidden flex flex-col gap-8">
        
        {/* Background Decor */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <header className="flex items-center justify-between relative z-10 mb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <p className="text-muted-foreground mt-1">Manage your account preferences</p>
          </div>
          <div className="flex gap-3">
             <ModeToggle />
             <Button size="icon" variant="ghost" className="rounded-2xl h-10 w-10 neo-inset text-muted-foreground"><Bell className="h-5 w-5" /></Button>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 pb-12">
          
          {/* COLUMN 1: Profile Card (Left) */}
          <div className="xl:col-span-1 space-y-6">
            <Card className="border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-primary/20 to-purple-500/20" />
                <CardContent className="relative pt-0 px-6 pb-6 text-center">
                    {/* Avatar Upload */}
                    <div className="relative -mt-16 mb-4 mx-auto w-32 h-32 rounded-full border-4 border-background bg-background shadow-neo-light-flat dark:shadow-neo-dark-flat flex items-center justify-center group cursor-pointer">
                        <span className="text-4xl font-bold text-primary">JB</span>
                        <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                            <Camera className="text-white h-8 w-8" />
                        </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold">JayBee Dev</h2>
                    <p className="text-muted-foreground text-sm">Full Stack Engineer</p>
                    
                    <div className="mt-6 flex flex-col gap-3">
                        <Button className="w-full rounded-xl shadow-lg shadow-primary/20">Edit Profile</Button>
                        <Button variant="outline" className="w-full rounded-xl border-2 bg-transparent">View Public Profile</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Storage Widget */}
            <Card className="border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat">
                <CardHeader>
                    <CardTitle className="text-sm font-bold uppercase text-muted-foreground tracking-wider">Storage Usage</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold mb-2">75.5 GB <span className="text-sm font-normal text-muted-foreground">/ 100 GB</span></div>
                    <div className="h-4 w-full rounded-full neo-inset overflow-hidden">
                        <div className="h-full bg-primary w-[75%] rounded-full shadow-[0_0_10px_rgba(91,74,244,0.5)]" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">75% of your storage is used.</p>
                </CardContent>
            </Card>
          </div>

          {/* COLUMN 2: Settings Forms (Right) */}
          {/* زيادة المسافة الرأسية هنا إلى space-y-10 */}
          <div className="xl:col-span-2 space-y-10">
            
            {/* 1. Account Information */}
            <section>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" /> Account Info
                </h3>
                <Card className="border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat">
                    <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold ml-3 text-muted-foreground uppercase">Full Name</label>
                            <Input defaultValue="JayBee Dev" className="bg-transparent" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold ml-3 text-muted-foreground uppercase">Username</label>
                            <Input defaultValue="@jaybee_ui" className="bg-transparent" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold ml-3 text-muted-foreground uppercase">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input defaultValue="jaybee@example.com" className="pl-10" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold ml-3 text-muted-foreground uppercase">Phone</label>
                            <div className="relative">
                                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input defaultValue="+213 555 123 456" className="pl-10" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* 2. Appearance & Notifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Appearance */}
                 <section>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" /> Appearance
                    </h3>
                    <Card className="border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat h-full">
                        <CardContent className="p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Language</span>
                                <Select defaultValue="en">
                                    <SelectTrigger className="w-[140px] h-9 text-xs">
                                        <SelectValue placeholder="Language" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="en">English</SelectItem>
                                        <SelectItem value="fr">French</SelectItem>
                                        <SelectItem value="ar">Arabic</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Dark Mode</span>
                                <Switch checked id="dark-mode" />
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Reduced Motion</span>
                                <Switch id="motion" />
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Notifications */}
                <section>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Bell className="h-5 w-5 text-primary" /> Notifications
                    </h3>
                    <Card className="border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat h-full">
                        <CardContent className="p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Email Alerts</span>
                                    <span className="text-[10px] text-muted-foreground">Get daily summaries</span>
                                </div>
                                <Switch checked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Push Messages</span>
                                    <span className="text-[10px] text-muted-foreground">Real-time updates</span>
                                </div>
                                <Switch checked />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium">Marketing</span>
                                    <span className="text-[10px] text-muted-foreground">News and offers</span>
                                </div>
                                <Switch />
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </div>

            {/* 3. Security Zone (تم إضافة مسافة علوية إضافية هنا) */}
            <section className="mt-12 pt-4 border-t border-white/5">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-red-500">
                    <Shield className="h-5 w-5" /> Security Zone
                </h3>
                <Card className="border-red-500/20 shadow-neo-light-flat dark:shadow-neo-dark-flat bg-red-500/5 hover:bg-red-500/10 transition-colors">
                    <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h4 className="font-bold text-red-500">Delete Account</h4>
                            <p className="text-xs text-muted-foreground max-w-sm">Permanently remove your account and all data. This action cannot be undone.</p>
                        </div>
                        <Button variant="destructive" className="w-full md:w-auto rounded-xl shadow-lg shadow-red-500/20">Delete Account</Button>
                    </CardContent>
                </Card>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}