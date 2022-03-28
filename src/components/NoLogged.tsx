import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function NoLogged() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
        />
      <Text style={styles.text}>
      Você deve estar logado para ver os favoritos
      </Text>
      <TouchableOpacity
        style={styles.buttomLogin}
        onPress={() => navigation.navigate("SignIn" as never)}
      >
        <Text style={styles.buttonLoginTitle}>Fazer Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 20,
    marginHorizontal: 10,
    textAlign: "center",
  },
  logo: {
    margin: 24,
    left: 20,
     
  },
  buttomLogin: {
    width: 300,
    height: 56,
    borderRadius: 8,
    backgroundColor: '#2E6EB5',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonLoginTitle: {
    color: '#fff',
    fontFamily: 'Spartan-Bold',
    fontSize: 16,
    fontWeight: '700',
},
});
