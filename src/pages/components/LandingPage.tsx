import {
  Card,
  Flex,
  Title,
  Text,
  Button,
  Stack,
  Overlay,
  Box,
  Container,
  Image,
  Grid,
  BackgroundImage,
  SimpleGrid,
  Group,
  Textarea,
  TextInput,
  ActionIcon,
} from "@mantine/core";

import video from "../../assets/images/video.mp4";
import image1 from "../../assets/images/img-1.avif";
import image2 from "../../assets/images/img-2.avif";
import image3 from "../../assets/images/img-3.avif";
import image4 from "../../assets/images/img-4.avif";
import image5 from "../../assets/images/img-5.avif";
import image6 from "../../assets/images/img-6.avif";
import image7 from "../../assets/images/img-7.avif";
import image8 from "../../assets/images/img-8.avif";
import image9 from "../../assets/images/img-9.avif";
import image10 from "../../assets/images/img-10.avif";
import image11 from "../../assets/images/img-11.avif";
import Navbar from "./Navbar";
import { useMediaQuery } from "@mantine/hooks";
import IconBrandTwitter from "./iconTwitter";
import IconInsta from "../auth/IconInsta";
import IconBrandFacebook from "./iconFacebook";
import IconBrandGoogle from "../../assets/icons/iconGoogle";

