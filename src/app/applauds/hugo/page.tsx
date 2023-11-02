"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Hugo = () => {
  const { data: session } = useSession();

  const firstName = session?.user?.name?.split(" ")[0];
  return (
    <div className="flex flex-col mx-10 mt-14 gap-10">
      <header className="flex justify-between">
        <Link href="/applauds">←</Link>
        <h4>Applaud from Hugo</h4>
        <div>...</div>
      </header>
      <main className="flex flex-col items-center gap-10">
        <section className="flex flex-col gap-4 border-solid border border-metal p-4">
          <article className="flex items-center gap-6 p-2 border-solid border border-stone">
            <Image
              src="https://avatars.githubusercontent.com/u/91157834?v=4"
              alt="Sender Profile"
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
            <div className="flex flex-col">
              <h4 className="text-sm">Hugo Dahlgren</h4>
              <p className="text-xs">Senior Software Engineer</p>
              <p className="text-xs">Tech Solutions Inc.</p>
            </div>
          </article>
          <p className="text-center">
            &apos;{firstName} is a great developer! I really enjoyed working
            with {firstName} on this project. {firstName} is super easy to work
            with and making decisions together is a breeze. Looking forward to
            work with you again in the future.&apos;
          </p>
        </section>
        <p className="text-center border-solid border border-metal p-2">
          Applaud published.
        </p>
      </main>
    </div>
  );
};

export default Hugo;
