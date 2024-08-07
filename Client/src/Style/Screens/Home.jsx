import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen")

export default StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    bar: {
        width: "70%",
        height: 2,
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: "gray"
    },
    reload: {
        icon: {
            height: 50,
            width: 50,
            tintColor: "gray"
        },
        height: height * 0.4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    logout: {
        btn: {
            backgroundColor: "#666666",
            padding: 10,
            borderRadius: 10
        },
        text: {
            color: "white",
            textAlign: "center"
        },
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        width: 100,
    }
})