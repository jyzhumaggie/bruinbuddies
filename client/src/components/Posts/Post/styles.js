import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',

        // backgroundBlendMode: 'darken',
      },
      border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
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
      overlay: {
        fontSize: 'small',
        position: 'absolute',
        bottom: '70px',
        left: '20px',
        color: 'white',
        textAlign: 'left',
      },
      overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 20px',
        position: 'absolute',
        bottom: '30px',
      },
      title: {
        padding: '0 16px',
      },
      cardActions: {
        padding: '50px 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
});