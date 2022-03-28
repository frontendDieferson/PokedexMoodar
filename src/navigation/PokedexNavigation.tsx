import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screen/Pokedex";
import PokemonScreen from "../screen/Pokemon";
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="SignIn"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Pokédex" 
      component={PokedexScreen}
      options={{
        headerShown: false,
      }}
       />
      <Stack.Screen
        options={{
         headerShown: false
        }}
        name="Pokemon"
        component={PokemonScreen}
      />
    </Stack.Navigator>
  );
}
