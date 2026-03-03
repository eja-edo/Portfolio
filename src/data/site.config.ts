import { SiteConfig } from '@/types';

export const SITE: SiteConfig = {
    // Thông tin cá nhân
    title: 'Portfolio - Vũ Nguyễn Duy Anh',
    name: 'Vũ Nguyễn Duy Anh',
    role: 'Backend / Full-Stack Engineer',

    bio: [
        'Full-Stack Engineer định hướng Backend, DevOps và Application Security, với trọng tâm xây dựng các hệ thống real-time, IoT và AI-powered ở quy mô production. Có kinh nghiệm thiết kế kiến trúc scalable, fault-tolerant và self-hosted, tối ưu hiệu năng, chi phí và khả năng mở rộng.',
        'Thành thạo thiết kế RESTful API và real-time communication (WebSocket, MQTT, WebRTC). Có kinh nghiệm triển khai và vận hành hệ thống production với Docker, Nginx và Linux, tối ưu hạ tầng giúp giảm đến ~90% chi phí so với các giải pháp cloud managed.',
        'Hiện tập trung vào Application Security & Pentesting cho Web Application và Blockchain, nghiên cứu và khai thác các lỗ hổng liên quan đến business logic, authentication/authorization, API security, file handling và smart contract. Thực hành threat modeling, phân tích trust boundary và đánh giá rủi ro trong các hệ thống phân tán.'
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
            title: 'Application Security & Blockchain Pentester',
            organization: 'Independent / Research',
            period: 'Dec 2024 - Present',
            description: 'Thực hiện pentest Web Application và Blockchain: phân tích trust boundary, business logic flaws, API security, file upload, auth flows và smart contract vulnerabilities. Thực hành threat modeling và exploit PoC trong môi trường thực tế.',
            type: 'work',
        },
        {
            title: 'Backend Developer – Real-time Systems',
            organization: 'Mezon AI',
            period: 'Sep 2024 - Nov 2024',
            description: 'Thiết kế Real-Time Transcription Agent với LiveKit (WebRTC, SFU). Tích hợp WhisperLive/Vosk STT, Silero TTS, triển khai self-hosted giúp giảm ~90% chi phí vận hành so với cloud.',
            type: 'work',
        },
        {
            title: 'Full-Stack Developer – IoT Systems',
            organization: 'Farm Trace Project',
            period: 'Jun 2024 - Dec 2024',
            description: 'Xây dựng IoT supply chain backend với Node.js, Prisma, PostgreSQL. Tích hợp MQTT cho ESP32 và Socket.IO cho real-time monitoring, JWT auth và rate limiting.',
            type: 'work',
        },
        {
            title: 'Backend Engineer – Streaming Platform',
            organization: 'SMovie',
            period: 'Aug 2024 - Oct 2024',
            description: 'Phát triển nền tảng streaming với Django REST, WebSocket comments, OAuth, fuzzy search và admin dashboard reporting.',
            type: 'work',
        },
        {
            title: 'Full-Stack Developer – AI Learning Platform',
            organization: 'IT English Hub',
            period: 'Sep 2024 - Nov 2024',
            description: 'Xây dựng nền tảng học tiếng Anh ứng dụng Gemini AI với chiến lược multi-model để tối ưu chi phí và hiệu năng.',
            type: 'work',
        },
        {
            title: 'Bachelor of Computer Science',
            organization: 'University of Technology',
            period: '2020 - 2024',
            description: 'Tập trung Backend, Distributed Systems và Software Architecture. Hoàn thành nhiều dự án production-ready.',
            type: 'education',
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