export default function LandingPage() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  return (
    <>
      <Navbar />

      <Box
        pos="relative"
        h={isSmallscreen ? "100%" : "100vh"}
        w="100%"
        style={{ overflow: "hidden" }}
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -3,
          }}
        />
        <Overlay color="#000" opacity={0.3} zIndex={0} />
        <Flex justify="center" align="center" h="100%">
          <Card
            w={isSmallscreen ? "100%" : "50%"}
            bg="transparent"
            shadow="none"
          >
            <Stack gap={20} mt={isSmallscreen ? 90 : 0}>
              <Flex justify="center">
                <Title
                  fz={isSmallscreen ? 36 : 62}
                  ta="center"
                  fw={600}
                  c="white"
                >
                  Explore Your Dream Travel Packages Today
                </Title>
              </Flex>
              <Flex justify="center">
                <Text
                  fz={16}
                  w={isSmallscreen ? "90%" : "80%"}
                  ta="center"
                  c="white"
                >
                  Custom and built-in Umrah packages and global travel
                  experiences await you. Discover now!
                </Text>
              </Flex>
              <Flex
                justify="center"
                gap={isSmallscreen ? 20 : 10}
                wrap={"wrap"}
              >
                <Button
                  variant="outline"
                  w={isSmallscreen ? "80%" : 200}
                  h={55}
                  fz={16}
                  style={{
                    borderRadius: 35,
                    border: "1px solid #e6e4e3",
                  }}
                  c="white"
                >
                  Book
                </Button>
                <Button
                  bg={"transparent"}
                  c="white"
                  w={isSmallscreen ? "80%" : 200}
                  h={55}
                  fz={16}
                  style={{
                    borderRadius: 35,
                  }}
                >
                  Learn
                </Button>
              </Flex>
            </Stack>
          </Card>
        </Flex>
      </Box>

      <Container
        fluid
        px={isSmallscreen ? 10 : 60}
        py={isSmallscreen ? 30 : 70}
      >
        <Grid p={5}>
          <Grid.Col
            span={{
              sm: 6,
              md: 6,
              lg: 4,
              xl: 4,
            }}
          >
            <Card
              p={2}
              h={isSmallscreen ? 280 : 460}
              radius={20}
              py={isSmallscreen ? 0 : 70}
              px={10}
              bg={"transparent"}
              shadow="none"
            >
              <Stack gap={isSmallscreen ? 20 : 30}>
                <Title
                  fz={isSmallscreen ? 36 : 46}
                  fw={600}
                  w={isSmallscreen ? "100%" : "50%"}
                  ta={isSmallscreen ? "center" : "start"}
                >
                  About Zaroorat
                </Title>
                <Text
                  fz={16}
                  w={isSmallscreen ? "100%" : "95%"}
                  c={"#888888"}
                  ta={isSmallscreen ? "center" : "start"}
                >
                  Your gateway to exceptional Umrah services and global travel
                  packages tailored to your unique needs.
                </Text>
                <Flex justify={isSmallscreen ? "center" : "start"}>
                  <Button
                    variant="outline"
                    w={isSmallscreen ? "80%" : 200}
                    h={55}
                    mt={isSmallscreen ? 15 : 0}
                    fz={16}
                    style={{
                      borderRadius: 35,
                      border: "1px solid ",
                    }}
                    c="black"
                  >
                    Explore
                  </Button>
                </Flex>
              </Stack>
            </Card>
          </Grid.Col>
          <Grid.Col
            span={{
              sm: 6,
              md: 6,
              lg: 4,
              xl: 4,
            }}
          >
            <Card p={0} radius={20} bg={"transparent"}>
              <Image h={460} src={image1} />
            </Card>
          </Grid.Col>
          <Grid.Col
            span={{
              sm: 6,
              md: 6,
              lg: 4,
              xl: 4,
            }}
          >
            <Card p={0} radius={20} bg={"transparent"}>
              <Image h={460} src={image2} />
            </Card>
          </Grid.Col>
        </Grid>
      </Container>

      <Stack gap={0}>
        <Container
          fluid
          bg={"#e3f2fd"}
          w={"100vw"}
          h={isSmallscreen ? "210vh" : "110vh"}
          px={isSmallscreen ? 15 : 60}
          py={isSmallscreen ? 10 : 70}
        >
          <Stack gap={isSmallscreen ? 30 : 60}>
            <Stack px={5}>
              <Title fz={isSmallscreen ? 36 : 48} fw={600} ta={"center"}>
                Travel Services Offered
              </Title>
              <Flex justify={"center"}>
                <Text
                  fz={16}
                  fw={500}
                  w={isSmallscreen ? "90%" : "48%"}
                  ta={"center"}
                >
                  Explore our Umrah services and global travel packages tailored
                  to your needs and preferences.
                </Text>
              </Flex>
            </Stack>
            <Grid>
              <Grid.Col
                span={{
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 6,
                  xl: 12,
                }}
              >
                <BackgroundImage
                  px={isSmallscreen ? 10 : 30}
                  radius={20}
                  h={isSmallscreen ? 380 : 300}
                  src={image3}
                  pos={"relative"}
                >
                  <Card
                    h={isSmallscreen ? 150 : 190}
                    w={"90%"}
                    radius={0}
                    pos={"absolute"}
                    top={isSmallscreen ? 300 : 225}
                    left={isSmallscreen ? "5%" : 30}
                    py={isSmallscreen ? 20 : 40}
                  >
                    <Stack gap={13}>
                      <Title fz={isSmallscreen ? 18 : 20} ta={"center"}>
                        Global Travel Packages
                      </Title>
                      <Flex justify={"center"}>
                        <Text
                          ta={"center"}
                          w={"90%"}
                          fw={500}
                          fz={isSmallscreen ? 14 : 16}
                          c={"#727479"}
                        >
                          Discover diverse travel packages that cater to your
                          wanderlust and explore the world with us.
                        </Text>
                      </Flex>
                    </Stack>
                  </Card>
                </BackgroundImage>
              </Grid.Col>

              <Grid.Col
                mt={isSmallscreen ? 70 : 0}
                span={{
                  xs: 12,
                  sm: 12,
                  md: 6,
                  lg: 6,
                  xl: 12,
                }}
              >
                <BackgroundImage
                  px={isSmallscreen ? 10 : 40}
                  radius={20}
                  h={isSmallscreen ? 380 : 300}
                  src={image4}
                  pos={"relative"}
                >
                  <Card
                    h={isSmallscreen ? 150 : 190}
                    w={"90%"}
                    radius={0}
                    pos={"absolute"}
                    top={isSmallscreen ? 300 : 225}
                    left={isSmallscreen ? "5%" : 30}
                    py={isSmallscreen ? 20 : 40}
                  >
                    <Stack gap={13}>
                      <Title fz={isSmallscreen ? 18 : 20} ta={"center"}>
                        Umrah Package Options
                      </Title>
                      <Flex justify={"center"}>
                        <Text
                          ta={"center"}
                          w={"90%"}
                          fw={500}
                          fz={isSmallscreen ? 14 : 16}
                          c={"#727479"}
                        >
                          Choose from custom or built-in packages designed to
                          enhance your Umrah experience with ease.
                        </Text>
                      </Flex>
                    </Stack>
                  </Card>
                </BackgroundImage>
              </Grid.Col>
            </Grid>
          </Stack>
        </Container>

        <Container
          fluid
          bg={"transparent"}
          px={isSmallscreen ? 15 : 60}
          py={isSmallscreen ? 15 : 70}
        >
          <Stack gap={isSmallscreen ? 25 : 60}>
            <Stack>
              <Title fz={isSmallscreen ? 36 : 48} fw={600} ta={"center"}>
                Gallery
              </Title>
              <Flex justify={"center"}>
                <Text
                  fz={16}
                  fw={500}
                  w={isSmallscreen ? "100%" : "48%"}
                  ta={"center"}
                >
                  Explore our travel packages and unforgettable experiences
                  worldwide.
                </Text>
              </Flex>
            </Stack>

            <SimpleGrid
              cols={{
                xs: 1,
                sm: 2,
                md: 2,
              }}
              spacing={20}
            >
              <Card h={450} p={0} bg={"transparent"} shadow="none">
                <Image h={"100%"} radius={20} src={image5}></Image>
              </Card>
              <Card h={450} p={0} bg={"transparent"} shadow="none">
                <Image h={"100%"} radius={20} src={image7}></Image>
              </Card>
              <Card h={450} p={0} bg={"transparent"} shadow="none">
                <Image h={"100%"} radius={20} src={image8}></Image>
              </Card>
              <Card h={450} p={0} bg={"transparent"} shadow="none">
                <Image h={"100%"} radius={20} src={image6}></Image>
              </Card>

              <Card h={450} p={0} bg={"transparent"} shadow="none">
                <Image h={"100%"} radius={20} src={image9}></Image>
              </Card>
              <Card h={450} p={0} bg={"transparent"} shadow="none">
                <Image h={"100%"} radius={20} src={image10}></Image>
              </Card>
            </SimpleGrid>
          </Stack>
        </Container>

        <Container
          fluid
          w={"100vw"}
          px={isSmallscreen ? 20 : 60}
          py={isSmallscreen ? 20 : 70}
        >
          <Stack gap={isSmallscreen ? 20 : 60}>
            <Stack gap={isSmallscreen ? 15 : 40}>
              <Title fz={isSmallscreen ? 34 : 48} fw={600} ta={"center"}>
                Get in Touch With Us
              </Title>
              <Flex justify={"center"}>
                <Text
                  fz={16}
                  fw={500}
                  w={isSmallscreen ? "100%" : "30%"}
                  ta={"center"}
                >
                  Contact us for personalized Umrah and travel package
                  inquiries.
                </Text>
              </Flex>
            </Stack>

            <SimpleGrid
              cols={{
                xs: 1,
                sm: 1,
                md: 1,
                lg: 2,
              }}
              spacing={0}
              px={isSmallscreen ? 0 : 40}
            >
              <Card
                bg={"#e3f2fd"}
                px={isSmallscreen ? 20 : 50}
                py={30}
                radius={isSmallscreen ? 10 : 20}
                h={450}
              >
                <Stack gap={25}>
                  <TextInput
                    label="Your First Name"
                    placeholder="Enter your first name"
                    radius="md"
                    size="lg"
                  />
                  <TextInput
                    size="lg"
                    label="Your Email Address*"
                    placeholder="Enter your email address"
                    radius="md"
                  />
                  <Textarea
                    label="Your Message*"
                    placeholder="Type your message here"
                    radius="md"
                    rows={3}
                  />
                  <Group justify={isSmallscreen ? "center" : "start"}>
                    <Button
                      type="submit"
                      size="md"
                      h={52}
                      w={isSmallscreen ? "80%" : 240}
                      radius="xl"
                      bg={"#3949ab"}
                    >
                      Submit Your Inquiry
                    </Button>
                  </Group>
                </Stack>
              </Card>

              <Card
                h={450}
                p={0}
                bg={"transparent"}
                shadow="none"
                display={isSmallscreen ? "none" : "block"}
              >
                <Flex align={"center"} h={"100%"}>
                  <Image
                    h={"80%"}
                    w={"80%"}
                    style={{
                      borderTopRightRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderTopLeftRadius: "0",
                      borderBottomLeftRadius: "0",
                    }}
                    src={image11}
                  />
                </Flex>
              </Card>
            </SimpleGrid>
          </Stack>
        </Container>
      </Stack>

      <Card
        bg={"#1a237e"}
        px={isSmallscreen ? 25 : 55}
        py={isSmallscreen ? 20 : 40}
        radius={0}
      >
        <Flex justify={"space-between"} gap={40} wrap={"wrap"} pt={20}>
          <Stack gap="xs">
            <Text fz={22} fw={600} c={"white"}>
              Travel
            </Text>
            <Text size="sm" c={"white"} w={isSmallscreen ? "100%" : "80%"}>
              Explore Umrah and global travel packages with us.
            </Text>
            <Group mt="md">
              <ActionIcon size={isSmallscreen ? 20 : 30} bg={"transparent"}>
                <IconBrandTwitter />
              </ActionIcon>
              <ActionIcon size={isSmallscreen ? 20 : 30} bg={"transparent"}>
                <IconBrandFacebook />
              </ActionIcon>
              <ActionIcon size={isSmallscreen ? 20 : 30} bg={"transparent"}>
                <IconInsta />
              </ActionIcon>
              <ActionIcon size={isSmallscreen ? 20 : 30} bg={"transparent"}>
                <IconBrandGoogle />
              </ActionIcon>
            </Group>
          </Stack>

          <Flex
            gap={isSmallscreen ? 30 : 80}
            w={isSmallscreen ? "100%" : "50%"}
            direction={isSmallscreen ? "column" : "row"}
          >
            <Stack gap={isSmallscreen ? 8 : 15}>
              <Text fz={16} fw={600} c={"white"}>
                PACKAGES
              </Text>
              <Box>
                <Text fz={16} c={"white"}>
                  +1234567890
                </Text>
                <Text fz={16} c={"white"}>
                  info@zaroorat.com
                </Text>
              </Box>
            </Stack>

            <Stack gap={15} w={"100%"}>
              <Text c={"white"} size="md" fw={600}>
                SERVICES
              </Text>

              <TextInput
                placeholder="Your email for updates"
                radius="md"
                label="Enter your email address"
                size="lg"
                c={"white"}
              />
              <Button
                variant="filled"
                fz={14}
                fw={500}
                radius={30}
                bg={"#3949ab"}
                w={260}
                h={54}
              >
                Submit your travel inquiry
              </Button>
            </Stack>
          </Flex>
        </Flex>
        <Text
          size="sm"
          mt={30}
          c={"white"}
          ta={isSmallscreen ? "center" : "start"}
        >
          © 2025. All rights reserved.
        </Text>
      </Card>
    </>
  );
}
