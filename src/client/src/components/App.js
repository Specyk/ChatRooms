import React, { Component } from 'react'
import HeaderContainer from '../containers/Header/HeaderContainer'
import RoomListContainer from '../containers/RoomList/RoomListContainer'
import ChatContainer from '../containers/Chat/ChatContainer'
import Welcome from '../containers/Welcome/WelcomeContainer'
import './App.less'

import {
    BrowserRouter,
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
                <BrowserRouter>
                    <HeaderContainer />
                    <aside>
                        <RoomListContainer />
                    </aside>
                    <main>
                        {this.renderMainContent()}
                    </main>
                </BrowserRouter >
            </div >
        )
    }
}
