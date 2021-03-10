import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    display: 'grid',
    // flexDirection: 'row',
    gridTemplateColumns: '30% 20% auto 8% 8% 8% 8% 8%',
    columnGap: '1vw',
    alignItems: 'center',

    padding: '1.8vw 1vw',
    backgroundColor: "black",
  },
  personalinfo: {
    gridColumnStart: '3',
    color: 'white',
    textDecoration: 'none',
    fontSize: '2.5vw',
    fontWeight: 'bolder',
  },
  posts: {
    gridColumnStart: '4',
    color: 'white',
    textDecoration: 'none',
    fontSize: '2.5vw',
    fontWeight: 'bolder',
  },
  search: {
    gridColumnStart: '5',
    color: 'white',
    textDecoration: 'none',
    fontSize: '2.5vw',
    fontWeight: 'bolder',
  },
  profilePage: {
    gridColumnStart: '6',
    color: 'white',
    textDecoration: 'none',
    fontSize: '2.5vw',
    fontWeight: 'bolder',
  },
  button: {
    marginLeft: '1.5vw',
    gridColumnStart: '5',
    color: 'white',
    fontSize: '1vw',
    fontWeight: 'bold',
    padding: '0.5vw'
  },
  button2: {
    marginLeft: '60vw',
    marginRight: '1vw',
    gridColumnStart: '6',
    color: 'white',
    fontSize: '1.5vw',
    fontWeight: 'bold',
    padding: '0.8vw 0.6vw'
  },
  heading: {
    gridColumnStart: '1',
    color: 'white',
    textDecoration: 'none',
    fontSize: '45px',
    fontWeight: 'bolder',
    marginLeft: '0.5vw',
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