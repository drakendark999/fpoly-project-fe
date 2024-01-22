// theme/index.js
import { extendTheme } from '@chakra-ui/react';
import Button from './components/button';
import Container from './components/container';
import foundations from './foundations';
import Table from './components/table';
import List from './components/list';
import Link from './components/link';

const overrides = {
  styles: {
    global: {
      body: {
        fontFamily: `'Asap Variable', sans-serif`,
        color: '#343434',
      },
    },
  },
  components: {
    Button,
    Container,
    Table,
    List,
    Link,
  },
  ...foundations,
};

const themes = extendTheme(overrides);

export default themes;
