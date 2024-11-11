import Image from "next/image";
import classNames from 'classnames';

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
  {
    name: 'Sarah Brennan',
    img: '/leadership/sarah.png',
    x: 'https://x.com/SH_Brennan',
    linkedin: 'https://www.linkedin.com/in/shl0311/',
    substack: '#',
    desc: ['Sarah serves as General Counsel at Delphi Ventures, also spearheading advocacy and policy initiatives. In 2017 she first became professionally active in the digital asset space, founding a practice focused on crypto-related transactional, regulatory, and compliance matters and is co-founder of LeXpunK, a community formed in 2020 to advocate for decentralized and peer-to- peer technology. With nearly 15 years of corporate and securities legal experience across New York, Washington D.C., and international markets, Sarah brings extensive expertise in traditional markets to her current practice.  Having worked in private practice in capital markets, venture and private equity, her diverse background spans advising public and private companies, venture capital firms, startups, and investment banks on a wide range of transactions, including M&A, financings, IPOs, and regulatory compliance, positioning her to leverage this background in her work with decentralized systems.']
  },
  {
    name: 'Marc Goldich',
    img: '/leadership/marc.png',
    flipImg: true,
    x: 'https://x.com/MarcGoldich',
    linkedin: 'https://www.linkedin.com/in/marcgoldich/',
    substack: '',
    desc: ['Marc Goldich is the General Counsel of Proximity Labs, a research and development firm supporting projects building on NEAR through grants, advisory services, and developer support. Marc is also co-founder of LeXpunK, a builder centric community of lawyers and developers focused on open source legal materials and public advocacy for decentralized technology. Marc was previously General Counsel of a global blockchain and decentralized finance software development company. Prior to that he was President and CLO of LawCoin, a legal industry fintech platform, and Partner at Axler Goldich, a class action, commercial litigation, whistleblower, and business advisory law firm which has recovered millions of dollars on behalf of clients and class members nationwide. Marc\'s practice at Axler Goldich also included assisting investors and technology clients with navigating the continuously developing legal landscape for cryptocurrency, smart contracts, and blockchain technology. ']
  },
  {
    name: 'Larry Florio',
    img: '/leadership/larry.png',
    flipImg: true,
    x: 'https://x.com/larryflorio',
    linkedin: 'https://www.linkedin.com/in/florio/',
    substack: '',
    desc: ['Larry Florio is general counsel of 1kx, where he oversees all legal matters in addition to working on regulatory & policy matters and open-source public goods. Larry has been a corporate & securities lawyer for over a decade, working with a wide range of crypto-native projects and traditional asset managers, including Syndicate Protocol and Blackstone. Larry has been an active member of advocacy & legal engineering DAO LeXpunK Army since its launch and is one of the summoners of Hydra Ventures, the first investment DAO focused exclusively on investing in & incubating other investment DAOs.']
  },
  {
    name: 'Nelson Rosario',
    img: '/leadership/nelson.png',
    x: 'https://x.com/NelsonMRosario',
    linkedin: 'https://www.linkedin.com/in/nelsonrosario/',
    substack: '',
    desc: ['Nelson Rosario is the Founder of Rosario Tech Law, LLC, a boutique law firm based in Chicago working with clients building the future worldwide. Nelson\'s practice is focused on outside general counsel work, tech transactions, commercial agreements, and intellectual property. In addition to his law practice, Mr. Rosario is the Executive Director of the Illinois Blockchain Association focused on educating about, advocating for, and organizing on behalf of the blockchain industry.']
  },
  {
    name: 'Chris Donovan',
    img: '/leadership/chris.png',
    flipImg: true,
    x: 'https://x.com/ChrisDoNEARvan',
    linkedin: 'https://www.linkedin.com/in/christopher-donovan-3640a2171/',
    substack: '',
    desc: ['Chris Donovan is the Chief Operating Officer of NEAR Foundation, having previously served as CEO and General Counsel and he works closely with the NFC and the broader ecosystem on the Foundation’s evolution plans. NEAR is a collective, a foundation and a development platform built on a layer 1 blockchain designed to be fast, secure and scalable.', 'Previously, Donovan was a partner and head of legal at Outlier Ventures, one of the first VC firms dedicated to investing in the emerging crypto ecosystem. There, Donovan helped navigate the legal and regulatory complexities of Web3 by helping Outlier Ventures support the launch and growth of several billion-dollar crypto economies.']
  },
]

