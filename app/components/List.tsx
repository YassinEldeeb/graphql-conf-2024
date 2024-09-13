import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native'
import { useQuery } from 'react-query'

const getBoxersList = async () => {
  try {
    const GET_BOXERS_LIST = `
{users { id name email avatar bio favoriteCombo trainingPartner {name favoriteCombo}}}`

    const response = await fetch('http://localhost:4000/graphql', {
      body: JSON.stringify({ query: GET_BOXERS_LIST }),
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    })

    const json = await response.json()

    return json.data
  } catch (error) {
    console.log('ERROR', error)
  }
}

const BoxersList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['boxers'],
    queryFn: getBoxersList,
  })

  if (isLoading) return <ActivityIndicator color={'red'} />
  if (error) return <Text>{error as any}</Text>

  return (
    <ScrollView style={styles.container}>
      {data.users.map((boxer: any) => (
        <View key={boxer.id} style={styles.boxerCard}>
          <Image source={{ uri: boxer.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{boxer.name}</Text>
          <Text style={styles.bio}>{boxer.bio}</Text>
          <Text style={styles.combo}>
            Favorite Combo: {boxer.favoriteCombo.join(', ')}
          </Text>

          {/* Training Partner Section */}
          {boxer.trainingPartner.length > 0 && (
            <View style={styles.partnerContainer}>
              <Text style={styles.partnerHeading}>Training Partner:</Text>
              {boxer.trainingPartner.map((partner: any, index: number) => (
                <View key={index} style={styles.partnerCard}>
                  <Text style={styles.partnerName}>{partner.name}</Text>
                  <Text style={styles.combo}>
                    Favorite Combo: {partner.favoriteCombo.join(', ')}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  boxerCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  combo: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  partnerContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  partnerHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  partnerCard: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  partnerName: {
    fontSize: 16,
    color: '#444',
    fontWeight: '600',
  },
})

export default BoxersList
