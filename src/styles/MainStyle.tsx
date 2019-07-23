import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },

  mainFlexColumnWrapper: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
  },
});
