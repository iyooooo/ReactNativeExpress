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
            <View style={styles.item} key={i}>
            <Text style={styles.label}>
                {item.label}
            </Text>
            <View style={styles.rightSection}>
                <TouchableOpacity onPress={() => onPressComplete(i)} style={styles.complete}>
                 <Text style={{textAlign: 'center'}}>
                    {item.completed ? '完成': '未完成' }
                </Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => onPressItem(i)} style={styles.remove}>
                     <Text style={{textAlign: 'center'}}>
                        X
                    </Text>
                 </TouchableOpacity>
            </View>
            </View>
        )
    }

    render() {

        const {list} = this.props
        
        return (
            <ScrollView
                style={styles.container}
                keyboardDismissMode={'interactive', 'on-drag'}
            >
                {list.map(this.renderItem)}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    item: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        backgroundColor:'lightgrey',
        textAlign: 'center'
    },
    rightSection: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        alignItems: 'center',
    },
    complete: {
        // backgroundColor:'lightgreen',
        width: 50,
    },
    remove: {
        // backgroundColor:'lightyellow',
        width: 30,
    },
})