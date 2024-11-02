// src/screens/Profile.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import useStore from '../store';

interface ProfileProps {
  navigation: any;
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const { derbies, fetchDerbiesByAngler } = useStore();

  useEffect(() => {
    fetchDerbiesByAngler('sample-angler-id'); // Replace with actual angler ID
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Derbies</Text>
      <FlatList
        data={derbies}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Button title={item.name} onPress={() => navigation.navigate('Derby', { id: item._id })} />
        )}
      />
      <Button title="Create Derby" onPress={() => navigation.navigate('CreateDerby')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
});

export default Profile;
