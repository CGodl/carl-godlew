export type Project = {
    title: string;
    description: string;
    tags?: string[];
    href?: string;
};

export type TravelPhoto = {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
};

export type SocialLink = {
    name: string;
    href: string;
    icon: 'github' | 'linkedin' | 'email' | 'telegram';
};

export const siteContent = {
    name: 'Carl Godlewski',
    role: 'Web Developer',
    tagline: "Software Engineer with experience in Ruby on Rails, Javascript, React, Redux, SQL, and MERN development.",

    bio: {
        headline:
            "My passion is using my experiences and know-how to develop solutions to challenges in the tech sphere.",
        extended: `Coming from my previous career as a Swaps Compliance Examiner my non-technical experience includes leadership, management, interviewing subject matter experts, and working in a team setting to complete projects. Some of my previous work includes projects that encompass my interests in budget management, travel, and organizing projects. I am currently interested in learning more about blockchain development and working through courses to realize this goal.`,
        profilePhoto: '/spainSelfie.jpg',
        location: 'New York City, USA',
        timezone: 'UTC-5',
    },

    projects: [
        {
            title: 'Portfolio Website',
            description: 'Modern space-themed portfolio with Next.js and Tailwind CSS.',
            tags: ['Next.js', 'Tailwind', 'TypeScript'],
            href: 'https://github.com/CGodl/carl-godlew',
        },
        {
            title: 'E-commerce Platform',
            description: 'Full-stack shopping experience with cart, checkout, and admin tools.',
            tags: ['React', 'Node.js', 'PostgreSQL'],
        },
        {
            title: 'Dashboard App',
            description: 'Analytics dashboard with real-time data visualization.',
            tags: ['React', 'Redux', 'Chart.js'],
        },
        {
            title: 'Rails API Service',
            description: 'RESTful API built with Ruby on Rails for internal tooling.',
            tags: ['Ruby on Rails', 'SQL', 'API'],
        },
    ] satisfies Project[],

    travelPhotos: [
        { src: '/spainForgot.jpg', alt: 'Travel photo from Spain', className: 'col-span-2 row-span-2' },
        { src: '/spainCordoba.jpg', alt: 'Cordoba, Spain', className: 'col-span-1 row-span-1' },
        { src: '/hungarySzimpla.jpg', alt: 'Szimpla Kert, Budapest', className: 'col-span-1 row-span-1' },
        { src: '/spainSelfie.jpg', alt: 'Selfie while traveling', className: 'col-span-1 row-span-1' },
        { src: '/spainCordoba.jpg', alt: 'Architecture in Cordoba', className: 'col-span-1 row-span-1' },
        { src: '/spainForgot.jpg', alt: 'Exploring Spain', className: 'col-span-2 row-span-1' },
        { src: '/hungarySzimpla.jpg', alt: 'Night out in Budapest', className: 'col-span-1 row-span-1' },
        { src: '/spainForgot.jpg', alt: 'Spanish countryside', className: 'col-span-1 row-span-1' },
    ] satisfies TravelPhoto[],

    contact: {
        email: 'carl.godlewski@example.com',
        location: 'New York City, USA',
        timezone: 'UTC-5',
        socials: [
            { name: 'GitHub', href: 'https://github.com/CGodl', icon: 'github' },
            { name: 'LinkedIn', href: 'https://linkedin.com/in/carl-godlewski', icon: 'linkedin' },
            { name: 'Email', href: 'mailto:carl.godlewski@example.com', icon: 'email' },
        ] satisfies SocialLink[],
    },

    resume: {
        pdfPath: '/resume.pdf',
        summary: 'Software Engineer · Ruby on Rails · React · MERN · NYC',
    },
} as const;
