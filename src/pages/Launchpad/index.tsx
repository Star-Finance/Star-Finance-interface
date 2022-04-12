import React from 'react';
import { IprojectInfo } from './Project';
import Projects from './Projects';

const projectData1: IprojectInfo[] = [
  { 
    name: "MetaFame",
    imgSrc: "https://i.ibb.co/p01DS01/MFAME.png",
    fiatCurrency: "BUSD",
    description: "MetaFame -the metaverse where anyone can become famous!",
    cap: 100000,
    swapRate: "1:1000",
    capPerPerson: 100,
    progress: 60,
    projectStatus: "Coming Soon"
  },
  { 
    name: "MetaFame",
    imgSrc: "https://i.ibb.co/p01DS01/MFAME.png",
    fiatCurrency: "BUSD",
    description: "MetaFame -the metaverse where anyone can become famous!",
    cap: 100000,
    swapRate: "1:1000",
    capPerPerson: 100,
    progress: 60,
    projectStatus: "Coming Soon"
  },
  { 
    name: "MetaFame",
    imgSrc: "https://i.ibb.co/p01DS01/MFAME.png",
    fiatCurrency: "BUSD",
    description: "MetaFame -the metaverse where anyone can become famous!",
    cap: 100000,
    swapRate: "1:1000",
    capPerPerson: 100,
    progress: 60,
    projectStatus: "Coming Soon"
  },
  { 
    name: "MetaFame",
    imgSrc: "https://i.ibb.co/p01DS01/MFAME.png",
    fiatCurrency: "BUSD",
    description: "MetaFame -the metaverse where anyone can become famous!",
    cap: 100000,
    swapRate: "1:1000",
    capPerPerson: 100,
    progress: 60,
    projectStatus: "Coming Soon"
  }
]

const projectData2: IprojectInfo[] = [
  { 
    name: "MetaFame",
    imgSrc: "https://i.ibb.co/p01DS01/MFAME.png",
    fiatCurrency: "BUSD",
    description: "MetaFame -the metaverse where anyone can become famous!",
    cap: 100000,
    swapRate: "1:1000",
    capPerPerson: 100,
    progress: 60,
    projectStatus: "Open"
  },
  { 
    name: "MetaFame",
    imgSrc: "https://i.ibb.co/p01DS01/MFAME.png",
    fiatCurrency: "BUSD",
    description: "MetaFame -the metaverse where anyone can become famous!",
    cap: 100000,
    swapRate: "1:1000",
    capPerPerson: 100,
    progress: 60,
    projectStatus: "Open"
  },
  { 
    name: "MetaFame",
    imgSrc: "https://i.ibb.co/p01DS01/MFAME.png",
    fiatCurrency: "BUSD",
    description: "MetaFame -the metaverse where anyone can become famous!",
    cap: 100000,
    swapRate: "1:1000",
    capPerPerson: 100,
    progress: 60,
    projectStatus: "Open"
  },
  { 
    name: "MetaFame",
    imgSrc: "https://i.ibb.co/p01DS01/MFAME.png",
    fiatCurrency: "BUSD",
    description: "MetaFame -the metaverse where anyone can become famous!",
    cap: 100000,
    swapRate: "1:1000",
    capPerPerson: 100,
    progress: 60,
    projectStatus: "Open"
  }
]

export default function index(props: any) {
  return (
    <div style={{background: "#00001E", height: "100%", width: "100%", position: "fixed"}}>
      <div>
        <h2 style={{padding: 20, textAlign: "center",color: "#14CEC5",position: "relative", fontSize: "3em"}}>Projects Coming soon</h2>
        <Projects projects={projectData1} />
      </div>
      {/* <div>
        <h2 style={{padding: 20, textAlign: "center",color: "#EA3E66",position: "relative", fontSize: "3em"}}>Projects Closed</h2>
        <Projects projects={projectData2} />
      </div> */}
    </div>
  )
}
