/* eslint-disable prettier/prettier */

import {StyleSheet,Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 50,
        alignItems: 'center',
    },
    content: {
        width: 339,
        height: 385,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        marginBottom: 150,
    },
    Title: {
        fontFamily: 'Spartan-SemiBold',
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
        marginLeft: 19,
        padding: 5,
    },
    subTitle: {
        fontFamily: 'Spartan-Regular',
        fontWeight: '300',
        fontSize: 14,
        color: '#000',
        marginLeft: 19,
    },
    input: {
        fontFamily: 'Spartan-Regular',
        fontWeight: '400',
        fontSize: 16,
      width: 300,
      height: 56,
      marginLeft: 19,
      marginTop: 30,
    },
    Icon: {
        bottom: 34,
        left: 290,
        color: '#676767',
    },
    buttonLogin: {
        width: 300,
        height: 56,
        borderRadius: 8,
        backgroundColor: '#2E6EB5',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonLoginTitle: {
        color: '#fff',
        fontFamily: 'Spartan-Bold',
        fontSize: 16,
        fontWeight: '700',
    },
});



export default styles;
