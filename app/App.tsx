import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import BoxersList from './components/List'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <BoxersList />
        <StatusBar style='auto' />
      </View>
    </ApolloProvider>
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
