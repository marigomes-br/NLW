import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEU PRIMEIRO APP</Text>
      <StatusBar style="auto" backgroundColor='coral' />

      <Button title="botão 1" />
      <Button title="botão 2" />
      <Button title="botão 3" />
    </View>
  );
}

interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return(
      <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
