/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from './styles';
export default function Header() {
  return (
    <View style={styles.contentSearch}>

    <TextInput
      style={styles.searchbar}
      placeholder="Buscar Pokémon"
      />
      <Image
      style={styles.filter}
      source={require('../../assets/filter.png')}
      />
      </View>
  );
}
