import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    WebView,
} from 'react-native'

import {connect} from 'react-redux'

export default class Login extends Component {

    onNavigationStateChange = (navState) => {
        if (navState.url.indexOf('about://callback/login#') === 0) {
        // Regex shortcut to grab the access_token if the URL matches this format.
            const regex = /^about:\/\/callback\/login#access_token=(.+)&token/
            let tt = navState.url.match(regex)
            console.log(tt)
            let accessToken = tt[1]
        }
    }

    render() {
        const REDDIT_APP_ID = 'Mcnxsc2BLOXi8w'
        const LOGIN_URL = `https://www.reddit.com/api/v1/authorize.compact?client_id=${REDDIT_APP_ID}&response_type=token&state=RANDOM_STRING&redirect_uri=about://callback/login&scope=read`
        return (
            <WebView
                source={{uri: LOGIN_URL}}
                onNavigationStateChange={this.onNavigationStateChange}
            />
        )
    }
    
}

