import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    
  },
  image: {
    marginLeft: '0px',
    marginTop: '0px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '500px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '0px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[300],
    marginTop: '24px',
    marginLeft: '10px',

    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    height: 'min-content'
  },

}));