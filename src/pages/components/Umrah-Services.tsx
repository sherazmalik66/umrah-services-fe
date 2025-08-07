import {
  BackgroundImage,
  Card,
  Center,
  Flex,
  Stack,
  Text,
  Title,
  Image,
  Container,
  SimpleGrid,
  Group,
  Rating,
  ActionIcon,
  Box,
  Button,
  TextInput,
} from "@mantine/core";
import image11 from "../../assets/images/img-11.avif";
import image12 from "../../assets/images/img-12.avif";
import image13 from "../../assets/images/img-13.avif";
import image14 from "../../assets/images/img-14.avif";
import Navbar from "./Navbar";
import { useMediaQuery } from "@mantine/hooks";
import IconBrandTwitter from "./iconTwitter";
import IconBrandFacebook from "./iconFacebook";
import IconInsta from "../auth/IconInsta";
import IconBrandGoogle from "../../assets/icons/iconGoogle";

function UmrahServices() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)")
  return (
    <>
     <Navbar/>
      <Card shadow="none" padding={0} radius={0} h={250} mt={80}>
        <BackgroundImage src={image11} radius={0} h="100%" w="100%">
          <Center
            h={"100%"}
            c={"white"}
            style={{
              flexDirection: "column",
            }}
          >
            <Stack>
              <Title fz={isSmallscreen ? 36 : 58} fw={600} ta={"center"}>
                Umrah Services
              </Title>
              <Flex justify={"center"}>
                <Text fz={16} w={isSmallscreen ? "75%" : "65%"} ta={"center"}>
                  Explore our custom and built-in Umrah packages tailored to
                  your spiritual journey and travel needs.
                </Text>
              </Flex>
            </Stack>
          </Center>
        </BackgroundImage>
      </Card>

      <Container fluid bg={"transparent"} px={isSmallscreen ? 15 : 60} py={isSmallscreen ? 20 : 70}>
        <Stack gap={isSmallscreen ? 30 : 60}>
          <Stack>
            <Title fz={isSmallscreen ? 36 : 48} fw={600} ta={"center"}>
              Umrah Services Offered
            </Title>
            <Flex justify={"center"}>
              <Text fz={18} fw={500} w={isSmallscreen ? "100%" : "48%"} ta={"center"}>
                Explore customized and built-in Umrah packages tailored to
                fulfill your spiritual journey needs.
              </Text>
            </Flex>
          </Stack>

          <SimpleGrid cols={{
          xs:1,
          sm: 2,
          md: 2, 
          }} spacing={20}>
            <Card bg={"#e3f2fd"} h={520} p={0} radius={isSmallscreen ? 10 : 3} shadow={isSmallscreen ? "none" : "sm"}> 
              <Stack gap={10} px={isSmallscreen ? 30 : 50} py={isSmallscreen ? 20 : 50}>
                <Title order={3} fw={600}>
                  Built-In Packages
                </Title>
                <Text size="md" w={"90%"} c={"#6f737a"}>
                  Choose from our pre-designed Umrah packages that offer
                  convenience and spiritual fulfillment for travelers.
                </Text>
              </Stack>
              <Image
                src={image12}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
            </Card>

            <Card bg={"#e3f2fd"} h={520} p={0} radius={isSmallscreen ? 10 : 3} shadow={isSmallscreen ? "none" : "sm"}>
              <Stack gap={10} px={isSmallscreen ? 30 : 50} py={isSmallscreen ? 20 : 50}>
                <Title order={3} fw={600}>
                  Custom Umrah Packages
                </Title>
                <Text size="md" w={"90%"} c={"#6f737a"}>
                  Choose from our pre-designed Umrah packages that offer
                  convenience and spiritual fulfillment for travelers.
                </Text>
              </Stack>
              <Image
                src={image13}
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
              />
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

      <Container fluid bg={"transparent"} px={isSmallscreen ? 15 : 60} py={isSmallscreen ? 10 : 60}>
        <Stack gap={isSmallscreen ? 15 : 40}>
          <Stack gap={isSmallscreen ? 10 : 20}>
            <Title fz={isSmallscreen ? 36 : 48} fw={600} ta={"center"}>
              Customer Reviews
            </Title>
            <Flex justify={"center"}>
              <Text fz={16} fw={500} w={isSmallscreen ? "100%" : "30%"} ta={"center"}>
                See what our clients say about our Umrah services.
              </Text>
            </Flex>
          </Stack>

          <SimpleGrid cols={{
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2
          }} spacing={20}>
            <Card
              bg={"#e3f2fd"}
              shadow="none"
              px={40}
              py={40}
              padding="xl"
              radius={isSmallscreen ? 8 : 2}
            >
              <Stack gap={40}>
                <Stack gap={25}>
                  <Rating defaultValue={5} readOnly size="sm" color="black" />
                  <Text fz={18} fw={500} mb="lg" c={"#6f737a"}>
                    Zaroorat provided exceptional service for my Umrah trip.
                    Truly a memorable experience!
                  </Text>
                </Stack>

                <Group align="center">
                  <Image
                    src={image12}
                    style={{ overflow: "hidden", objectFit: "cover" }}
                    w={50}
                    h={50}
                    radius="xl"
                  />
                  <Stack gap={2}>
                    <Text size="md" fw={700}>
                      Aisha Khan
                    </Text>
                    <Text size="sm" fw={600} color="dimmed">
                      Mecca City
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Card>

            <Card bg={"#e3f2fd"} shadow="none" px={40} py={40} radius={isSmallscreen ? 8 : 2}>
              <Stack gap={40}>
                <Stack gap={25}>
                  <Rating defaultValue={5} readOnly size="sm" color="black" />
                  <Text fz={18} fw={500} mb="lg" c={"#6f737a"}>
                    The custom packages made my Umrah experience unforgettable.
                    Highly recommend Zaroorat!
                  </Text>
                </Stack>

                <Group align="center">
                  <Image
                    src={image14}
                    style={{ overflow: "hidden", objectFit: "cover" }}
                    w={50}
                    h={50}
                    radius="xl"
                  />
                  <Stack gap={2}>
                    <Text size="md" fw={700}>
                      Ali Ahmed
                    </Text>
                    <Text size="sm" fw={600} color="dimmed">
                      Medina City
                    </Text>
                  </Stack>
                </Group>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

         <Card bg={"#1a237e"} px={isSmallscreen ? 25 : 55} py={isSmallscreen ? 20 : 40} radius={0}>
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

export default UmrahServices;
