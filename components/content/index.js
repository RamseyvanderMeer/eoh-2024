import { Fragment } from "react";
import Head from "next/head";

export default function Content({ title, metaTitle, children, wide }) {
  return (
    <Fragment>
      <Head>
        <title>{metaTitle || title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`text-center flex flex-col justify-center w-10/12 ${wide ? "lg:max-w-7xl" : "lg:max-w-4xl"} mx-auto mt-36 lg:mt-32`}>
        {title && <h1 className="font-lovelo font-bold text-5xl mb-10">
          {title}
        </h1>}
        {children}
      </main>
    </Fragment>
  );
}
