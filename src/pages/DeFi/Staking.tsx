import { Button } from 'antd';
import React from 'react';
import bannerSrc from '../../assets/images/banner.png';
import './index.less';
import StakingItem from './StakingItem'

export default function Staking() {

  return (
    <div>
        <div style={{padding: 30, border: '1px solid #fff', borderRadius: 6, background: '#fff', margin: '20px 0'}}>
            <img src={bannerSrc} alt="" className="src" style={{width: '100%'}} />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', border: '1px solid #fff', background: '#fff', margin: '20px 0', padding: '20px 0'}}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <span style={{color: '#666', fontWeight: 'bold', fontSize: 16 }}>TVL($)</span>
                <span style={{color: '#f6c342', fontWeight: 'bold', fontSize: 18 }}>4,562,611.51</span>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <span style={{color: '#666', fontWeight: 'bold', fontSize: 16 }}>Total Users Earned($)</span>
                <span style={{color: '#f6c342', fontWeight: 'bold', fontSize: 18 }}>172,847.14</span>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <span style={{color: '#666', fontWeight: 'bold', fontSize: 16 }}>Personal TVL($)</span>
                <span style={{color: '#f6c342', fontWeight: 'bold', fontSize: 18 }}>0.00</span>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <span style={{color: '#666', fontWeight: 'bold', fontSize: 16 }}>Total Personal Earned($)</span>
                <span style={{color: '#f6c342', fontWeight: 'bold', fontSize: 18 }}>0</span>
            </div>
        </div>
        <div className="stakingList">
            <StakingItem />
            <StakingItem />
            <StakingItem />
            <StakingItem />
            <StakingItem />
            <StakingItem />
            <StakingItem />
        </div>
    </div>
  )
}
