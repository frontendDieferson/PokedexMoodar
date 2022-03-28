import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    height: width * 0.5,
    width: '100%',
    marginTop: width * 0.2,
    borderRadius: 20,
    overflow: 'visible',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
})

export default styles
