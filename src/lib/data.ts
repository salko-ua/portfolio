// src/lib/data.ts

export const portfolioData = {
  header: {
    location: "🇺🇦 Volodymyr, Volyn', Ukraine",
    profession: "Software/Full Stack Developer",
    githubLink: "https://github.com/salko-ua/",
  },
  sideMenu: {
    projects: {
      count: 53,
      link: "https://github.com/salko-ua?tab=repositories",
    },
    artwork: {
      count: 4,
      link: "https://github.com/salko-ua/art-work",
    },
    languages: {
      count: 4,
      link: "/languages", // Consider implementing this page or removing the link
    },
    reviews: {
      count: 2,
      link: "/template", // Consider implementing this page or removing the link
    },
    anime: {
      link: "https://myanimelist.net/profile/throughere",
    },
    discord: {
      link: "https://discord.com/users/userid", // Replace with actual user ID
    },
    telegram: {
      link: "https://t.me/throughere",
    },
    steam: {
      link: "https://steamcommunity.com/id/throughere/",
    },
  },
  stats: {
    age: {
      value: 19,
      link: "/age", // Consider implementing this page or removing the link
    },
    projectsXP: {
      value: 446,
      link: "/projects",
    },
  },
  githubShowcase: {
    imageSrc: "/dark_mode.svg",
  },
};

export type PortfolioData = typeof portfolioData;
