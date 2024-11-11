import Image from "next/image";

export default function Home() {  
  return (
    <main className="mx-auto flex flex-col max-w-screen-2xl items-center justify-between pt-24 h-full gap-y-0">

      <section id="hero" className="relative z-0 scroll-mt-24 w-full bg-[url('/hero/space-bg.png')] bg-no-repeat bg-cover">
          <div className="relative z-10 min-h-[calc(100svh-6rem)] overflow-hidden">
            <div className="z-20 absolute top-0 right-0 h-full">
              <Image
                src="/hero/arrows.png"
                alt="neon arrow"
                className="h-full w-auto"
                width={768}
                height={1366}
                priority
              />
            </div>
            <div className="z-40 absolute top-0 left-0 h-1/2 sm:h-full w-full flex flex-col justify-center items-center">
              <span className="sg text-9xl">Public</span>
              <span className="sg text-9xl">State</span>
              <span className="poppins text-sm font-bold">ADVOCACY FOR DECENTRALIZED COMMUNITIES</span>
            </div>
            <div className="z-30 absolute bottom-[40px] left-[-150px]">
              <Image
                src="/hero/head.png"
                alt=""
                className=""
                width={802}
                height={868}
                priority
              />
            </div>
            <div className="z-30 absolute top-0 right-0">
              <Image
                src="/hero/stars.png"
                alt=""
                className=""
                width={428}
                height={301}
                priority
              />
            </div>
            <div className="z-30 absolute bottom-[-85px] right-[-100px]">
              <Image
                src="/hero/diamonds.png"
                alt=""
                className=""
                width={1000}
                height={400}
                priority
              />
            </div>

        </div>
      </section>
    </main>
  );
}


