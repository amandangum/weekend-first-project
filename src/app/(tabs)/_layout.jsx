import {Tabs} from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

export default function TabsLayout(){
  return(
    <Tabs
   
    screenOptions={{
      tabBarActiveTintColor:"orange",
      tabBarInactiveTintColor:"black",

      tabBarShowLabel: true,
      tabBarStyle: {
        height: 90,
        width: "90%",
        borderRadius: 30,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 20,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "orange"
      },
      tabBarLabelStyle: {
        fontSize: 15,
        marginTop: 3
      }
    }}
    >
         <Tabs.Screen
         name="home"
        options={{
          title: "Home",
          tabBarIcon: ({color, size}) => <Ionicons name="home-outline" color={color} size={size}/>
        }}
          /> 
          <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({color, size}) => <Ionicons name="person-outline"  color={color} size={size}/>
          }}
          />
          <Tabs.Screen 
          name="setting"
         options={{ 
          title:"Settings",
          tabBarIcon: ({color, size}) => <Ionicons name="settings-outline"  color={color} size={size}/>
        }}
          />
    </Tabs>
  )
}