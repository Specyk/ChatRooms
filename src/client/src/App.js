import React, { Component } from 'react'
import Header from './components/Header/Header'
import RoomList from './components/RoomList/RoomList'
import Chat from './components/Chat/Chat'

import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
export default class App extends Component {
    chooseRoomHandler = id => e => {
        console.log("Wybrano pokoj " + id)
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <div className="col-md-3">
                        <RoomList chooseRoomHandler={this.chooseRoomHandler} />
                    </div>
                    <div className="col-md-9">
                        <Chat />
                    </div>
                </div>
            </div>
        )
    }
}
