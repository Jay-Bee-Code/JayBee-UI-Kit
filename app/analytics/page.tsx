"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  Bell, 
  Calendar, 
  ChevronDown, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  Clock, 
  MousePointer2 
} from "lucide-react";

// استيراد Recharts بشكل آمن (أحياناً يسبب مشاكل في Next.js SSR)
import { 
  Area, 
  AreaChart, 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Cell, 
  Pie, 
  PieChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from "recharts";

// --- Mock Data ---
const trafficData = [
  { name: "Mon", visits: 4000, views: 2400 },
  { name: "Tue", visits: 3000, views: 1398 },
  { name: "Wed", visits: 2000, views: 9800 },
  { name: "Thu", visits: 2780, views: 3908 },
  { name: "Fri", visits: 1890, views: 4800 },
  { name: "Sat", visits: 2390, views: 3800 },
  { name: "Sun", visits: 3490, views: 4300 },
];

const sourceData = [
  { name: "Direct", value: 400 },
  { name: "Social", value: 300 },
  { name: "Organic", value: 300 },
  { name: "Referral", value: 200 },
];

const deviceData = [
  { name: "Desktop", value: 65, color: "#5b4af4" }, 
  { name: "Mobile", value: 25, color: "#a855f7" },  
  { name: "Tablet", value: 10, color: "#22c55e" },  
];

const COLORS = ['#5b4af4', '#a855f7', '#22c55e', '#eab308'];

// تأكد من أن الدالة مصدرة بشكل صحيح كـ Default
export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors font-sans selection:bg-primary/20">
      
      <Sidebar />

      <main className="ml-72 min-h-screen p-8 relative overflow-hidden flex flex-col gap-8">
        
        {/* Background Decor */}
        <div className="absolute top-[-10%] left-[30%] w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Header */}
        <header className="flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground mt-1">Real-time website performance</p>
          </div>
          <div className="flex gap-3">
             <Button variant="ghost" className="rounded-xl h-10 px-4 neo-inset text-sm text-muted-foreground gap-2 hover:bg-transparent">
                <Calendar className="h-4 w-4" /> Last 7 Days <ChevronDown className="h-3 w-3 opacity-50" />
             </Button>
             <ModeToggle />
             <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10 neo-inset text-muted-foreground"><Bell className="h-5 w-5" /></Button>
          </div>
        </header>

        {/* --- KPI CARDS ROW --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
            
            {/* Card 1 */}
            <div className="rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat group hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center neo-inset">
                        <Eye className="h-5 w-5" />
                    </div>
                    <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">
                        <TrendingUp className="h-3 w-3 mr-1" /> +12.5%
                    </span>
                </div>
                <h3 className="text-3xl font-bold">124.5K</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Page Views</p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat group hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center neo-inset">
                        <Users className="h-5 w-5" />
                    </div>
                    <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">
                        <TrendingUp className="h-3 w-3 mr-1" /> +8.2%
                    </span>
                </div>
                <h3 className="text-3xl font-bold">64.2K</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Unique Visitors</p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat group hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center neo-inset">
                        <MousePointer2 className="h-5 w-5" />
                    </div>
                    <span className="flex items-center text-xs font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded-lg">
                        <TrendingDown className="h-3 w-3 mr-1" /> -2.4%
                    </span>
                </div>
                <h3 className="text-3xl font-bold">42.8%</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Bounce Rate</p>
            </div>

             {/* Card 4 */}
             <div className="rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat group hover:scale-[1.02] transition-transform">
                <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center neo-inset">
                        <Clock className="h-5 w-5" />
                    </div>
                    <span className="flex items-center text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">
                        <TrendingUp className="h-3 w-3 mr-1" /> +1m 20s
                    </span>
                </div>
                <h3 className="text-3xl font-bold">04:35</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Avg. Session</p>
            </div>
        </div>

        {/* --- MAIN CHART SECTION --- */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10 flex-1 pb-8">
            
            {/* Main Area Chart */}
            <div className="xl:col-span-2 rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat flex flex-col min-h-[400px]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-lg">Traffic Overview</h3>
                    <div className="flex gap-2">
                         <span className="h-3 w-3 rounded-full bg-primary" />
                         <span className="text-xs text-muted-foreground">Visits</span>
                         <span className="h-3 w-3 rounded-full bg-purple-400 ml-2" />
                         <span className="text-xs text-muted-foreground">Views</span>
                    </div>
                </div>
                <div className="flex-1 w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#5b4af4" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#5b4af4" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 12}} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: 'var(--background)', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                itemStyle={{ fontWeight: 'bold' }}
                            />
                            <Area type="monotone" dataKey="visits" stroke="#5b4af4" strokeWidth={3} fillOpacity={1} fill="url(#colorVisits)" />
                            <Area type="monotone" dataKey="views" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorViews)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Side Charts */}
            <div className="xl:col-span-1 flex flex-col gap-8">
                
                {/* Device Chart */}
                <div className="flex-1 rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat flex flex-col min-h-[250px]">
                    <h3 className="font-bold text-lg mb-4">Device Usage</h3>
                    <div className="flex-1 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={deviceData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {deviceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ backgroundColor: 'var(--background)', borderRadius: '12px', border: 'none' }} />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-2xl font-bold">65%</span>
                            <span className="text-xs text-muted-foreground">Desktop</span>
                        </div>
                    </div>
                </div>

                {/* Sources Chart */}
                <div className="flex-1 rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat flex flex-col min-h-[250px]">
                    <h3 className="font-bold text-lg mb-2">Traffic Sources</h3>
                    <div className="flex-1">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={sourceData} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={60} axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 10}} />
                                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: 'var(--background)', borderRadius: '12px' }} />
                                <Bar dataKey="value" barSize={12} radius={[0, 10, 10, 0]}>
                                    {sourceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>

      </main>
    </div>
  );
}