/*
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
                className="h-full w-auto"
                width={900}
                height={460}
                priority
              />
            </div>
                        <div className="absolute w-[450px] left-[10px] top-[370px] sm:left-[initial] sm:right-[100px] sm:top-[300px] uppercase flex">
              <span className="text-2xl text-ps-red mr-4">+</span>
              <span className="text-xl sm:text-2xl">Advocacy for Decentralized Communities</span>
            </div>
            <div className="absolute left-[20px] bottom-[4rem] sedgwick">
              Est. 2024
            </div>
*/

export default function Home() {
  
  return (
    <main className="mx-auto flex flex-col max-w-[1366px] items-center justify-between pt-24 h-full gap-y-0">
      
      <section id="about" className="relative z-0 scroll-mt-24 w-full bg-[url('/hero/space-bg.png')] bg-no-repeat bg-cover">
          <div className="relative z-10 min-h-[calc(100svh-6rem)] overflow-hidden">
            <div className="z-40 absolute top-[10%] left-[10%]">
              <Image
                src="/hero/about-us-text.png"
                alt=""
                className=""
                width={624}
                height={304}
                priority
              />
            </div>
            <div className="z-30 absolute bottom-0 right-0">
              <div className="sg text-[40px] text-center !leading-normal absolute bottom-0 md:bottom-[120px] left-0 sm:left-[200px] max-w-[600px]">
              PSA is a builder-centric organization focused on advocacy for decentralized tech and best practices for decentralized communities. 
              </div>
              <Image
                src="/hero/rock1.png"
                alt=""
                className=""
                width={759}
                height={600}
                priority
              />
            </div>
          </div>
      </section>

      <section id="leadership" className="relative z-0 scroll-mt-24 w-full">
          <div className="relative z-10 min-h-[calc(100svh-6rem)] overflow-hidden flex flex-col justify-center">
            <div className="relative max-h-[786px] h-[768px] bg-[url('/hero/space-bg.png')] bg-no-repeat bg-cover">
              <div className="z-30 absolute top-0 left-0 h-full">
                <Image
                  src="/hero/galaxy.png"
                  alt=""
                  className=""
                  width={508}
                  height={267}
                  priority
                />
              </div>
              <div className="z-10 absolute top-0 right-0 h-full">
                <Image
                  src="/hero/meteors.png"
                  alt=""
                  className="h-full"
                  width={1366}
                  height={768}
                  priority
                />
              </div>
              <div className="z-20 relative bottom-0 left-0">
                <Image
                  src="/hero/leadership-text.png"
                  alt=""
                  className=""
                  width={1366}
                  height={768}
                  priority
                />
              </div>
            </div>
          </div>
      </section>

      <section id="work" className="relative z-0 scroll-mt-24 w-full">
          <div className="relative z-10 min-h-[calc(100svh-6rem)] overflow-hidden flex flex-col justify-center bg-[url('/hero/space-bg.png')] bg-no-repeat bg-cover">
            <div className="relative h-full border-y border-grey-400">
              <div className="z-30 absolute top-0 left-0 h-full">
                <Image
                  src="/hero/galaxy.png"
                  alt=""
                  className=""
                  width={508}
                  height={267}
                  priority
                />
              </div>
              <div className="z-10 absolute top-0 right-0 h-full">
                <Image
                  src="/hero/meteors.png"
                  alt=""
                  className="h-full"
                  width={1366}
                  height={768}
                  priority
                />
              </div>
              <div className="z-20 relative bottom-0 left-0">
                <Image
                  src="/hero/leadership-text.png"
                  alt=""
                  className=""
                  width={1366}
                  height={768}
                  priority
                />
              </div>
            </div>
          </div>
      </section>

      <section id="work2" className="relative z-0 scroll-mt-24 w-full">
        <div className="">
          <div className="relative z-10 flex flex-col items-center min-h-[calc(100svh-6rem)]">
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
                        {item.blurbs.map((blurb, i) => (
                          <span key={`blurb-${i}`}>{blurb}</span>
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
                      <div key={`b-${item.name}`} className="flex flex-col text-black relative inline-flex items-center gap-3 rounded-xl p-3 sm:p-6 mx-0 bg-gray-800 mt-2">
                        <a href={item.href} className="flex flex-col h-30 sm:h-20 w-full items-center justify-center rounded-lg transition duration-300 ease-in-out">
                          <span className="text-shadow relative z-20 w-full whitespace-pre bg-gradient-to-r from-[#355FCB] via-[#55B9F3] to-[#BF478E] bg-clip-text py-4 text-center text-base sm:text-[28px] font-normal lowercase leading-[0.9] tracking-tight text-transparent -mt-4">{ item.name }</span>
                          <span className="text-center text-white">{ item.desc }</span>
                        </a>
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership2" className="relative z-0 scroll-mt-24 w-full">
        <div className="">
          <div className="relative z-10 flex flex-col items-center min-h-[calc(100svh-6rem)]">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex items-center">
                <span className="h-4 w-4 bg-ps-red mr-2" />
                <span className="text-[40px] sm:text-[68px] uppercase">Leadership</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-evenly w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {leadership.map((item) => (
                  <div key={item.name} className="rounded-xl bg-gradient-to-r from-[#355FCB] via-[#55B9F3] to-[#BF478E] p-2">
                    <div className="relative flex aspect-wider justify-between rounded-lg bg-white l:aspect-wider text-black p-4 w-full h-[250px]">
                      <div className="flex flex-col justify-start w-full gap-y-2 relative">
                        <div className="text-2xl mr-2">{item.name}</div>
                        <div className="flex items-center gap gap-2">
                          
                          {
                            item.x && <a href={item.x} target="_blank" className="border-b-2 border-transparent hover:border-black">
                              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                            </a>
                          }
                          {
                            item.linkedin && <a href={item.linkedin} target="_blank" className="border-b-2 border-transparent hover:border-black">
                              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                            </a>
                          }
                          {
                            item.substack && <a href={item.substack} target="_blank" className="p-1 border-b-2 border-transparent hover:border-black">
                              <svg className="w-[26px] h-[30px]" role="img" width="21" height="24" viewBox="0 0 21 24" fill="#000000" strokeWidth="1.8" stroke="none" xmlns="http://www.w3.org/2000/svg"><g><title></title><path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"></path><path d="M0 10.8125V24.0004L10.4991 18.1107L21 24.0004V10.8125H0Z"></path><path d="M20.9991 0H0V2.83603H20.9991V0Z"></path></g></svg>
                            </a>
                          }
                        </div>
                        <Image
                          src={item.img}
                          alt={item.name}
                          className={classNames({
                            "h-[218px] w-[218px] absolute top-0 right-0": true,
                            "transform scale-x-[-1] right-[-50px]": item.flipImg
                          })}
                          width={150}
                          height={210}
                        />
                      </div>
                    </div>
                  </div> 
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="hidden relative z-0 scroll-mt-24 w-full">
        <div className="">
          <div className="relative z-10 flex flex-col items-center min-h-[calc(100svh-6rem)]">
            <div className="flex flex-col gap-y-4 w-full">
              <div className="flex items-center">
                <span className="h-4 w-4 bg-ps-red mr-2" />
                <span className="text-[40px] sm:text-[68px] uppercase">Join Us</span>
              </div>

              <div className="w-full">
                PSA team members utilize Telegram for communications. To join PSA, submit an application using our <a href="#" className="text-ps-blue-1 hover:underline">Telegram bot</a>.
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


