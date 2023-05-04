import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from '../pages/home/home-index';
import { LoginPage } from '../pages/login/login-index';

export function AppRouter(){
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}