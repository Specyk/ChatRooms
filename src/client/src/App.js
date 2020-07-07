import React, { Component } from 'react'
import RoomList from './components/RoomList/RoomList'
import Chat from './components/Chat/Chat'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
export default class App extends Component {

    render() {
        return (
            <div>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <RoomList />
                        </Route>
                        <Route path="/chat">
                            <Chat />
                        </Route>

                    </Switch>
                </BrowserRouter>

                <span>A chuaj nie dzialamy</span>
            </div>
        )
    }
}
