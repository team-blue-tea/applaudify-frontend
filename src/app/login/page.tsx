"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import github from "@/assets/login/github.png";
import linkedin from "@/assets/login/linkedin.png";
import BackButton from "@/components/BackButton/BackButton";

const Login = () => {
  return (
    <div className="flex flex-col mx-10 my-14 gap-10">
      <header className="flex justify-start">
        <BackButton />
      </header>
      <div className="flex flex-col items-center gap-36">
        <div className="flex flex-col gap-5">
          <h1 className="title-logo ombre-text">applaudify</h1>
          <h3 className="small-header text-center text-charcoal">
            login / signup
          </h3>
        </div>
        <div className="flex flex-col items-center gap-6">
          <button
            className="button login-btn w-full"
            onClick={() => signIn("github", { callbackUrl: "/home" })}
          >
            <Image src={github} alt="github" width={20} height={20}></Image>
            Continue with GitHub
          </button>
          <button
            className="button login-btn w-full"
            onClick={() => signIn("linkedin", { callbackUrl: "/home" })}
          >
            <Image src={linkedin} alt="linkedin" width={20} height={20}></Image>
            Continue with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
