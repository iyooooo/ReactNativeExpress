import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import {connect} from 'react-redux'

export default class Posts extends Component {
    render() {
         let styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent:'center', 
                alignItems:'center',
                backgroundColor: 'pink',
            }
        })

        return (
            <View style={styles.container}>
                <Text> This is Reddit Posts! </Text>
            </View>
        )
    }
}
