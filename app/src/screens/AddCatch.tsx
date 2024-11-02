// src/screens/AddCatch.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import useStore from '../store';

const AddCatch: React.FC = () => {
  const [species, setSpecies] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const { addCatch } = useStore();

  const handleSubmit = () => {
    addCatch({ species, weight: parseFloat(weight) });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Species" style={styles.input} value={species} onChangeText={setSpecies} />
      <TextInput placeholder="Weight" style={styles.input} value={weight} onChangeText={setWeight} keyboardType="numeric" />
      <Button title="Add Catch" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16 },
});

export default AddCatch;
