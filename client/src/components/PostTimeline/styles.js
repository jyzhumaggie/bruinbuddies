import { makeStyles } from "@material-ui/core/styles";

export default makeStyles( () => ({
    appBar: {
        borderRadius: 13,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#000000',
        maxWidth: 300,
        marginTop: '15vh', 
        padding: '1vh',

      },
      heading: {
        color: '#FFFFFC',
        fontWeight: 'bolder',
        fontSize: 'xx-large',

      },  
      image: {
        marginLeft: '15px',
      },
}));