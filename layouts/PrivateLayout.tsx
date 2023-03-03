import Head from "next/head";
import React from "react";
import BottomNavBar from "../components/NavBars/BottomNavbar";
import TopNavbar from "../components/NavBars/TopNavbar";
interface Props {
  children: React.ReactNode;
}
function PrivateLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Socially</title>
        <meta name="description" content="Socially Webapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNavbar />
      {children}
      <BottomNavBar />
    </>
  );
}

export default PrivateLayout;
