"use client";
import React, { useState } from "react";
import Image from "next/image";
import Skill from "@/components/skill";
import Link from "next/link";
import Header from "@/components/header";
import Persona from "@/components/persona";

export default function Home() {
  const [skills, setSkills] = useState(["Laravel", "React", "Next.js", "Node.js", "Django", "HTML", "HTML5", "Css", "Scss", 
                                        "Javascript", "jQuery", "Alpine.js", "Vue.js", "PHP", "Python", "AWS", "Workflow", 
                                        "Bootstrap", "TypeScript", "Git","MySQL", "MongoDB"])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Persona />
      <div className="flex flex-row w-full bg-[black] m-auto p-8 pt-16">
        <div className="flex w-1/3 m-auto">
          <Image
            src="/images.jpg"
            alt="Example Image"
            width={400}
            height={100}
            className="introduction-photo"
          />
        </div>
        <div className="flex flex-col w-2/3 ml-4">
          <div className="intro-header text-5xl flex items-center mx-auto justify-between">I n t r o d u c t i o n</div>
          <div className="flex flex-row flex-wrap gap-4 mt-4 text-2xl text-[white]">
            Hello! I’m Kenji Imai.
            I am a full-stack developer trained and experienced in software design and development.
            I started my career as a developer from student age , I have grown my developing skill seriously until I become a full-stack now as I owned
            pretty much priceless experiences in development.
            I have worked at from startup to IT company ,when I have heard, seen and experienced with my body and soul.
            I have fluent English as a Native level, I don't have any communication barrier.
            All skills that are mentioned above are my owned skills that I possessed during my career.
            You can ask me any questions regarding to those fields and I am always ready to answer.
            My biggest strength are ability to think out of the box, strong work ethic, and working well under pressure.
            I am interested in algorithm level efficiency and have experience working with back-end and front-end technologies as well as frameworks.
            I can adopt to any kind of environment and work anytime that client wants.
            I don't like to say weakness but I like to say scope for improvement that is I won't leave any ask in completely, I believe in my self and my hard
            work and I want perfection in every thing
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full pt-20 p-8 bg-[#cdcdcd]">
        <div className="flex flex-col w-2/3">
          <div className="text-5xl flex items-center mx-auto justify-between">S  k  i  l  l  s</div>
          <div className="flex flex-row flex-wrap gap-4 mt-8">
          {skills.map((item, index) => (
            <Skill key={index} skill={item} />
          ))}
          </div>
        </div>
        <div className="flex w-1/3">
          <Image
            src="/skills.jpg"
            alt="Example Image"
            width={400}
            height={100}
            className="skill-photo"
          />
        </div>
      </div>
      <div className="flex flex-col w-full pt-20 p-8 bg-[white]">
        <div className="text-5xl flex m-auto">My achievement</div>
        <div className="flex flex-row flex-wrap justify-center">
          <Link className="apex-site p-2 w-1/5" href={"https://userguest.com/demo/"}>
            <Image
              src="/userguest-site.jpg"
              alt="Example Image"
              width={400}
              height={100}
              className="apex-site-photo"
            />
          </Link>
          <Link className="apex-site p-2 w-1/5" href={"https://ec.apex.tokyo/en/"}>
            <Image 
              src="/apex-site.jpg"
              alt="Example Image"
              width={400}
              height={100}
              className="apex-site-photo"
            />
          </Link>
          <Link className="apex-site p-2 w-1/5" href={"https://moncode.life/wp-login.php"}>
            <Image 
              src="/moncode.jpg"
              alt="Example Image"
              width={400}
              height={100}
              className="apex-site-photo"
            />
          </Link>
          <Link className="apex-site p-2 w-1/5" href={"https://inplayaowners.com/admin/login"}>
            <Image 
              src="/inplayaowner.jpg"
              alt="Example Image"
              width={400}
              height={100}
              className="apex-site-photo"
            />
          </Link>
          <Link className="apex-site p-2 w-1/5" href={"https://inplayaowners.com/admin/login"}>
            <Image 
              src="/hallvers.jpg"
              alt="Example Image"
              width={400}
              height={100}
              className="apex-site-photo"
            />
          </Link>
          <Link className="apex-site p-2 w-1/5" href={"https://inplayaowners.com/admin/login"}>
            <Image 
              src="/finance.jpg"
              alt="Example Image"
              width={400}
              height={100}
              className="apex-site-photo"
            />
          </Link>
          <Link className="apex-site p-2 w-1/5" href={"https://bringoo.de/de/"}>
            <Image 
              src="/bringoo.jpg"
              alt="Example Image"
              width={400}
              height={100}
              className="apex-site-photo"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
