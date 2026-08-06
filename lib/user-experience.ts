export type TechItem = {
    name: string;
    icon: string;
    textColor: string;
};

export type TechSection = {
    id: string;
    title: string;
    subtitle: string;
    items: TechItem[];
};

/**
 * Skill taxonomy notes:
 * - languages: programming, markup, and query languages (SQL/GraphQL live here)
 * - frontend: UI libraries, styling, bundlers, FE testing
 * - backend: runtimes and server frameworks
 * - cloudAndDevOps: cloud platforms + delivery/version-control tooling
 * - methodologies: process frameworks
 * - tools: design, project, analytics, and API tooling
 *
 * `sections` is rendered automatically by Skills (plug-and-play).
 * `languages` / `frontend` use the same TechSection shape for A/B layouts.
 */
export const userExperience = {
    technologies: {
        languages: {
            id: 'languages',
            title: 'Languages',
            subtitle: 'Programming languages I have worked with in a professional setting',
            items: [
                { name: 'HTML5', icon: '/icons/languages/HTML5.svg', textColor: 'text-orange-500' },
                { name: 'CSS', icon: '/icons/languages/CSS3.svg', textColor: 'text-blue-500' },
                { name: 'Sass', icon: '/icons/languages/Sass.svg', textColor: 'text-pink-500' },
                { name: 'JavaScript', icon: '/icons/languages/JavaScript.svg', textColor: 'text-yellow-500' },
                { name: 'TypeScript', icon: '/icons/languages/TypeScript.svg', textColor: 'text-blue-500' },
                { name: 'Ruby', icon: '/icons/languages/Ruby.svg', textColor: 'text-red-500' },
                { name: 'Python', icon: '/icons/languages/Python.svg', textColor: 'text-green-500' },
                { name: 'Java', icon: '/icons/languages/Java.svg', textColor: 'text-red-500' },
                { name: 'GraphQL', icon: '/icons/languages/GraphQL.svg', textColor: 'text-pink-500' },
                { name: 'PostgreSQL', icon: '/icons/languages/PostgreSQL.svg', textColor: 'text-sky-400' },
            ],
        } satisfies TechSection,

        frontend: {
            id: 'frontend',
            title: 'Frontend & Design',
            subtitle: 'Primary technologies I use for web development',
            items: [
                { name: 'React', icon: '/icons/languages/React.svg', textColor: 'text-sky-400' },
                { name: 'Next.js', icon: '/icons/languages/nextdotjs.svg', textColor: 'text-zinc-200' },
                { name: 'Redux', icon: '/icons/languages/Redux.svg', textColor: 'text-purple-500' },
                { name: 'Angular', icon: '/icons/languages/Angular.svg', textColor: 'text-red-500' },
                { name: 'Tailwind CSS', icon: '/icons/languages/TailwindCSS.svg', textColor: 'text-cyan-400' },
                { name: 'Material UI (MUI)', icon: '/icons/languages/MUI.svg', textColor: 'text-blue-500' },
                { name: 'Webpack', icon: '/icons/languages/Webpack.svg', textColor: 'text-sky-500' },
                { name: 'Jest', icon: '/icons/languages/Jest.svg', textColor: 'text-red-400' },
                { name: 'Figma', icon: '/icons/languages/Figma.svg', textColor: 'text-pink-400' },
            ],
        } satisfies TechSection,

        sections: [
            {
                id: 'backend',
                title: 'Backend',
                subtitle: 'As a full-stack developer, I have used the following technologies in a professional setting',
                items: [
                    { name: 'Node.js', icon: '/icons/languages/Node.js.svg', textColor: 'text-green-500' },
                    { name: 'Ruby on Rails', icon: '/icons/languages/Ruby on Rails.svg', textColor: 'text-red-500' },
                    { name: 'FastAPI', icon: '/icons/languages/FastAPI.svg', textColor: 'text-green-500' },
                    { name: 'Spring Boot', icon: '/icons/languages/Spring.svg', textColor: 'text-green-500' },
                ],
            },
            {
                id: 'cloudAndDevOps',
                title: 'Cloud & DevOps',
                subtitle: 'Cloud platforms and delivery tooling I use to ship and operate software',
                items: [
                    { name: 'AWS', icon: '/icons/languages/AWS.svg', textColor: 'text-orange-400' },
                    { name: 'Google Cloud', icon: '/icons/languages/GoogleCloud.svg', textColor: 'text-blue-400' },
                    { name: 'Vercel', icon: '/icons/languages/Vercel.svg', textColor: 'text-gray-300' },
                    { name: 'Git', icon: '/icons/languages/Git.svg', textColor: 'text-orange-500' },
                    { name: 'Bitbucket', icon: '/icons/languages/BitBucket.svg', textColor: 'text-blue-500' },
                ],
            }
        ] satisfies TechSection[],
    },
};
