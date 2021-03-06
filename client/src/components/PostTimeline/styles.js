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
      },
      heading: {
        color: '#FFFFFC',
        fontWeight: 'bolder',
        fontSize: 'xx-large',
        margin: 6,
      },
      image: {
        marginLeft: '15px',
      },
}));