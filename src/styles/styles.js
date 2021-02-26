import { makeStyles } from "@material-ui/core";

export const navBarStyle = makeStyles({
    AppBar: {
      backgroundColor: "white",
    },
    grow:{
      flexGrow:1,
    },
    container: {
      width: 1170,
      margin: "auto",
    },
    bookingButton: {
      color: "white",
      background: "#007bf5",
      borderRadius: "25px",
      marginInline: "20px",
      "&:hover": {
        background: "#007bf5",
        boxShadow: "0px 2px 10px #888888",
      },
    },
});

export const buttonStyle = makeStyles({
    bookingButton: {
        color: "white",
        background: "#007bf5",
        borderRadius: "25px",
        marginInline: "20px",
        "&:hover": {
          background: "#007bf5",
          boxShadow: "0px 2px 10px #888888",
        },
    },
})