import React from 'react'
import "./index.less";

interface InftItem {
    imgSrc: any,
    anthor: string
}

export default function NftItem(props: InftItem) {
  return (
    <div className='ntf__item' onClick={() => {}} style={{ maxWidth: 300, padding: 10, color: '#fff'}}>
        <img src={props.imgSrc} style={{ width: "100%"}} />
        <div style={{ display: "flex", justifyContent: "space-between", padding: "30px 0" }}>
            <span>{props.anthor}</span>
            <button style={{padding: "5px 30px",border: "none", borderRadius: 5, background: "orange"}} onClick={() => {}}>查看详情</button>
        </div>
    </div>
  )
}
