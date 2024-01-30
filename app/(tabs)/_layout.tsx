import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons, FontAwesome6,FontAwesome,MaterialIcons  } from "@expo/vector-icons";
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
          headerTitleAlign:'center',
          headerStatusBarHeight:0,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "red",
            height: 50 ,
            
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="canteen/[id]"
        options={{
          headerTitle: "Canteen",
          tabBarLabel: "Canteen",
          headerTitleAlign:'center',
          headerStatusBarHeight:0,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-fork-drink" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: "red",
            height: 50 ,
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="uniform/[id]"
        options={{
          headerTitle: "Uniform",
          tabBarLabel: "Uniform",
          headerTitleAlign:'center',
          headerStatusBarHeight:0,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="child-dress" color={color} size={size} />
          ),
          
          headerStyle: {
            backgroundColor: "red",
            height: 50 ,
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="roaster/[id]"
        options={{
          headerTitle: "Roaster",
          tabBarLabel: "Roaster",
          headerTitleAlign:'center',
          headerStatusBarHeight:0,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="group" color={color} size={size} />
          ),
          
          headerStyle: {
            backgroundColor: "red",
            height: 50 ,
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="events/[id]"
        options={{
          headerTitle: "Events",
          tabBarLabel: "Events",
          headerTitleAlign:'center',
          headerStatusBarHeight:0,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons  name="event" color={color} size={size} />
          ),
          
          headerStyle: {
            backgroundColor: "red",
            height: 50 ,
          },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};
export default TabsLayout;
