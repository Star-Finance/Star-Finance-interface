import React, { useState } from 'react'
import fileIcon from '../../assets/images/FIL.svg'
import { Slider, InputNumber, Row, Col, Button } from 'antd';
import './index.less';

interface IStakingItem {
    name: string;
    apr: number;
    totalSupply: number;
    balanceOf: number;
    earned: number;
    stakeHandler: (value: number) => {}
}

export default function StakingItem(props: IStakingItem) {
    const {name, apr, totalSupply, earned, stakeHandler, balanceOf} = props;
    const [inputValue, setInputValue] = useState<number>(1);
    
    const onChange = (value: number) => {
        setInputValue(value);
    };

    const staking = () => {
        if(inputValue) {
            stakeHandler(inputValue)
        } else {
            alert("请输入金额")
        }
    }

    const marks = {
        0: '0',
        40: '40%',
        80: '80%'
    };
  return (
    <div className='item'>
        <h2>
            <span>{name}</span>
            <img src={fileIcon} alt="" />
        </h2>
        <div className='content'>
            <ul className='time'>
                <li>活期</li>
            </ul>
            <div className='apy'>
                <div>
                    <span>Apy</span>
                    <p>{apr.toFixed(2)+"%"}</p>
                </div>
                <div>
                    <span>锁仓量({name})</span>
                    <p>{totalSupply}</p>
                </div>
            </div>
            <div className='vl'>
                <div>
                    <span>我的本金</span>
                    <span>{balanceOf}</span>
                </div>
                <div>
                    <span>奖励</span>
                    <span>{earned}</span>
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
                <Button onClick={() => staking()} size="large" style={{background: 'orange', padding: "0 50px"}} shape="round">存入</Button>
            </div>
        </div>
    </div>
  )
}
