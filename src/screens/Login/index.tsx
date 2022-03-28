/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View,ImageBackground, Image} from 'react-native';
import SignIn from '../../components/SignIn';
import styles from './styles';
//import firebase from '../../services/firebase';
import { firebase } from '@react-native-firebase/auth';
import {Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../screens/RootStackParams';

type authScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Login() {
  const navigation = useNavigation<authScreenProp>()

  const [ email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState('')



  const loginFirebase = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      
      

     
    })

   
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bgPokemon.png')}
        style={styles.imageBackground}>
        <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
        />
        <SignIn />
        </ImageBackground>
    </View>
  );
}
