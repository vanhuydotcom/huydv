import dynamic from "next/dynamic";

const HomPage = dynamic(() => import("@/pages/home"));

export default function Home() {
  return <HomPage />;
}
