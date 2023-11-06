import {
  Flex,
  SimpleGrid,
  Table,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import currentLiveBanner from "assets/currentLive.png";
import resultCircle from "assets/result-circle.png";
import specialNumberBG from "assets/specialNumberBG.png";
import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
const host = "http://localhost:3000";

const DrawLive = () => {
  const [currentNumber, setCurrentNumber] = useState([]);
  const [specialNumber, setSpecialNumber] = useState(0);
  const [id, setId] = useState();

  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = socketIOClient.connect(host);

    socketRef.current.on("getId", (data) => {
      setId(data);
    }); // phần này đơn giản để gán id cho mỗi phiên kết nối vào page. Mục đích chính là để phân biệt đoạn nào là của mình đang chat.

    socketRef.current.on("sendDataServer", (dataGot) => {
      setCurrentNumber((prev) => {
        return [...prev, +dataGot.data];
      });
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <Flex direction="column" mt="12px">
      <Flex
        backgroundImage={currentLiveBanner}
        aspectRatio={1.82}
        borderRadius="4px"
      />
      <SimpleGrid mt="12px" columns={2} spacing="8px">
        <Flex direction="column">
          <SimpleGrid columns={6} spacing="8px">
            {Array.from({ length: 26 }).map((e, index) => {
              if (currentNumber[index] > 0)
                return (
                  <Flex
                    aspectRatio={1}
                    bgColor="#7301B6"
                    borderRadius="40px"
                    justify="center"
                    alignItems="center"
                    key={index}
                  >
                    <Text sx={{ color: "#FFF", fontSize: "12px" }}>
                      {currentNumber[index]}
                    </Text>
                  </Flex>
                );
              return (
                <Flex
                  aspectRatio={1}
                  bgColor="#D1D0D0"
                  borderRadius="40px"
                  justify="center"
                  alignItems="center"
                  key={index}
                >
                  <Text sx={{ color: "#FFF", fontSize: "12px" }}>{0}</Text>
                </Flex>
              );
            })}
          </SimpleGrid>
        </Flex>
        <Flex
          borderRadius="4px"
          backgroundImage={specialNumberBG}
          aspectRatio={0.88}
          direction="column"
        >
          <Text
            sx={{
              color: "#FFF",
              padding: "8px",
              fontWeight: "700",
            }}
          >
            Special Draw
          </Text>
          <Flex flex={1} direction="column">
            <Flex
              backgroundImage={resultCircle}
              aspectRatio={1}
              w="80%"
              alignSelf="center"
              backgroundSize="cover"
              justify="center"
              alignItems="center"
            >
              <Text
                sx={{
                  color: "#FFF",
                  fontSize: "42px",
                  fontWeight: "700",
                }}
              >
                {specialNumber > 0 ? specialNumber : "-"}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </SimpleGrid>
      <Flex direction="column" mt="20px">
        <Text
          sx={{
            fontWeight: "bold",
          }}
        >
          Winners Result
        </Text>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Game Mode</Th>
                <Th isNumeric>Total Winners </Th>
                <Th isNumeric>Total Prize</Th>
              </Tr>
            </Thead>
            {/* <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody> */}
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};
export default DrawLive;
