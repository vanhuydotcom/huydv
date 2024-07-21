import Title from "@/components/title";
import { commonFormatDay } from "@/utils/day";
import Image from "next/legacy/image";

function WorksPage() {
  return (
    <div className="py-4 sm:py-8">
      <Title className="mb-4 sm:mb-8">Works History</Title>
      <div className="flex flex-col gap-8">
        <div className="flex w-full min-h-64 bg-raisin-black/65 rounded-lg sm:p-8">
          <div className="flex flex-col w-1/4 sm:gap-4">
            <div className="relative w-full h-12 z-10 before:block before:absolute before:-inset-1 before:content-[''] before:z-20">
              <Image
                src="/companies/logo-navigos.png"
                alt="Logo company"
                layout="fill"
                sizes="100%"
                objectFit="contain"
                objectPosition="left"
                className="z-10"
              />
            </div>
            <h3 className="text-lg ">FrontEnd Developer</h3>
            <div>
              <span>{commonFormatDay("2022-12-01")}</span>-<span>Present</span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default WorksPage;
