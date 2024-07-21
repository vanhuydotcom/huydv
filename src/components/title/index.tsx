import { clsx } from "@/utils";
import { PropsWithChildren } from "react";

interface ITitleProps {
  className: string;
}

function Title({
  children = "",
  className = "",
}: PropsWithChildren<Partial<ITitleProps>>) {
  return (
    <h1
      className={clsx(
        "text-4xl bg-gold w-fit text-jet font-bold px-2",
        className
      )}
    >
      {children}
    </h1>
  );
}

export default Title;
