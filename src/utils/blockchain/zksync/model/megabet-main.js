import { Provider } from "zksync-web3";
import * as ethers from "ethers";
import MegaBetMainContractAbi from "../../contracts/megabet-main";
import config from "../config";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

let megaBetMainContract = null;
let provider = null;

export async function initMegaBetMainContract() {
  const deployMode = "testnet";
  provider = new Provider(config[deployMode].network.url);
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
  const deployMode = "testnet";
  //   const { config } = usePrepareContractWrite({
  //     address: config[deployMode].contract_address.megabet_main,
  //     abi: MegaBetMainContractAbi.abi,
  //     functionName: "play",
  //     args: [betSessionId, luckyNumbers, mode, betAmount],
  //   });

  //   const { data, error, isError, write } = useContractWrite(config);
  //   write({ overrides: { value: ethers.utils.parseEther("0.01") } });

  // console.log(megaBetMainContract);
  // console.log(provider.getSigner());
  // const overrides = {value: ethers.utils.parseEther("0.000000000001")}
  // const gasPrice = megaBetMainContract.estimateGas.play(betSessionId, luckyNumbers, mode, betAmount);
  // console.log(gasPrice.toString());
}
