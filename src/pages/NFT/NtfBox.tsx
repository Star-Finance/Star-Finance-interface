import { Button } from 'antd';
import React from 'react'
import CustomizeIcon from '../../components/customizeIcon';
import './index.less';

interface InftBox{
    imgsrc: any;
    blindboxInfo: any;
}

export default function NtfBox(props: InftBox) {
  return (
    <div className='nft__box'>
        <img src={props.imgsrc} width="40%" alt="" />
        <div className='nftBoxInfo'>
            <h2>{props.blindboxInfo.title}</h2>
            <div style={{fontSize: 18, color: '#666'}}>{props.blindboxInfo.author}</div>
            <div className='description'>
                {props.blindboxInfo.description}
            </div>
            <div className='operate'>
                <div style={{display: "flex", alignItems: "center", marginBottom: 30}}>
                    <CustomizeIcon type='starcoin-icon-coin' style={{color: "orange", fontSize: 42, marginRight: 12}}/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <span>创建者：{props.blindboxInfo.author} </span>
                        <span>1 STAR</span>
                    </div>
                </div>
                <div className='buttongroup' style={{display: "flex", justifyContent: "space-between"}}>
                    <button style={{background: "#f900b3", padding: '10px 100px', border: "none", fontSize: 20, borderRadius: 10}}>授权</button>
                    <button style={{padding: '10px 100px', border: "1x solid #f900b3", backgroundColor: "transparent", fontSize: 20, borderRadius: 10}}>购买规则</button>
                </div>
            </div>
        </div>
    </div>
  )
}
