"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2100 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2400 },
  { name: "May", total: 1600 },
  { name: "Jun", total: 2800 },
  { name: "Jul", total: 3200 },
]

export function OverviewChart() {
  return (
    // نستخدم Card من مكتبتنا لأنها تحتوي أصلاً على ستايل النيومورفيزم
    <Card className="col-span-1 xl:col-span-2 border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">Revenue Overview</CardTitle>
        <div className="flex gap-2">
            <span className="flex h-3 w-3 rounded-full bg-primary shadow-[0_0_8px_rgba(91,74,244,0.6)]" />
            <span className="text-xs text-muted-foreground">Live Data</span>
        </div>
      </CardHeader>
      <CardContent className="pl-0">
        <div className="h-[240px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                {/* تدرج لوني تحت الخط لجمالية النيومورفيزم */}
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5b4af4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#5b4af4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickMargin={10}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                    backgroundColor: 'var(--background)', 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: 'var(--shadow-neo-light-flat)' // استخدام ظلنا الخاص للـ Tooltip
                }}
                itemStyle={{ color: 'var(--primary)' }}
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#5b4af4"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorTotal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}