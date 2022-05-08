import { NextPage } from "next";
import Head from "next/head";
import { HomepageData } from "./home.types";
import { getHomeData } from "./home.utils";

export const Home: NextPage<HomepageData> = (props) => {
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

export const getStaticProps = async () => {
  const data = await getHomeData();

  return {
    props: { data },
  };
};
