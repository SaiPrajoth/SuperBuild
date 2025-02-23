import { Code } from "@repo/ui/code";
import Image from "next/image";

export default function Page(): JSX.Element {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center">
      <div className="m-0 p-4 gr">
        <div className="flex z-50 justify-center items-center gap-6">
          <Image
            alt="Turborepo"
            height={100}
            priority
            src="turborepo.svg"
            width={100}
            style={{ pointerEvents: "none" }}
          />
          <Code className="font-mono text-white font-bold text-5xl hover:underline transition-all">
            +
          </Code>
          <Image
            alt="Turborepo"
            height={120}
            priority
            src="tailwind.svg"
            width={120}
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
    </main>
  );
}
