import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';
import Header from './components/header/header.component';
import TableCancle from './components/table-cancel/table-cancel.component';
import ButtonSave from './components/button-save/button-save.component';
import ButtonCancel from './components/button-cancel/button-delete.component';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import TableBusy from './components/table-busy/table-busy.component';

const Cancel: React.FunctionComponent = () => {
  return (
    <Box>
      <Header />
      <Tabs align="center" variant="enclosed">
        <TabList>
          <Tab>Xử lý ca hủy</Tab>
          <Tab>Xử lý ca bận</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TableCancle />
          </TabPanel>
          <TabPanel>
            <TableBusy />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex justify="end" pr={6}>
        <ButtonCancel />
        <ButtonSave />
      </Flex>
    </Box>
  );
};

export default Cancel;
