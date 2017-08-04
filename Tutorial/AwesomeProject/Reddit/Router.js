import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

import { connect } from 'react-redux'
import { Router, Scene} from 'react-native-router-flux'

import Login from './Login'
import Posts from './Posts'
import Random from './Random'

export default class AppRouter extends Component {
    render() {

        let styles = StyleSheet.create({
             tabBar: {
                borderTopWidth: 0.5,
                borderColor: '#b7b7b7',
                backgroundColor: '#fff',
                opacity: 1
            }
        })

        return (
            <Router>
                <Scene key='root' hideTabBar>
                    {/*<Scene key='login' component={Login} title="Login" />*/}
                    <Scene 
                     key='tabbar' 
                     tabs 
                     hideNavBar
                     tabBarStyle={styles.tabBar}
                    >
                        <Scene 
                         key='tab_1' 
                         title="Feed" 
                         titleStyle={{alignSelf: 'center'}}  
                         style={{padding: 15}}
                         >
                            <Scene 
                             key='Posts' 
                             component={Posts} 
                             title="Reddit Posts"
                             />
                        </Scene>
                        <Scene 
                         key='tab_2' 
                         title="Random" 
                         titleStyle={{alignSelf: 'center'}}
                        >
                            <Scene 
                             key='Random' 
                             component={Random} 
                             title="Reddit Random"
                            />
                        </Scene>
                        <Scene 
                         key='tab_3' 
                         title="Login" 
                         >
                            <Scene 
                             key='Posts' 
                             component={Login} 
                             title="Login"
                             />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

