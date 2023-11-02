import { Box, Flex, Text } from "@chakra-ui/react";
import resultBG from "assets/yesterday-result-bg.png";
import smodeBG from "assets/smode.png";
import gmodeBG from "assets/gmode.png";
import skewer2BG from "assets/skewer2.png";
import skewer3BG from "assets/skewer3.png";
import skewer4BG from "assets/skewer4.png";
import resultCircle from "assets/result-circle.png";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Flex direction="column" className="home-container">
      <Box className="home-banner"></Box>
      <Flex flex={1} pt="12px">
        <Flex flex={1} direction="column">
          <Flex
            aspectRatio={2}
            backgroundImage={smodeBG}
            className="home-play-mode-button"
            onClick={() => navigate("/play/s-mode")}
          ></Flex>
          <Flex
            aspectRatio={2}
            backgroundImage={gmodeBG}
            className="home-play-mode-button"
            onClick={() => navigate("/play/g-mode")}
          ></Flex>
          <Flex
            aspectRatio={2}
            backgroundImage={skewer2BG}
            className="home-play-mode-button"
          ></Flex>
          <Flex
            aspectRatio={2}
            backgroundImage={skewer3BG}
            className="home-play-mode-button"
          ></Flex>
          <Flex
            aspectRatio={2}
            backgroundImage={skewer4BG}
            className="home-play-mode-button"
          ></Flex>
        </Flex>
        <Flex flex={2} direction="column" pl="12px">
          <Flex
            direction="column"
            backgroundImage={resultBG}
            className="home-result-container"
          >
            <Flex className="home-yesterday-result-container">
              <Text className="yesterday-result-title">Yesterday result</Text>
            </Flex>
            <Flex className="home-result-circle-container">
              <Flex
                className="home-result-circle"
                backgroundImage={resultCircle}
              >
                <Text className="home-result-circle-text">12</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default HomePage;
