import { Heading } from "@/shared/components/Heading";
import { Presentation } from "@/shared/components/Presentation";
import Head from "next/head";

const collection = [
  "salmon",
  "population",
  "psychology",
  "red",
  "mole",
  "embrace",
  "consultation",
  "absence",
];

export default function Page() {
  return (
    <>
      <Head>
        <title>Wrap | Layout</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Heading>WRAP</Heading>
        <Presentation
          heading="Default behaviour."
          tw=""
          collection={collection}
        />
        <hr />
        <Presentation
          heading="display: flex, flex-wrap: wrap"
          tw="flex flex-wrap"
          collection={collection}
        />
        <Presentation
          heading="display: grid, grid-template-columns: repeat(5, minmax(0, 1fr))"
          tw="grid grid-cols-5"
          collection={collection}
        />
        <Presentation
          heading="display: grid, grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr))"
          tw="grid grid-cols-[repeat(auto-fit,_minmax(12.5rem,_1fr))]"
          collection={collection}
        />
        <hr />
        <Presentation
          heading="display: grid, grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr))"
          tw="grid grid-cols-[repeat(auto-fit,_minmax(12.5rem,_1fr))]"
          collection={collection.slice(0, 3)}
        />
        <Presentation
          heading="display: grid, grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr))"
          tw="grid grid-cols-[repeat(auto-fill,_minmax(12.5rem,_1fr))]"
          collection={collection.slice(0, 3)}
        />
      </>
    </>
  );
}
