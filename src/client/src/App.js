import React, { Component } from 'react'

export default class App extends Component {
    doSome = () => {
        const a = 2

        console.log(`a = ${a}`)
        return <span>Elo</span>
    }

    render() {
        return (
            <div>
                {this.doSome()}
                <span>A chuaj nie dzialamy</span>
            </div>
        )
    }
}
