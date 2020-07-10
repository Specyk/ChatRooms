import React, { Component } from 'react'
import Header from './components/Header/Header'
import RoomList from './components/RoomList/RoomList'
import Chat from './components/Chat/Chat'
import Welcome from './components/Welcome'

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
export default class App extends Component {
    state = {
        selectedRoomId: null
    }

    chooseRoomHandler = id => e => {
        this.setState({ selectedRoomId: id })
    }

    renderMainContent = (roomId) => roomId ? <Chat roomId={roomId} /> : <Welcome>Choose the room</Welcome>

    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col-md-3">
                        <RoomList chooseRoomHandler={this.chooseRoomHandler} />
                    </div>
                    <main className="col-md-9">
                        {this.renderMainContent(this.state.selectedRoomId)}
                    </main>
                </div>
            </div>
        )
    }
}
