import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GlassCard } from '@/components/Card/Glass';
import { cn } from '@/lib/utils';

const techStack = [
    { icon: '⚡', label: 'Next.JS',      bg: 'bg-zinc-950' },
    { icon: '🎨', label: 'Tailwind CSS', bg: 'bg-cyan-500/10' },
    { icon: '✏️', label: 'ShadCN/UI',   bg: 'bg-zinc-800' },
    { icon: '📦', label: 'Node.JS',      bg: 'bg-green-500/10' },
];

const workSteps = [
    { n: '1', title: 'Project Brief',    desc: 'We will discuss your project and its goals.',                                   color: 'bg-purple-600' },
    { n: '2', title: 'Design & Develop', desc: 'I will design and develop your website according to your needs.',               color: 'bg-blue-600' },
    { n: '3', title: 'Testing & Review', desc: 'I will let you test the website and make any changes if needed.',               color: 'bg-rose-600' },
    { n: '4', title: 'Launch',           desc: 'I will give you the source code and help you with the launch.',                 color: 'bg-emerald-600' },
];

const stats = [
    { value: '13+', icon: '💼', label: 'Projects' },
    { value: '7+',  icon: '👥', label: 'Clients' },
    { value: '4+',  icon: '⭐', label: 'Yrs Expertise' },
];

const services = [
    'SEO Optimization', 'Hosting Guide', 'Web Security',
    'Web Development', 'Website Rework', 'UI/UX Design', 'Performance Tuning',
];

const projects = [
    { title: 'Portfolio Website',    desc: 'Modern portfolio with Next.js and Tailwind' },
    { title: 'E-commerce Platform',  desc: 'Full-stack shopping experience' },
    { title: 'Dashboard App',        desc: 'Analytics dashboard with real-time data' },
];

const testimonials = [
    { name: 'Eva',  company: 'Delvfox',     rating: 5, text: 'Working with Carl was a great experience. He is always on time and ready to help.' },
    { name: 'Mark', company: 'TechStart',   rating: 5, text: 'He is very good at what he does. I would highly recommend him to anyone looking for a skilled developer.' },
    { name: 'Div',  company: 'CheckerPlus', rating: 4, text: 'Amazing developer! Delivered the project on time and exceeded my expectations.' },
];

