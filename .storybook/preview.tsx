import React from 'react'; 
import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { Exo_2 } from "next/font/google";

export const Exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
  display: "swap",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={`exo-2 ${Exo2.variable}`}>
        <Story />
      </main>
    ),
  ],

  tags: ["autodocs"],
};

export default preview;
