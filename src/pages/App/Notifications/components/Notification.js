import { Heading } from "@chakra-ui/react";
import React from "react";

const Notification = () => {
  return (
    <Heading
      as="h3"
      size="md"
      fontWeight="bold"
      // color="#0648b3"
      textAlign="center"
      fontSize={["sm", "md", "lg", "2xl", "3xl"]}
      mb={1}
    >
      {"No Notifications at present."}
    </Heading>
  );
};

export default Notification;
