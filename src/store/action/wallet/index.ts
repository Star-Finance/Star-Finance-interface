export const WalletTypes = {
    setWalletAccount: "setWalletAccount",
    setWalletLoaing: "setWalletLoading",
    getWalletAccount: "getWalletAccount"
}

interface ISetWalletAccount {
    type: string,
    payload: string;
}

interface ISetWalletLoading {
    type: string,
    payload: boolean;
}

interface IGetWalletAccount {
    type: string,
    payload?: any
}

export type All = ISetWalletAccount | ISetWalletLoading

export function getWalletAccountAction(): IGetWalletAccount {
    return {
        type: WalletTypes.getWalletAccount
    }
}

/**
 * 连接钱包后设置账户
 * @param account 钱包的账户
 * @returns 
 */
export function setWalletAccountAction(account: string): ISetWalletAccount {
    return {
        type: WalletTypes.setWalletAccount,
        payload: account
    }
}

export function setWalletLoadingAction(isLoading: boolean): ISetWalletLoading {
    return {
        type: WalletTypes.setWalletLoaing,
        payload: isLoading
    }
}
