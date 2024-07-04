import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col min-w-7xl max-w-7xl items-center justify-between p-6 h-full">

      <section id="hero" className="relative z-0 scroll-mt-24 w-full">
        <div className="pt-24">
          <div className="relative z-10 flex flex-col items-center justify-around p-8 min-h-[calc(100svh-6rem)] p-16 overflow-hidden">
            

            <div className="z-10 top-[20px] left-[60px] absolute flex flex-col justify-center items-center h-[400px] w-[400px]">
              <div className="absolute top-0 right-0 left-0 z-10 bg-[url('/grid.png')] bg-contain bg-center bg-no-repeat h-full w-full opacity-70" />
              <span className="z-20 sg text-[100px]">Public</span>
              <span className="z-20 sg text-[100px]">State</span>
              <span className="z-20 sg">Advocacy</span>
            </div>
            
            <div className="absolute z-1 left-[50px] top-[250px] w-[900px] h-[460px] origin-top-left rotate-12">
              <Image
                src="/hand.webp"
                alt="Hand Gesture"
                className="dark:invert h-full w-auto"
                width={900}
                height={460}
                priority
              />
            </div>
            <div className="absolute left-0 bottom-[1rem] sedgwick">
              Est. 2024
            </div>
          </div>
        </div>
      </section>
      
      <section id="about" className="relative z-0 scroll-mt-24 w-full">
        <div className="pt-24">
          <div className="relative z-10 flex flex-col items-center justify-around p-8 min-h-[calc(100svh-6rem)] p-16">
            about...
          </div>
        </div>
      </section>

    </main>
  );
}

