export const events: Array<{
  name: string;
  description: string;
  date: string;
  image: Promise<typeof import("*.png")>;
}> = [
  {
    name: "Hackfest",
    date: "Nov 10 2022",
    description:
      "A 10-day event composed of online technical workshops, webinars, and a 48-hour hackathon ",
    image: import("../assets/hackfest.png"),
  },
  {
    name: "Hackfest",
    date: "2020",
    description:
      "A 10-day event composed of online technical workshops, webinars, and a 48-hour hackathon ",
    image: import("../assets/hackfest.png"),
  },
  {
    name: "Hackfest",
    date: "2021",
    description:
      "A 10-day event composed of online technical workshops, webinars, and a 48-hour hackathon ",
    image: import("../assets/hackfest.png"),
  },
  {
    name: "Hackfest",
    date: "2022",
    description:
      "A 10-day event composed of online technical workshops, webinars, and a 48-hour hackathon ",
    image: import("../assets/hackfest.png"),
  },
  {
    name: "Tech Everywhere",
    date: "2020",
    description:
      "A virtual conference that aims to highlight the latest technologies in the Philippine context",
    image: import("../assets/tech-everywhere.png"),
  },
  {
    name: "Tech Everywhere",
    date: "2021",
    description:
      "A virtual conference that aims to highlight the latest technologies in the Philippine context",
    image: import("../assets/tech-everywhere.png"),
  },
  {
    name: "Playground",
    date: "2021",
    description:
      "A sandbox and startup incubation that educates individuals on establishing a startup",
    image: import("../assets/playground.png"),
  },
  {
    name: "TechFest",
    date: "2020",
    description:
      "A virtual international conference that brings together world-class experts in tech",
    image: import("../assets/techfest.png"),
  },
  {
    name: "TechFest",
    date: "2021",
    description:
      "A virtual international conference that brings together world-class experts in tech",
    image: import("../assets/techfest.png"),
  },

  {
    name: "Solutions Challenge",
    date: "2021",
    description:
      "A set of training sessions to guide participants in solving UN SDGs through Google technology",
    image: import("../assets/solutions-challenge.png"),
  },
  {
    name: "Workshops For a Cause",
    date: "2021",
    description:
      "A set of workshops to teach tech-related topics while donating proceeds to communities",
    image: import("../assets/W4AC.png"),
  },
];
