import React from 'react'
import { TextInput, View } from 'react-native'
import { useStoreActions, useStoreState } from '../state-management/typedHook'

const InputUserName = () => {
  const changeName = useStoreActions((actions) => actions.changeName)

  return (
    <View>
      <TextInput
        onChangeText={(value) => {
          changeName(value)
        }}
      />
    </View>
  )
}

export default InputUserName
