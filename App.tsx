import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import HelpScreen from './src/screens/HelpScreen';
import BucketScreen from './src/screens/BucketScreen';
import AccountScreen from './src/screens/AccountScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/components/Header';
import { COLORS } from './src/constants/colors';
import { Feather } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()


export default function App() {

  const { container, screenContainer } = styles;
  return (
    <SafeAreaView style={container}>
      <Header />
      <NavigationContainer>
            <Tab.Navigator 
              screenOptions={{ 
                headerShown: false,
                tabBarLabelPosition: 'below-icon',
                tabBarLabelStyle: {
                  fontWeight: "700",
                  fontSize: 13,
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginBottom: 15
                },
                tabBarActiveTintColor: COLORS.TOMATO,
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: COLORS.NIGHT,
                tabBarStyle: {
                  backgroundColor: COLORS.NIGHT
                },
              }}
              >
                <Tab.Screen 
                  name='Home' 
                  options={{tabBarIcon: ({ focused }) => (
                  <Feather 
                    name={'droplet'} 
                    size={25} 
                    color={focused ? COLORS.TOMATO : 'gray'}
                  />
                  )
                }}>
                  {() => <HomeScreen css={screenContainer} />}
                </Tab.Screen>
                <Tab.Screen 
                  name='Search' 
                  options={{tabBarIcon: ({ focused }) => (
                  <Feather 
                    name={'search'} 
                    size={25} 
                    color={focused ? COLORS.TOMATO : 'gray'}
                  />
                  )
                }}> 
                  {() => <SearchScreen css={screenContainer} />}
                </Tab.Screen>
                <Tab.Screen 
                  name='Bucket' 
                  options={{tabBarIcon: ({ focused }) => (
                  <Feather 
                    name={'package'} 
                    size={25} 
                    color={focused ? COLORS.TOMATO : 'gray'}
                  />
                  )
                }}> 
                {() => <BucketScreen css={screenContainer} />}
                </Tab.Screen>
                <Tab.Screen 
                  name='Help' 
                  options={{tabBarIcon: ({ focused }) => (
                  <Feather 
                    name={'help-circle'} 
                    size={25} 
                    color={focused ? COLORS.TOMATO : 'gray'}
                  />
                  )
                }}> 
                {() => <HelpScreen css={screenContainer} />}
                </Tab.Screen>
                <Tab.Screen 
                  name='Account' 
                  options={{tabBarIcon: ({ focused }) => (
                  <Feather 
                    name={'user'} 
                    size={25} 
                    color={focused ? COLORS.TOMATO : 'gray'}
                  />
                  )
                }}> 
                {() => <AccountScreen css={screenContainer} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screenContainer: {
    backgroundColor: 'green'
  }
});
