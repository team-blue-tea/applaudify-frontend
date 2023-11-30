"use client";
import { getAllApplauds } from "@/libs/DB";
import CardForHome from "@/components/CardForHome/CardForHome";
import Header from "@/components/Header/Header";
import NewMemberCheck from "@/components/NewMemberCheck/NewMemeberCheck";
import { useEffect, useState } from "react";
import { ApplaudT } from "@/types/ApplaudT";

const Home = () => {
  const [applauds, setApplauds] = useState<ApplaudT[]>([]);

  useEffect(() => {
    (async () => {
      const applauds = await getAllApplauds();
      setApplauds(applauds);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-10 mt-4">
      <Header />
      <NewMemberCheck />
      <main className="flex flex-col gap-8 mt-1 mx-10">
        <h1 className="small-header">👏 Spotlights</h1>
        <CardForHome applauds={applauds} />
      </main>
    </div>
  );
};

export default Home;
