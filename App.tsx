import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Setup } from './helpers/Setup';

export default function App() {
  function initFirebase(){
    Setup.init()
  }
  return (
    <View style={styles.container}>
     <TouchableOpacity style={{padding: 3, borderRadius: 7, borderWidth: 1}} onPress={initFirebase}>
      <Text>Init Firebase</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
