import React, { Component } from 'react'
import Header from './Header/Header'
import RoomList from './RoomList/RoomList'
import Chat from './Chat/Chat'
import Welcome from './Welcome/Welcome'

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
export default class App extends Component {
    state = {
        selectedRoomId: null
    }

    renderMainContent = () => (
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/chat/:chatId" component={Chat} />
        </Switch>
    )

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Header />
                    <div className="row">
                        <div className="col-md-3">
                            <RoomList chooseRoomHandler={this.chooseRoomHandler} />
                        </div>
                        <main className="col-md-9">
                            {this.renderMainContent()}
                        </main>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
