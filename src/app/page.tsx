import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/container/home"));

export default function Home() {
  return <HomePage />;
}
