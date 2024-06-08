import React from "react";
import Hero from "./Hero";
import FeedBack from "./FeedBack.js";
import { Flex } from "@chakra-ui/react";
import OurProduct from "./OurProducts";
import ContactUs from "./ContactUs";
import About from "./About";

export default function Home() {
  return (
    <Flex direction={"column"}>
      <Hero />
      <About/>
      <OurProduct/>
      <FeedBack />
      <ContactUs/>
    </Flex>
  );
}
