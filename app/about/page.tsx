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
            <div className="relative max-h-[786px] h-[768px] min-h-[calc(100svh-6rem)] bg-[url('/hero/space-bg.png')] bg-no-repeat bg-cover">
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

    </main>
  );
}


