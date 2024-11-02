// src/screens/Derby.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import useStore from '../store';

interface DerbyProps {
  route: { params: { id: string } };
}

const Derby: React.FC<DerbyProps> = ({ route }) => {
  const { id } = route.params;
  const { derbies, fetchDerbyById } = useStore();

  useEffect(() => {
    fetchDerbyById(id);
  }, [id]);

  const derby = derbies.find((d) => d._id === id);

  return (
    <View style={styles.container}>
      {derby ? (
        <>
          <Text style={styles.title}>{derby.name}</Text>
          <Text>Start Date: {derby.start_date}</Text>
          <Text>End Date: {derby.end_date}</Text>
          <Button title="Add Catch" onPress={() => console.log("Navigate to AddCatch")} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 8 },
});

export default Derby;
