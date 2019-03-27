import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  notFoundWrapper: {
    fontSize: '3rem',
    fontWeight: 600,
    textAlign: 'center',
    padding: '120px',

    '@media (max-width: 768px)': {
      padding: '80px',
    },
  },
});
