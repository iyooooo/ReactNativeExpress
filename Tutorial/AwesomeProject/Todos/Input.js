import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native'

export default class Input extends Component {

    state = {
        text: '',
    }

    onChangeText = (text) => this.setState({text})

    onSubmitEditing = () => {
        const {onSubmitEditing} = this.props
        const {text} = this.state

        if (!text) return
        console.log(text)
        onSubmitEditing(text)
        this.setState({text: ''})
    }

    render() {
        const {placeholder} = this.props
        const {text} = this.state

        return (
            <TextInput
                style={styles.input}
                value={text}
                placeholder={placeholder}
                onChangeText={this.onChangeText}
                onSubmitEdiing={this.onSubmitEditing}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
        padding: 10,
        height: 40,
        fontSize: 13,
        color: 'lightgray',
    },
})