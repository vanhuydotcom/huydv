import avatar from "@/static/images/avatar.png";
import Image from "next/image";

function HomePage() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="relative w-72 h-72 overflow-hidden rounded-full bg-[#768287]">
        <Image
          src={avatar.src}
          blurDataURL={avatar.blurDataURL}
          alt="avatar"
          fill
          sizes="100%"
          style={{
            objectFit: "contain"
          }} />
      </div>
      <div></div>
    </div>
  );
}

export default HomePage;
