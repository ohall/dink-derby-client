// src/screens/CreateDerby.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import useStore from '../store';

const CreateDerby: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const { createDerby } = useStore();

  const handleSubmit = () => {
    createDerby({ name, start_date: startDate, end_date: endDate });
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Derby Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Start Date" style={styles.input} value={startDate} onChangeText={setStartDate} />
      <TextInput placeholder="End Date" style={styles.input} value={endDate} onChangeText={setEndDate} />
      <Button title="Create Derby" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16 },
});

export default CreateDerby;
