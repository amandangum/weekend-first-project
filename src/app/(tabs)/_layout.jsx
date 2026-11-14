import {Tabs} from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

export default function TabsLayout(){
  return(
    <Tabs
   
    screenOptions={{
      tabBarActiveTintColor:"lightblue",
      tabBarInactiveTintColor:"black",

      tabBarStyle:{
        backgroundColor:"white",
        height: 70
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