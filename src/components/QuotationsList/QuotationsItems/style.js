import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent:{
        width: '95%',
        height:"100%",
        backgroundColor:"#000000",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: "center",
        paddingTo: 10,
        marginTop: 0,
    },
    contextLeft:{
        width:"36%",
        height: "100%",
        alignItems: "flex-start"
    },
    dayCotation:{
        fontSize: 16,
        paddingLeft: 2,
        color: "#ffff",
        fontWeight: "bold"
    },
    contextRight:{
        width:"60%",
        height: "100%",
        alignItems: "flex-end",
        marginTop: 15,
    },
    logoBitcoin:{
        width: 40,
        height: 40,
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
    },
    boxLogo:{
        flexDirection:"row",
        alignItems: "center",
    },
    price:{
        color:"#ffff",
        fontSize: 18,
        fontWeight:'bold'
    }
})  

export default styles