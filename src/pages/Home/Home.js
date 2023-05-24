import React from 'react'
import AppBar from '../../components/common/AppBar'
import Hero from '../../components/Home/Hero'
import './home.scss';

const Home = () => {
    return (
        <div className="hero-sec">
            <AppBar />
            <Hero />
        </div>
    )
}

export default Home