import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#3f51b5', 
    '&:hover': {
      backgroundColor: '#2c387e', 
    },
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  fieldSpacing: {
    marginBottom: theme.spacing(2), 
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#f44336', 
  },
}));
