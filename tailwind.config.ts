import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      PageTitle: [
        "30px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      title: [
        "20px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      subtitle: [
        "16px",
        {
          lineHeight: "16px",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      option: [
        "16px",
        {
          lineHeight: "16px",
          letterSpacing: "-0.01em",
          fontWeight: "600",
        },
      ],
      description: [
        "14px",
        {
          lineHeight: "14px",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      exo2: ["var(--font-exo2)"],
    },
    colors: {
      titleColor: "#1C1D22",
      subtitleColor: "#1C1D2280",
      white: "#ffffff",
      vector: "rgba(28, 29, 34, 0.1)",
      black: "#000000",
      bgOption: "rgba(28, 29, 34, 0.04)",
      initial: "rgba(255, 121, 121, 1)",
      medium: "rgba(255, 160, 72, 1)",
      finish: "rgba(120, 215, 0, 1)",
      almostCompleted: "rgba(75, 105, 255, 1)",
      toggleContainer: "rgba(28, 29, 34, 0.04)",
      light: "rgba(255, 255, 255, 1)",
    },
  },
  plugins: [],
};

export default config;
