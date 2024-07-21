import avatar from "@/static/images/avatar.png";
import Image from "next/legacy/image";

function HomePage() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="relative w-72 h-72 overflow-hidden rounded-full bg-[#768287]">
        <Image
          src={avatar.src}
          blurDataURL={avatar.blurDataURL}
          alt="avatar"
          objectFit="contain"
          layout="fill"
          sizes="100%"
        />
      </div>
      <div></div>
    </div>
  );
}

export default HomePage;
