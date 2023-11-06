"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { ApplaudT } from "@/types/ApplaudT";
import { getAllApplauds, setApplaudRead } from "@/libs/DB";

const Applauds = () => {
  const [filteredApplauds, setFilteredApplauds] = useState<ApplaudT[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }
    const filteredName = session?.user?.name;
    (async () => {
      const applauds: ApplaudT[] = await getAllApplauds();
      const filteredApplauds = applauds.filter(
        (applaud) => applaud.receiver.name === filteredName
      );
      setFilteredApplauds(filteredApplauds);
    })();
  }, [session, filteredApplauds]);

  return (
    <div className="flex flex-col mx-10 mt-14 gap-10">
      <header className="flex justify-between">
        <Link href="/home">←</Link>
        <Link href="/compose">New</Link>
      </header>
      <main className="flex flex-col items-center gap-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-charcoal"
          />
        </div>
        <section className="flex flex-col gap-7">
          {filteredApplauds.map((applaud) => {
            const firstName = applaud.sender.name.split(" ")[0];
            return (
              <article key={applaud.id}>
                <Link
                  href={`applauds/${applaud.id}`}
                  className="p-2 border border-charcoal"
                  onClick={() => setApplaudRead(applaud.id as string)}
                >
                 {!applaud.read && "•" } {firstName} sent a new Applaud
                </Link>
              </article>
            );
          })}
          <article>
            <Link
              href={"/applauds/hugo"}
              className="p-2 border border-charcoal"
            >
              Hugo sent a new Applaud
            </Link>
          </article>
          <article>
            <Link
              href={"/applauds/vanessa"}
              className="p-2 border border-charcoal"
            >
              Vanessa sent a new Applaud
            </Link>
          </article>
          <article>
            <Link
              href={"/applauds/ahsan"}
              className="p-2 border border-charcoal"
            >
              Ahsan sent a new Applaud
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Applauds;
