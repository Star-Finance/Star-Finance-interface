import React, { useState } from 'react'
import fileIcon from '../../assets/images/FIL.svg'
import { Slider, InputNumber, Row, Col, Button } from 'antd';
import './index.less';

export default function StakingItem() {
    const [inputValue, setInputValue] = useState<number>(1);
    
    const onChange = (value: number) => {
        setInputValue(value);
    };

    const marks = {
        0: '0',
        40: '40%',
        80: '80%'
    };
  return (
    <div className='item'>
        <h2>
            <span>FIL</span>
            <img src={fileIcon} alt="" />
        </h2>
        <div className='content'>
            <ul className='time'>
                <li>活期</li>
            </ul>
            <div className='apy'>
                <div>
                    <span>Apy</span>
                    <p>14%</p>
                </div>
                <div>
                    <span>锁仓量(FIL)</span>
                    <p>149,860.82</p>
                </div>
            </div>
            <div className='vl'>
                <div>
                    <span>我的资金</span>
                    <span>98</span>
                </div>
                <div>
                    <span>已存入(FIL)</span>
                    <span>0.0000</span>
                </div>
            </div>
             <div className='vl'>
                <div>
                    <Button size="large" shape="round">提取本金</Button>
                </div>
                <div>
                    <Button size="large" shape="round">获取收益</Button>
                </div>
            </div>
            <div className="count" style={{marginTop: 10}}>
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
                        style={{ margin: '0 16px' }}
                        value={inputValue}
                        onChange={onChange}
                    />
                    </Col>
                </Row>
            </div>
            <div className='approve'>
                <Button size="large" style={{background: '#fff', padding: "0 50px"}} shape="round">退出</Button>
                <Button size="large" style={{background: 'orange', padding: "0 50px"}} shape="round">存入</Button>
            </div>
        </div>
    </div>
  )
}
