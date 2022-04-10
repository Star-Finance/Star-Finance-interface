import { Progress } from 'antd';
import React from 'react';
import './index.less';
import { GlobalOutlined, TwitterOutlined, MediumOutlined } from "@ant-design/icons"

export interface IprojectInfo {
    projectStatus: 'close' | 'Open' | 'Coming Soon';
    fiatCurrency: string;
    imgSrc: any;
    name: string;
    description: string;
    cap: number;
    swapRate: number;
    access: string;
    progress: number;
}

export default function Project(props: IprojectInfo) {
  return (
    <div className='projectWarrp' style={{border: `2px solid ${props.projectStatus==="Coming Soon" ? "#14CEC5": "red"}`}}>
        <h2 className='header'>
            <span>{props.projectStatus}</span>
            <span>{props.fiatCurrency}</span>
        </h2>
        <div className='project__content'>
            <img src={props.imgSrc} alt="" />
            <h2 style={{color: "#fff"}}>{props.name}</h2>
            <p>{props.description}</p>
        </div>
        <ul>
                <li>
                    <span>Swap rate</span><br/>
                    <b>{props.swapRate}</b>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <span>Cap</span><br/>
                        <b>{props.cap}</b>
                    </div>
                    <div>
                        <span>Access</span><br/>
                        <b>{props.access}</b>
                    </div>
                </li>
                <li>
                    <span>Progress</span><br />
                    <Progress
                        style={{ width: "98%", color: "#fff"}}
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        percent={90}
                        trailColor={"#fff"}
                    />
                </li>
            </ul>
        <h2 className='footer'>
            <span><GlobalOutlined /></span>
            <span><TwitterOutlined /></span>
            <span><MediumOutlined /></span>
        </h2>
    </div>
  )
}
