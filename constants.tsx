
import { Skill, Project, Certification, NavItem } from './types';

export const PERSONAL_INFO = {
  fullName: "Dan Guilliam Montenegro",
  title: "Full-Stack / Software Developer",
  avatar: "/profile.png",
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
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'Figma', category: 'Frontend' },
  { name: 'Python', category: 'Backend' },
  { name: 'Django', category: 'Backend' },
  { name: 'REST API', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'MySQL', category: 'Backend' },
  { name: 'Xamarin', category: 'Mobile' },
  { name: 'Supabase', category: 'Cloud & BaaS' },
  { name: 'Firebase', category: 'Cloud & BaaS' },
  { name: 'Docker', category: 'DevOps & Tools' },
  { name: 'Git', category: 'DevOps & Tools' },
  { name: 'n8n', category: 'DevOps & Tools' },
  { name: 'Arduino', category: 'Embedded / Low-level' },
  { name: 'C', category: 'Embedded / Low-level' },
  { name: 'Java', category: 'Embedded / Low-level' },
  { name: 'SQLite', category: 'Backend' },
  { name: 'Flutter', category: 'Mobile'}
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
