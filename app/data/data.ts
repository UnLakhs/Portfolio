export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  images: string[];
  featured?: boolean;
  status?: "live" | "paused" | "restricted";
  projectNotes?: string;
}

export const projects: Project[] = [
  {
    id: "water4you",
    title: "Water4You",
    description:
      "A full-stack web application for managing customers and sending automated SMS reminders for water filter replacements.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Twilio API"],
    github: "https://github.com/UnLakhs/water4you-dashboard",
    images: [
      "/projects/water4you/screenshot-1.png",
      "/projects/water4you/screenshot-2.png",
      "/projects/water4you/screenshot-3.png",
      "/projects/water4you/screenshot-4.png",
    ],
    featured: true,
    status: "restricted",
    projectNotes:
      "This web app is only accessible to the business owner and their employees, as it contains sensitive customer information. I designed and implemented all features of this project.",
  },
  {
    id: "cinegame-critic",
    title: "CineGame-Critic",
    description:
      "A full-stack web application for movie and game reviews, allowing users to create accounts, write reviews, add movies/games to their watchlist, and search for content.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "TMDB API"],
    github: "https://github.com/WebDevTeam2/CGC",
    images: [
      "/projects/cinegame/screenshot_(1).png",
      "/projects/cinegame/screenshot_(2).png",
      "/projects/cinegame/screenshot_(3).png",
      "/projects/cinegame/screenshot_(4).png",
      "/projects/cinegame/screenshot_(5).png",
    ],
    featured: true,
    status: "paused",
    projectNotes:
      "This project was built as part of a team, where I contributed to both frontend and backend development. I co-designed all features regarding user authentication and I designed and implemented all Movies features.",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/UnLakhs/portfolio",
    images: [
      "/projects/portfolio/screenshot-1.png",
      "/projects/portfolio/screenshot-2.png",
      "/projects/portfolio/screenshot-3.png",
    ],
    featured: true,
    status: "live",
    projectNotes:
      "This is the website you are currently viewing. It was designed to present my work and skills in a clean and structured way.",
  },
];
