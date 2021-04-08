import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native'; 

import Header from '../../Components/Header';

import { AuthContext } from '../../contexts/auth';

import { Container, Nome, Email, NewLink, NewText, Logout, LogoutText} from './styles';

export default function Profile() {
  const navigation = useNavigation();

  const { user, signOut } = useContext(AuthContext);

 return (
   <Container>
     <Header />
      <Nome>
        {user && user.nome}
      </Nome>
      <Email>  {user && user.email} </Email>
      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText> Registrar gastos </NewText>
      </NewLink>

      <Logout onPress={() => signOut()}>
        <LogoutText> Sair </LogoutText>
      </Logout>
   </Container>
 );
}