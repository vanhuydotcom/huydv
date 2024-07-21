import avatar from "@/static/images/avatar.png";
import Image from "next/legacy/image";

function HomePage() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center gap-12">
      <div className="relative w-auto h-auto min-h-36 sm:min-h-44 lg:min-h-64  aspect-square overflow-hidden rounded-full bg-[#768287]">
        <Image
          src={avatar.src}
          blurDataURL={avatar.blurDataURL}
          alt="avatar"
          layout="fill"
          width={400}
          height={400}
          sizes="100%"
          objectFit="contain"
        />
      </div>
      <div className="flex-1 border-2 border-gold rounded-lg text-xl leading-relaxed p-4">
        <p>
          {`👋 Hi, I'm Huy, a front-end developer with 4 years of experience
        crafting captivating user interfaces. Proficient in Nextjs, Reactjs,
        Typescript, HTML, CSS, and JavaScript, I specialize in turning design
        concepts into responsive websites.`}
        </p>
        <p>
          {`🌐 Having contributed to diverse
        projects, I bring a collaborative mindset and a commitment to
        excellence. My coding style emphasizes clean, maintainable code,
        ensuring optimal performance and cross-browser compatibility.`}
        </p>
        <p>
          {`🚀 Always
        on the lookout for the latest trends, I stay ahead in the dynamic world
        of front-end development. Beyond coding, I actively engage with the tech
        community, attending meetups and expanding my skill set.`}
        </p>
        <p>
          {`💡 If you're
        seeking a detail-oriented developer with a passion for innovation, let's
        connect and create something extraordinary! 💻✨`}
        </p>
      </div>
    </div>
  );
}

export default HomePage;
