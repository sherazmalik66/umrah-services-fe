import {
  Card,
  Flex,
  Anchor,
  Group,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
const Navbar = () => {
  const isSmallscreen = useMediaQuery("(max-width: 56.25em)");
  const [opened, { toggle, close }] = useDisclosure(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Umrah Services", href: "/umrah-services" },
    { label: "World Packages", href: "/world-packages" },
    { label: "Custom Packages", href: "/custom-packages" },
    { label: "Diamond Packages", href: "/diamond-package" },
  ];

  return (
    <>
      <Card
        h={80}
        px={isSmallscreen ? 30 : 80}
        shadow="xs"
        style={{
          borderRadius: 0,
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        <Flex justify="space-between" align="center" h="100%">
          <Group>
            <Anchor fw={600} fz={isSmallscreen ? 36 : 32} c="black">
              Zaroorat
            </Anchor>
          </Group>

          {!isSmallscreen && (
            <Flex gap={30}>
              {navLinks.map((link, i) => (
                <Anchor
                  key={i}
                  fw={400}
                  fz={16}
                  c="black"
                  underline="hover"
                  href={link.href}
                  style={{
                    textUnderlineOffset: "6px",
                    textDecorationThickness: "1.4px",
                  }}
                >
                  {link.label}
                </Anchor>
              ))}
            </Flex>
          )}

          {isSmallscreen && (
            <Burger
              opened={opened}
              onClick={toggle}
              bg={"dark"}
              pl={13}
              color="white"
              h={50}
              w={50}
              style={{ borderRadius: 30 }}
              size={25}
              aria-label="Toggle menu"
            />
          )}
        </Flex>
      </Card>

      <Drawer opened={opened} onClose={close} position="left">
        <Stack mt={30}>
          {navLinks.map((link, i) => (
            <Anchor
              key={i}
              fw={500}
              fz={20}
              c="black"
              underline="never"
              href={link.href}
              onClick={close}
            >
              {link.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
