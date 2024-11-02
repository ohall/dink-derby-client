// src/screens/JoinDerby.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet } from 'react-native';
import useStore from '../store';
import { useNavigation } from '@react-navigation/native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';

const JoinDerby: React.FC = () => {
  const [derbyId, setDerbyId] = useState<string>('');
  const [isScannerActive, setIsScannerActive] = useState<boolean>(false);
  const { fetchDerbyById } = useStore();
  const navigation = useNavigation();

  const handleJoinDerby = async () => {
    if (!derbyId) {
      Alert.alert('Error', 'Please enter a derby ID.');
      return;
    }

    try {
      await fetchDerbyById(derbyId);
      navigation.navigate('Derby', { id: derbyId });
    } catch (error) {
      Alert.alert('Error', 'Failed to join derby. Please check the ID and try again.');
    }
  };

  const handleScanSuccess = (e: { data: string }) => {
    setDerbyId(e.data);
    setIsScannerActive(false);
    handleJoinDerby();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Derby</Text>

      {/* Text Input for Manual Entry */}
      <TextInput
        placeholder="Enter Derby ID"
        style={styles.input}
        value={derbyId}
        onChangeText={setDerbyId}
      />
      <Button title="Join Derby" onPress={handleJoinDerby} />

      {/* QR Code Scanner Activation */}
      <Button title="Scan QR Code" onPress={() => setIsScannerActive(true)} />

      {/* QR Code Scanner */}
      {isScannerActive && (
        <div><h1>QR Code Scanner</h1></div>
        // <QRCodeScanner
        //   onRead={handleScanSuccess}
        //   flashMode={RNCamera.Constants.FlashMode.off}
        //   topContent={<Text>Scan a QR code to join the derby</Text>}
        //   bottomContent={<Button title="Cancel" onPress={() => setIsScannerActive(false)} />}
        // />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: { borderWidth: 1, padding: 8, marginBottom: 16 },
});

export default JoinDerby;
