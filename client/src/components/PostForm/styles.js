import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
  },
  paper: {
    padding: 0,
    
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '2.5vw',
  },
  fileInput: {
    width: '97%',
    marginTop: '1vw',
    marginBottom: '1vw',
  },
  buttonSubmit: {
    marginTop: '1vw',
    marginBottom: '1vw',
  },
}));