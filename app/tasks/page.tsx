import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  Bell, 
  Search, 
  Plus, 
  MoreHorizontal, 
  CalendarDays,
  Paperclip,
  MessageSquare
} from "lucide-react";

// 1. تعريف أنواع البيانات (Types)
type Task = {
  id: string;
  title: string;
  tag: string;
  tagColor: string; // Tailwind class for color
  date: string;
  comments: number;
  attachments: number;
  members: string[]; // Avatars initials
  priority: 'low' | 'medium' | 'high';
};

type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

// 2. بيانات وهمية (Dummy Data)
const boardData: Column[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      {
        id: "t1",
        title: "Design Homepage Hero Section",
        tag: "Design",
        tagColor: "text-purple-500 bg-purple-500/10",
        date: "Tomorrow",
        comments: 3,
        attachments: 2,
        members: ["JD", "AS"],
        priority: 'high'
      },
      {
        id: "t2",
        title: "Fix Navigation Bug on Mobile",
        tag: "Bug",
        tagColor: "text-red-500 bg-red-500/10",
        date: "Jan 24",
        comments: 1,
        attachments: 0,
        members: ["JD"],
        priority: 'medium'
      }
    ]
  },
  {
    id: "progress",
    title: "In Progress",
    tasks: [
      {
        id: "t3",
        title: "Integrate Stripe Payment",
        tag: "Backend",
        tagColor: "text-blue-500 bg-blue-500/10",
        date: "In 2 days",
        comments: 5,
        attachments: 4,
        members: ["MK", "AS", "JD"],
        priority: 'high'
      },
      {
        id: "t4",
        title: "Update User Documentation",
        tag: "Content",
        tagColor: "text-yellow-500 bg-yellow-500/10",
        date: "Jan 28",
        comments: 0,
        attachments: 1,
        members: ["MK"],
        priority: 'low'
      }
    ]
  },
  {
    id: "review",
    title: "In Review",
    tasks: [
      {
        id: "t5",
        title: "Dark Mode Contrast Check",
        tag: "Design",
        tagColor: "text-purple-500 bg-purple-500/10",
        date: "Today",
        comments: 8,
        attachments: 6,
        members: ["AS"],
        priority: 'medium'
      }
    ]
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      {
        id: "t6",
        title: "Setup Project Repository",
        tag: "DevOps",
        tagColor: "text-green-500 bg-green-500/10",
        date: "Jan 10",
        comments: 0,
        attachments: 0,
        members: ["JD"],
        priority: 'low'
      },
      {
        id: "t7",
        title: "Initial Client Meeting",
        tag: "Meeting",
        tagColor: "text-orange-500 bg-orange-500/10",
        date: "Jan 05",
        comments: 12,
        attachments: 1,
        members: ["JD", "MK"],
        priority: 'high'
      }
    ]
  }
];

export default function KanbanPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors font-sans selection:bg-primary/20">
      
      <Sidebar />

      <main className="ml-72 min-h-screen p-8 relative overflow-hidden flex flex-col gap-8">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <header className="flex items-center justify-between relative z-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Project Tasks</h1>
            <p className="text-muted-foreground mt-1">Kanban board for JayBee UI Kit</p>
          </div>
          <div className="flex gap-3">
             <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search tasks..." className="pl-10 h-10 neo-inset rounded-xl border-none text-sm" />
             </div>
             <Button className="rounded-xl shadow-lg shadow-primary/20 gap-2 h-10">
                <Plus className="h-4 w-4" /> Add Task
             </Button>
             <ModeToggle />
             <Button size="icon" variant="ghost" className="rounded-xl h-10 w-10 neo-inset text-muted-foreground"><Bell className="h-5 w-5" /></Button>
          </div>
        </header>

        {/* --- KANBAN BOARD AREA --- */}
        {/* Container with horizontal scroll if needed */}
        <div className="flex-1 overflow-x-auto pb-4">
            <div className="flex gap-8 min-w-full h-full">
                
                {boardData.map((column) => (
                    // COLUMN: The "Tray" or "Channel"
                    <div key={column.id} className="w-80 flex-shrink-0 flex flex-col gap-4">
                        
                        {/* Column Header */}
                        <div className="flex items-center justify-between px-2">
                            <h3 className="font-bold text-foreground flex items-center gap-2">
                                {column.title}
                                <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full neo-inset">
                                    {column.tasks.length}
                                </span>
                            </h3>
                            <div className="flex gap-1">
                                <Button size="icon" variant="ghost" className="h-6 w-6 rounded-lg hover:bg-background/50"><Plus className="h-3 w-3" /></Button>
                                <Button size="icon" variant="ghost" className="h-6 w-6 rounded-lg hover:bg-background/50"><MoreHorizontal className="h-3 w-3" /></Button>
                            </div>
                        </div>

                        {/* Column Content: The Engraved Track */}
                        {/* استخدام neo-inset هنا هو السر لجعل العمود يبدو كقناة */}
                        <div className="flex-1 rounded-3xl p-4 bg-background neo-inset flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                            
                            {/* Render Tasks */}
                            {column.tasks.map((task) => (
                                // TASK CARD: The "Floating Item"
                                <div 
                                    key={task.id} 
                                    className="group relative p-4 rounded-2xl bg-background shadow-neo-light-flat dark:shadow-neo-dark-flat border border-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-grab active:cursor-grabbing"
                                >
                                    {/* Priority Indicator Dot */}
                                    <div className={`absolute top-4 right-4 h-2 w-2 rounded-full 
                                        ${task.priority === 'high' ? 'bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.6)]' : 
                                          task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}
                                    `} />

                                    {/* Tags */}
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider ${task.tagColor}`}>
                                        {task.tag}
                                    </span>

                                    {/* Title */}
                                    <h4 className="font-bold text-sm mt-3 mb-1 leading-snug">{task.title}</h4>
                                    
                                    {/* Date */}
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                                        <CalendarDays className="h-3 w-3" /> {task.date}
                                    </div>

                                    {/* Footer: Members & Meta */}
                                    <div className="flex items-center justify-between pt-3 border-t border-muted/20">
                                        
                                        {/* Avatars Stack */}
                                        <div className="flex -space-x-2">
                                            {task.members.map((m, i) => (
                                                <div key={i} className="h-7 w-7 rounded-full bg-background border-2 border-background flex items-center justify-center text-[9px] font-bold shadow-sm neo-inset">
                                                    {m}
                                                </div>
                                            ))}
                                            <div className="h-7 w-7 rounded-full bg-background border-2 border-background flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors cursor-pointer shadow-sm z-10">
                                                <Plus className="h-3 w-3" />
                                            </div>
                                        </div>

                                        {/* Comments & Attachments */}
                                        <div className="flex gap-3 text-muted-foreground text-xs">
                                            {task.comments > 0 && (
                                                <span className="flex items-center gap-1 hover:text-primary transition-colors">
                                                    <MessageSquare className="h-3 w-3" /> {task.comments}
                                                </span>
                                            )}
                                            {task.attachments > 0 && (
                                                <span className="flex items-center gap-1 hover:text-primary transition-colors">
                                                    <Paperclip className="h-3 w-3" /> {task.attachments}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Empty State / Drop Area placeholder */}
                            <div className="h-24 rounded-2xl border-2 border-dashed border-muted/30 flex items-center justify-center text-muted-foreground text-xs opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                                Drop tasks here
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>

      </main>
    </div>
  );
}