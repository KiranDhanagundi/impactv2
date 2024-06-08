import { Box, Flex, Heading, Button, Icon, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <Flex w="100%" minH="90vH" overflow="auto" direction="column">
      <Box align="start" mb="10px">
        <Heading as="h4" size="md">
          Cart
        </Heading>
      </Box>
      <Box>
        <Icon as={FaShoppingCart} boxSize={50} mr="5px" color="#0a48b3" />
        <Text fontSize="md" fontWeight="bold" mb="5px">
          Your Cart is Empty!
        </Text>
        <Link to="/app/home">
          <Button
            mt="10px"
            color="white"
            bg="#0a48b3"
            size="md"
            fontWeight="normal"
            rightIcon={<FaArrowRight />}
          >
            Browse products
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Cart;
