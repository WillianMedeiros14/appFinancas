import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';
import CustomDrawer from '../Components/CustomDrawer';

import { FontAwesome5 } from '@expo/vector-icons';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator
        drawerContent={ (props) => <CustomDrawer {...props}/>}

        drawerStyle={{
            backgroundColor: "#171717"
        }}
        drawerContentOptions={{
            labelStyle: {
                fontWeight: 'bold'
            },
            activeTintColor: '#fff',
            activeBackgroundColor: '#00b94a',
            inactiveBackgroundColor: '#000',
            inactiveTintColor: '#ddd',
            itemStyle: {
                marginVertical: 5
            }
        }}
    >
        <AppDrawer.Screen name="Home" component={Home}
            options={{
                drawerIcon: config => <FontAwesome5 name="home" size={21} color="white" />
            }}
        />
        <AppDrawer.Screen name="Registrar" component={New}
            options={{
                drawerIcon: config => <FontAwesome5 name="plus-square" size={21} color="white" />
            }}
        />
        <AppDrawer.Screen name="Perfil" component={Profile}
            options={{
                drawerIcon: config => <FontAwesome5 name="user" size={21} color="white" />
            }}
        />
    </AppDrawer.Navigator>
    );
}

export default AppRoutes;
