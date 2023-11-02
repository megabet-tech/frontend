import { Provider } from "zksync-web3";
import * as ethers from "ethers";
import MegaBetMainContractAbi from "../../contracts/megabet-main";
import config from "../config";

let megaBetMainContract;

export async function initMegaBetMainContract() {
    const deployMode = 'testnet';
    const provider = new Provider(config[deployMode].network.url);
    megaBetMainContract = new ethers.Contract(
        config[deployMode].contract_address.megabet_main,
        MegaBetMainContractAbi.abi,
        provider
    );
}

export async function play(betSessionId, luckyNumbers, mode, betAmount) {
    if (!megaBetMainContract) {
        return null;
    }
    const overrides = {value: ethers.utils.parseEther("0.000000000001")}
    const gasPrice = megaBetMainContract.estimateGas.play(betSessionId, luckyNumbers, mode, betAmount, overrides);
    console.log(gasPrice.toString());
}
