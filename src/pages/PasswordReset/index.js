import React, { useState } from 'react';
import { Platform, ActivityIndicator, Alert, Text, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import firebase from '../../services/firebaseConnection';
import { Background, Container, AreaInput, Input,
SubmitButton, SubmitText } from '../Signin/styles';

export default function PasswordReset() {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    
 
   //Recuperar senha
   async function ResetPassword(){
    if(email !== ''){
        setLoading(true);
        firebase.auth().sendPasswordResetEmail(email)
        .then( (value)=>{
            Alert.alert(
                'Atenção',
                'Enviamos um email de recuperação de senha para o seguinte endereço: ' +email,
                [{text: 'OK', onPress: () => navigation.goBack()}],
            );
            setLoading(false);
        })
        .catch((error)=> {
          setLoading(false);
          switch (error.code) {
            case 'auth/invalid-email':
              Alert.alert('Erro', 'Email inválido.');
              break;
            case 'auth/user-not-found':
              Alert.alert('Erro', 'Endereço de email não encontrado.');
              break;
          }
        });
    }else {
      Alert.alert('Aviso', 'Insira um email.');
    } 
}

 return (
   <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Text style={styles.titulo}> Esqueceu sua senha?</Text> 
        <Text style={styles.TextRecuperarSenha}>Digite seu email, no qual enviaremos um link para redefinir sua senha </Text>
        <AreaInput>
         
          <Input 
            placeholder="Digite um email cadastrado"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={ (text) => setEmail(text)}
          />

        </AreaInput>

        <SubmitButton onPress={ResetPassword}>
          {
            loading ? (
              <ActivityIndicator size={20} color={"#fff"} />
            ) : (
              <SubmitText>Redefir senha</SubmitText>
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
    marginBottom: 20
  },
  TextRecuperarSenha: {
    textAlign: 'center',
    color: "#fff",
    width: '90%',
    marginBottom: 50
  }
});
