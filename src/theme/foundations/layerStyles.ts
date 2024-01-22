const layerStyles = {
  schedule: {
    border: '1px solid #7F8487',
  },
  report: {
    border: '1px solid #7F8487',
    borderRadius: 'md',
  },
  reportItem: {
    borderRight: '1px solid #7F8487',
  },
  filter: {
    bg: '#14b39c',
    color: '#FFFFFF',
    borderRadius: '5px',
    margin: '16px 0',
    padding: '8px 8px 6px',
    alignItems: 'center',
  },
  teacher: {
    border: '2px dashed gray',
    padding: '8px 14px',
    borderRadius: 'base',
    margin: ' 0 0 16px 0',
    cursor: 'pointer',
  },
  cancel: {
    border: '1px solid #cdcdcd',
    borderTop: 'none',
  },
  cancelItem: {
    width: '100%',
    height: '100%',
    justifyContent: 'center !important',
    alignItems: 'center',
    borderRight: '1px solid #cdcdcd',
  },
  confirm: {
    bg: '#0666b2',
    color: '#ffffff',
    border: '1px',
    borderColor: 'gray.300',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  },
};
export type LayerStyles = typeof layerStyles;

export default layerStyles;
