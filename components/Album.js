import { View, Text, StyleSheet } from 'react-native'

export function Album({ albumName, year, musics }) {
  return (
    <View> 
      <Text style={styles.integrantes}>{albumName} {year}</Text>
      <Text>{musics}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  integrantes:{
fontWeight:700,
fontsize:15,
marginTop: 10

  }

})