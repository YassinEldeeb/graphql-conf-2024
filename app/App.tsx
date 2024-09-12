import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import BoxersList from './components/List'

export default function App() {
  return (
    <View style={styles.container}>
      <BoxersList />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
})
