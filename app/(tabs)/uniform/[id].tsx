import { useLocalSearchParams } from "expo-router";
import { StyleSheet,View,Text } from "react-native"

const uniform = () =>{
    return(
        <View>
            <Text style={styles.title}>Uniform Page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      fontWeight: "bold",
    },
  });
export default uniform;