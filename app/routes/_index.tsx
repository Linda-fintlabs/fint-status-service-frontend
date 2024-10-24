import type { MetaFunction } from "@remix-run/node";
import {Box, Button, Heading, HGrid, HStack, VStack} from "@navikt/ds-react";
import {CheckmarkCircleFillIcon} from "@navikt/aksel-icons";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Heading size={"large"} level={"1"} style={{marginBottom: "2rem"}}>Status</Heading>
        <HGrid gap="6" columns={2}>
          <Box background="surface-subtle"
               borderColor="border-alt-3"
               padding="4"
               borderWidth="2"
               borderRadius={{ md: "large" }}
               style={{width: "350px"}}
          >
              <HStack align={"center"} justify={"space-between"}>
              <Heading size={"small"}>FINT Flyt</Heading>
              <CheckmarkCircleFillIcon title="a11y-title" fontSize="1.5rem" />
              </HStack>
          </Box>

            <Box background="surface-subtle"
                 borderColor="border-alt-3"
                 padding="4"
                 borderWidth="2"
                 borderRadius={{ md: "large" }}
                 style={{width: "350px"}}
            >
                <HStack align={"center"} justify={"space-between"}>
                    <Heading size={"small"}>FINT Flyt</Heading>
                    <CheckmarkCircleFillIcon title="a11y-title" fontSize="1.5rem" />
                </HStack>
            </Box>

            <Box background="surface-subtle"
                 borderColor="border-alt-3"
                 padding="4"
                 borderWidth="2"
                 borderRadius={{ md: "large" }}
                 style={{width: "350px"}}
            >
                <HStack align={"center"} justify={"space-between"}>
                    <Heading size={"small"}>FINT Flyt</Heading>
                    <CheckmarkCircleFillIcon title="a11y-title" fontSize="1.5rem" />
                </HStack>
            </Box>

            <Box background="surface-subtle"
                 borderColor="border-alt-3"
                 padding="4"
                 borderWidth="2"
                 borderRadius={{ md: "large" }}
                 style={{width: "350px"}}
            >
                <HStack align={"center"} justify={"space-between"}>
                    <Heading size={"small"}>FINT Flyt</Heading>
                    <CheckmarkCircleFillIcon title="a11y-title" fontSize="1.5rem" />
                </HStack>
            </Box>
        </HGrid>

      </div>
  );
}
