import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  blogNavMain: {
    backgroundColor: '#4267b2',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '160px',
  },
  blogNavMainTitle: {
    fontSize: '4rem',
    fontWeight: 600,
    color: '#fff',

    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },
  blogNavMainRedirect: {
    fontWeight: 600,
    color: '#fff',
  },
  blogHastagsWrapper: {
    backgroundColor: '#f2f2f2',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  blogHastagsContent: {
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 500,
    color: '#150940',
    ':hover': {
      borderBottom: '2px solid #150940',
    },
  },
  blogItemsContentWrapper: {
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  blogItemsContent: {
    backgroundColor: '#fff',
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  blogItemContentWrapper: {
    display: 'flex',
    flexFlow: 'column wrap',
    maxWidth: '100%',
    paddingLeft: '4rem',
    paddingRight: '4rem',
    '@media (max-width: 768px)': {
      paddingLeft: '25px',
      paddingRight: '25px',
    },
  },
  blogItemContentImageWrapper: {
    maxWidth: '750px',
    maxHeight: '400px',
    position: 'relative' as 'relative',
    overflow: 'hidden',
    marginTop: '50px',
    marginBottom: '50px',
    '@media (max-width: 768px)': {
      marginTop: '20px',
      marginBottom: '20px',
    },
  },
  blogItemContentTextWrapper: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    flexWrap: 'wrap' as 'wrap',
    alignItems: 'flex-start' as 'flex-start',
  },
  blogItemContentTextTitle: {
    fontWeight: 800,
    fontSize: '1.8rem',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  blogItemContentLastEdited: {
    fontStyle: 'italic',
    color: '#90949c',
    fontSize: '0.9rem',
  },
  blogItemContentTextDesc: {
    fontSize: '1.2rem',
    textAlign: 'justify',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  blogItemContentReadMore: {
    padding: '20px 0',
  },
  blogItemContentTextHastag: {
    cursor: 'default',
  },
  blogItemContentDetailWrapper: {
    padding: '3rem 15rem',
  },
  blogItemContentDetailImageWrapper: {
    marginTop: '30px',
    marginBottom: '30px',
  },
});
