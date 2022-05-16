import { ethers } from "ethers";
import interfaceAbi from "../utils/abi/deployments-rinkeby.json";

const { abi: stakingUSDCAbi, address: stakingUSDCAddress } = interfaceAbi.StarStakingUSDC;
const { abi: stakingUSDTAbi, address: stakingUSDTAddress } = interfaceAbi.StarStakingUSDT;
const { abi: stakingWETHAbi, address: stakingWETHAddress } = interfaceAbi.StarStakingWETH;
const { abi: USDCAbi, address: USDCAddress } = interfaceAbi.USDC;
const { abi: USDTAbi, address: USDTAddress } = interfaceAbi.USDT;
const { abi: WETHAbi, address: WETHAddress } = interfaceAbi.WETH;

export interface IContracts {
    stakingUSDCContract: ethers.Contract,
    stakingUSDTContract: ethers.Contract,
    stakingWETHContract: ethers.Contract,
    USDCContract: ethers.Contract,
    USDTContract: ethers.Contract,
    WETHContract: ethers.Contract,
    stakingUSDCAddress: string,
    stakingUSDTAddress: string,
    stakingWETHAddress: string,
}

export type ContractTypes = "USDCContract" | "USDTContract" | "WETHContract";
export type StakeContractTypes = "stakingUSDCContract" | "stakingUSDTContract" | "stakingWETHContract";
export type StakeAddressTypes = "stakingUSDCAddress" | "stakingUSDTAddress" | "stakingWETHAddress";

// 初始化合约
export default function getContract(): IContracts {
    const {ethereum} = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const stakingUSDCContract = new ethers.Contract(stakingUSDCAddress, stakingUSDCAbi, signer);
    const stakingUSDTContract = new ethers.Contract(stakingUSDTAddress, stakingUSDTAbi, signer);
    const stakingWETHContract = new ethers.Contract(stakingWETHAddress, stakingWETHAbi, signer);
    const USDCContract = new ethers.Contract(USDCAddress, USDCAbi, signer);
    const USDTContract = new ethers.Contract(USDTAddress, USDTAbi, signer);
    const WETHContract = new ethers.Contract(WETHAddress, WETHAbi, signer);

    return {
        stakingUSDCContract,
        stakingUSDTContract,
        stakingWETHContract,
        USDCContract,
        USDTContract,
        WETHContract,
        stakingUSDCAddress,
        stakingUSDTAddress,
        stakingWETHAddress
    }
}