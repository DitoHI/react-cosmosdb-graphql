import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  notFoundWrapper: {
    fontSize: '3rem',
    fontWeight: 600,
    textAlign: 'center',
    paddingTop: '4rem',
    paddingBottom: '4rem',

    '@media (max-width: 768px)': {
      fontSize: '2rem',
      paddingTop: '3rem',
      paddingBottom: '3rem',
    },
  },
  notFoundIcon: {
    width: '24rem',
    height: 'auto',

    '@media (max-width: 768px)': {
      width: '16rem',
    },
  },
});
