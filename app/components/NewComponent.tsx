import React from 'react'
import { useStoreState } from '../state-management/typedHook'
import { Text } from 'react-native'

const NewComponent = () => {
  const name = useStoreState((state) => state.name)

  return <Text>{name}</Text>
}

export default NewComponent
