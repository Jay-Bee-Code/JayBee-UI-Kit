import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/sidebar";
import { CreditCard } from "@/components/credit-card";
import { 
  Bell, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Search, 
  Filter, 
  Download,
  Plus,
  Send,
  CreditCard as IconCard
} from "lucide-react";

// بيانات وهمية لجهات الاتصال (Quick Transfer)
const contacts = [
  { name: "Sarah", img: "S" },
  { name: "Mike", img: "M" },
  { name: "Anna", img: "A" },
  { name: "Dad", img: "D" },
  { name: "Work", img: "W" },
];

// بيانات وهمية موسعة للمعاملات
const history = [
  { id: 1, title: "Apple Store", date: "Today, 10:42 AM", amount: "-$999.00", type: "expense", category: "Shopping" },
  { id: 2, title: "Freelance Client", date: "Yesterday, 4:30 PM", amount: "+$2,500.00", type: "income", category: "Business" },
  { id: 3, title: "Netflix Subscription", date: "Jan 24, 2026", amount: "-$12.99", type: "expense", category: "Entertainment" },
  { id: 4, title: "Spotify Premium", date: "Jan 22, 2026", amount: "-$9.99", type: "expense", category: "Entertainment" },
  { id: 5, title: "Bank Transfer", date: "Jan 20, 2026", amount: "+$500.00", type: "income", category: "Savings" },
  { id: 6, title: "Uber Ride", date: "Jan 18, 2026", amount: "-$24.50", type: "expense", category: "Transport" },
];

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors font-sans selection:bg-primary/20">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-72 min-h-screen p-8 relative overflow-hidden flex flex-col gap-8">
        
        {/* Background Decor */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Header */}
        <header className="flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Wallet</h1>
            <p className="text-muted-foreground mt-1">Manage cards and transactions</p>
          </div>
          <div className="flex gap-3">
             <Button className="rounded-2xl shadow-lg shadow-primary/20 gap-2">
                <Plus className="h-4 w-4" /> Add New Card
             </Button>
             <ModeToggle />
             <Button size="icon" variant="ghost" className="rounded-2xl h-10 w-10 neo-inset text-muted-foreground"><Bell className="h-5 w-5" /></Button>
          </div>
        </header>

        {/* --- Top Section: Cards & Quick Actions --- */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 relative z-10">
          
          {/* Left: The Card Display */}
          <div className="xl:col-span-1 space-y-6">
             <CreditCard />
             
             {/* Total Balance Card */}
             <div className="rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat flex items-center justify-between">
                <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-1">Total Balance</p>
                    <h2 className="text-3xl font-bold">$12,450.00</h2>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 neo-inset">
                    <ArrowUpRight className="h-6 w-6" />
                </div>
             </div>
          </div>

          {/* Right: Quick Transfer & Stats */}
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Quick Transfer Widget */}
            <Card className="md:col-span-2 border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat">
                <CardHeader>
                    <CardTitle className="text-lg">Quick Transfer</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-6 overflow-x-auto pb-4 pt-2">
                        {/* Add Button */}
                        <div className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer group">
                            <div className="h-14 w-14 rounded-full border-2 border-dashed border-muted-foreground/50 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                                <Plus className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-medium">Add</span>
                        </div>
                        
                        {/* Contacts */}
                        {contacts.map((contact, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 min-w-[60px] cursor-pointer group">
                                <div className="h-14 w-14 rounded-full bg-background shadow-neo-light-flat dark:shadow-neo-dark-flat flex items-center justify-center font-bold text-lg text-foreground group-hover:scale-110 transition-transform border border-white/10">
                                    {contact.img}
                                </div>
                                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">{contact.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Amount Input & Send */}
                    <div className="flex items-center gap-4 mt-4">
                        <div className="relative flex-1">
                             <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-muted-foreground">$</span>
                             <Input placeholder="0.00" className="pl-8 h-12 neo-inset rounded-xl text-lg font-bold" />
                        </div>
                        <Button className="h-12 px-8 rounded-xl shadow-lg shadow-primary/20 gap-2">
                            Send <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Income Card */}
            <div className="rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                    <div className="h-10 w-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center neo-inset">
                        <ArrowUpRight className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold bg-green-500 text-white px-2 py-1 rounded-lg">+12%</span>
                </div>
                <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase">Income</span>
                    <h3 className="text-2xl font-bold mt-1">$4,250.00</h3>
                </div>
            </div>

            {/* Expense Card */}
            <div className="rounded-3xl p-6 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat flex flex-col justify-between h-40">
                <div className="flex justify-between items-start">
                    <div className="h-10 w-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center neo-inset">
                        <ArrowDownLeft className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold bg-red-500 text-white px-2 py-1 rounded-lg">-5%</span>
                </div>
                <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase">Expense</span>
                    <h3 className="text-2xl font-bold mt-1">$1,890.00</h3>
                </div>
            </div>

          </div>
        </div>

        {/* --- Bottom Section: Transaction History --- */}
        <section className="relative z-10 flex-1 flex flex-col gap-4 pb-8">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Transaction History</h2>
                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                        <Input placeholder="Search..." className="h-9 w-48 pl-8 neo-inset text-xs rounded-xl border-none" />
                    </div>
                    <Button variant="ghost" size="icon" className="h-9 w-9 neo-inset rounded-xl text-muted-foreground"><Filter className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9 neo-inset rounded-xl text-muted-foreground"><Download className="h-4 w-4" /></Button>
                </div>
            </div>

            <Card className="flex-1 border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat">
                <CardContent className="p-0">
                    <div className="flex flex-col divide-y divide-white/10">
                        {history.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-5 hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-4">
                                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center neo-inset
                                        ${item.type === 'income' ? 'text-green-500' : 'text-foreground'}
                                    `}>
                                        {item.category === 'Shopping' && <IconCard className="h-5 w-5" />}
                                        {item.category === 'Entertainment' && <Filter className="h-5 w-5" />}
                                        {item.category === 'Transport' && <Send className="h-5 w-5 -rotate-45" />}
                                        {item.category === 'Business' && <ArrowDownLeft className="h-5 w-5" />}
                                        {item.category === 'Savings' && <ArrowUpRight className="h-5 w-5" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground">{item.date} • {item.category}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`block font-bold text-sm ${item.type === 'income' ? 'text-green-500' : 'text-foreground'}`}>
                                        {item.amount}
                                    </span>
                                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                                        {item.type === 'income' ? 'Credit' : 'Debit'}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>

      </main>
    </div>
  );
}