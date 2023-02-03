import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../header/Header";
import Table from "../table/Table";

const Layout = () => {
    return (
        <Flex flexDirection="column">
            <Header />
            <Table />
        </Flex>
    );
};

export default Layout;
