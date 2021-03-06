import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Nav } from "./Nav";
import Footer from "./Footer";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <React.Fragment>
      <Head>
        <title>{props.title + " - UV"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
