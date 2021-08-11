import { render } from '@testing-library/react'
import React from 'react'
import Header from '../Component/Header.js'
import Header_bg from '../Component/Header_bg.js'
import Footer from '../Component/Footer.js'


export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Header_bg />
                <div className="container">
                <h1>Home</h1>
                </div>
                <Footer />
            </div>
        )
    }
}