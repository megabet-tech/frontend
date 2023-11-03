import MegaBetMainContractAbi from "utils/blockchain/contracts/megabet-main";
import { parseEther } from "viem";
import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import config from "../config";
import * as ethers from "ethers";

export const useMegabetContract = ({ fn }) => {
  const deployMode = "testnet";
  const { config: contractConfig } = usePrepareContractWrite({
    address: config[deployMode].contract_address.megabet_main,
    abi: MegaBetMainContractAbi.abi,
    functionName: fn,
  });
  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  const playBetContract = (betSessionId, luckyNumbers, mode, betAmount) => {
    // write({
    //   args: [betSessionId, luckyNumbers, mode, betAmount],
    //   from: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
    //   value: parseEther("0.01"),
    // });
    write({
      args: [betSessionId, luckyNumbers, mode, betAmount],
      value: parseEther("0.01"),
    });
  };
  // define another function here
  const functionName = () => {
    //
  };
  return { playBetContract, functionName };
};
