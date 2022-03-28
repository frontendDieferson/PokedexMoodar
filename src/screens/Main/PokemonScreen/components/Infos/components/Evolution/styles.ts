import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

const { width } = Dimensions.get('window')
const size = width / 4

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: size,
    width: size,
    borderRadius: size,
    marginVertical: 10,
  },
  wrapper: {
    height: size,
    width: size,
    borderRadius: size,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    width: '80%',
    height: '80%',
    top: -10,
  },
  label: {
    color: Colors.white,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    bottom: 15,
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

export default styles
