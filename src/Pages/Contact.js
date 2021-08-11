import { render } from '@testing-library/react'
import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

 class Contact extends React.Component{
    render(){
        return(
            <div>
                <Header /> 
                <div className="container">
                <h1>Contact</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;