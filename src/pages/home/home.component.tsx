import { NextPage } from "next";
import Head from "next/head";
import { Locale } from "src/types/internalization";
import { Homepage } from "./home.types";
import { getHomeData } from "./home.utils";

export const Home: NextPage<Homepage> = (props) => {
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div>
        <h1>home</h1>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: Locale }) => {
  const data = await getHomeData(locale);

  return {
    props: { data },
  };
};
