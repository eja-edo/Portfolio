import { SiteConfig } from '@/types';

export const SITE: SiteConfig = {
    // Thông tin cá nhân
    title: 'Portfolio - Vũ Nguyễn Duy Anh',
    name: 'Vũ Nguyễn Duy Anh',
    role: 'Backend / Full-Stack Engineer',

    bio: [
        'Full-Stack Engineer oriented toward Backend, DevOps, and Application Security, with a strong focus on building production-scale real-time, IoT, and AI-powered systems. Experienced in designing scalable, fault-tolerant, and self-hosted architectures, optimizing performance, cost efficiency, and system scalability.',
        'Proficient in designing RESTful APIs and implementing real-time communication technologies (WebSocket, MQTT, WebRTC). Experienced in deploying and operating production systems using Docker, Nginx, and Linux, optimizing infrastructure to reduce costs by up to ~90% compared to managed cloud solutions.',
        'Currently focusing on Application Security & Pentesting for Web Applications and Blockchain systems, researching and exploiting vulnerabilities related to business logic, authentication/authorization, API security, file handling, and smart contracts. Practicing threat modeling, trust boundary analysis, and risk assessment in distributed systems.'
    ],

    avatar: 'https://imgproxy.mezon.ai/K0YUZRIosDOcz5lY6qrgC6UIXmQgWzLjZv7VJ1RAA8c/rs:fit:300:300:1/mb:2097152/plain/https://profile.mezon.ai/1946168514767228928/2009178101203865600.jpg@webp',
    email: 'vunguyenduyanh57@gmail.com',
    resume: '/assets/resume.pdf',

    // Social links
    social: {
        github: 'https://github.com/eja-edo',
        linkedin: 'https://www.linkedin.com/in/duy-anh-v%C5%A9-nguy%E1%BB%85n-a521b2366/',
        // twitter: 'https://twitter.com/yourusername',
        email: 'https://mail.google.com/mail/u/0/#sent?compose=CllgCHrkVgrdwDhPvPnmxXgXJDJZvcgZZMlVktpgDxDPqJtvlJzrfHvLHlfPtPmpRJxrfmdPpfg',
    },

    // Kinh nghiệm
    experience: {
        years: 2,
        status: 'available', // available | contracted | busy
    },

    // Kỹ năng
    skills: [
        // Backend & API
        { name: 'Python', level: 90, category: 'backend' },
        { name: 'Django', level: 85, category: 'backend' },
        { name: 'FastAPI', level: 85, category: 'backend' },
        { name: 'Node.js', level: 80, category: 'backend' },
        { name: 'Express', level: 80, category: 'backend' },
        { name: 'REST API', level: 90, category: 'backend' },

        // Database
        { name: 'PostgreSQL', level: 85, category: 'database' },
        { name: 'MongoDB', level: 80, category: 'database' },
        { name: 'Prisma ORM', level: 80, category: 'database' },
        { name: 'Redis', level: 75, category: 'database' },

        // Frontend
        { name: 'React', level: 75, category: 'frontend' },
        { name: 'TypeScript', level: 80, category: 'frontend' },
        { name: 'Next.js', level: 70, category: 'frontend' },
        { name: 'Tailwind CSS', level: 75, category: 'frontend' },

        // DevOps & Tools
        { name: 'Docker', level: 85, category: 'tools' },
        { name: 'Git', level: 85, category: 'tools' },
        { name: 'Linux', level: 80, category: 'tools' },
        { name: 'Nginx', level: 75, category: 'tools' },
    ],

    // Timeline - Học vấn & Kinh nghiệm
    timeline: [
        {
            title: 'Bachelor of Information Technology',
            organization: 'Electric Power University (Faculty of Information Technology)',
            period: '2022 - 2027',
            description: 'Focused on Backend Engineering, Distributed Systems, and Software Architecture. Actively involved in building production-oriented systems and AI-integrated applications.',
            type: 'education',
        },
        {
            title: 'Full-Stack Developer – AI Learning Systems',
            organization: 'Independent Project',
            period: '2023 - 2024',
            description: 'Developed AI-powered learning platforms leveraging multiple AI models. Designed multi-model strategies to optimize performance, cost efficiency, and response quality.',
            type: 'work',
        },
        {
            title: 'Backend Engineer – Streaming Platform (SMovie)',
            organization: 'SMovie',
            period: '2024',
            description: 'Designed and developed a movie streaming platform with scalable backend architecture, real-time WebSocket comments, OAuth authentication, fuzzy search, and reporting dashboard.',
            type: 'work',
        },
        {
            title: 'Full-Stack Developer – IoT Supply Chain System',
            organization: 'Farm Trace Project',
            period: '2024',
            description: 'Built an IoT-based supply chain backend using Node.js, Prisma, and PostgreSQL. Integrated MQTT for ESP32 devices and Socket.IO for real-time monitoring. Implemented JWT authentication and rate limiting.',
            type: 'work',
        },
        {
            title: 'Backend Engineer – Agent LiveKit (Real-time STT Systems)',
            organization: 'Mezon AI / Independent Research',
            period: '2025 - Present',
            description: 'Designed and developed real-time Speech-to-Text systems using LiveKit (WebRTC, SFU). Integrated Whisper/Vosk-based STT and optimized for low-latency streaming. Later expanded the system with a high-accuracy STT pipeline and introduced an orchestrator layer to coordinate LiveKit, applications, and Mezon bots.',
            type: 'work',
        },
        {
            title: 'Application Security & Blockchain Pentester',
            organization: 'Independent Research',
            period: '2025 - Present',
            description: 'Conducting Web Application and Blockchain penetration testing, focusing on trust boundaries, business logic flaws, authentication/authorization issues, API security, file handling vulnerabilities, and smart contract exploits. Practicing threat modeling and real-world PoC development.',
            type: 'work',
        },
    ],
};

// Navigation links
export const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
];

// SEO defaults
export const SEO_DEFAULTS = {
    title: SITE.title,
    description: SITE.bio,
    ogImage: '/assets/og-image.jpg',
    twitterHandle: '@yourusername',
};
