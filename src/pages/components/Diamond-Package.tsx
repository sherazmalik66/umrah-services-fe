import {
  Box,
  Card,
  Group,
  Text,
  TextInput,
  Button,
  Divider,
  Stack,
  Anchor,
  Container,
  Grid,
  Flex,
  Image,
  Title,
  ActionIcon,
  NumberInput,
  Badge,
  Rating,
  List,
  CheckIcon,
  CloseIcon,
  BackgroundImage,
  SegmentedControl,
} from "@mantine/core";
import image22 from "../../assets/images/img-22.jpg";
import image26 from "../../assets/images/img-26.jpg";
import image27 from "../../assets/images/img-27.jpg";
import image28 from "../../assets/images/img-28.jpg";
import image29 from "../../assets/images/img-29.jpg";
import image30 from "../../assets/images/img-30.jpg";
import image31 from "../../assets/images/img-31.jpg";
import image32 from "../../assets/images/img-32.jpg";
import image33 from "../../assets/images/img-33.png";
import IconBrandFacebook from "../../assets/icons/IconFacebook";
import IconBrandGoogle from "../../assets/icons/iconGoogle";
import IconBrandTwitter from "./iconTwitter";
import IconTag from "./iconTag";
import IconAlarm from "../../assets/icons/iconAlarm";
import IconBrandPinterest from "./iconPinterest";
import Navbar from "./Navbar";
import IconBrandMap from "./iconMap";
import IconBrandPhone from "./iconPhone";
import IconBrandMail from "./iconMail";
import IconInsta from "../auth/IconInsta";
import { useMediaQuery } from "@mantine/hooks";

