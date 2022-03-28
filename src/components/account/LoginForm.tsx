/*
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { user, userDetails } from "../../util/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const [error, setError] = useState<string>();
  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setError(undefined);
    const { username, password } = user;
    if (data.username !== username || data.password !== password) {
      setError("Usuário ou Senha Incorreto");
    } else {
      login!(userDetails);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sessão</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCapitalize="none"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      <Button title="Entrar" onPress={handleSubmit(onSubmit)} />
      {errors.username && (
        <Text style={styles.error}>{errors.username.message}</Text>
      )}
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

type FormData = {
  username: string;
  password: string;
};

const schema = yup.object({
  username: yup.string().required("Nome de usuário requerido"),
  password: yup
    .string()
    .min(8, "Senha deve conter pelo menos 8 caracteres")
    .required("Senha Requerida"),
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    margin: 40,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    height: 40,
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  error: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
}); *\