import Head from "../../node_modules/next/head";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <>
      <Head>
        <title>Inovepro & Next.js</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/img/logoino.png" />
      </Head>
      <Layout />

    </>
  );
}
