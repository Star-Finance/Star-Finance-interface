import { Button, Input, InputNumber, Select } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import getContract, { IContracts } from '../hooks/getContract';

const { Option } = Select;

export default function Faucet() {

  const [contracts, setContracts] = useState<null | IContracts>(null);
  const [coin, setCoin] = useState<"usdc" | "usdt" | "weth">("usdc");

  useEffect(() => {
    setContracts(getContract())
  }, [])

  const earn = useCallback(
    async () => {
      if(coin=== "usdc") {
        await contracts?.USDCContract.faucet()
      } else if(coin === "usdt") {
        await contracts?.USDTContract.faucet()
      } else {
        await contracts?.WETHContract.faucet()
      }
    },
    [contracts, coin],
  )
  

  return (
    <div style={{position: "fixed", width: "100%", height: "100%", background: "rgba(0, 0,0,0.2)"}}>
        <div style={{width: "60%", margin: "200px auto"}}>
            <Input.Group compact size="large" style={{textAlign: "center"}}>
                <Select onChange={(value: "usdc" | "usdt" | "weth") => setCoin(value)} value={coin} defaultValue="usdc" size="large" style={{ width: '40%' }}>
                    <Option value="usdc">USDC</Option>
                    <Option value="usdt">USDT</Option>
                    <Option value="wrth">WETH</Option>
                </Select>
                {/* <InputNumber min={0} size="large" style={{ width: '80%' }} /> */}
                <Button onClick={() => earn()} size="large" style={{width: 200}}>earn</Button>
            </Input.Group>
        </div>
    </div>
  )
}
