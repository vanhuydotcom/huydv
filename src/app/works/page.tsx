import dynamic from "next/dynamic";

const WorksPage = dynamic(() => import("@/container/works"));

export default function Works() {
  return <WorksPage />;
}
