import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
} from 'react-native'
import {connect} from 'react-redux'

import {actionCreators} from './todoListRedux'
import Title from './Title'
import Footer from './Footer'
import Input from './Input'
import List from './List'

const mapStateToProps = (state) => ({
    todos: state.todos,
})

class App extends Component {

    addItem = (text) => {
        const {dispatch} = this.props
        dispatch(actionCreators.add(text))
    }

    removeItem = (index) => {
        const {dispatch} = this.props
        dispatch(actionCreators.remove(index))
    }
    toggleItem = (index) => {
        const {dispatch} = this.props
        dispatch(actionCreators.toggleItemComplete(index))
    }

    removeCompleted = () => {
        const {dispatch} = this.props
        dispatch(actionCreators.removeCompleted())
    }

    render() {

        const {todos} = this.props
        
        return (
            <View  style={styles.container}>
                <Title>
                    Todo List
                </Title>
                <Input 
                    placeholder={'Enter an item!'}
                    onSubmitEditing={this.addItem}
                />
                <View style={styles.divider}/>
                <List
                    list={todos}
                    onPressItem={this.removeItem}
                    onPressComplete={this.toggleItem}
                />
                <View style={styles.divider} />
                <Footer
                    removeCompleted={this.removeCompleted}
                >
                    Remove completed items
                </Footer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ScrollView stretch to fullScreeen
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
})


export default connect(mapStateToProps)(App)