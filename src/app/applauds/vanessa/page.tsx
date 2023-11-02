"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Vanessa = () => {
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(" ")[0];
  return (
    <div className="flex flex-col mx-10 mt-14 gap-10">
      <header className="flex justify-between">
        <Link href="/applauds">←</Link>
        <h4>Applaud from Vanessa</h4>
        <div>...</div>
      </header>
      <main className="flex flex-col items-center gap-10">
        <section className="flex flex-col gap-4 border-solid border border-metal p-4">
          <article className="flex items-center gap-6 p-2 border-solid border border-stone">
            <Image
              src="https://avatars.githubusercontent.com/u/101557392?v=4"
              alt="Sender Profile"
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
            <div className="flex flex-col">
              <h4 className="text-sm">Vanessa Wingårdh</h4>
              <p className="text-xs">Developer Team Lead</p>
              <p className="text-xs">DesignWeb Ltd.</p>
            </div>
          </article>
          <p className="text-center">
            &apos;{firstName} is a talented and dedicated software developer,
            and I am grateful for their hard work and dedication. It was a
            pleasure working with you.&apos;
          </p>
        </section>
        <p className="text-center border-solid border border-metal p-2">
          Applaud published.
        </p>
      </main>
    </div>
  );
};

export default Vanessa;
