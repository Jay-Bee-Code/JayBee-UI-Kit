import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  Bell, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Download,
  UserPlus,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 1. بيانات وهمية للعملاء
const customers = [
  { id: 1, name: "Alice Freeman", email: "alice@company.com", role: "Admin", status: "Active", spent: "$12,450", lastActive: "2 min ago", avatar: "AF" },
  { id: 2, name: "Michael Johnson", email: "mike@studio.io", role: "Editor", status: "Offline", spent: "$4,200", lastActive: "1 day ago", avatar: "MJ" },
  { id: 3, name: "Sarah Connor", email: "sarah@sky.net", role: "Viewer", status: "Active", spent: "$850", lastActive: "Online", avatar: "SC" },
  { id: 4, name: "David Miller", email: "david@corp.org", role: "Admin", status: "Inactive", spent: "$0.00", lastActive: "1 week ago", avatar: "DM" },
  { id: 5, name: "Emma Watson", email: "emma@holly.wd", role: "Editor", status: "Active", spent: "$25,000", lastActive: "3 hours ago", avatar: "EW" },
  { id: 6, name: "James Bond", email: "007@mi6.gov", role: "Agent", status: "Active", spent: "$999,999", lastActive: "Unknown", avatar: "JB" },
  { id: 7, name: "Peter Parker", email: "spidey@nyc.com", role: "Viewer", status: "Offline", spent: "$12.50", lastActive: "Yesterday", avatar: "PP" },
];

export default function CustomersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors font-sans selection:bg-primary/20">
      
      <Sidebar />

      <main className="ml-72 min-h-screen p-8 relative overflow-hidden flex flex-col gap-8">
        
        {/* Background Decor */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Header */}
        <header className="flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
            <p className="text-muted-foreground mt-1">Manage user access and details</p>
          </div>
          <div className="flex gap-3">
             <Button className="rounded-xl shadow-lg shadow-primary/20 gap-2 h-10">
                <UserPlus className="h-4 w-4" /> Add Customer
             </Button>
             <ModeToggle />
             <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10 neo-inset text-muted-foreground"><Bell className="h-5 w-5" /></Button>
          </div>
        </header>

        {/* --- FILTERS BAR --- */}
        <div className="relative z-10 rounded-3xl p-4 bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search customers..." className="pl-10 h-10 neo-inset rounded-xl border-none text-sm" />
                </div>
                
                {/* Role Filter */}
                <Select>
                    <SelectTrigger className="w-[140px] h-10 rounded-xl neo-flat border-none shadow-neo-light-flat dark:shadow-neo-dark-flat">
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                </Select>

                 {/* Status Filter */}
                 <Select>
                    <SelectTrigger className="w-[140px] h-10 rounded-xl neo-flat border-none shadow-neo-light-flat dark:shadow-neo-dark-flat">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex gap-2">
                <Button variant="ghost" className="h-10 px-4 gap-2 rounded-xl text-muted-foreground hover:bg-background hover:shadow-neo-light-flat dark:hover:shadow-neo-dark-flat transition-all">
                    <Filter className="h-4 w-4" /> Filters
                </Button>
                <Button variant="ghost" className="h-10 px-4 gap-2 rounded-xl text-muted-foreground hover:bg-background hover:shadow-neo-light-flat dark:hover:shadow-neo-dark-flat transition-all">
                    <Download className="h-4 w-4" /> Export
                </Button>
            </div>
        </div>

        {/* --- DATA TABLE --- */}
        <div className="relative z-10 flex-1 flex flex-col gap-4">
            
            {/* Table Container (Engraved Look) */}
            <div className="rounded-3xl bg-background border border-white/20 shadow-neo-light-flat dark:shadow-neo-dark-flat overflow-hidden flex flex-col">
                
                {/* Header Row */}
                <div className="grid grid-cols-12 gap-4 p-5 border-b border-white/10 text-xs font-bold uppercase text-muted-foreground tracking-wider bg-background/50">
                    <div className="col-span-4">Customer</div>
                    <div className="col-span-2">Role</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2">Spent</div>
                    <div className="col-span-2 text-right">Actions</div>
                </div>

                {/* Rows */}
                <div className="flex flex-col">
                    {customers.map((user) => (
                        <div key={user.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-primary/5 transition-colors cursor-pointer group border-b border-white/5 last:border-0">
                            
                            {/* User Info */}
                            <div className="col-span-4 flex items-center gap-4">
                                <div className="h-10 w-10 rounded-xl bg-background shadow-neo-light-flat dark:shadow-neo-dark-flat flex items-center justify-center font-bold text-primary group-hover:scale-110 transition-transform">
                                    {user.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-foreground">{user.name}</h4>
                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                </div>
                            </div>

                            {/* Role */}
                            <div className="col-span-2">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    {user.role === 'Admin' && <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]" />}
                                    {user.role === 'Editor' && <span className="h-2 w-2 rounded-full bg-blue-500" />}
                                    {user.role === 'Viewer' && <span className="h-2 w-2 rounded-full bg-gray-400" />}
                                    {user.role === 'Agent' && <span className="h-2 w-2 rounded-full bg-red-500" />}
                                    {user.role}
                                </div>
                            </div>

                            {/* Status */}
                            <div className="col-span-2">
                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border uppercase tracking-wide
                                    ${user.status === 'Active' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                                      user.status === 'Offline' ? 'bg-gray-500/10 text-gray-500 border-gray-500/20' : 
                                      'bg-red-500/10 text-red-500 border-red-500/20'}
                                `}>
                                    {user.status}
                                </span>
                            </div>

                            {/* Spent */}
                            <div className="col-span-2 text-sm font-bold">
                                {user.spent}
                            </div>

                            {/* Actions */}
                            <div className="col-span-2 flex justify-end gap-2">
                                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-background hover:shadow-neo-light-flat dark:hover:shadow-neo-dark-flat text-muted-foreground"><Mail className="h-4 w-4" /></Button>
                                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-background hover:shadow-neo-light-flat dark:hover:shadow-neo-dark-flat text-muted-foreground"><Phone className="h-4 w-4" /></Button>
                                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-background hover:shadow-neo-light-flat dark:hover:shadow-neo-dark-flat text-muted-foreground"><MoreHorizontal className="h-4 w-4" /></Button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* --- PAGINATION (Neomorphic Style) --- */}
            <div className="flex items-center justify-between px-2">
                <span className="text-xs text-muted-foreground">Showing 1-7 of 120 customers</span>
                
                <div className="flex items-center gap-2">
                    {/* Previous Button */}
                    <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl neo-flat hover:neo-inset disabled:opacity-50">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    {/* Page Numbers */}
                    <div className="flex items-center gap-2 bg-background p-1 rounded-xl neo-inset">
                        <Button size="icon" className="h-8 w-8 rounded-lg shadow-neo-light-flat dark:shadow-neo-dark-flat bg-primary text-primary-foreground hover:bg-primary">1</Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-background/50 text-muted-foreground">2</Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-background/50 text-muted-foreground">3</Button>
                        <span className="text-xs text-muted-foreground px-1">...</span>
                        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-lg hover:bg-background/50 text-muted-foreground">12</Button>
                    </div>

                    {/* Next Button */}
                    <Button size="icon" variant="ghost" className="h-10 w-10 rounded-xl neo-flat hover:neo-inset">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

        </div>

      </main>
    </div>
  );
}