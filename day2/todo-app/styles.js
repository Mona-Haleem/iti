import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navigatorScreenoptions:{
    headerTitleAlign:"center",
    headerStyle:{
        backgroundColor:"#000"
    },
    headerTitleStyle:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:30,           
    },
    headerTintColor: 'white',
   },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  appHeader:{
    fontSize:30,
    fontWeight:"bold",
    margin:20
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: "50%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    margin:10
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    flex:1,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop: 10,
    borderRadius:10,
    borderWidth:1,
    borderColor:"black",
    padding:10,
    paddingHorizontal:15
  },
  iconsContainer:{
    display:"flex",
    flexDirection:"row",
    minWidth:60,
    alignItems: "center",
    justifyContent: "space-between"
  }, 
  doneTodo: {
    textDecorationLine: "line-through",
  },
  ItemDetail:{
    flex: 1,
    backgroundColor: "#fff",
    padding: 22,
  },
  detailHeader:{
    fontWeight:"bold",
    fontSize:40,
    textTransform: "capitalize",
    marginBottom:10
  },
  detailDesc:{
    fontSize:15,
    lineHeight:30
  }
});
