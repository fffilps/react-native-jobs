import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({ url}) => {
  //Create functionality of this button later 
  return (
    <View style={styles.container}>
      <TouchableOpacity styles={styles.likeBtn}> 
        <Image 
          source={icons.heartOutline}
          resizeMode='contain'
          styles={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer