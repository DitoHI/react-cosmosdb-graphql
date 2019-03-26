export default {
  blogNavMain: {
    backgroundColor: '#4267b2',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '235px',
  },
  blogNavMainTitle: {
    fontSize: '4rem',
    fontWeight: 600,
    color: '#fff',
  },
  blogNavMainRedirect: {
    fontWeight: 600,
    color: '#fff',
  },
  blogHastagsWrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  blogHastagsContent: {
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 500,
    color: '#150940',
  },
  blogItemsContent: {
    backgroundColor: '#efeff3',
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  },
  blogItemContentImageWrapper: {
    maxWidth: '500px',
    maxHeight: '400px',
    position: 'relative' as 'relative',
    overflow: 'hidden',
    marginTop: '50px',
    marginBottom: '50px',
  },
  blogItemContentTextTitle: {
    fontWeight: 800,
    fontSize: '1.8rem',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  blogItemContentTextDesc: {
    fontSize: '1.2rem',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
};
