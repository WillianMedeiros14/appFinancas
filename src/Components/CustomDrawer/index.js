import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props){
    const { user, signOut} = useContext(AuthContext);

    return(
        <DrawerContentScrollView style={{flex: 1}} {...props} >
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
                <Image 
                    source={require('../../assets/Logo.png')}
                    style={{width: 85, height: 85}}
                    resizeMode="contain"
                />
                <Text style={{ color: '#fff', fontSize: 18, marginTop: 5 }}>
                    Bem-vindo
                </Text>
                
                <Text style={{ color: '#fff', fontSize: 17, fontWeight: 'bold', paddingBottom: 25 }}>
                    {user && user.nome}
                </Text>
            </View>

            <DrawerItemList {...props} />

            <View style={{ marginTop: 25, marginLeft: 19}}>
                <TouchableOpacity style={{ flexDirection: 'row'}} onPress={ () => signOut()}>
                    <FontAwesome5 name="sign-out-alt" size={19} color="#c62c36" />
                    <Text style={{ color: "#c62c36", marginLeft: 20}}> Sair do app</Text>
                </TouchableOpacity>
            </View>
           
           
            

        </DrawerContentScrollView>
    );
}