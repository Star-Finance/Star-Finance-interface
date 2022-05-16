import { Button } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import bannerSrc from '../../assets/images/banner.png';
import StakingItem from './StakingItem';
import { connect } from 'react-redux';
import { IStore } from '../../store/state';
import './index.less';
import getContract, { ContractTypes, IContracts, StakeAddressTypes, StakeContractTypes } from '../../hooks/getContract';
import { all } from 'redux-saga/effects';
import { ethers } from 'ethers';

function Staking(props: any) {
    const { account } = props;
    const [contracts, setContracts] = useState<null | IContracts>(null);
    const [stakingUSDCBaseInfo, setStakingUSDCBaseInfo] = useState({
        totalSupply: 0, balanceOf: 0, earned: 0, apr: 0
    })
    const [stakingUSDTBaseInfo, setStakingUSDTBaseInfo] = useState({
        totalSupply: 0, balanceOf: 0, earned: 0, apr: 0
    })
    const [stakingWETHBaseInfo, setStakingWETHBaseInfo] = useState({
        totalSupply: 0, balanceOf: 0, earned: 0, apr: 0
    })

    useEffect(() => {
        console.log(contracts);
        if(contracts) {
            getTotalSupply("stakingUSDCContract");
            getTotalSupply("stakingUSDTContract");
            getTotalSupply("stakingWETHContract");
        }
    }, [contracts])

    useEffect(() => {
      if(account) {
        setContracts(getContract())
      }
    }, [account]) 

    const stake = useCallback(
      async (contract: ContractTypes, stakingContrct: StakeContractTypes, stakeAddress: StakeAddressTypes, value: number) => {
        try {
            const {ethereum} = window;
            if(ethereum && contracts) {
                const allowance = await contracts[contract].allowance(account, contracts[stakeAddress]);
                console.log(88899, allowance.toNumber());
                // const approveResult = await contracts[contract].approve(contracts[stakeAddress], ethers.utils.parseEther("0"));
                if(allowance.toNumber() === 0) {
                    const approveResult = await contracts[contract].approve(contracts[stakeAddress], ethers.utils.parseEther("1234567899"));
                }
                const tx = await contracts.stakingUSDCContract.stake(ethers.utils.parseEther(value.toString()));
                await tx.wait();
                getTotalSupply(stakingContrct);
            } else {
                // alert("请链接钱包！！！")
            }
        } catch (error) {
            console.log(error);
        }

      },
      [contracts],
    )

    const withdraw = useCallback(
      async (stakingContract: StakeContractTypes, value: number) => {
        try {
            const {ethereum} = window;
            if(ethereum && contracts) {
                const tx = await contracts[stakingContract].withdraw(ethers.utils.parseEther(value.toString()));
                await tx.wait();
                getTotalSupply(stakingContract)
            } else {
                // alert("请链接钱包！！！")
            }
        } catch (error) {
            console.log(error);
        }
      },
      [contracts],
    )

      const getReward = useCallback(
        async (stakingContract: StakeContractTypes, value: number) => {
          try {
              const {ethereum} = window;
              if(ethereum && contracts) {
                  const tx = await contracts[stakingContract].getReward(ethers.utils.formatEther(value.toString()));
                  await tx.wait();
                  getTotalSupply(stakingContract)
              } else {
                  // alert("请链接钱包！！！")
              }
          } catch (error) {
              console.log(error);
          }
        },
        [contracts],
      )

    const exit = useCallback(
        async (stakingContract: StakeContractTypes) => {
            try {
                const {ethereum} = window;
                if(ethereum && contracts) {
                    const tx = await contracts[stakingContract].exit();
                    await tx.wait();
                    getTotalSupply(stakingContract)
                } else {
                    // alert("请链接钱包！！！")
                }
            } catch (error) {
                console.log(error);
            }
        },
        [contracts],
    )

     // get totalsupply of staking USDC 
    const getTotalSupply = async (stakingContrct: StakeContractTypes) => {
        try {
            const {ethereum} = window;
            if(ethereum && contracts) {
                const totalSupply = await contracts[stakingContrct].totalSupply();
                const balanceOf = await contracts[stakingContrct].balanceOf(account);
                const earned = await contracts[stakingContrct].earned(account);
                const apr = await contracts[stakingContrct].apr();
                console.log(33445, totalSupply, balanceOf, earned, apr.toString());
                if(stakingContrct === "stakingUSDCContract") {
                    setStakingUSDCBaseInfo({ totalSupply: Number(ethers.utils.formatUnits(totalSupply, 18)), apr: Number(ethers.utils.formatUnits(apr, 8)), earned: Number(ethers.utils.formatUnits(earned, 18)), balanceOf: Number(ethers.utils.formatUnits(balanceOf, 18)) });
                } else if(stakingContrct === "stakingUSDTContract") {
                    setStakingUSDTBaseInfo({ totalSupply: Number(ethers.utils.formatUnits(totalSupply, 18)), apr: Number(ethers.utils.formatUnits(apr, 8)), earned: Number(ethers.utils.formatUnits(earned, 18)), balanceOf: Number(ethers.utils.formatUnits(balanceOf, 18)) });
                } else {
                    setStakingWETHBaseInfo({ totalSupply:  Number(ethers.utils.formatUnits(totalSupply, 18)), apr: Number(ethers.utils.formatUnits(apr, 8)), earned: Number(ethers.utils.formatUnits(earned, 18)), balanceOf: Number(ethers.utils.formatUnits(balanceOf, 18)) });
                }
            } else {
                // alert("请链接钱包！！！")
            }
        } catch (error) {
            console.log(error);
        }
    }

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
            <StakingItem
             name="USDC"
             {...stakingUSDCBaseInfo}
             stakeHandler={(value) => stake("USDCContract", "stakingUSDCContract", "stakingUSDCAddress", value)}
             withdraw={(value) => withdraw("stakingUSDCContract", value)}
             getReward={(value) => getReward("stakingUSDCContract", value)}
             exit={() => exit("stakingUSDCContract")}
            />
            <StakingItem
                {...stakingUSDTBaseInfo}
                 name="USDT"
                 stakeHandler={value => stake("USDTContract", "stakingUSDTContract", "stakingUSDTAddress", value)}
                 withdraw={(value) => withdraw("stakingUSDTContract", value)}
                getReward={(value) => getReward("stakingUSDTContract", value)}
                exit={() => exit("stakingUSDTContract")}
            />
            <StakingItem
                {...stakingWETHBaseInfo}
                name="WETH"
                stakeHandler={value => stake("WETHContract", "stakingWETHContract", "stakingWETHAddress", value)}
                withdraw={(value) => withdraw("stakingWETHContract", value)}
                getReward={(value) => getReward("stakingWETHContract", value)}
                exit={() => exit("stakingWETHContract")}
            />
        </div>
    </div>
  )
}

export default connect((store: IStore) => ({
    account: store.wallet.account
}))(Staking);