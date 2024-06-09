import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  VStack,
  HStack,
  Image,
  Flex,
  Grid,
  Box,
  Spacer,
  Text,
  InputGroup,
  InputLeftElement,
  Avatar,
  Badge,
  Icon,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { DownloadIcon } from "@chakra-ui/icons";

const EditProductModal = () => {
  const defaultImageSrc = "https://via.placeholder.com/150";
  const [isLoading] = useState(false);
  const [, setProductData] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);

  let { productId } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setProductData("");
        setEditedProduct("");
      } catch (error) {}
    };

    fetchProductData();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <Flex w="100%" minH="90vH" overflow="auto" direction="column">
      <Box align="start" mb="10px">
        <Heading as="h4editedProduct" size="md">
          Edit Product
        </Heading>
      </Box>
      {editedProduct ? (
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr", xl: "1fr 1fr" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap="4px"
        >
          <Box
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            width="auto"
            boxShadow="md"
            p="2"
            bg="white"
            m="2px"
          >
            <Text fontWeight={"bold"} color={"#0648b3"}>
              Edit Product
            </Text>
            <VStack as="form" w="100%" spacing="4">
              <FormControl isRequired id="title">
                <FormLabel>Product Title</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Title..."
                  value={editedProduct?.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </FormControl>
              <FormControl isRequired id="imageUrl">
                <FormLabel> Media</FormLabel>
                <Input
                  type="text"
                  value={editedProduct?.images[0]}
                  onChange={handleInputChange}
                  name="images"
                />
              </FormControl>
              <FormControl isRequired id="description">
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Enter Description..."
                  type="text"
                  minH="200px"
                  value={editedProduct?.description}
                  onChange={handleInputChange}
                  name="description"
                />
              </FormControl>
              <FormControl isRequired id="title">
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Category..."
                  value={editedProduct?.category}
                  onChange={handleInputChange}
                  name="category"
                />
              </FormControl>
              <FormControl isRequired id="unit_amount">
                <FormLabel>Price</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                  >
                    $
                  </InputLeftElement>
                  <Input
                    placeholder="Enter Price.."
                    type="number"
                    value={editedProduct?.unit_amount}
                    onChange={handleInputChange}
                    name="unit_amount"
                  />
                </InputGroup>
              </FormControl>
              <HStack>
                <Button
                  fontWeight="normal"
                  bg="#0a48b3"
                  color="white"
                  minW="90px"
                  h="36px"
                  fontSize="sm"
                  type="submit"
                  // onClick={handleUpdateProduct}
                  isLoading={isLoading}
                >
                  Update Product And Publish
                </Button>
              </HStack>
            </VStack>
          </Box>
          <Box
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            width="auto"
            boxShadow="md"
            p="2"
            m="2px"
            bg="white"
          >
            <Text fontWeight={"bold"} color={"#0648b3"}>
              Preview
            </Text>
            <Box>
              <Flex align="center" direction="column">
                <Box
                  borderWidth="1px"
                  borderRadius="md"
                  overflow="hidden"
                  p="2"
                >
                  <Image
                    src={editedProduct?.images[0] || defaultImageSrc}
                    alt={editedProduct?.name}
                    boxSize={{
                      base: "300px",
                      md: "200px",
                      sm: "150px",
                      xl: "200px",
                      lg: "300px",
                    }}
                    borderRadius="sm"
                  />
                </Box>
              </Flex>
            </Box>
            <Spacer />
            <Box mt="9px" ml="5px" mb="10px">
              <Box>
                <Divider mt="20px" orientation="horizontal" />
                <Flex
                  direction={{
                    base: "column",
                    sm: "column",
                    md: "row",
                    lg: "row",
                  }}
                  align="center"
                  mt="5px"
                  p="2px"
                >
                  <Flex align={"center"}>
                    <Avatar
                      size="2xs"
                      mr="2"
                      src="https://bit.ly/broken-link"
                    />
                    <Text fontSize="xs" color="gray.500">
                      {"Elon Musk"}
                    </Text>
                    <Text fontSize="xs" color="gray.500" ml="2" mr="10px">
                      | {"Feb 12 2024"}
                    </Text>
                    <Badge mr="10px" colorScheme="green">
                      <Icon as={DownloadIcon} me="4px" />
                      {0}
                    </Badge>
                  </Flex>
                  <Spacer />
                  <Flex mt={{ base: "10px" }} align={"center"}>
                    <Text mr="20px" fontSize="xl" fontWeight="bold">
                      ${editedProduct?.unit_amount}
                    </Text>
                  </Flex>
                </Flex>
                <Divider mt="5px" orientation="horizontal" />
              </Box>
              <VStack mt="5px" spacing="2" align="start">
                <Heading as="h1" size="md">
                  {editedProduct?.name}
                </Heading>
                <Text fontSize="md" color="gray.500">
                  Category: {editedProduct?.category}
                </Text>
                <Text decoration="auto" color="gray.500">
                  Description:
                </Text>
                <Text p="2" align="start" fontSize="md">
                  {editedProduct?.description}
                </Text>
              </VStack>
            </Box>
          </Box>
        </Grid>
      ) : (
        <Text align="center">No data found</Text>
      )}
    </Flex>
  );
};

export default EditProductModal;
