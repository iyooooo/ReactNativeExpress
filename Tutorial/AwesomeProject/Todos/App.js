import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native'
import {connect} from 'react-redux'

import actionCreators from './todoListRedux'
import Title from './Title'
import Footer from './Footer'
import Input from './Input'

const mapStateToProps = (state) => ({
    todos: state.todos,
})

class App extends Component {

    renderItem = (item, i) => {
        return (
            <View key={i} style={styles.items}>
                <Text style={styles.itemContent}>
                    {item}
                </Text>
                <Text style={styles.itemCheckBox}>
                    单选框
                </Text>
                <Text style={styles.itemRemove}>
                    X
                </Text>
            </View>
        )
    }

    addItem = (text) => {
        const {dispatch} = this.props
        dispatch(actionCreators.add(text))
    }

    removeItem = (index) => {
        const {dispatch} = this.props
        dispatch(actionCreators.remove(index))
    }

    render() {
        
        const {todos} = this.props
        
        return (
            <View style={styles.container}>
                <Title>
                    Todo List
                </Title>
                <Input 
                    placeholder={'Enter an item!'}
                    onSubmitEditing={this.addItem}
                />
                <ScrollView style={styles.scrollView}>
                    {todos.map(this.renderItem)}
                </ScrollView>
                <Footer>
                    Remove completed items
                </Footer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    items: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemContent: {
        paddingLeft: 10,
    },
    itemCheckBox: {
        marginRight: 5,
    },
    itemRemove: {
         paddingRight: 20,
    },
})

export default connect(mapStateToProps)(App)