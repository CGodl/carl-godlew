export type Project = {
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    tags?: string[];
    siteHref?: string;
    githubHref?: string;
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
    tagline: "New York City–based web developer with over five years of professional experience building and delivering modern web applications. I specialize in frontend development with React, Next.js, and Tailwind CSS, with additional experience in Python, Java, Spring Boot, FastAPI, and AWS.",
    
    

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
            title: 'Portfolio Website (This Website)',
            description: "Yes! The website you're viewing right now! I experimented on and off with creating a updated version of my original portfolio that used Next.js, TailWind, and TypeScript to create a website more in line with my interests and technologies. Originally designed in Figma, I then built out a skeleton leveraging Cursor and implemented the finalized design.",
            image: '/projects/spaceHeader.webp',
            imageAlt: 'Portfolio homepage',
            tags: ['Next.js', 'Tailwind', 'TypeScript'],
            siteHref: 'https://carlgodlewski.com',
            githubHref: 'https://github.com/CGodl/carl-godlew',
        },
        {
            title: 'Garbo',
            description:
                'Worked as the sole Frontend Engineer 2021-2022. Garbo was a background checking web application used by over one million unique users and built on React with SaSS styling.',
            image: '/projects/garbo.png',
            imageAlt: 'Garbo homepage',
            tags: ['React', 'Ruby on Rails', 'PostgreSQL', 'Tailwind'],
        },
        {
            title: 'GealAi',
            description:
                'Experience the future with an AI-driven web app that seamlessly generates conversations, coding assistance, and music. Transform your ideas into reality with the ultimate multitasking marvel, redefining the way you engage with technology.',
            image: '/projects/gealai.png',
            imageAlt: 'GealAi homepage',
            tags: ['Next.js', 'AI', 'TypeScript'],
            siteHref: 'https://gael-ai.vercel.app/',
            githubHref: 'https://github.com/CGodl/GaelAi',
        },
        {
            title: 'LessTravelled',
            description:
                'See the hidden gems of your next road-trip. Take part in a user-curated site tracking roadside attractions.',
            image: '/projects/lesstravelled.png',
            imageAlt: 'LessTravelled homepage',
            tags: ['React', 'Redux'],
            siteHref: 'https://less-travelled.herokuapp.com/#/',
            githubHref: 'https://github.com/ColtW27/Less-Travelled-',
        },
        {
            title: 'GalaxyEye',
            description: 'Application to track data on upcoming rocket launches around the world.',
            image: '/projects/galaxyeye.png',
            imageAlt: 'GalaxyEye homepage',
            tags: ['React', 'API'],
            siteHref: 'https://cgodl.github.io/galaxyeye/',
            githubHref: 'https://github.com/CGodl/galaxyeye',
        },
        {
            title: 'Cleverbreak',
            description:
                'A clone of Splitwise. Cleverbreak allows users to draft and track IOUs between themselves and other users.',
            image: '/projects/cleverbreak.png',
            imageAlt: 'Cleverbreak homepage',
            tags: ['React', 'Redux', 'Ruby on Rails'],
            siteHref: 'https://cleverbreak.herokuapp.com/#/',
            githubHref: 'https://github.com/CGodl/CleverBreak',
        },
        {
            title: 'Mintrello',
            description:
                'Designed as part of the Mintbean Hackathon challenge on 8/28/20. The goal was to create a working kanban board over the weekend. Final project was a noted runner-up in the competition.',
            image: '/projects/mintrello.png',
            imageAlt: 'Mintrello homepage',
            tags: ['React', 'Redux'],
            siteHref: 'https://cgodl.github.io/mintrello/#/',
            githubHref: 'https://github.com/CGodl/mintrello',
        }
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
        email: 'cgodlew@gmail.com',
        location: 'New York City, USA',
        timezone: 'UTC-5',
        socials: [
            { name: 'GitHub', href: 'https://github.com/CGodl', icon: 'github' },
            { name: 'LinkedIn', href: 'https://linkedin.com/in/carl-godlewski', icon: 'linkedin' },
            { name: 'Email', href: 'mailto:cgodlew@gmail.com', icon: 'email' },
        ] satisfies SocialLink[],
    },

    resume: {
        pdfPath: '/resume.pdf',
        summary: 'Software Engineer',
        header: {
            name: 'Carl Godlewski',
            title: 'Full-Stack Engineer',
            location: 'New York City, N.Y.',
            links: [
                { label: 'github.com/CGodl', href: 'https://github.com/CGodl' },
                { label: 'linkedin.com/in/carlgodlewski', href: 'https://linkedin.com/in/carl-godlewski' },
                { label: 'carlgodlewski.com', href: 'https://carlgodlewski.com' },
            ],
        },
        profile:
            'Full-Stack Engineer with 5+ years of experience leading and delivering solutions in both startup and Fortune 500 companies. Experienced in React, Next.js, TypeScript, and Python, with a focus on building scalable applications from scratch. Seeking an opportunity with an innovative team in the NYC area.',
        experience: [
            {
                role: 'Senior Software Engineer',
                company: 'Prudential Financial',
                period: 'December 2024 – February 2026',
                highlights: [
                    'Reduced back-end load and SQL query volume by 80% by redesigning Angular data services with centralized state management, improving application performance and scalability.',
                    'Improved data processing by reducing reliance on multi-page forms through the development of an AI-powered chatbot using Streamlit and FastAPI.',
                    'Designed and implemented a scalable data ingestion pipeline using Java, Spring Boot, Spring Batch, and AWS (S3, DynamoDB), reducing upload processing time up to 60%.',
                    'Modernized front-end architecture by migrating Angular features to a new application, building reusable components and optimizing rendering performance.',
                ],
            },
            {
                role: 'Software Engineer',
                company: 'Freelance',
                period: 'June 2023 – December 2024',
                highlights: [
                    'Served as sole Full-Stack Developer for an AI-based web application using Next.js, TypeScript, Tailwind, Clerk, and Supabase with a PostgreSQL database.',
                    'Integrated back-end microservices utilizing Stripe webhooks with Supabase edge functions for payment processing.',
                    "Implemented end-to-end Stripe payment processing and Crisp customer service chat to the application ahead of the client's 3-day deadline.",
                    'Built an internal library to standardize RESTful API routes via React hooks for the application.',
                ],
            },
            {
                role: 'Software Engineer',
                company: 'Curate Insights',
                period: 'May 2022 – June 2023',
                highlights: [
                    "Directed front-end development of an internal data marketplace tool for Prudential Financial, managing a team and serving as final code reviewer, resulting in annual savings of $3 million and replacing clients' legacy software.",
                    'Resolved bottlenecks in API design, developing a React hook to standardize flow and error handling, reducing implementation time for all related tasks by 20%.',
                    'Optimized client processes for ingesting and displaying large datasets by streamlining API response structure from the back-end, leading to a 40% reduction in development time.',
                    'Published an organizational guide on best practices and internal styling to address code quality and scalability concerns, reducing technical debt by 30%.',
                    'Developed organizational talent by driving 1-on-1 mentoring sessions with junior engineers, improving team productivity.',
                ],
            },
            {
                role: 'Front-end Engineer',
                company: 'Garbo',
                period: 'July 2021 – May 2022',
                highlights: [
                    'Built and maintained the front-end of a React application used by over one million customers.',
                    'Leveraged AWS Amplify and Cognito in end-to-end development of a user authentication system, resulting in a secure user registration and login process.',
                    "Designed a library of responsive React components based on a Figma outline and the firm's unique branding requirements.",
                    'Managed non-technical stakeholder concerns by translating concepts in the system design phase into executable goals.',
                ],
            },
        ],
        skills: [
            { label: 'Languages', items: 'HTML5, CSS, JavaScript, TypeScript, Ruby, Python, Solidity, SQL, Sass, Tailwind CSS, GraphQL' },
            { label: 'Frameworks and Libraries', items: 'React, Redux, MUI, Node.js, Next.js, Ruby on Rails, Jest, Cypress, Webpack' },
            { label: 'Development Methodologies', items: 'Agile, Scrum, DevOps, CI/CD' },
            { label: 'Tools', items: 'AWS, GCP, Git, Bitbucket, Figma, Jira, Microsoft Power BI, Excel, Postman' },
        ],
        education: [
            { credential: 'Certification, Apollo Graph Developer - Associate', year: '2024' },
            { credential: 'Certification, App Academy', year: 'Summer 2020' },
            { credential: 'Bachelor of Business Administration, Finance, Zicklin School of Business, Baruch College', year: '2013' },
        ],
    },
} as const;
