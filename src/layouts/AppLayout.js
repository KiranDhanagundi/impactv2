import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import theme from "../theme/theme";
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import Footer from "../components/Footer/Footer";
import AppNavbar from "../components/Navbars/AppNavbar";
import routes from "../routes";

export default function AppLayout(props) {
  const { ...rest } = props;
  const { onOpen } = useDisclosure();

  // Function to get active route
  const getActiveRoute = (routes) => {
    const currentPath = window.location.pathname;
    const activeRoute = routes.find(route => currentPath.includes(route.path));
    return activeRoute ? activeRoute.name : "Default Brand Text";
  };

  // Function to get routes
  const getRoutes = (routes) => {
    return routes.map((route, key) => {
      if (route.path) {
        return (
          <Route
            path={route.path}
            element={<route.component />}
            key={key}
          />
        );
      } else if (route.routes) {
        return getRoutes(route.routes);
      }
      return null;
    });
  };

  document.documentElement.dir = "ltr";

  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <MainPanel
        w="100%"
        pt="12px"
        align="center"
        overflow="hidden"
        backgroundColor="#fff!important"
      >
        <Portal>
          <AppNavbar
            onOpen={onOpen}
            brandText={getActiveRoute(routes)}
            {...rest}
          />
        </Portal>
        <PanelContent p="10px" maxW={{ xl: "1500px" }}>
          <PanelContainer>
            <Routes>
              {getRoutes(routes)}
              <Route path="/app" element={<Navigate to="/app/public" />} />
            </Routes>
          </PanelContainer>
        </PanelContent>
        <Footer />
      </MainPanel>
    </ChakraProvider>
  );
}
