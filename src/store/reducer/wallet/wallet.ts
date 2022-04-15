import { WalletTypes, All } from "../../action/wallet";
import { initialState } from "../../state";

/**
 * 
 * @param state 初始状态
 * @param param1 action创建函数
 * @returns 
 */

export default function (state = initialState.wallet, { type, payload }: All) {
    switch (type){
        case WalletTypes.setWalletAccount:
            return {
                ...state,
                account: payload
            }
        case WalletTypes.setWalletLoaing:
            return {
                ...state,
                isLoading: payload
            }
        default: 
            return state;
    }
}