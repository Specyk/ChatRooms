import React, { Component } from 'react'
import history from '../history'

import HeaderContainer from 'containers/Header/HeaderContainer'
import RoomListContainer from 'containers/RoomList/RoomListContainer'
import ChatContainer from 'containers/Chat/ChatContainer'
import Welcome from 'containers/Welcome/WelcomeContainer'
import './App.less'

import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
export default class App extends Component {
    renderMainContent = () => (
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/chat/:chatId" component={ChatContainer} />
        </Switch>
    )

    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <HeaderContainer />
                    <aside>
                        <RoomListContainer />
                    </aside>
                    <main>
                        {this.renderMainContent()}
                    </main>
                </Router >
            </div >
        )
    }
}
