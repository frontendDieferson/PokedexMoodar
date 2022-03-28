import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
  },
  top: {
    flex: 0.9,
  },
  bottom: {
    flex: 0.1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 11,
  },
  clean: {
    color: '#4A7DFF',
    textDecorationLine: 'underline',
  },
  typesWrapper: {
    flex: 1,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3F3F3F',
  },
  button: {
    elevation: 0,
    padding: 5,
  },
  buttonText: {
    textTransform: 'capitalize',
    fontWeight: '600',
  },
})

export default styles
