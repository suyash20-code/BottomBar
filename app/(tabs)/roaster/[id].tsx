import { useLocalSearchParams } from "expo-router";
import { StyleSheet,View,Text } from "react-native"

const roaster = () =>{
   
    return(
        <View>
            <Text style={styles.title}>Roaster Page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      fontWeight: "bold",
    },
  });
export default roaster;