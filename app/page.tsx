import Image from "next/image";

const platform = [
  { name: 'Policy Prescriptions', label: '01', blurbs: [] },
  { name: 'Market Structure', label: '02', blurbs: ['Championing an FTC based market structure framework.'] },
  { name: 'Defensive Advocacy', label: '03', blurbs: [] },
  { name: 'Regulatory Engagement', label: '04', blurbs: [] },
]

const resources = [
  { name: 'Policy Initiatives', desc: 'Our Policy Work.', href:'#' },
  { name: 'Model Standards', desc: 'Frameworks & Model Legal Standards.', href:'#' },
  { name: 'Best Practices', desc: 'Guidance on Best Practices.', href:'#' },
  { name: 'Forms & Guides', desc: 'Member Submitted Forms & Guides.', href:'#' },
]

const leadership = [
  { name: 'Sarah Brennan', img: '/leadership/sarah.png', desc: ['Sarah Brennan is General Counsel of Delphi Ventures, also helping lead Delphi\'s advocacy and policy initiatives. Sarah is also co-founder of LeXpunK, a builder centric community of lawyers and developers focused on open source legal materials and public advocacy for decentralized technology. Having been actively involved in the digital asset space since 2017, Sarah previously founded and led a practice focused on transactional, regulatory and compliance matters. Sarah draws from a broad range of experience with close to 15 years of corporate and securities legal experience, having worked in NY, DC and internationally representing public and private companies, venture capital firms, startups, and investment banks on a wide array of commercial and business transactions, including capital raising transactions and financings, private and public M&A transactions, corporate governance, and public company reporting and regulatory compliance.']},
  { name: 'Marc Goldich', img: '/leadership/marc.png', desc: ['Marc Goldich is the General Counsel of Proximity Labs, a research and development firm supporting projects building on NEAR through grants, advisory services, and developer support. Marc is also co-founder of LeXpunK, a builder centric community of lawyers and developers focused on open source legal materials and public advocacy for decentralized technology. Marc was previously General Counsel of a global blockchain and decentralized finance software development company. Prior to that he was President and CLO of LawCoin, a legal industry fintech platform, and Partner at Axler Goldich, a class action, commercial litigation, whistleblower, and business advisory law firm which has recovered millions of dollars on behalf of clients and class members nationwide. Marc\'s practice at Axler Goldich also included assisting investors and technology clients with navigating the continuously developing legal landscape for cryptocurrency, smart contracts, and blockchain technology. ']},
  { name: 'Larry Florio', img: '/leadership/larry.png', desc: ['Larry Florio is general counsel of 1kx, where he oversees all legal matters in addition to working on regulatory & policy matters and open-source public goods. Larry has been a corporate & securities lawyer for over a decade, working with a wide range of crypto-native projects and traditional asset managers, including Syndicate Protocol and Blackstone. Larry has been an active member of advocacy & legal engineering DAO LeXpunK Army since its launch and is one of the summoners of Hydra Ventures, the first investment DAO focused exclusively on investing in & incubating other investment DAOs.']},
  { name: 'Nelson Rosario', img: '/leadership/nelson.png', desc: ['Nelson Rosario is the Founder of Rosario Tech Law, LLC, a boutique law firm based in Chicago working with clients building the future worldwide. Nelson\'s practice is focused on outside general counsel work, tech transactions, commercial agreements, and intellectual property. In addition to his law practice, Mr. Rosario is the Executive Director of the Illinois Blockchain Association focused on educating about, advocating for, and organizing on behalf of the blockchain industry.']},
  { name: 'Chris Donovan', img: '/leadership/chris.png', desc: ['Chris Donovan is the Chief Operating Officer of NEAR Foundation, having previously served as CEO and General Counsel and he works closely with the NFC and the broader ecosystem on the Foundation’s evolution plans. NEAR is a collective, a foundation and a development platform built on a layer 1 blockchain designed to be fast, secure and scalable.', 'Previously, Donovan was a partner and head of legal at Outlier Ventures, one of the first VC firms dedicated to investing in the emerging crypto ecosystem. There, Donovan helped navigate the legal and regulatory complexities of Web3 by helping Outlier Ventures support the launch and growth of several billion-dollar crypto economies.']},
]

