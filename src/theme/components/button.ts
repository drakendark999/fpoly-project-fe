const Button = {
  variants: {
    icon_open: {
      cursor: 'pointer',
      fontSize: '15px',
      bgGradient: 'linear(to-r, cyan.100, blue.100)',
      borderRadius: '50px',
      padding: '0px',
      margin: '0px',

      _hover: {
        bgGradient: 'linear(to-b, teal.100, blue.100)',
      },
    },

    icon_close: {
      cursor: 'pointer',
      fontSize: '20px',
      bgGradient: 'linear(to-t, orange.100, red.100)',
      borderRadius: '50px',
      padding: '0px',
      margin: '0px',

      _hover: {
        bgGradient: 'linear(to-b, orange.100, red.100)',
      },
    },

    none: {
      display: 'flex',
      alignItems: 'center',
      color: 'blue.800',
      bgGradient: 'linear(to-t, blue.100, cyan.100)',
      fontSize: 'md',
      padding: '5px 20px',
      margin: '5px 0px',

      _hover: {
        bgGradient: 'linear(to-b, purple.200, pink.100)',
      },
    },
  },
};

export default Button;
