import { StyleSheet } from "react-native";

export const HomeStyle = StyleSheet.create({
    container:{
        width: "100vw",
        height: "100vh",
        backgroundColor: '#2C2C2C',
        justifyContent: 'center',
        alignItems: "center",

    },
    imgContainer:{
        aspectRatio: 2/1,
    },
    image:{
        resizeMode: 'cover',
        width: "100%",
        height: "100%",
    }
})