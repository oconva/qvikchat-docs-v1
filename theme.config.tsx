import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { QvikChatLogo } from "./components/qvikchat-logo";
import { SponsorNavBtn } from "./components/sponsor-nav-btn";
import { Footer } from "./components/footer";

const config: DocsThemeConfig = {
  logo: <QvikChatLogo />,
  logoLink: "/",
  project: {
    link: "https://github.com/oconva/qvikchat",
  },
  chat: {
    icon: <SponsorNavBtn variant="outline"></SponsorNavBtn>,
    link: "https://github.com/sponsors/oconva",
  },
  docsRepositoryBase: "https://github.com/oconva/qvikchat",
  footer: {
    text: "QvikChat - A project by Oconva",
    component: <Footer />,
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s - QvikChat",
    };
  },
};

export default config;
