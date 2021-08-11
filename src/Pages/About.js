import { render } from '@testing-library/react'
import React from 'react'
import Header from '../Component/Header'
import Header_bg from '../Component/Header_bg.js'
import Footer from '../Component/Footer'

class About extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Header_bg />
                <div className="container">
                    <h1>About</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;