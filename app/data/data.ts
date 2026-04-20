export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  images: string[];
  featured?: boolean;
}

export const projects = [
  {
    title: "Water4You",
    description:
      "A full-stack web application for managing customers and sending automated SMS reminders for water filter replacements.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Twilio API"],
    github: "https://github.com/UnLakhs/water4you-dashboard",
    demo: "",
    images: [
      "/projects/water4you/screenshot-1.png",
      "/projects/water4you/screenshot-2.png",
      "/projects/water4you/screenshot-3.png",
      "/projects/water4you/screenshot-4.png",
    ],
    featured: true,
  },
];
