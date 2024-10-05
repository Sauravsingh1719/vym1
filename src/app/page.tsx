import { MovingBorderDemo } from "@/components/Moving/Moving";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = 'Let your thoughts be heard without judgment. Our platform allows you to post messages';


export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex h-dvh items-center justify-center w-full flex-col px-4 sm:h-100">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-400 to-neutral-100 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight " >
       Voice your <br /> <span className="text-red-700">Mind</span>.
      </h2>
      <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-500 dark:text-neutral-200 text-center">
      <TextGenerateEffect words={words} />
      </div>
      <img src="/images/back.png"/>
      <MovingBorderDemo />
    </BackgroundLines>
  );
}
