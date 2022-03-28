import { StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '46%',
    marginHorizontal: '2%',
    borderRadius: 4,
    backgroundColor: '#D8D8D8',
    marginVertical: 6,
  },
  buttonSelected: {
    backgroundColor: '#2E6EB5',
  },
  label: {
    alignItems: 'center',
    padding: 2,
    backgroundColor: '#676767',
    borderRadius: 10,
  },
  text: {
    color: '#6B6060',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textSelected: {
    color: Colors.white,
  },
})

export default styles
