import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { SpacePanel } from '@/components/SpacePanel';
import { SectionTitle } from '@/components/SectionTitle';
import { siteContent, type SocialLink } from '@/lib/site-content';

const iconMap = {
    github: Github,
    linkedin: Linkedin,
    email: Mail,
    telegram: Send,
};

function SocialIcon({ social }: { social: SocialLink }) {
    const Icon = iconMap[social.icon];
    return (
        <a
            href={social.href}
            target={social.icon === 'email' ? undefined : '_blank'}
            rel={social.icon === 'email' ? undefined : 'noopener noreferrer'}
            className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/12 bg-[#060d14]/50 hover:border-purple-400/35 text-zinc-300 hover:text-purple-300 text-sm transition-colors"
        >
            <Icon className="w-4 h-4 text-blue-400/70" />
            <span className="font-mono-digital text-[11px] uppercase tracking-wider">{social.name}</span>
        </a>
    );
}

export function ContactCard() {
    const { email, location, timezone, socials } = siteContent.contact;

    return (
        <SpacePanel className="w-full max-w-lg">
            <SectionTitle subtitle="Open comms channel">Contact</SectionTitle>
            <div className="text-center space-y-5">
                <div>
                    <p className="font-orbitron text-lg tracking-wider text-white">{siteContent.name}</p>
                    <p className="font-mono-digital text-xs text-purple-400/80 mt-1 uppercase tracking-[0.2em]">
                        {siteContent.role}
                    </p>
                </div>

                <a
                    href={`mailto:${email}`}
                    className="block font-mono-digital text-sm text-zinc-400 hover:text-purple-300 transition-colors tracking-wide"
                >
                    {email}
                </a>

                <p className="font-mono-digital text-[11px] text-zinc-500 uppercase tracking-widest">
                    {location} · {timezone}
                </p>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                    {socials.map((social) => (
                        <SocialIcon key={social.name} social={social} />
                    ))}
                </div>
            </div>
        </SpacePanel>
    );
}
