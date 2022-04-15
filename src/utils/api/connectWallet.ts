// 连接metamask钱包
export const connectWallet = async() => {
    let account = "";
    try {
        const ethereum = window.ethereum;
        if(!window.ethereum) {
            alert("please install metamask")
            return;
        }
        account = await ethereum.request({
            method: "eth_requestAccounts"
        })
        console.log(account);
    } catch (error) {
        console.log(error);
        // notification.open({
        //     message: '授权连接metamask，取消',
        //     description:
        //         '您取消了该交易的钱包签名，请重试',
        //         onClick: () => {
        //             console.log('Notification Clicked!');
        //         },
        // });
    }
    return account;
}