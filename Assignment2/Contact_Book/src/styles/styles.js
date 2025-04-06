import { StyleSheet } from "react-native";

const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'silver'
    },
    topContainer:{
        height:200,
        padding:10,
    },
    titleText:{
        fontSize:35,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:20
    },

    searchBarContainer:{
        flexDirection:'row',
        marginTop:5,
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    searchBar:{
        width:290,
        height:55,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        backgroundColor:'white',
        fontSize:16,
        paddingHorizontal:10
    },
    searchIconContainer:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:55,
        borderTopRightRadius:10,
        borderBottomRightRadius:10
    },

    bottomContainer:{
        backgroundColor:'gray',
        flex:1,
        borderTopLeftRadius:50,
        borderTopRightRadius:50
    },

    filterTextContainer:{
        width:250,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        padding:10
        
    },
    filterText:{
        fontSize:25,
        color:'white',
        fontWeight:'bold'
    },
    contactListMainContainer:{
        flex:1
    },

    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    button:{
        backgroundColor:'silver',
        padding:10,
        borderRadius:10,
        margin:10
    },
    buttonText:{
        fontSize:20
    },
    contactList:{
        backgroundColor: 'silver', 
        borderRadius:15,
        margin: 5,
        marginHorizontal:15, 
        paddingVertical: 10 ,
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

export default styles;