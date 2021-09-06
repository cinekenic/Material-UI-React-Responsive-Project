import { createTheme } from "@material-ui/core";
import {yellow } from "@material-ui/core/colors";

export const theme = createTheme({
    pallete:{
        primary:{
            main: yellow[200],
        },
    },
    myButton:{
        backgroundColor: "red",
        color: "white"
    }
})