function DiamondPackage() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  return (
    <>
      <Navbar />
      <Container fluid bg={"#f2f2f2"} p={0}>
        <Stack>
          <Card
            pl={isSmallscreen ? 50 : 100}
            style={{ backgroundColor: "black", color: "white" }}
            radius={0}
            h={180}
            mt={80}
          >
            <Flex align={"center"} h={"100%"}>
              <Stack gap={10}>
                <Text size="sm" color="white">
                  Home &gt; Diamond Package &gt;{" "}
                  <span style={{ color: "white" }}>Diamond Package</span>
                </Text>

                <Text fz={22} fw={500}>
                  Diamond Package
                </Text>
                <Divider size={"sm"} w={40} style={{ borderRadius: 15 }} />
              </Stack>
            </Flex>
          </Card>

          <Grid px={isSmallscreen ? 20 : 100} gutter={50}>
            <Grid.Col
              span={isSmallscreen ? 12 : 9}
              mt={isSmallscreen ? 20 : 60}
            >
              <Stack gap={20}>
                <Group justify="space-between">
                  <Title fz={22} fw={500}>
                    Diamond Package
                  </Title>
                  <Text size="sm" c={"#555555"}>
                    <b>Code:</b> FGVSAH
                  </Text>
                </Group>

                <Divider size={"xs"} />

                <Flex justify={"space-between"} wrap={"wrap"}>
                  <Group gap={4}>
                    <ActionIcon c={"orange"} bg={"transparent"}>
                      <IconAlarm />{" "}
                    </ActionIcon>
                    <Text fw={600} size="sm">
                      7 DAYS
                    </Text>
                  </Group>

                  <Group gap={4}>
                    <ActionIcon c={"orange"} bg={"transparent"}>
                      <IconTag />{" "}
                    </ActionIcon>
                    <Stack gap={0}>
                      <Text size="sm" c={"#aaaaaa"}>
                        Category:
                      </Text>
                      <Anchor c={"#ffb300"} fw={600}>
                        LUXURY PACKAGE
                      </Anchor>
                    </Stack>
                  </Group>

                  <Flex gap={8} mt={isSmallscreen ? 30 : 0}>
                    <ActionIcon
                      c={"white"}
                      color="white"
                      bg={"#6078ab"}
                      radius={20}
                      h={40}
                      w={40}
                    >
                      <IconBrandFacebook />
                    </ActionIcon>

                    <ActionIcon
                      c={"white"}
                      color="white"
                      bg={"#74baef"}
                      radius={20}
                      h={40}
                      w={40}
                    >
                      <IconBrandTwitter />
                    </ActionIcon>

                    <ActionIcon
                      c={"white"}
                      color="white"
                      bg={"#bd081c"}
                      radius={20}
                      h={40}
                      w={40}
                    >
                      <IconBrandPinterest />
                    </ActionIcon>
                    <ActionIcon
                      c={"white"}
                      color="white"
                      bg={"#e16c5e"}
                      radius={20}
                      h={40}
                      w={40}
                    >
                      <IconBrandGoogle />
                    </ActionIcon>
                  </Flex>
                </Flex>

                <Image src={image22} h={"100%"} />

                <Card bg={"transparent"} shadow="none">
                  <Flex gap={23}>
                    <Image src={image32} />
                    <Image src={image26} />
                    <Image src={image27} />
                    <Image
                      src={image28}
                      display={isSmallscreen ? "none" : "block"}
                    />
                    <Image
                      src={image29}
                      display={isSmallscreen ? "none" : "block"}
                    />
                  </Flex>
                </Card>

                <Box>
                  <SegmentedControl
                    w={isSmallscreen ? "100%" : "60%"}
                    p={0}
                    radius={0}
                    size={isSmallscreen ? "md" : "xl"}
                    data={["DESCRIPTION", "ITINERARY", "REVIEWS(0)"]}
                    color="#ffb300"
                  />

                  <Card
                    shadow="none"
                    py={isSmallscreen ? 25 : 60}
                    radius="xs"
                    bg={"transparent"}
                    style={{
                      border: "2px solid #FFC107",
                      backgroundColor: "#fff",
                    }}
                  >
                    <Stack gap={10}>
                      <Divider
                        my="sm"
                        size={"sm"}
                        display={isSmallscreen ? "none" : "block"}
                      />
                      <Flex
                        gap={isSmallscreen ? 40 : 80}
                        align={isSmallscreen ? "start" : "center"}
                        ml={isSmallscreen ? 10 : 20}
                      >
                        <Text fw={700} fz={14} tt="uppercase" c={"#4c4b4c"}>
                          Makkah Hotel
                        </Text>
                        <Text size="sm" color="dimmed">
                          Diafat Al Raja / Ramada Makka or Similar at 400
                          meters'
                        </Text>
                      </Flex>
                      <Divider my="sm" size={"xs"} />
                      <Flex
                        gap={isSmallscreen ? 40 : 84}
                        align={isSmallscreen ? "start" : "center"}
                        ml={isSmallscreen ? 10 : 20}
                      >
                        <Text fw={700} fz={14} tt="uppercase" c={"#4c4b4c"}>
                          Madina Hotel
                        </Text>
                        <Text size="sm" color="dimmed">
                          Ramada Al Haram / Hayah Plaza or Similar at 100
                          meters'
                        </Text>
                      </Flex>
                      <Divider my="sm" size={"xs"} />

                      <Box ml={isSmallscreen ? 12 : 20}>
                        <Flex gap={isSmallscreen ? 20 : 120} wrap={"wrap"}>
                          <Text fw={700} fz={14} tt="uppercase" c={"#4c4b4c"}>
                            Included
                          </Text>
                          <Flex gap={isSmallscreen ? 10 : 50}>
                            <List
                              spacing="xs"
                              center
                              icon={<CheckIcon size={16} color="green" />}
                            >
                              <List.Item fz={14} c="dimmed">
                                15 Days Premium Umrah – 7 N Makkah / 7 N Madinah
                              </List.Item>
                              <List.Item fz={14} c="dimmed" mb={12}>
                                Hotel Accommodation
                              </List.Item>
                              <List.Item fz={14} c="dimmed" mb={12}>
                                Breakfast
                              </List.Item>
                              <Text fz={14} c="dimmed" mt={12}>
                                Ziyarath
                              </Text>
                            </List>
                            <List
                              spacing="xs"
                              center
                              icon={<CheckIcon size={16} color="green" />}
                            >
                              <List.Item fz={14} c="dimmed">
                                Umrah Visa
                              </List.Item>
                              <List.Item fz={14} c="dimmed">
                                Transport
                              </List.Item>
                            </List>
                          </Flex>
                        </Flex>
                      </Box>

                      <Divider my="sm" size={"xs"} />

                      <Box ml={isSmallscreen ? 12 : 20}>
                        <Flex gap={isSmallscreen ? 60 : 80}>
                          <Text fw={700} fz={14} tt="uppercase" color="dark">
                            Not Included
                          </Text>
                          <List
                            spacing="xs"
                            center
                            icon={
                              <CloseIcon
                                size="16px"
                                color="#eb7591"
                                fontWeight={700}
                              />
                            }
                          >
                            <List.Item fz={14} c="dimmed" mb={12}>
                              Entrance fees
                            </List.Item>
                            <List.Item fz={14} c="dimmed" mb={12}>
                              Guide gratuity
                            </List.Item>
                          </List>
                        </Flex>
                      </Box>

                      <Divider my="sm" size={"xs"} />
                    </Stack>
                  </Card>
                </Box>
                <Box>
                  <Title mb={8} c={"#4c4b4c"} fz={20} fw={600}>
                    Related Tours
                  </Title>
                  <Divider
                    size={"sm"}
                    color="#ffb300"
                    w={40}
                    style={{ borderRadius: 15 }}
                  />
                </Box>

                <Grid>
                  <Grid.Col span={isSmallscreen ? 12 : 4}>
                    <Card radius={0} w={isSmallscreen ? "100%" : 270} p={0}>
                      <BackgroundImage
                        h={"280px"}
                        src={image31}
                        pos={"relative"}
                      >
                        <Box
                          bg="#ffb300"
                          h={35}
                          w="40%"
                          pos="absolute"
                          top={15}
                          left={0}
                          style={{ borderRadius: 2 }}
                        >
                          <Flex justify="center" align="center" h="100%">
                            <Text ta="center" fz={14} fw={600}>
                              $90,899.00
                            </Text>
                          </Flex>
                        </Box>
                      </BackgroundImage>
                      <Stack gap={5} px={20} mt={15}>
                        <Anchor fz={18} fw={500} pl={6} c={"#333333"}>
                          Premium Umrah
                        </Anchor>
                        <Group gap={4}>
                          <ActionIcon c={"orange"} bg={"transparent"}>
                            <IconAlarm />{" "}
                          </ActionIcon>
                          <Text fw={500} size="sm" color="dimmed">
                            6 DAYS - 5 NIGHTS
                          </Text>
                        </Group>
                        <Text size="sm" c={"#6f737a"} fw={500} pl={6}>
                          Luxurious Stay Return Airfare
                        </Text>
                      </Stack>
                      <Flex
                        mt={15}
                        h={46}
                        bg="#f4f4f4"
                        align="center"
                        justify="space-between"
                        style={{ overflow: "hidden" }}
                      >
                        <Box ml={15}>
                          <Rating
                            readOnly
                            color="yellow"
                            size="md"
                            styles={{
                              starSymbol: {
                                stroke: "orange",
                                strokeWidth: 2,
                                fill: "transparent",
                              },
                            }}
                          />
                        </Box>

                        <Text
                          pl={30}
                          component="button"
                          style={{
                            width: "150px",
                            backgroundColor: "#00AEEF",
                            color: "white",
                            border: "none",
                            padding: "10px 10px",
                            clipPath:
                              "polygon(0 0, 100% 0, 100% 100%, 0 100%, 15% 50%)",
                            cursor: "pointer",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                        >
                          READ MORE
                        </Text>
                      </Flex>
                    </Card>
                  </Grid.Col>

                  <Grid.Col span={isSmallscreen ? 12 : 4}>
                    <Card radius={0} w={isSmallscreen ? "100%" : 270} p={0}>
                      <BackgroundImage
                        h={"285px"}
                        src={image30}
                        pos={"relative"}
                      >
                        <Flex justify={"end"}>
                          <Badge
                            color="#26bdf7"
                            pos={"absolute"}
                            top={15}
                            h={35}
                            radius={3}
                          >
                            SALE!
                          </Badge>
                        </Flex>
                        <Box
                          bg="#ffb300"
                          h={35}
                          w="60%"
                          pos="absolute"
                          top={15}
                          left={0}
                          style={{ borderRadius: 2 }}
                        >
                          <Flex justify="center" align="center" h="100%">
                            <Text ta="center" fz={14} fw={500}>
                              $2,000.00{" "}
                              <span
                                style={{
                                  
                                  fontSize: "16px",
                                  fontWeight: 600,
                                }}
                              >
                                {" "}
                                $1,500.00
                              </span>
                            </Text>
                          </Flex>
                        </Box>
                      </BackgroundImage>
                      <Stack gap={5} px={20} mt={15}>
                        <Anchor fz={18} fw={500} pl={6} w={"70%"} c={"#333333"}>
                          Super Diamond Umrah Package
                        </Anchor>
                        <Group gap={4}>
                          <ActionIcon c={"orange"} bg={"transparent"}>
                            <IconAlarm />{" "}
                          </ActionIcon>
                          <Text fw={500} size="sm" color="dimmed">
                            7 DAYS - 6 NIGHTS
                          </Text>
                        </Group>
                        <Text size="sm" c={"#6f737a"} fw={500} pl={6}>
                          Luxury package With Airfare
                        </Text>
                      </Stack>
                      <Flex
                        mt={15}
                        h={46}
                        bg="#f4f4f4"
                        align="center"
                        justify="space-between"
                        style={{ overflow: "hidden" }}
                      >
                        <Box ml={15}>
                          <Rating
                            readOnly
                            color="yellow"
                            size="md"
                            styles={{
                              starSymbol: {
                                stroke: "orange",
                                strokeWidth: 2,
                                fill: "transparent",
                              },
                            }}
                          />
                        </Box>

                        <Text
                          pl={30}
                          component="button"
                          style={{
                            width: "150px",
                            backgroundColor: "#00AEEF",
                            color: "white",
                            border: "none",
                            padding: "10px 10px",
                            clipPath:
                              "polygon(0 0, 100% 0, 100% 100%, 0 100%, 15% 50%)",
                            cursor: "pointer",
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                        >
                          READ MORE
                        </Text>
                      </Flex>
                    </Card>
                  </Grid.Col>
                </Grid>
              </Stack>
            </Grid.Col>

            <Grid.Col
              span={isSmallscreen ? 12 : 3}
              px={isSmallscreen ? 23 : 0}
              top={0}
            >
              <Box>
                <Text fz={20} fw={500} ta="center" mt={isSmallscreen ? 15 : 15}>
                  Book the tour
                </Text>
                <Flex justify={"center"}>
                  <Divider w={"35%"} mb={20} size={"sm"} />
                </Flex>
              </Box>
              <Stack gap={20}>
                <Card
                  style={{
                    border: isSmallscreen ? "none" : "1px solid #e8e8e8",
                  }}
                  bg={isSmallscreen ? "white" : "transparent"}
                  shadow="none"
                  p={8}
                  radius={5}
                >
                  <Stack gap={15} px={20} py={12}>
                    <TextInput
                      placeholder="First Name"
                      style={{ borderBottom: "2px solid #e8e8e8" }}
                      styles={{
                        input: {
                          border: "none",
                          borderRadius: 0,
                          backgroundColor: "#f2f2f2",
                        },
                      }}
                    />
                    <TextInput
                      placeholder="Last Name"
                      style={{ borderBottom: "2px solid #e8e8e8" }}
                      styles={{
                        input: {
                          border: "none",
                          borderRadius: 0,
                          backgroundColor: "#f2f2f2",
                        },
                      }}
                    />
                    <TextInput
                      placeholder="Email"
                      style={{ borderBottom: "2px solid #e8e8e8" }}
                      styles={{
                        input: {
                          border: "none",
                          borderRadius: 0,
                          backgroundColor: "#f2f2f2",
                        },
                      }}
                    />
                    <TextInput
                      placeholder="Phone"
                      style={{ borderBottom: "2px solid #e8e8e8" }}
                      styles={{
                        input: {
                          border: "none",
                          borderRadius: 0,
                          backgroundColor: "#f2f2f2",
                        },
                      }}
                    />

                    <TextInput
                      placeholder="Date Book"
                      style={{ borderBottom: "2px solid #e8e8e8" }}
                      styles={{
                        input: {
                          border: "none",
                          borderRadius: 0,
                          backgroundColor: "#f2f2f2",
                        },
                      }}
                    />

                    <div
                      style={{
                       
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <NumberInput
                        value={1}
                        min={1}
                        max={10}
                        size="sm"
                        radius={0}
                        style={{ width: "60px" }}
                      />
                      <Text size="xs">Number ticket × $70800.00</Text>
                    </div>

                    <Text fw={500}>Total = $70800.00</Text>

                    <Button
                      fullWidth
                      radius={2}
                      styles={{
                        root: {
                          backgroundColor: "#26bdf7",
                          color: "white",
                          "&:hover": {
                            backgroundColor: "#1aa4d6",
                          },
                          "&:active": {
                            backgroundColor: "yellow",
                            color: "black",
                          },
                        },
                      }}
                    >
                      BOOKING NOW
                    </Button>
                  </Stack>
                </Card>
                <Stack>
                  <Card
                    shadow="md"
                    padding="lg"
                    style={{
                      backgroundImage:
                        'url("https://abeerumrah.com/wp-content/uploads/2016/11/the-pilgrims-guide-4372252_1920-300x300.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                      borderRadius: 0,
                      position: "relative",
                      color: "white",
                      overflow: "hidden",
                    }}
                  >
                    <Badge
                      bg={"#14f545"}
                      variant="filled"
                      style={{
                        position: "absolute",
                        top: 12,
                        right: -18,
                        transform: "rotate(48deg)",
                        padding: "15px 25px",
                        fontSize: "12px",
                      }}
                    >
                      SALE!
                    </Badge>

                    <Rating
                      defaultValue={5}
                      pt={10}
                      readOnly
                      size="md"
                      color="#ffb300"
                    />
                    <Text
                      fw={500}
                      fz={22}
                      w={"100%"}
                      style={{
                        position: "absolute",
                        top: "55%",
                        left: "55%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        textShadow: "0 0 5px rgba(0,0,0,0.7)",
                      }}
                    >
                      ECONOMY PACKAGE
                    </Text>
                    <Box
                      bg="#26bdf7"
                      h={43}
                      w={"60%"}
                      pos="absolute"
                      top={258}
                      left={isSmallscreen ? 156 : 120}
                      style={{ borderRadius: 2 }}
                    >
                      <Flex justify="center" align="center" h="100%">
                        <Text ta="center" c="white" fz={16}>
                          $1,000.00{" "}
                          <span
                            style={{
                              color: "white",
                              fontSize: "20px",
                              fontWeight: 700,
                            }}
                          >
                            $940.00
                          </span>
                        </Text>
                      </Flex>
                    </Box>
                  </Card>

                  <Card
                    shadow="md"
                    padding="lg"
                    style={{
                      backgroundImage:
                        'url("https://abeerumrah.com/wp-content/uploads/2016/11/mecca-107731_1920-300x300.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                      borderRadius: 0,
                      position: "relative",
                      color: "white",
                      overflow: "hidden",
                    }}
                  >
                    <Badge
                      bg={"#14f545"}
                      variant="filled"
                      style={{
                        position: "absolute",
                        top: 12,
                        right: -18,
                        transform: "rotate(48deg)",
                        padding: "15px 25px",
                        fontSize: "12px",
                      }}
                    >
                      SALE!
                    </Badge>

                    <Rating
                      defaultValue={4}
                      pt={10}
                      readOnly
                      size="md"
                      color="#ffb300"
                    />
                    <Text
                      fw={500}
                      fz={22}
                      w={"100%"}
                      style={{
                        position: "absolute",
                        top: "55%",
                        left: "55%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        textShadow: "0 0 5px rgba(0,0,0,0.7)",
                      }}
                    >
                      BUDGET UMRAH
                    </Text>
                    <Box
                      bg="#26bdf7"
                      h={43}
                      w={"60%"}
                      pos="absolute"
                      top={258}
                      left={isSmallscreen ? 156 : 120}
                      style={{ borderRadius: 2 }}
                    >
                      <Flex justify="center" align="center" h="100%">
                        <Text ta="center" c="white" fz={16}>
                          $529.00 {"  "}
                          <span
                            style={{
                              color: "white",
                              fontSize: "20px",
                              fontWeight: 600,
                            }}
                          >
                            $489.00
                          </span>
                        </Text>
                      </Flex>
                    </Box>
                  </Card>

                  <Card
                    shadow="md"
                    padding="lg"
                    style={{
                      backgroundImage:
                        'url("https://abeerumrah.com/wp-content/uploads/2016/11/u-4-300x300.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "300px",
                      borderRadius: 0,
                      color: "white",
                      overflow: "hidden",
                    }}
                  >
                    <Rating
                      pt={10}
                      readOnly
                      size="md"
                      color="#ffb300"
                      styles={{
                        starSymbol: {
                          stroke: "orange",
                          strokeWidth: 2,
                          fill: "transparent",
                        },
                      }}
                    />
                    <Text
                      fw={500}
                      fz={22}
                      w={"100%"}
                      style={{
                        position: "absolute",
                        top: "45%",
                        left: "55%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        textShadow: "0 0 5px rgba(0,0,0,0.7)",
                      }}
                    >
                      SEMI DELUX PACKAGE
                    </Text>
                    <Box
                      bg="#26bdf7"
                      h={42}
                      w="45%"
                      pos="absolute"
                      top={258}
                      left={isSmallscreen ? 215 : 165}
                      style={{ borderRadius: 2 }}
                    >
                      <Flex justify="center" align="center" h="100%">
                        <Text ta="center" c="white" fz={18}>
                          $60,000.00
                        </Text>
                      </Flex>
                    </Box>
                  </Card>
                </Stack>
              </Stack>
            </Grid.Col>
          </Grid>

          <Card
            shadow="md"
            px={isSmallscreen ? 30 : 100}
            pt={isSmallscreen ? 40 : 80}
            mt={isSmallscreen ? 15 : 80}
            radius={0}
            withBorder
            style={{ backgroundColor: "#434E51", color: "#fff" }}
          >
            <Flex gap={isSmallscreen ? 30 : 60} wrap={"wrap"}>
              <Stack gap={4} style={{ maxWidth: isSmallscreen ? "100%" : 250 }}>
                <Text fw={isSmallscreen ? 500 : 500} size="lg">
                  CONTACT
                </Text>
                <Text size="sm" color="gray.4">
                  We provide you 24 hour support and below our contact details!
                </Text>
                <Group gap={6} mt={20}>
                  <IconBrandMap />

                  <Text size="xs" color="gray.4">
                    Khalidiya, Mohd. Gazzaz St. Makkah
                  </Text>
                </Group>
                <Flex gap={6}>
                  <IconBrandPhone />
                  <Text size="xs" color="gray.4">
                    0125305251 | Toll Free: 920001064
                  </Text>
                </Flex>
                <Group gap={6}>
                  <IconBrandMail />
                  <Anchor size="xs" c="gray.4">
                    headoffie@abeerumrah.com
                  </Anchor>
                </Group>
              </Stack>

              <Stack gap="xs">
                <Text fw={isSmallscreen ? 500 : 500} size="lg">
                  OUR MENU
                </Text>
                <Box w={300}>
                  <Anchor size="sm" c={"white"}>
                    About us
                  </Anchor>
                  <Divider color="#5b6366" size={"xs"} />
                </Box>
                <Anchor href="#" size="sm" c={"white"}>
                  Transportation
                </Anchor>
                <Divider color="#5b6366" size={"xs"} />
                <Anchor href="#" size="sm" c={"white"}>
                  Hotels
                </Anchor>
                <Divider color="#5b6366" size={"xs"} />
                <Anchor href="#" size="sm" c={"white"}>
                  Contact
                </Anchor>
              </Stack>

              <Stack gap="xs">
                <Text fw={500} size="lg">
                  ABEER UMRAH
                </Text>
                <Image
                  style={{ objectFit: "contain" }}
                  src={image33}
                  w={55}
                  h={55}
                />
              </Stack>
            </Flex>

            <Divider color="gray.8" my="md" />

            <Flex justify={"space-between"} wrap={"wrap"}>
              <Text size="sm" color="gray.4">
                Copyright © 2020 Abeer Umrah Services All Rights Reserved
              </Text>
              <Flex align={"center"} gap={isSmallscreen ? "0" : "xs"}>
                <Text fz={14} color="gray.4">
                  | Powered by Techclone Web Solutions |{" "}
                </Text>
                <ActionIcon size={20} bg={"transparent"}>
                  <IconBrandTwitter />
                </ActionIcon>
                <ActionIcon size={20} bg={"transparent"}>
                  <IconBrandFacebook />
                </ActionIcon>
                <ActionIcon size={20} bg={"transparent"}>
                  <IconInsta />
                </ActionIcon>
              </Flex>
            </Flex>
          </Card>
        </Stack>
      </Container>
    </>
  );
}

export default DiamondPackage;
