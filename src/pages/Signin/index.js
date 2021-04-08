import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth';

import { Background, Container, Logo, AreaInput, Input,
SubmitButton, SubmitText, Link, LinkText, AreaSenha, ButonMostrar, InputSenha, TextOu } from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);
  const [hidePass, setHidePass] = useState(true);

  function handleLogin(){
    signIn(email, password);
  }

 return (
   <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input 
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={ (text) => setEmail(text)}
          />

          <AreaSenha>
            <InputSenha 
              placeholder="Senha"
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={ (text) => setPassword(text)}
              secureTextEntry={hidePass}
            />
            <ButonMostrar onPress={ () => setHidePass(!hidePass) }>
              { hidePass ? 
                <Ionicons 
                  name={'eye'} 
                  color="#fff" 
                  size={25} 
                />
                :
                <Ionicons 
                  name={'eye-off'} 
                  color="#fff" 
                  size={25} 
                />
              }
            </ButonMostrar>
          </AreaSenha>
          
          <View style={{width: "100%", alignItems: 'flex-end'}}>
            <TouchableOpacity  onPress={ () => navigation.navigate('PasswordReset')}>
              <Text style={{ color: '#fff'}}> Esqueceu a senha? </Text>
              </TouchableOpacity>
          </View>

        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color={"#fff"} />
            ) : (
              <SubmitText> Acessar </SubmitText>
            )
          }
         
        </SubmitButton>

        <TextOu>--------------- ou --------------- </TextOu>
        <Link onPress={ () => navigation.navigate('SignUp')}>
          <LinkText> Criar uma conta </LinkText>
        </Link>

      </Container>
   </Background>
  );
}