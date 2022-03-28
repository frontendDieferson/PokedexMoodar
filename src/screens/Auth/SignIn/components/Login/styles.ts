import { StyleSheet } from 'react-native'
import { Colors } from 'react-native-paper'

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 8,
  },
  titleStyle: {
    fontSize: 24,
  },
  input: {
    backgroundColor: '#33333306',
    marginBottom: 24,
  },
  error: {
    marginTop: -24,
    marginBottom: 24,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    marginTop: 24,
    marginBottom: 10,
    elevation: 0,
  },
  buttonText: {
    textTransform: 'capitalize',
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default styles
