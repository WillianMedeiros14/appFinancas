import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { AuthContext } from '../../contexts/auth';

import { Background, Container, AreaInput, Input,
SubmitButton, SubmitText, AreaSenha, ButonMostrar, InputSenha } from '../Signin/styles';

export default function SignIn() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const { signUp, loadingAuth } = useContext(AuthContext);
 
  function handleSignUp(){
    signUp(email, password, nome);
  }

 return (
   <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Text style={styles.titulo}> Criar conta </Text> 
        <AreaInput>
          <Input 
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={ (text) => setNome(text)}
          />

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

        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color={"#fff"} />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }
        </SubmitButton>

      </Container>
   </Background>
  );
}


const styles = StyleSheet.create({
  titulo: {
    color: "#fff",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 50,
  }
});