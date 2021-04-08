import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import PasswordReset from '../pages/PasswordReset';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{headerShown: false}}
            />

            <AuthStack.Screen 
            name="SignUp" 
            component={SignUp}
            options={{
                headerStyle: {
                    backgroundColor: '#131313',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
            }}
            />

            <AuthStack.Screen 
            name="PasswordReset" 
            component={PasswordReset}
            options={{
                headerStyle: {
                    backgroundColor: '#131313',
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
            }}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;