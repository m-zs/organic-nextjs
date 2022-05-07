import { NextPage } from "next";
import Head from "next/head";
import {
  PublishableAttributesData,
  PageMetadata,
  Carousel,
} from "src/types/api";

export type HomepageData = PublishableAttributesData<{
  locale: string;
  page_metadata: PublishableAttributesData<PageMetadata>;
  content_blocks: Record<number, PublishableAttributesData<{}>>;
  carousel: PublishableAttributesData<Carousel>;
}>;

export const Home: NextPage<HomepageData> = (props) => {
  console.log(props);

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <div>home</div>;
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "http://localhost:1337/api/homepage?populate=carousel"
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
