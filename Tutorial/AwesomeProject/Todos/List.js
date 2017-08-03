import React, {Component} from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native'

export default class List extends Component {

    renderItem = (item, i) => {

        const {onPressItem,onPressComplete} = this.props

        return (
            <View style={styles.container} key={i}>
            <Text>
                {item.label}
            </Text>
            <TouchableOpacity onPress={() => onPressComplete(i)}>
                 <Text>
                    {item.completed ? '完成': '未完成' }
                </Text>
            </TouchableOpacity>
             <TouchableOpacity onPress={() => onPressItem(i)}>
                 <Text>
                    X
                </Text>
            </TouchableOpacity>
            </View>
        )
    }

    render() {

        const {list} = this.props
        
        return (
            <ScrollView
                keyboardDismissMode={'interactive', 'on-drag'}
            >
                {list.map(this.renderItem)}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
    },
})