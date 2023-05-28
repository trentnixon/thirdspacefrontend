import { useEffect, useState } from "react";

//import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { AuthenticationImage } from "../components/Login/Login";

import { getFakeToken } from "../lib/auth";
import { Public } from "../components/template/PublicShell";
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [render, setrender] = useState(false);
  const router = useRouter();

  const isUser = getFakeToken();

  useEffect(() => {
    if (isUser) {
      router.push("/thirdspace");
    }
  }, [isUser, router]);

  useEffect(() => {}, [render]);

  return (
    <Public>
      <AuthenticationImage isUser={isUser} setrender={setrender} />
    </Public>
  );
}

/*
  git add .
  git commit -am "Third Space POC"
  git push -u origin main 
*/ 
