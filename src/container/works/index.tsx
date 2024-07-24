import Title from "@/components/title";
import { commonFormatDay } from "@/utils/day";
import Image from "next/legacy/image";

function WorksPage() {
  return (
    <div className="py-4 sm:py-8">
      <Title className="mb-8 sm:mb-12">Works History</Title>
      <div className="w-full">
        <div className="flex items-end justify-between min-w-fit w-full md:w-1/3 lg:w-1/4 px-4 pt-4 sm:px-6 sm:pt-6 bg-raisin-black/50 rounded-t-lg">
          <span className="text-lg flex gap-2">
            <span>{commonFormatDay("2022-12-01")}</span>-<span>Present</span>
          </span>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 w-full bg-raisin-black/50 p-4 sm:p-6 rounded-b-lg md:rounded-r-lg">
          <div className="col-span-1">
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
            <h2>FrontEnd Lead</h2>
          </div>
          <div className="col-span-2 lg:col-span-3">asdasd</div>
        </div>
        {/* <div className="flex w-full min-h-64 bg-raisin-black/65 rounded-lg sm:p-8">
          <div className="flex flex-col w-1/4 sm:gap-4">
           
            <h3 className="text-lg">Navigos Group</h3>
            <div className="flex items-center gap-2">
             
            </div>
          </div>
          <div></div>
        </div> */}
      </div>
    </div>
  );
}

export default WorksPage;
