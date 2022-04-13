import { Button } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import bannerSrc from '../../assets/images/banner.png';
import './index.less';
import StakingItem from './StakingItem';
import { ethers } from 'ethers';
import interfaceAbi from "../../utils/abi/deployments-rinkeby.json";

const { abi: stakingUSDCAbi, address: stakingUSDCAddress } = interfaceAbi.StarStakingUSDC;
const { abi: stakingUSDTAbi, address: stakingUSDTAddress } = interfaceAbi.StarStakingUSDT;
const { abi: stakingWETHAbi, address: stakingWETHAddress } = interfaceAbi.StarStakingWETH;
const { abi: USDCAbi, address: USDCAddress } = interfaceAbi.USDC;
const { abi: USDTAbi, address: USDTAddress } = interfaceAbi.USDT;
const { abi: WETHAbi, address: WETHAddress } = interfaceAbi.WETH;

console.log(899, stakingUSDCAbi);

export default function Staking() {
    const [account, setAccount] = useState<string | null>("0x6EB72C67086D5487Dc1C27800afa6d63a3E14c75");
    const [USDCContract, setUSDCContract] = useState<null | ethers.Contract>(null);
    const [USDTContract, setUSDTContract] = useState<null | ethers.Contract>(null);
    const [WETHContract, setWETHContract] = useState<null | ethers.Contract>(null);
    const [stakingUSDCContract, setStakingUSDCContract] = useState<null | ethers.Contract>(null);
    const [stakingUSDTContract, setStakingUSDTContract] = useState<null | ethers.Contract>(null);
    const [stakingWETHContract, setStakingWETHContract] = useState<null | ethers.Contract>(null);
    // 总质押量
    const [totalSupplyOfUSDC, setTotalSupplyOfUSDC] = useState<number>(0);
    const [totalSupplyOfUSDT, setTotalSupplyOfUSDT] = useState<number>(0);
    const [totalSupplyOfWETH, setTotalSupplyOfWETH] = useState<number>(0);
    // balance 用户余额
    const [balanceOfUSDC, setBalanceOfUSDC] = useState<number>(0);
    const [balanceOfUSDT, setBalanceOfUSDT] = useState<number>(0);
    const [balanceOfWETH, setBalanceOfWETH] = useState<number>(0);
    // 用户收益
    const [earnedOfUSDC, setEarnedOfUSDC] = useState<number>(0);
    const [earnedOfUSDT, setEarnedOfUSDT] = useState<number>(0);
    const [earnedeOfWETH, setEarnedOfWETH] = useState<number>(0);
    // APR
    const [aprOfUSDC, setAprOfUSDC] = useState<number>(0);
    const [aprOfUSDT, setAprOfUSDT] = useState<number>(0);
    const [aprOfWETH, setAprOfWETH] = useState<number>(0);

    useEffect(() => {
        getTotalSupplyOfUSDC();
    }, [stakingUSDCContract])

    useEffect(() => {
        getTotalSupplyOfUSDT();
    }, [stakingUSDTContract])

    useEffect(() => {
        getTotalSupplyOfWETH();
    }, [stakingWETHContract])
    

    useEffect(() => {
      const {ethereum} = window;
      if(account) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const stakingUSDCContract = new ethers.Contract(stakingUSDCAddress, stakingUSDCAbi, signer);
        const stakingUSDTContract = new ethers.Contract(stakingUSDTAddress, stakingUSDTAbi, signer);
        const stakingWETHContract = new ethers.Contract(stakingWETHAddress, stakingWETHAbi, signer);
        const USDCContract = new ethers.Contract(USDCAddress, USDCAbi, signer);
        const USDTContract = new ethers.Contract(USDTAddress, USDTAbi, signer);
        const WETHContract = new ethers.Contract(WETHAddress, WETHAbi, signer);
        setStakingUSDCContract(stakingUSDCContract);
        setStakingUSDTContract(stakingUSDTContract);
        setStakingWETHContract(stakingWETHContract);
        setUSDCContract(USDCContract);
        setUSDTContract(USDTContract);
        setWETHContract(WETHContract);
      } else {
        connectWallet()
      }
    }, [account]) 

    const stakeOfUSDC = useCallback(
      async (value: number) => {
        try {
            const {ethereum} = window;
            if(ethereum && stakingUSDCContract&& USDCContract) {
                const allowance = await USDCContract.allowance(account, stakingUSDCAddress);
                if(allowance.toNumber() === 0) {
                    const approveResult = await USDCContract.approve(stakingUSDCAddress, 123456);
                }
                const tx = await stakingUSDCContract.stake(value);
                await tx.wait();
                getTotalSupplyOfUSDC();
            } else {
                // alert("请链接钱包！！！")
            }
        } catch (error) {
            console.log(error);
        }

      },
      [stakingUSDCContract, USDCContract],
    )

    const stakeOfUSDT = useCallback(
        async (value: number) => {
          try {
              const {ethereum} = window;
              if(ethereum && stakingUSDTContract && USDTContract) {
                  const allowance = await USDTContract.allowance(account, stakingUSDTAddress);
                  console.log("授权额度", allowance.toNumber());
                  if(allowance.toNumber() === 0) {
                    const approveResult = await USDTContract.approve(stakingUSDTAddress, 123456);
                }
                const tx = await stakingUSDTContract.stake(value);
                await tx.wait();
                getTotalSupplyOfUSDT();
              } else {
                //   alert("请链接钱包！！！")
              }
          } catch (error) {
              console.log(error);
          }
  
        },
        [stakingUSDTContract, USDTContract],
      )

    const stakeOfWETH = useCallback(
        async (value: number) => {
            try {
                const {ethereum} = window;
                if(ethereum && stakingWETHContract && WETHContract) {
                    const allowance = await WETHContract.allowance(account, stakingUSDTAddress);
                    console.log("授权额度", allowance.toNumber());
                    if(allowance.toNumber() === 0) {
                        const approveResult = await WETHContract.approve(stakingWETHAddress, 123456);
                    }
                    const tx = await stakingWETHContract.stake(value);
                    await tx.wait();
                    getTotalSupplyOfUSDT();
                } else {
                    // alert("请链接钱包！！！")
                }
            } catch (error) {
                console.log(error);
            }

        },
        [stakingWETHContract, WETHContract],
    )

    const withdrawOfUSDC = useCallback(
      async (value: number) => {
        try {
            const {ethereum} = window;
            if(ethereum && stakingUSDCContract) {
                const tx = await stakingUSDCContract.withdraw(value);
                await tx.wait();
                getTotalSupplyOfUSDC();
            } else {
                // alert("请链接钱包！！！")
            }
        } catch (error) {
            console.log(error);
        }
      },
      [stakingUSDCContract],
    )

    const withdrawOfUSDT = useCallback(
        async (value: number) => {
          try {
              const {ethereum} = window;
              if(ethereum && stakingUSDTContract) {
                  const tx = await stakingUSDTContract.withdraw(value);
                  await tx.wait();
                  getTotalSupplyOfUSDT();
              } else {
                  // alert("请链接钱包！！！")
              }
          } catch (error) {
              console.log(error);
          }
        },
        [stakingUSDTContract],
      )

      const withdrawOfWETH = useCallback(
        async (value: number) => {
          try {
              const {ethereum} = window;
              if(ethereum && stakingWETHContract) {
                  const tx = await stakingWETHContract.withdraw(value);
                  await tx.wait();
                  getTotalSupplyOfWETH();
              } else {
                  // alert("请链接钱包！！！")
              }
          } catch (error) {
              console.log(error);
          }
        },
        [stakingWETHContract],
      )

      const getRewardOfUSDC = useCallback(
        async (value: number) => {
          try {
              const {ethereum} = window;
              if(ethereum && stakingUSDCContract) {
                  const tx = await stakingUSDCContract.getReward(value);
                  await tx.wait();
                  getTotalSupplyOfUSDC();
              } else {
                  // alert("请链接钱包！！！")
              }
          } catch (error) {
              console.log(error);
          }
        },
        [stakingUSDCContract],
      )
      const getRewardOfUSDT = useCallback(
        async (value: number) => {
          try {
              const {ethereum} = window;
              if(ethereum && stakingUSDTContract) {
                  const tx = await stakingUSDTContract.getReward(value);
                  await tx.wait();
                  getTotalSupplyOfUSDT();
              } else {
                  // alert("请链接钱包！！！")
              }
          } catch (error) {
              console.log(error);
          }
        },
        [stakingUSDTContract],
      )
      const getRewardOfWETH = useCallback(
        async (value: number) => {
          try {
              const {ethereum} = window;
              if(ethereum && stakingWETHContract) {
                  const tx = await stakingWETHContract.getReward(value);
                  await tx.wait();
                  getTotalSupplyOfWETH();
              } else {
                  // alert("请链接钱包！！！")
              }
          } catch (error) {
              console.log(error);
          }
        },
        [stakingWETHContract],
      )

    const exitOfUSDC = useCallback(
        async () => {
            try {
                const {ethereum} = window;
                if(ethereum && stakingUSDCContract) {
                    const tx = await stakingUSDCContract.exit();
                    await tx.wait();
                    getTotalSupplyOfUSDC();
                } else {
                    // alert("请链接钱包！！！")
                }
            } catch (error) {
                console.log(error);
            }
        },
        [stakingUSDCContract],
    )

    const exitOfUSDT = useCallback(
        async () => {
            try {
                const {ethereum} = window;
                if(ethereum && stakingUSDTContract) {
                    const tx = await stakingUSDTContract.exit();
                    await tx.wait();
                    getTotalSupplyOfUSDT();
                } else {
                    // alert("请链接钱包！！！")
                }
            } catch (error) {
                console.log(error);
            }
        },
        [stakingUSDTContract],
    )

    const exitOfWETH = useCallback(
        async () => {
            try {
                const {ethereum} = window;
                if(ethereum && stakingWETHContract) {
                    const tx = await stakingWETHContract.exit();
                    await tx.wait();
                    getTotalSupplyOfWETH();
                } else {
                    // alert("请链接钱包！！！")
                }
            } catch (error) {
                console.log(error);
            }
        },
        [stakingWETHContract],
    )
      

    
    // connect wallet
    async function connectWallet() {
        try {
          const { ethereum } = window;
          if(!ethereum) {
            alert("pelase install metamask");
            return;
          }
          const accounts = await ethereum.request({
            method: "eth_requestAccounts"
          });
    
          setAccount(accounts[0])
          
        } catch (error) {
          console.log(error);
        }
    }

     // get totalsupply of staking USDC 
    const getTotalSupplyOfUSDC = async () => {
        try {
            const {ethereum} = window;
            if(ethereum && stakingUSDCContract) {
                const totalSupply = await stakingUSDCContract.totalSupply();
                setTotalSupplyOfUSDC(totalSupply.toNumber());
                const balanceOf = await stakingUSDCContract.balanceOf(account);
                setBalanceOfUSDC(balanceOf.toNumber());
                const earned = await stakingUSDCContract.earned(account);
                setEarnedOfUSDC(earned.toNumber());
                const apr = await stakingUSDCContract.rewardRate();
                setAprOfUSDC(apr.toString()/100000000000000);
            } else {
                // alert("请链接钱包！！！")
            }
        } catch (error) {
            console.log(error);
        }
    }
    // get totalsupply of staking USDT
    const getTotalSupplyOfUSDT = async () => {
        try {
            const {ethereum} = window;
            if(ethereum && stakingUSDTContract) {
                const totalSupply = await stakingUSDTContract.totalSupply();
                setTotalSupplyOfUSDT(totalSupply.toNumber());
                const balanceOf = await stakingUSDTContract.balanceOf(account);
                setBalanceOfUSDT(balanceOf.toNumber());
                const earned = await stakingUSDTContract.earned(account);
                setEarnedOfUSDT(earned.toNumber());
                const apr = await stakingUSDTContract.rewardRate();
                setAprOfUSDT(apr.toString()/100000000000000);
            } else {
                // alert("请链接钱包！！！")
            }
        } catch (error) {
            console.log(error);
        }
    }
    // get totalsupply of staking USDC 
    const getTotalSupplyOfWETH = async () => {
        try {
            const {ethereum} = window;
            if(ethereum && stakingWETHContract) {
                const totalSupply = await stakingWETHContract.totalSupply();
                setTotalSupplyOfUSDC(totalSupply.toNumber());
                const balanceOf = await stakingWETHContract.balanceOf(account);
                setBalanceOfWETH(balanceOf.toNumber());
                const earned = await stakingWETHContract.earned(account);
                setEarnedOfWETH(earned.toNumber());
                const apr = await stakingWETHContract.rewardRate();
                setAprOfWETH(apr.toString()/100000000000000);
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
        <Button onClick={() => getTotalSupplyOfUSDC()}>获取totalSupply</Button>
        <div className="stakingList">
            <StakingItem
             name="USDC" totalSupply={totalSupplyOfUSDC} balanceOf={balanceOfUSDC} earned={earnedOfUSDC} apr={aprOfUSDC}
             stakeHandler={stakeOfUSDC}
             withdraw={withdrawOfUSDC}
             getReward={getRewardOfUSDC}
             exit={exitOfUSDC}
            />
            <StakingItem
                 name="USDT" totalSupply={totalSupplyOfUSDT} balanceOf={balanceOfUSDT} earned={earnedOfUSDT} apr={aprOfUSDT}
                 stakeHandler={stakeOfUSDT}
                 withdraw={withdrawOfUSDT}
                getReward={getRewardOfUSDT}
                exit={exitOfUSDT}
            />
            <StakingItem
                name="WETH" totalSupply={totalSupplyOfWETH} balanceOf={balanceOfWETH} earned={earnedeOfWETH} apr={aprOfWETH}
                stakeHandler={stakeOfWETH}
                withdraw={withdrawOfWETH}
                getReward={getRewardOfWETH}
                exit={exitOfWETH}
            />
        </div>
    </div>
  )
}
