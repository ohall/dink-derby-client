// src/screens/Profile.tsx
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';
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
    <View>
      <Text>My Derbies</Text>
      <FlatList
        data={derbies}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Button onPress={() => navigation.navigate('Derby', { id: item._id })} >
            <ButtonText>{item.name}</ButtonText>
          </Button>
        )}
      />
      <Button onPress={() => navigation.navigate('CreateDerby')}>
        <ButtonText>Create Derby</ButtonText>
      </Button>
    </View>
  );
};

export default Profile;
