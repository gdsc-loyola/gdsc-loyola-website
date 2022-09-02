const products: Array<{
  name: string;
  headline?: string;
  description: string;
  image: Promise<typeof import("*.png")>;
  type: "internal" | "external";
}> = [
  {
    name: "Pavilion",
    headline: "All-in-one ecosystem for Ateneo organizations",
    description:
      "The Ateneo RecWeek app and website that brings org culture to Ateneans",
    image: import("../assets/products/pavilion.png"),
    type: "external",
  },
  {
    name: "DEAN",
    headline: "A chatbot for accessible education",
    description:
      "A chatbot that brings easy access to information to every Filipino for free",
    image: import("../assets/products/dean.png"),
    type: "internal",
  },
  {
    name: "DataHub",
    headline: "GDSC-L's front for data literacy & democracy",
    description:
      "A training ground for budding Data Scientists that allows them to work on real-world data",

    image: import("../assets/products/datahub.png"),
    type: "internal",
  },
  {
    name: "Beadle",
    description:
      "Your companion for all your organization and productivity needs",
    image: import("../assets/products/beadle.png"),
    type: "internal",
  },
  {
    name: "GoodGov website",
    description: "2022 Election website on local candidates in the Philippines",
    image: import("../assets/products/goodgov.png"),
    type: "external",
  },
  {
    name: "Miravite Website",
    description:
      "Revamping and developing a consulting company website using no-code",
    image: import("../assets/products/miravite.png"),
    type: "external",
  },
];

export default products;
