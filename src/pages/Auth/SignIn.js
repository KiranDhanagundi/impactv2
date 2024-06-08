import React, { useState, useEffect } from "react";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  HStack,
  Icon,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate  } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  GoogleIcon,
  AppleIcon,
  GithubIcon,
  StripeIcon,
} from "../../components/Icons/Icons";


function SignIn() {
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
  const [showResetModal, setShowResetModal] = useState(false); // State for showing the reset password modal
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "#0648b3");
  const bgColor = useColorModeValue("white", "gray.700");

   const handleSubmit = () => {
    // Check if email and password match
    if (email === 'welcome@impact.com' && password === 'Welcome@1100') {
      // Navigate to home page
      navigate("/app/home");
    } else {
      // Show error toast
      toast({
        title: "Error",
        description: "Please enter valid email and password.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Function to handle opening the reset password modal
  const handleForgotPassword = () => {
    // setShowResetModal(true); // Show the reset password modal when "Forgot Password?" is clicked
  };

  // const googleSignIn = () => {
  //   dispatch(actions.googleSignInRequest());
  // };

  // const githubSignIn = () => {
  //   dispatch(actions.githubSignInRequest());
  // };

  // const stripeSignIn = () => {
  //   dispatch(actions.stripeSignInRequest());
  // };

  // const appleSignIn = () => {
  //   dispatch(actions.appleSignInRequest());
  // };

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
      bg="#fff!important"
      minH="90VH"
      w="auto"
      p="2"
    >
      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="20px"
        
      >
        <Text fontSize="3xl" color="#0648b3" fontWeight="bold">
          Welcome Back!
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="5px">
        <Flex
          direction="column"
          w="400px"
          background="transparent"
          borderRadius="md"
          p="10px"
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow="md"
          borderWidth='1px'
        >
          <Text
            fontSize="xl"
            color="#0648b3"
            fontWeight="bold"
            textAlign="center"
            mb="10px"
          >
            Sign In
          </Text>
          <HStack spacing="10px" justify="center" mb="10px">
            <Flex
              justify="center"
              align="center"
              w="70px"
              h="40px"
              borderRadius="md"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              // onClick={googleSignIn}
            >
              <Link href="#">
                <Icon as={GoogleIcon} w="30px" h="30px" />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="70px"
              h="40px"
              borderRadius="md"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              // onClick={githubSignIn}
            >
              <Link href="#">
                <Icon as={GithubIcon} w="30px" h="30px" />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="70px"
              h="40px"
              borderRadius="md"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              // onClick={appleSignIn}
            >
              <Link href="#">
                <Icon as={AppleIcon} w="30px" h="30px" />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="70px"
              h="40px"
              borderRadius="md"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              // onClick={stripeSignIn}
            >
              <Link href="#">
                <Icon as={StripeIcon} w="30px" h="30px" />
              </Link>
            </Flex>
          </HStack>
          <Text
            fontSize="sm"
            color="#0648b3"
            fontWeight="bold"
            textAlign="center"
            mb="5px"
          >
            or
          </Text>
          <FormControl onSubmit={handleSubmit}>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Email
            </FormLabel>
            <Input
              id="email"
              borderRadius="md"
              mb="5px"
              fontSize="sm"
              type="email"
              placeholder="Your email address"
              size="lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Password
            </FormLabel>
            <InputGroup>
              <Input
                id="password"
                borderRadius="md"
                mb="5px"
                fontSize="sm"
                type={showPassword ? "text" : "password"}
                placeholder="Your password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  _hover={"none"}
                  size="md"
                  bg="none"
                  mt="6px"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <Icon as={ViewOffIcon} />
                  ) : (
                    <Icon as={ViewIcon} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent="flex-start" mb="5px">
              <Link
                as={ReactRouterLink}
                to="#"
                color="#0648b3"
                fontWeight="norml"
                fontSize="sm"
                onClick={handleForgotPassword} // Call handleForgotPassword to show the reset modal
              >
                Forgot Password?
              </Link>
            </Flex>
            <Button
              fontSize="10px"
              bg="#0648b3"
              w="100%"
              h="45"
              mb="10px"
              color="white"
              mt="10px"
              onClick={handleSubmit}
            >
              SIGN IN
            </Button>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColor} fontWeight="medium">
              Don't have an account?
              <Link
                color="#0648b3"
                as={ReactRouterLink}
                ms="10px"
                fontWeight="bold"
                to="/app/signup"
              >
                Sign Up
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignIn;