export default function BioPage({ className }: { className?: string }) {
    return (
        <div className={cn('min-h-screen bg-[#0a0a0a] p-4 md:p-6 lg:p-8', className)}>
            <div className="max-w-7xl mx-auto">
                {/*
                 * Desktop (lg) bento grid — 4 columns, auto rows min 130 px:
                 *
                 * Row 1 : [Profile       ] [  Tech Stacks (2-col)  ] [Work Process ]
                 * Row 2 : [Profile       ] [  Stats (nested 3-col) ] [Work Process ]
                 * Row 3 : [Profile       ] [  Services  (2-col)    ] [Work Process ]
                 * Row 4 : [  Projects (2-col)   ] [   CTA  (2-col)       ]
                 * Row 5-6: [          Testimonials (4-col)              ]
                 */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 auto-rows-[minmax(130px,auto)]">

                    {/* ── Profile ── lg: col 1, rows 1-3 */}
                    <GlassCard className={`lg:row-span-3 flex flex-col`}>
                        <CardHeader className="flex-none pb-3">
                            <div className="flex flex-col items-center gap-3">
                                <div className="relative w-20 h-20 rounded-full bg-zinc-700 flex items-center justify-center text-3xl shrink-0">
                                    👤
                                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-zinc-900" />
                                </div>
                                <span className="px-3 py-0.5 text-[11px] bg-green-500/10 text-green-400 rounded-full border border-green-500/20 whitespace-nowrap">
                                    ✓ Available To Work
                                </span>
                                <div className="text-center">
                                    <CardTitle className="text-white text-lg">Carl Godlewski</CardTitle>
                                    <CardDescription className="text-zinc-400 text-sm mt-0.5">
                                        I&apos;m a <span className="text-purple-400">Web Developer</span>
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-start gap-2 pb-6">
                            {[
                                { icon: '🌐', label: 'English' },
                                { icon: '📍', label: 'New York City, USA' },
                                { icon: '⏰', label: 'UTC-5' },
                            ].map(({ icon, label }) => (
                                <div key={label} className="flex items-center gap-2 text-sm text-zinc-300">
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </div>
                            ))}
                            <div className="pt-2">
                                <span className="px-3 py-1 text-[11px] bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                                    💼 Freelancer
                                </span>
                            </div>
                        </CardContent>
                    </GlassCard>

                    {/* ── Tech Stacks ── lg: col 2-3, row 1 */}
                    {/* <GlassCard className={`lg:col-span-2`}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-white text-base flex items-center gap-2">
                                🛠️ My Tech Stacks
                            </CardTitle>
                            <CardDescription className="text-zinc-400 text-xs">
                                My favorite tech stack I use on my projects
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-3">
                                {techStack.map(({ icon, label, bg }) => (
                                    <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/60 border border-white/4">
                                        <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center text-lg shrink-0`}>
                                            {icon}
                                        </div>
                                        <span className="text-white text-sm font-medium">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </GlassCard> */}
                    <GlassCard className={`lg:col-span-2`}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-white text-base flex items-center gap-2">
                                🛠️ Who Am I?
                            </CardTitle>
                        </CardHeader>
                       
                    </GlassCard>


                    {/* ── Work Process ── lg: col 4, rows 1-3 */}
                    <GlassCard className={`lg:row-span-3`}>
                        <CardHeader>
                            <CardTitle className="text-white text-base flex items-center gap-2">
                                ⚙️ Work Process
                            </CardTitle>
                            <CardDescription className="text-zinc-400 text-xs">
                                The work process explained in 4 simple steps
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            {workSteps.map(({ n, title, desc, color }) => (
                                <div key={n} className="flex items-start gap-3">
                                    <div className={`w-7 h-7 shrink-0 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold`}>
                                        {n}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white text-sm font-semibold leading-tight">{title}</p>
                                        <p className="text-zinc-400 text-xs mt-0.5 leading-snug">{desc}</p>
                                    </div>
                                    <span className="text-zinc-600 text-[10px] shrink-0">#{n}</span>
                                </div>
                            ))}
                        </CardContent>
                    </GlassCard>

                    {/* ── Stats ── lg: col 2-3, row 2 — nested 3-col grid inside a wrapper */}
                    <div className="lg:col-span-2 grid grid-cols-3 gap-4">
                        {stats.map(({ value, icon, label }) => (
                            <GlassCard key={label} className={`flex flex-col items-center justify-center`}>
                                <CardContent className="pt-6 pb-4 text-center px-2">
                                    <div className="text-2xl lg:text-3xl font-bold text-white">{value}</div>
                                    <div className="flex items-center justify-center gap-1 text-zinc-400 text-[11px] mt-1">
                                        <span>{icon}</span>
                                        <span className="whitespace-nowrap">{label}</span>
                                    </div>
                                </CardContent>
                            </GlassCard>
                        ))}
                    </div>

                    {/* ── Services ── lg: col 2-3, row 3 */}
                    <GlassCard className={`lg:col-span-2`}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-white text-base flex items-center gap-2">
                                ⚡ Services
                            </CardTitle>
                            <CardDescription className="text-zinc-400 text-xs">
                                My services are tailored to your needs and budget
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {services.map((s) => (
                                    <span
                                        key={s}
                                        className="px-3 py-1.5 bg-zinc-800 text-zinc-200 rounded-full text-xs border border-white/6 hover:border-purple-500/40 transition-colors cursor-default"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </GlassCard>

                    {/* ── Projects ── lg: col 1-2, row 4 */}
                    <GlassCard className={`lg:col-span-2`}>
                        <CardHeader>
                            <CardTitle className="text-white text-base flex items-center gap-2">
                                💼 Projects
                            </CardTitle>
                            <CardDescription className="text-zinc-400 text-xs">
                                Here are some of the projects I have worked on
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {projects.map(({ title, desc }) => (
                                <div
                                    key={title}
                                    className="p-3 rounded-xl bg-zinc-800/60 border border-white/4 hover:border-purple-500/30 transition-colors cursor-pointer"
                                >
                                    <p className="text-white font-semibold text-sm">{title}</p>
                                    <p className="text-zinc-400 text-xs mt-0.5">{desc}</p>
                                </div>
                            ))}
                            <button className="w-full py-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                                View All Projects →
                            </button>
                        </CardContent>
                    </GlassCard>

                    {/* ── CTA ── lg: col 3-4, row 4 */}
                    {/* <GlassCard className={`lg:col-span-2`}>
                        <CardContent className="flex flex-col items-center justify-center h-full text-center py-8">
                            <div className="text-4xl mb-3">🤝</div>
                            <h3 className="text-white font-semibold text-lg mb-1">Let&apos;s work together</h3>
                            <p className="text-zinc-400 text-sm mb-5">Let&apos;s bring your ideas to the world</p>
                            <div className="flex gap-3 flex-wrap justify-center">
                                <button className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-sm font-medium transition-colors">
                                    📧 Email Me
                                </button>
                                <button className="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-sm font-medium transition-colors border border-white/6">
                                    💬 Telegram
                                </button>
                            </div>
                        </CardContent>
                    </GlassCard> */}

                    {/* ── Testimonials ── lg: col 1-4, rows 5-6 */}
                    {/* <GlassCard className={`lg:col-span-4 lg:row-span-2`}>
                        <CardHeader>
                            <CardTitle className="text-white text-base flex items-center gap-2">
                                💬 Testimonials
                            </CardTitle>
                            <CardDescription className="text-zinc-400 text-xs">
                                What my clients say about me
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {testimonials.map(({ name, company, rating, text }) => (
                                    <div key={name} className="p-4 rounded-xl bg-zinc-800/60 border border-white/4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-9 h-9 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                                {name[0]}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white font-semibold text-sm">{name}</p>
                                                <p className="text-zinc-400 text-xs">{company}</p>
                                            </div>
                                            <div className="text-yellow-400 text-sm shrink-0">{'★'.repeat(rating)}</div>
                                        </div>
                                        <p className="text-zinc-300 text-sm leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </GlassCard> */}
                </div>
            </div>
        </div>
    );
}