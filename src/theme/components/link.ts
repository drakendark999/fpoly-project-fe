const Link = {
  variants: {
    menu: {
      w: '100%',
      display: 'flex',
      alignItems: 'center',
      color: 'gray.800',
      fontSize: 'md',
      padding: '5px 20px',
      margin: '5px 0px',
      textDecoration: 'none !important',

      _hover: {
        borderRadius: 'md',
        color: 'gray.800',
        bg: 'gray.200',
      },

      '&[aria-current=page]': {
        borderRadius: 'md',
        color: 'gray.800',
        bgGradient: 'linear(to-t, teal.200, green.100)',
      },
    },
  },
};

export default Link;
