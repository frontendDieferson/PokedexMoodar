import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { getColorByPokemonType } from "../util/pokemonUtil";
import { PokemonEntity } from "../util/types/pokemon";
interface PokemonCardProps {
  pokemon: PokemonEntity;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const navigation = useNavigation();

  const cardStyles = {
    backgroundColor: getColorByPokemonType(pokemon.types),
    ...styles.card,
  };

  const handlePress = () => {
    navigation.navigate("Pokemon" as never, pokemon as never);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={cardStyles}>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
        <View style={styles.shadow} />
        <Text style={styles.name}>{pokemon.name?.toUpperCase()}</Text>
        
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: 147,
    height: 95,
    margin: 5,
    borderRadius: 15,
    padding: 8,
  },
  image: {
    
    bottom: 20,
    height: 90,
    width: 80,
  },
  name: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 12,
    backgroundColor: '#676767',
    borderRadius: 10,
    padding: 2,
    textAlign: 'center',
    bottom: 26,
    width: 122,
  },
  shadow: {
    height: 120,
    width: 120,
    backgroundColor: "#fff",
    opacity: 0.2,
    position: "absolute",
    borderRadius: 60,
    bottom: -25,
    right: -25,
  },
});

export default React.memo(PokemonCard);
