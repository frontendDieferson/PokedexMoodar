/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        margin: 24,
        width: 117,
        height: 41,
    },
    contentSearch: {
        flexDirection: 'row',

    },
    searchbar: {
        width: 288,
        height: 46,
        borderRadius:30,
        fontFamily: 'Spartan-Regular',
        fontSize: 14,
        fontWeight: '400',
        backgroundColor: '#E5E5E5',
        textAlign: 'center',
    },
    filter: {
        width: 16,
        height:18,
        left: 21,
        top:14,
    },

});


export default styles;
