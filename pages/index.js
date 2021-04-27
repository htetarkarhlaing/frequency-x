import Head from "next/head";
import Header from "@components/Header/Header";
import Footer from "@components/Footer";
import Landing from "@components/Landing/Landing";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Delta Tech by Htet Arkar Hlaing</title>
        <meta name="title" content="Delta Tech by Htet Arkar Hlaing" />
        <meta
          name="description"
          content="You'll definitely need a website, if you are an artist, blogger, influencer or maybe business owner.Let's build a website with me."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://htetarkarhlaing.com/" />
        <meta property="og:title" content="Delta Tech by Htet Arkar Hlaing" />
        <meta
          property="og:description"
          content="You'll definitely need a website, if you are an artist, blogger, influencer or maybe business owner.Let's build a website with me."
        />
        <meta property="og:image" content="https://htetarkarhlaing.com/fb-seo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://htetarkarhlaing.com/" />
        <meta
          property="twitter:title"
          content="Delta Tech by Htet Arkar Hlaing"
        />
        <meta
          property="twitter:description"
          content="You'll definitely need a website, if you are an artist, blogger, influencer or maybe business owner.Let's build a website with me."
        />
        <meta property="twitter:image" content="https://htetarkarhlaing.com/fb-seo.png" />
      </Head>

      <main>
        <Landing />
      </main>
    </div>
  );
}
