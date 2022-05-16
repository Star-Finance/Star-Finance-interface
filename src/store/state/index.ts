import { ethers } from "ethers";

export interface IStore {
    wallet: {
        account: string;
        isLoading: boolean;
    },
    contract: {
        USDCContract: null | ethers.Contract,
        USDTContract: null | ethers.Contract,
        WETHContract: null | ethers.Contract,
        stakingUSDCContract: null | ethers.Contract,
        stakingUSDTContract: null | ethers.Contract,
        stakingWETHContract: null | ethers.Contract,
    }
}

export const initialState: IStore = {
    wallet: {
        account: "",
        isLoading: false
    },
    contract: {
        USDCContract: null,
        USDTContract: null,
        WETHContract: null,
        stakingUSDCContract: null,
        stakingUSDTContract: null,
        stakingWETHContract: null
    }
}
