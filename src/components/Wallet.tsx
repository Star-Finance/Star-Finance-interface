import { Button, notification } from 'antd'
import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { getWalletAccountAction } from '../store/action/wallet';
import { IStore } from '../store/state';

function Wallet(props: any) {
    const { dispatch, loading, account } = props;

    // 连接metamask钱包
    const connectWallet = async() => {
        // 触发action，到saga中间件中获取钱包地址数据
        dispatch(getWalletAccountAction());
    }

  return (
      <span>
          <Button
            loading={loading}
            onClick={connectWallet}
            style={{background: 'orange', color: '#fff'}}
            size="large" shape="round" type="text">
            {account ? `${account.substring(0, 6)}...${account.substring(account.length - 6, account.length)}` : 'CONNECT WALLET'}
        </Button>
      </span>
  )
}

export default connect((store: IStore) => ({
    account: store.wallet.account,
    loading: store.wallet.isLoading,

}))(Wallet)
