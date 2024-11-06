// src/screens/Login.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { View } from 'react-native';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Add authentication logic here
    navigation.navigate('Profile');
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">Login</Text>
      <Input
        className="mb-4 w-full"
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <Input
        className="mb-4 w-full"
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button className="w-full" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
};


export default Login;
