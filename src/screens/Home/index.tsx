/* eslint-disable prettier/prettier */
import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';



export default function Home() {

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
    
    </View>
  );
}
