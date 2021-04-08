import React, { useState, createContext, useEffect } from 'react';
import { Alert } from 'react-native';

import firebase from '../services/firebaseConnection';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(()=> {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorage();
    }, []);

    //Logar usuário
    async function signIn(email, password){
        if(email !== '') {

            setLoadingAuth(true);
            await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value)=> {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                .then(( snapshot )=> {
                    let data = {
                        uid: uid,
                        nome: snapshot.val().nome,
                        email: value.user.email
                    }

                    setUser(data);
                    storageUser(data);
                    setLoadingAuth(false);
                })
            })
            .catch((error)=> {
                switch (error.code) {
                    case 'auth/invalid-email':
                        Alert.alert('Erro', 'O endereço de email não é válido.');
                        break;
                    case 'auth/user-disabled':
                        Alert.alert('Erro', 'Usuário correspondente ao e-mail fornecido foi desativado.');
                        break;
                    case 'auth/user-not-found':
                        Alert.alert('Erro', 'Nenhum usuário correspondente ao e-mail fornecido.');
                        break;
                    case 'auth/wrong-password':
                        Alert.alert('Erro', 'A senha está incorreta.');
                        break;
                }
                setLoadingAuth(false);
            });
        }else{
            Alert.alert('Aviso', 'Todos os campos precisam ser preenchidos.');
        };
    }

    //Cadastrar usuário
    async function signUp(email, password, nome){
        if( nome !== ''){
            setLoadingAuth(true);
            await firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(async (value)=>{
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    saldo: 0,
                    nome: nome
                })
                .then(()=>{
                    let data = {
                        uid: uid,
                        nome: nome,
                        email: value.user.email,
                    };

                    setUser(data);
                    storageUser(data);
                    setLoadingAuth(false);
                })
            })
            .catch((error)=> {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                    Alert.alert('Erro', 'Email já cadastrado.');
                    break;
                    case 'auth/invalid-email':
                    Alert.alert('Erro', 'O endereço de email não é válido.');
                    break;
                    case 'auth/weak-password':
                        Alert.alert('Erro', 'A senha não é for forte o suficiente. Precisa ser no mínimo com 6 caracteres.');
                        break;
                }
                setLoadingAuth(false);
            });
        } else {
            Alert.alert('Aviso', 'Todos os campos precisam ser preenchidos.');
        }
    }

    //Salvando dados no Async Storage
    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    //Deslogando usuário
    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user , user,  loading, signUp, signIn, signOut, loadingAuth }}>
            {children}
        </AuthContext.Provider>   
    );
}

export default AuthProvider;