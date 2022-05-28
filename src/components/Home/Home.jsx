import React from 'react'
import './home.scss'
import Comp from './Comp'
import Spline from '@splinetool/react-spline'


function Home() {
    return (
        <>
            <div className='home-main'>
                <div style={{ height: "10vh" }}></div>
                {/* <div className='comp'><Comp/></div> */}

                <div className='home-container' style={{ height: "90vh" }}>

                    <div className='home-text'>
                        <div className='name'>MARCEL KIDA</div>
                        <div className='title'>
                            I am a <span className='title-span'>creative developer</span> <br></br> who loves to make <span id='unique' className='title-span-unique'>unique</span> web experiences.
                        </div>
                    </div>

                    <Spline className='ghost' scene="https://prod.spline.design/MajUzanKcZsE6hxv/scene.splinecode" />
                </div>
            </div>

        </>
    )
}

export default Home