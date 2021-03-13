import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
      },
      border: {
        border: 'solid',
      },
      fullHeightCard: {

      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        backgroundColor: '#000000',
      },
      overlay2: {
        position: 'absolute',
        top: '10px',
        right: '5px',
      },

      details: {
        fontSize: '14px',
        fontWeight: 'bold',
        position: 'inherit',
        margin: '10px 0px 0px'
      },           
      details2: {
        fontSize: '10px',
      },      
      message: {
        margin: '0px 10px 20px'
      },
      title: {
        padding: '15px 20px 0px ',
        fontWeight: 'bolder',
        fontSize: 'larger'
      },
      cardActions: {
        // padding: '50px 16px 8px 16px',
        // display: 'flex',
        justifyContent: 'flex-end',
      },

      cardContents: {
        // alignItems: 'left',
        margin: '0px 10px',
        textAlign: "left",
        color: 'white',
        
      }

});