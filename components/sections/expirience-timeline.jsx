import Image from "next/image";
import { Timeline } from "../timeline";
import Container from "./glass-container";
import { ArrowedTooltip } from "../arrwed-tooltip";

const exprienceStack1 = [
  {
    name: "Reactjs",
    image: "/react.svg",
  },
  {
    name: "Nodejs",
    image: "/nodejs.svg",
  },
  {
    name: "MongoDB",
    image: "/mongodb-1.svg",
  },
  {
    name: "GraphQl",
    image: "/graphql.svg",
  },
  {
    name: "Nextjs",
    image: "/nextjs.webp",
  },
  {
    name: "Javascript",
    image: "/javascript.svg",
  },
  {
    name: "Typescript",
    image: "/typescript.svg",
  },
  {
    name: "HTML5",
    image: "/html.svg",
  },
  {
    name: "CSS3",
    image: "/css.svg",
  },
];
const exprienceStack2 = [
  {
    name: "Reactjs",
    image: "/react.svg",
  },
  {
    name: "Nodejs",
    image: "/nodejs.svg",
  },
  {
    name: "MongoDB",
    image: "/mongodb-1.svg",
  },

  {
    name: "Javascript",
    image: "/javascript.svg",
  },
  {
    name: "GraphQl",
    image: "/graphql.svg",
  },
  {
    name: "HTML5",
    image: "/html.svg",
  },
  {
    name: "CSS3",
    image: "/css.svg",
  },
];
const exprienceStack3 = [
  {
    name: "Reactjs",
    image: "/react.svg",
  },
  {
    name: "Nodejs",
    image: "/nodejs.svg",
  },
  {
    name: "MongoDB",
    image: "/mongodb-1.svg",
  },
  {
    name: "GraphQl",
    image: "/graphql.svg",
  },

  {
    name: "Javascript",
    image: "/javascript.svg",
  },
  {
    name: "HTML5",
    image: "/html.svg",
  },
  {
    name: "CSS3",
    image: "/css.svg",
  },
];
const exprienceStack4 = [
  {
    name: "Reactjs",
    image: "/react.svg",
  },
  {
    name: "Nodejs",
    image: "/nodejs.svg",
  },
  {
    name: "MongoDB",
    image: "/mongodb-1.svg",
  },
  {
    name: "GraphQl",
    image: "/graphql.svg",
  },

  {
    name: "Javascript",
    image: "/javascript.svg",
  },
  {
    name: "HTML5",
    image: "/html.svg",
  },
  {
    name: "CSS3",
    image: "/css.svg",
  },
  {
    name: "Solidity",
    image: "/solidity.svg",
  },
  {
    name: "IPFS",
    image: "/ipfs.svg",
  },
  {
    name: "Chainlink",
    image: "/chainlink.svg",
  },
  {
    name: "Polygon",
    image: "/polygon.svg",
  },
  {
    name: "Hyperledger Fabric",
    image: "/hyperledger.svg",
  },
  {
    name: "Hardhat",
    image: "/hardhat.svg",
  },
];

export function ExperienceTimeline() {
  const data = [
    {
      title: "January 2025 - Present",
      content: (
        <div>
          <div>
            <div>
              <p className="text-xs md:text-2xl font-medium antialiased tracking-wide">
                Full Stack & Web3 Developer
              </p>
              <p className="antialiased tracking-wide text-slate-400 ">
                @Sumeru Digital Solutions
              </p>
            </div>
            <Image
              src="/sumeru.png"
              width={150}
              height={150}
              alt="Sumeru Digital"
              className="mt-3"
            />
          </div>

          <div className="mt-6">
            <ol className="list-disc pl-5">
              <li className="antialiased tracking-wide">
                Building scalable and secure full-stack applications with modern
                frameworks.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Developing and deploying smart contracts on blockchain networks
                for Web3 applications.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Integrating decentralized technologies to enhance security and
                transparency.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Collaborating with cross-functional teams to create seamless
                user experiences.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Continuously exploring emerging Web3 and full-stack technologies
                to drive innovation.
              </li>
            </ol>
          </div>

          <div className="mt-3 flex items-center flex-wrap gap-3">
            {exprienceStack4?.map((item, index) => (
              <Container key={index} className="cursor-pointer">
                <ArrowedTooltip
                  trigger={
                    <Image
                      src={item.image}
                      width={30}
                      height={30}
                      alt={item.name}
                      className="cursor-pointer"
                    />
                  }
                  content={
                    <div className="text-left">
                      <p className="font-medium capitalize">{item?.name}</p>
                    </div>
                  }
                  side="top"
                />
              </Container>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "January 2023 - December 2024",
      content: (
        <div>
          <div>
            <div>
              <p className="text-xs md:text-2xl font-medium antialiased tracking-wide">
                Full Stack Developer
              </p>
              <p className="antialiased tracking-wide text-slate-400 ">
                @C S TECH Infosolutions Pvt Ltd
              </p>
            </div>
            <Image
              src="/cslogo.png"
              width={150}
              height={150}
              alt="C S TECH"
              className="mt-3"
            />
          </div>

          <div className="mt-6">
            <ol className="list-disc pl-5">
              <li className="antialiased tracking-wide">
                Currently working on developing innovative software solutions.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Implementing cutting-edge technologies to enhance user
                experience.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Collaborating with cross-functional teams to deliver
                high-quality products.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Writing clean, scalable, and efficient code for various
                applications.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Continuously learning and improving to stay ahead in the tech
                industry.
              </li>
            </ol>
          </div>

          <div className="mt-3 flex items-center flex-wrap gap-3">
            {exprienceStack1?.map((item, index) => (
              <Container key={index} className="cursor-pointer">
                <ArrowedTooltip
                  trigger={
                    <Image
                      src={item.image}
                      width={30}
                      height={30}
                      alt={item.name}
                      className="cursor-pointer"
                    />
                  }
                  content={
                    <div className="text-left">
                      <p className="font-medium capitalize">{item?.name}</p>
                    </div>
                  }
                  side="top"
                />
              </Container>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "June 2022 - December 2023",
      content: (
        <div>
          <div>
            <div>
              <p className="text-xs md:text-2xl font-medium antialiased tracking-wide">
                Full Stack Developer Intern
              </p>
              <p className="antialiased tracking-wide text-slate-400 ">
                @PROJECT28
              </p>
            </div>
            <Image
              src="/project28.png"
              width={150}
              height={150}
              alt="C S TECH"
              className="mt-3"
            />
          </div>

          <div className="mt-6">
            <ol className="list-decimal pl-5">
              <li className="antialiased tracking-wide">
                Worked as a Frontend Developer Intern on a canvas-based project.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Developed interactive web features using HTML5 Canvas for
                dynamic content rendering.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Integrated JavaScript libraries to enhance drawing and animation
                capabilities.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Utilized technologies such as React, Node.js, and WebSockets for
                real-time collaboration features.
              </li>
              <li className="antialiased tracking-wide mt-1">
                Collaborated with the design team to implement responsive UI/UX,
                ensuring compatibility across devices.
              </li>
            </ol>
          </div>

          <div className="mt-3 flex items-center flex-wrap gap-3">
            {exprienceStack3?.map((item, index) => (
              <Container key={index} className="cursor-pointer">
                <ArrowedTooltip
                  trigger={
                    <Image
                      src={item.image}
                      width={30}
                      height={30}
                      alt={item.name}
                      className="cursor-pointer"
                    />
                  }
                  content={
                    <div className="text-left">
                      <p className="font-medium capitalize">{item?.name}</p>
                    </div>
                  }
                  side="top"
                />
              </Container>
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
