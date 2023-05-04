import { useEffect, useState } from "react";

import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { AuthenticationImage } from "../components/Login/Login";

import { getFakeToken } from "../lib/auth";
import { Public } from "../components/template/PublicShell";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [render, setrender] = useState(false);
  const router = useRouter();

  const isUser = getFakeToken();

  useEffect(() => {
    if (isUser) {
      router.push("/thirdspace");
    }
  }, [isUser, render]);

  useEffect(() => {}, [render]);

  return (
    <Public>
      <AuthenticationImage isUser={isUser} setrender={setrender} />
    </Public>
  );
}

/*

export const getServerSideProps = async (context) => {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/associations`
  );
  const CaseStudies = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/case-studies?${CS_query}`
  );
  //
 
  console.log(response);
  return {
    props: {
      associations: response,
      CaseStudies:CaseStudies
    },
  };
};
*/