export default function Home() {
  
  return (
    <main className="mx-auto flex flex-col min-w-7xl max-w-7xl items-center justify-between p-4 sm:p-6 h-full">

      <section id="hero" className="relative z-0 scroll-mt-24 w-full">
        <div className="pt-24">
          <div className="relative z-10 flex flex-col items-center justify-around min-h-[calc(100svh-6rem)] sm:p-16 overflow-hidden">

            <div className="z-10 absolute flex flex-col justify-center items-center h-[300px] w-[300px] top-[10px] left-0  md:h-[400px] md:w-[400px] md:top-[20px] md:left-[60px]">
              <div className="absolute top-0 right-0 left-0 z-10 bg-[url('/grid.png')] bg-contain bg-center bg-no-repeat h-full w-full opacity-70" />
              <span className="z-20 sg text-[75px] md:text-[100px]">Public</span>
              <span className="z-20 sg text-[75px] md:text-[100px]">State</span>
              <span className="z-20 sg">Advocacy</span>
            </div>
            
            <div className="absolute z-1 origin-top-left rotate-12 left-[20px] top-[200px] w-[450px] h-[230px] md:left-[50px] md:top-[250px] md:w-[900px] md:h-[460px]">
              <Image
                src="/hand.webp"
                alt="Hand Gesture"
                className="dark:invert h-full w-auto"
                width={900}
                height={460}
                priority
              />
            </div>
            <div className="absolute w-[450px] left-[10px] top-[500px] sm:left-[initial] sm:right-[100px] sm:top-[300px] uppercase flex">
              <span className="text-2xl text-ps-red mr-4">+</span>
              <span className="text-xl sm:text-2xl">Advocacy for Decentralized Communities</span>
            </div>
            <div className="absolute left-[20px] bottom-[4rem] sedgwick">
              Est. 2024
            </div>
          </div>
        </div>
      </section>
      
      <section id="about" className="relative z-0 scroll-mt-24 w-full">
        <div className="pt-24">
          <div className="relative z-10 flex flex-col items-center min-h-[calc(100svh-6rem)] sm:p-16">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center">
                <span className="h-4 w-4 bg-ps-red mr-2" />
                <span className="text-[40px] sm:text-[68px] uppercase">About Us</span>
              </div>
              <p className="uppercase">
                We are a builder-centric movement focused on advocacy and best practices for decentralized communities through a number of avenues, each pursued in parallel. 
              </p>
              <p className="uppercase">
                Specifically, we direct our efforts at (i) formulating and advocating for the development of clear and well-tailored policies and regulation that advance best practices in crypto while protecting the values of openness, transparency, and decentralization; (ii) developing best practices as well as crypto native solutions (self-help and self regulatory practices); and (iii) developing model legal standards and structures to support our regulatory engagement work. 
              </p>
              <p className="uppercase">
                We are founded on the belief that lawyers have both a role and duty to contribute to the open source movement as it is incumbent upon us all as members of builder-communities to be active in shaping narratives and advocating for smart policy outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative z-0 scroll-mt-24 w-full">
        <div className="pt-24">
          <div className="relative z-10 flex flex-col items-center min-h-[calc(100svh-6rem)] sm:p-16">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex items-center">
                <span className="h-4 w-4 bg-ps-red mr-2" />
                <span className="text-[40px] sm:text-[68px] uppercase">Work</span>
              </div>
              <div className="flex flex-col gap-6 justify-evenly w-full">
                <div className="flex flex-col gap-y-2 w-full">
                  <span className="uppercase text-3xl text-slate-400">Platform</span>
                  <span>Our 2024/5 focus areas are as follows:</span>
                  <ul className="list-none text-2xl pt-2">
                  {platform.map((item) => (
                    <li className="flex flex-col items-start py-4" key={item.name}>
                      <div className="flex w-full items-center">
                        <span className="text-sm mr-2 mt-1 self-start">{item.label}</span>
                        <span>{item.name}</span>
                        <span className="grow flex justify-end">
                          { !!item.blurbs.length && false && <button>+</button>}
                        </span>
                      </div>
                      <div className="ml-6 text-xs">
                        {item.blurbs.map((blurb) => (
                          <span>{blurb}</span>
                        ))}
                      </div>
                    </li>
                  ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-y-2">
                  <span className="uppercase text-3xl text-slate-400">Resources</span>
                  <span>Our work & links to our Github.</span>
                  <div className="grid grid-cols-2 gap-4">
                    {resources.map((item) => (
                      <div className="flex flex-col text-black relative inline-flex items-center gap-3 rounded-xl p-3 mx-0 bg-gradient-to-r from-[#ffacab] via-[#ffea9e] to-[#97edff] mt-2">
                        <a href={item.href} className="hover:bg-opacity-10 flex flex-col h-14 text-black w-full items-center justify-center rounded-lg transition duration-300 ease-in-out bg-white bg-opacity-75">
                          <span>{ item.name }</span>
                        </a>
                        <span className="text-center">{ item.desc }</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="relative z-0 scroll-mt-24 w-full">
        <div className="pt-24">
          <div className="relative z-10 flex flex-col items-center min-h-[calc(100svh-6rem)] sm:p-16">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex items-center">
                <span className="h-4 w-4 bg-ps-red mr-2" />
                <span className="text-[40px] sm:text-[68px] uppercase">Leadership</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-evenly w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {leadership.map((item) => (
                  <div className="cursor-pointer group rounded-xl bg-gradient-to-r from-[#ffacab] via-[#ffea9e] to-[#97edff] p-2">
                    <div className="relative flex aspect-wider justify-between rounded-lg bg-white l:aspect-wider text-black p-4 w-full h-[550px]">
                      <div className="flex justify-between group-hover:flex-col group-hover:justify-start w-full">
                        <div className="text-2xl mr-2">{item.name}</div>
                        <Image
                          src={item.img}
                          alt={item.name}
                          className="dark:invert h-full w-auto group-hover:hidden"
                          width={150}
                          height={210}
                          priority
                        />
                        <div className="group-hover:block hidden">
                          {item.desc.map((blurb) => (
                            <p className="mb-2">{ blurb }</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div> 
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="relative z-0 scroll-mt-24 w-full">
        <div className="pt-24">
          <div className="relative z-10 flex flex-col items-center min-h-[calc(100svh-6rem)] sm:p-16">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex items-center">
                <span className="h-4 w-4 bg-ps-red mr-2" />
                <span className="text-[40px] sm:text-[68px] uppercase">Join Us</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 w-full">
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


