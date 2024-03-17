import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import HelpScreen from './src/screens/HelpScreen';
import BucketScreen from './src/screens/BucketScreen';
import AccountScreen from './src/screens/AccountScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from './src/constants/colors';


const Tab = createBottomTabNavigator()


export default function App() {

  const { container } = styles;
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
                  marginBottom: 15
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'white',
                tabBarActiveBackgroundColor: COLORS.NIGHT,
                tabBarStyle: {
                  backgroundColor: COLORS.NIGHT
                },
                tabBarIconStyle: {
                  display: 'none'
                }
              }}
              >
                <Tab.Screen name='Home' component={HomeScreen} />
                <Tab.Screen name='Search' component={SearchScreen} />
                <Tab.Screen name='Bucket' component={BucketScreen} />
                <Tab.Screen name='Help' component={HelpScreen} />
                <Tab.Screen name='Account' component={AccountScreen} />
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
});
