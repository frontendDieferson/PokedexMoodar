import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  gradient: {
    height: width * 0.27,
    width: '46%',
    marginVertical: 30,
    marginHorizontal: '2%',
    borderRadius: 20,
  },
  container: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
  },
  touchable: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 12,
  },
  label: {
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#676767',
    borderRadius: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  image: {
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    top: -35,
  },
})

export default styles
