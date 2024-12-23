import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  card: {
      width: '300px', // фиксированная ширина
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      minHeight: '400px', // одинаковая высота
  },
  media: {
      height: '150px',
      backgroundSize: 'cover',
  },
  overlay: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      color: 'white',
  },
  overlay2: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      color: 'white',
  },
  details: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
  },
  title: {
      padding: '0 16px',
  },
  cardActions: {
      padding: '0 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-between',
  },
}));