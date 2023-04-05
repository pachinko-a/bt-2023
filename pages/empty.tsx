import { Bold } from "@/shared/components/Bold";
import { Heading } from "@/shared/components/Heading";
import Head from "next/head";

export default function Empty() {
  return (
    <>
      <Head>
        <title>Empty | Layout</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Heading>EMPTY</Heading>
        <p>
          This page is empty. The element <Bold>{"<main>"}</Bold> fills up the
          available space.
        </p>
      </>
    </>
  );
}
