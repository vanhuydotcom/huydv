import avatar from "@/static/images/avatar.png";
import Image from "next/legacy/image";

function HomePage() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center gap-12 select-none">
      <div className="border-2 border-flax p-2 rounded-full">
        <div
          className="relative z-10 w-auto h-auto min-h-36 sm:min-h-44 lg:min-h-64  
        aspect-square overflow-hidden rounded-full bg-[#768287] 
        before:block before:absolute before:-inset-1 before:content-[''] before:z-20
        "
        >
          <Image
            src={avatar.src}
            blurDataURL={avatar.blurDataURL}
            alt="avatar"
            layout="fill"
            width={400}
            height={400}
            sizes="100%"
            objectFit="contain"
            className="z-10"
          />
        </div>
      </div>
      <div className="flex-1 border-2 border-flax rounded-lg text-xl leading-relaxed p-4">
        <p>Hi there 👋 </p>
        <h1 className="text-2xl font-bold bg-gold w-fit px-1 text-jet">
          {`I'm`} Huy 💻
        </h1>
        <p>
          ✨ A passionate{" "}
          <span className="bg-gold w-fit px-1 text-jet">
            Front End Engineer
          </span>{" "}
          in web application development based on{" "}
          <span className="bg-gold w-fit px-1 text-jet">
            TypeScript, JavaScript, CSS and HTML
          </span>
          . Having gained a lot of experience with frontend frameworks such as{" "}
          <span className="bg-gold w-fit px-1 text-jet">React, NextJs</span>.
        </p>
        <p>
          🌐 I am considered an expert in my projects in terms of ensuring
          quality of delivery, scalable architecture and maintainability of the
          developed solutions.
        </p>
        <p>
          {`💡 If you're
        seeking a detail-oriented developer with a passion for innovation, let's
        connect and create something extraordinary!`}
        </p>
      </div>
    </div>
  );
}

export default HomePage;
