import { useLocalSearchParams } from "expo-router";
import { StyleSheet,View,Text } from "react-native"

const canteen = () =>{
   
    return(
        <View>
            <Text style={styles.title}>Canteen Page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      fontWeight: "bold",
    },
  });
export default canteen;