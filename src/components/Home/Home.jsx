import React from 'react'
import './home.scss'
import Comp from './Comp'

function Home() {
    return (
        <>
            <div className='home-main'>
                <div style={{ height: "10vh" }}></div>
                <div className='comp'><Comp></Comp></div>

                <div className='home-container' style={{ height: "90vh" }}>

                    <div className='home-text'>
                        <div className='name'>MARCEL KIDA</div>
                        <div className='title'>
                            I am a <span className='title-span'>creative developer</span> <br></br> who loves to make <span id='unique' className='title-span-unique'>unique</span> web experiences.
                        </div>
                    </div>

                    <iframe className='ghost' src='https://my.spline.design/untitled-a8d3c737c0bfbe77875be4a5a43228e4/' frameBorder='0' width='100%' height='100%' scrolling="no"></iframe>
                </div>
            </div>

        </>
    )
}

export default Home