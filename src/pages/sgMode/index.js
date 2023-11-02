import { Box, Button, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";
import smodeBG from "assets/smode.png";
import gmodeBG from "assets/gmode.png";
import skewer2BG from "assets/skewer2.png";
import skewer3BG from "assets/skewer3.png";
import skewer4BG from "assets/skewer4.png";
import { initMegaBetMainContract, play } from "utils/blockchain/zksync/model/megabet-main";
const modeList = [
  {
    name: "S-MODE",
    key: "s-mode",
    image: smodeBG,
    guide:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    name: "G-MODE",
    key: "g-mode",
    image: gmodeBG,
    guide:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];

const SGMode = () => {
  const localtion = useLocation();
  const playMode = useMemo(() => {
    return modeList.find(
      (e) => e.key == localtion.pathname.replace("/play/", "")
    );
  }, [localtion]);
  const listBetNumber = Array.from({ length: 99 });
  const [betNumber, setBetNumber] = useState([]);
  const [betValue, setBetValue] = useState(null);

  const playBet = async () => {
    console.log('Play bet');
    await initMegaBetMainContract();
    const betSessionId = 1;
    const luckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const mode = 1;
    const betAmount = '100000';
    await play(betSessionId, luckyNumbers, mode, betAmount);
  }

  return (
    <Flex direction="column" className="play-mode-container">
      <Flex>
        <Flex backgroundImage={playMode.image} className="play-mode-image" />
        <Flex className="play-mode-guide" direction="column">
          <Text className="guide-title">How to play</Text>
          <Text className="guide-content">{playMode?.guide}</Text>
        </Flex>
      </Flex>
      <Flex direction="column" w="full" mt="12px">
        <SimpleGrid columns={10} spacing={2}>
          {listBetNumber.map((e, index) => (
            <Flex
              className={`bet-number-container ${
                betNumber.includes(index) && "selected"
              }`}
              onClick={() => {
                if (betNumber.length < 3) setBetNumber([...betNumber, index]);
              }}
            >
              {index + 1}
            </Flex>
          ))}
        </SimpleGrid>
        <Button
          isDisabled={betNumber.length < 3}
          mt="12px"
          onClick={() => setBetNumber([])}
        >
          Clear bet
        </Button>
        <Input
          value={betValue}
          mt="12px"
          onChange={(event) => {console.log(event.target)}}
          type="number"
        />
        <Button mt="12px" onClick={() => playBet()}>Confirm</Button>
      </Flex>
    </Flex>
  );
};

export default SGMode;
