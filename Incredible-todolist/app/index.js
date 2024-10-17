/**
 * @author: Tan Phu Nguyen
 * @project: Lab Assignment 1: Spinning Up React Native App
 */



import { StyleSheet, View } from "react-native";
import CustomState from "../components/customState";
import SumState from "../components/sumState";
import App from "../App";


//function to create a Page() -< Main function.
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <App/>
      </View>
    </View>
  );
}

//Styling.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
