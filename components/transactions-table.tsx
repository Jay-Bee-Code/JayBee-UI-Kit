"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table" // تأكد أن لديك مكون Table الأساسي، أو استخدم div عادي
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ArrowUpRight, ArrowDownLeft } from "lucide-react"

const transactions = [
  {
    id: "TRX-9871",
    user: "Alice Smith",
    avatar: "AS",
    status: "Completed",
    amount: "+$450.00",
    date: "Today, 10:42 AM",
    type: "income",
  },
  {
    id: "TRX-9872",
    user: "Netflix Sub",
    avatar: "NF",
    status: "Pending",
    amount: "-$12.99",
    date: "Yesterday, 8:30 PM",
    type: "expense",
  },
  {
    id: "TRX-9873",
    user: "John Doe",
    avatar: "JD",
    status: "Processing",
    amount: "+$1,200.00",
    date: "Jan 1, 2026",
    type: "income",
  },
  {
    id: "TRX-9874",
    user: "AWS Bill",
    avatar: "AW",
    status: "Completed",
    amount: "-$64.50",
    date: "Dec 30, 2025",
    type: "expense",
  },
]

export function TransactionsTable() {
  return (
    <Card className="col-span-1 border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">Recent Transactions</CardTitle>
        <Button variant="ghost" size="icon" className="rounded-xl h-10 w-10 neo-inset">
          <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between rounded-2xl p-4 transition-all hover:bg-background hover:shadow-neo-light-flat dark:hover:shadow-neo-dark-flat border border-transparent hover:border-white/10 cursor-pointer"
            >
              {/* Left Side: Avatar & Info */}
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center font-bold text-lg
                  ${item.type === 'income' 
                    ? 'bg-green-500/10 text-green-500 neo-inset' 
                    : 'bg-red-500/10 text-red-500 neo-inset'
                  }`}
                >
                  {item.type === 'income' ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownLeft className="h-5 w-5" />}
                </div>
                <div>
                  <p className="font-bold text-foreground">{item.user}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
              </div>

              {/* Right Side: Amount & Status */}
              <div className="text-right">
                <p className={`font-bold ${item.type === 'income' ? 'text-green-500' : 'text-foreground'}`}>
                  {item.amount}
                </p>
                <div className="flex items-center justify-end gap-1 mt-1">
                    <span className={`h-2 w-2 rounded-full ${
                        item.status === 'Completed' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' :
                        item.status === 'Pending' ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]' :
                        'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                    }`} />
                    <span className="text-[10px] text-muted-foreground uppercase font-semibold tracking-wider">
                        {item.status}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}