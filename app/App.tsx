import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import BoxersList from './components/List'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// Initialize Apollo Client

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
