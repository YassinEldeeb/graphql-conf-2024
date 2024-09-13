import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import BoxersList from './components/List'
import { QueryClientProvider } from 'react-query'
import { reactQueryClient } from './state-management/react-query'
import { StoreProvider } from 'easy-peasy'
import { easyPeasyStore } from './state-management/easy-peasy'
import InputUserName from './components/InputUserName'
import NewComponent from './components/NewComponent'

export default function App() {
  return (
    <StoreProvider store={easyPeasyStore}>
      <QueryClientProvider client={reactQueryClient}>
        <View style={styles.container}>
          <BoxersList />
          <StatusBar style='auto' />
        </View>
      </QueryClientProvider>
    </StoreProvider>
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
