import { Button, Col, InputNumber, Progress, Row, Slider } from 'antd';
import React, { useState } from 'react';
import './index.less';
import { GlobalOutlined, TwitterOutlined, MediumOutlined } from "@ant-design/icons"

export interface IprojectInfo {
    projectStatus: 'close' | 'Open' | 'Coming Soon';
    fiatCurrency: string;
    imgSrc: any;
    name: string;
    description: string;
    cap: number;
    swapRate: string;
    capPerPerson: number;
    progress: number;
}

export default function Project(props: IprojectInfo) {

    const [inputValue, setInputValue] = useState<number>(1);
    
    const onChange = (value: number) => {
        setInputValue(value);
    };

    const marks = {
        0: {
            style: {
                color: '#00b595',
            },
            label: <strong>0</strong>
        },
        40: {
            style: {
                color: '#00b595',
            },
            label: <strong>40</strong>
        },
        80: {
            style: {
                color: '#00b595',
            },
            label: <strong>80</strong>
        }
    };

  return (
    <div className='projectWarrp' style={{border: `2px solid ${props.projectStatus==="Coming Soon" ? "#14CEC5": "red"}`}}>
        <h2 className='header'>
            <span>{props.projectStatus}</span>
            <span style={{color: "#00b595"}}>{props.fiatCurrency}</span>
        </h2>
        <div className='project__content'>
            <img src={props.imgSrc} alt="" />
            <h2 style={{color: "#fff"}}>{props.name}</h2>
            <p>{props.description}</p>
        </div>
        <ul>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <span>Swap rate</span><br/>
                    <b>{props.swapRate}</b>
                </div>
                <div>
                    <span>total Tokens</span><br/>
                    <b>1000,000,000</b>
                </div>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <span>Cap</span><br/>
                    <b>{props.cap}</b><span style={{color: "#00b595"}}>(BUSD)</span>
                </div>
                <div>
                    <span>Cap per Person</span><br/>
                    <b>{props.capPerPerson}</b><span style={{color: "#00b595"}}>(BUSD)</span>
                </div>
            </li>
            <div className="count" style={{marginTop: 10, color: "red"}}>
                <Row>
                    <Col span={14}>
                        <Slider
                            min={0}
                            marks={marks}
                            max={100}
                            step={10}
                            onChange={onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </Col>
                    <Col span={8}>
                    <InputNumber
                        min={1}
                        max={100}
                        style={{ margin: '0 16px', color: "#00001E" }}
                        value={inputValue}
                        onChange={onChange}
                    />
                    </Col>
                </Row>
            </div>
            <div style={{
                display: "flex",
                padding: "5px 0",
                justifyContent: "space-between"
            }}>
                <Button size="large" style={{background: '#fff', padding: "0 50px"}} shape="round">授权</Button>
                <Button size="large" style={{background: 'orange', padding: "0 50px"}} shape="round">加入</Button>
            </div>
        </ul>
        <h2 className='footer'>
            <span><GlobalOutlined /></span>
            <span><TwitterOutlined /></span>
            <span><MediumOutlined /></span>
        </h2>
    </div>
  )
}
