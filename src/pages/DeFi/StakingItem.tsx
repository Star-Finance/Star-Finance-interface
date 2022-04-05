import React, { useState } from 'react'
import fileIcon from '../../assets/images/FIL.svg'
import { Slider, InputNumber, Row, Col, Button } from 'antd';
import './index.less';

export default function StakingItem() {
    const [inputValue, setInputValue] = useState<number>(1);
    
    const onChange = (value: number) => {
        setInputValue(value);
    };
  return (
    <div className='item'>
        <h2>
            <span>FIL</span>
            <img src={fileIcon} alt="" />
        </h2>
        <div className='content'>
            <ul className='time'>
                <li>Current</li>
                <li>90 Day</li>
                <li>60 Day</li>
                <li>30 Day</li>
            </ul>
            <div className='apy'>
                <span>Apy</span>
                <p>14.09% ~ 21.68%</p>
            </div>
            <div className='vl'>
                <div>
                    <span>149,860.82</span>
                    <span>VL(FIL)</span>
                </div>
                <div>
                    <span>0.0000</span>
                    <span>Deposited(FIL)</span>
                </div>
            </div>
            <div className="count" style={{marginTop: 10}}>
                <Row>
                    <Col span={14}>
                        <Slider
                            min={1}
                            max={100}
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
                <Button size="large" style={{background: 'orange'}} shape="round">Strategy</Button>
                <Button size="large" style={{background: 'orange'}} shape="round">approve</Button>
            </div>
        </div>
    </div>
  )
}
