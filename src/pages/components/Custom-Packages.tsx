import {
  Card,
  Flex,
  Stack,
  Title,
  Text,
  Container,
  SimpleGrid,
  BackgroundImage,
  Box,
  Button,
  Grid,
  Group,
  Textarea,
  TextInput,
  ActionIcon,
} from "@mantine/core";

import image17 from "../../assets/images/img-17.avif";
import image18 from "../../assets/images/img-18.avif";
import image19 from "../../assets/images/img-19.avif";
import Navbar from "./Navbar";
import { useMediaQuery } from "@mantine/hooks";
import IconBrandTwitter from "./iconTwitter";
import IconBrandFacebook from "./iconFacebook";
import IconInsta from "../auth/IconInsta";
import IconBrandGoogle from "../../assets/icons/iconGoogle";

function CustomPackages() {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)")
  return (
    <>
      <Navbar />
      <Container w={"100vw"} bg={"#1a237e"} fluid mt={80} py={30}>
        <Stack gap={isSmallscreen ? 50 : 100}>
          <Stack>
            <Title fz={isSmallscreen ? 36 : 62} fw={600} ta={"center"} c={"white"}>
              Custom Travel Packages
            </Title>

            <Flex justify={"center"}>
              <Text fz={18} w={isSmallscreen ? "100%" : "45%"} fw={500} ta={"center"} c={"white"}>
                Create your unique travel experience with our tailored Umrah and
                worldwide travel packages.
              </Text>
            </Flex>
          </Stack>

          <Card bg={"transparent"} px={isSmallscreen ? 5 : 60}>
            <Stack gap={isSmallscreen ? 30 : 60}>
              <Stack gap={isSmallscreen ? 15 : 25}>
                <Title fz={isSmallscreen ? 36 : 46} fw={600} ta={"center"} c={"white"}>
                  Custom Travel Packages
                </Title>
                <Flex justify={"center"}>
                  <Text fz={16} fw={500} w={isSmallscreen ? "100%" : "48%"} ta={"center"} c={"white"}>
                    Tailored travel experiences to suit your unique preferences
                    and needs for unforgettable journeys.
                  </Text>
                </Flex>
              </Stack>

              <SimpleGrid cols={{
                xs: 1,
                sm: 2,
                md: 2,
                lg: 3
              }} spacing={20}>
                <Card
                  radius={20}
                  h={470}
                  p={0}
                  style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <BackgroundImage
                    radius={"md"}
                    src={image17}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      objectFit: "cover",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Stack gap={10} px={40} py={30}>
                    <Title order={4} fw={700}>
                      Personalized Umrah Services
                    </Title>
                    <Text size="md" c={"#6f737a"}>
                      Craft your ideal Umrah journey with our customizable
                      packages designed just for you.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  h={470}
                  p={0}
                  radius={20}
                  style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <BackgroundImage
                    src={image18}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      objectFit: "cover",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Stack gap={10} px={40} py={30}>
                    <Title order={4} fw={700}>
                      Global Travel Option
                    </Title>
                    <Text size="md" c={"#6f737a"}>
                      Explore diverse destinations worldwide with our specially
                      curated travel packages for every traveler.
                    </Text>
                  </Stack>
                </Card>

                <Card
                  h={470}
                  p={0}
                  radius={20}
                  style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <BackgroundImage
                    src={image19}
                    style={{
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      objectFit: "cover",
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Stack gap={10} px={40} py={30}>
                    <Title order={4} fw={700}>
                      Tailored Adventure Packages
                    </Title>
                    <Text size="md" c={"#6f737a"}>
                      Experience unique adventures tailored to your interests
                      and preferences for a memorable trip.
                    </Text>
                  </Stack>
                </Card>
              </SimpleGrid>
            </Stack>
          </Card>
        </Stack>
      </Container>

      <Card px={isSmallscreen ? 20 : 80} py={isSmallscreen ? 20 : 60}>
        <Grid>
          <Grid.Col span={isSmallscreen ? 12 : 6}>
            <Stack gap={15}>
              <Flex justify={isSmallscreen ? "center" : "start"}>
              <Title fz={isSmallscreen ? 36 : 46} fw={600} w={isSmallscreen ? "100%" : "70%"} ta={isSmallscreen ? "center" : "start"}>
                Custom Travel Packages Inquiry
              </Title>
              </Flex>
               <Flex justify={isSmallscreen ? "center" : "start"}>
              <Text c="dimmed" w={isSmallscreen ? "100%" : "88%"} ta={isSmallscreen ? "center" : "start"}>
                Contact us to create your personalized travel experience with
                our custom Umrah and worldwide packages tailored just for you.
              </Text>
              </Flex>
              <Box>
                <Text fw={700}>Connect</Text>
                <Text c={"dimmed"}>1234567890</Text>
              </Box>

              <Box>
                <Text fw={700}>Support</Text>
                <Text c={"dimmed"}>info@zaroorat.com</Text>
              </Box>
            </Stack>
          </Grid.Col>

          <Grid.Col span={isSmallscreen ? 12 : 6} style={{ gap: 10 }} w={""} px={isSmallscreen ? 10 : 30}>
            <Stack gap={20}>
              <TextInput
                label="Your First Name"
                placeholder="Enter your first name"
                size="lg"
              />
              <TextInput
                label="Your Email Address*"
                placeholder="Enter your email address"
                size="lg"
              />
              <Textarea
                label="Your Message*"
                placeholder="Type your message here"
                rows={3}
              />
              <Group>
                <Button
                  radius={35}
                  fz={14}
                  fw={600}
                  h={52}
                  w={isSmallscreen ? "80%" : 240}
                  bg={"#3949ab"}
                >
                  Submit Your Inquiry
                </Button>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Card>

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

export default CustomPackages;
