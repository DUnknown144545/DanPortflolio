
import { Skill, Project, Certification, NavItem } from './types';

export const PERSONAL_INFO = {
  fullName: "Dan Guilliam Montenegro",
  title: "Full-Stack / Software Developer",
  avatar: "profile.jpg",
  email: "dangmontenegro@gmail.com",
  github: "https://github.com/DUnknown144545",
  linkedin: "https://www.linkedin.com/in/dan-guilliam-montenegro-a5231035a/",
  intro: "A passionate Software Engineer dedicated to building high-performance web systems and innovative IoT solutions. I thrive on solving complex problems with clean, scalable code and elegant user interfaces."
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certs' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg', category: 'Frontend' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg', category: 'Frontend' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg', category: 'Frontend' },
  { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg', category: 'Frontend' },
  { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg', category: 'Frontend' },
  { name: 'Figma', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg', category: 'Frontend' },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/python.svg', category: 'Backend' },
  { name: 'Django', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/django.svg', category: 'Backend' },
  { name: 'REST API', iconUrl: 'data:image/png;base64,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', category: 'Backend' },
  { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/php.svg', category: 'Backend' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mysql.svg', category: 'Backend' },
  { name: 'Xamarin', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/xamarin.svg', category: 'Mobile' },
  { name: 'Supabase', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/supabase.svg', category: 'Cloud & BaaS' },
  { name: 'Firebase', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/firebase.svg', category: 'Cloud & BaaS' },
  { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/docker.svg', category: 'DevOps & Tools' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg', category: 'DevOps & Tools' },
  { name: 'n8n', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/n8n.svg', category: 'DevOps & Tools' },
  { name: 'Arduino', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/arduino.svg', category: 'Embedded / Low-level' },
  { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/c.svg', category: 'Embedded / Low-level' },
  { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg', category: 'Embedded / Low-level' },
  { name: 'SQLite', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sqlite.svg', category: 'Backend' },
  { name: 'Flutter', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/flutter.svg', category: 'Mobile' }
];

export const PROJECTS: Project[] = [
  {
    title: "SmartFit",
    description: "AI-based shirt size estimator using pose detection and ML to provide accurate clothing recommendations.",
    techStack: ["Python", "PHP", "RestAPI", "MySQL", "JavaScript","HTML","CSS"],
    image: "https://picsum.photos/seed/smartfit/600/400"
  },
  {
    title: "SAO System",
    description: "Student Affairs Office management system streamlining academic records and administrative workflows.",
    techStack: ["Django", "SQLite", "JavaScript", "HTML", "CSS"],
    image: "https://picsum.photos/seed/sao/600/400"
  },
  {
    title: "BrainBlitz",
    description: "An interactive learning-based quiz application with real-time leaderboards and category-based challenges.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    image: "https://picsum.photos/seed/quiz/600/400"
  },
  {
    title: "Auto Egg Incubation",
    description: "IoT-based automation project for monitoring and controlling environmental factors in egg incubators.",
    techStack: ["Arduino", "C++", "React", "TypeScript", "Firebase"],
    image: "https://picsum.photos/seed/iot/600/400"
  },
  {
    title: "Hotel Booking System",
    description: "Full-stack reservation platform featuring room management, payment integration, and booking analytics.",
    techStack: ["MySQL", "HTML", "JavaScript", "CSS", "Express.js"],
    image: "https://picsum.photos/seed/hotel/600/400"
  }
];  

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Legacy Responsive Web Design V8",
    issuer: "freeCodeCamp",
    date: "2025",
    link: "https://www.freecodecamp.org/certification/fcc-f57a3893-7683-472a-a9c6-fc9b2e4d2215/responsive-web-design"
  },
  {
    title: "Legacy JavaScript Algorithms and Data Structures V8",
    issuer: "freeCodeCamp",
    date: "2023",
    link: "https://www.freecodecamp.org/certification/fcc-f57a3893-7683-472a-a9c6-fc9b2e4d2215/javascript-algorithms-and-data-structures-v8"
  }
];
