import MegaBetMainContractAbi from "utils/blockchain/contracts/megabet-main";
import { parseEther } from "viem";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import config from "../config";
import * as ethers from "ethers";

export const useMegabetContract = ({ fn }) => {
  const deployMode = "testnet";
  const { address } = useAccount();

  const { data, error, isError, write } = useContractWrite({
    address: config[deployMode].contract_address.megabet_main,
    abi: MegaBetMainContractAbi.abi,
    functionName: fn,
  });
  //   const { isLoading, isSuccess } = useWaitForTransaction({
  //     hash: data?.hash,
  //   });
  const playBetContract = (betSessionId, luckyNumbers, mode, betAmount) => {
    const value = ethers.BigNumber.from(parseEther(betAmount)).mul(luckyNumbers.length);
    write({
      address,
      args: [betSessionId, luckyNumbers, mode, parseEther(betAmount)],
      value: value,
    });
  };
  // define another function here
  const functionName = () => {
    //
  };
  return { playBetContract, functionName };
};
