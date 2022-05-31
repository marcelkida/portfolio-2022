import React from 'react'
import { useState } from 'react'
import './home.scss'
import Comp from './Comp'
import Spline from '@splinetool/react-spline'
import Loader from './Loader'


function Home() {

    const [isLoaded, setLoaded] = useState(false);

    function onLoad() {
        setLoaded(true)
        //document.getElementById("loader").style.visibility = "hidden"
    }

    return (
        <>
        <Loader/>
            <div className='home-main'>
                <div style={{ height: "10vh" }}></div>
                {/* <div className='comp'><Comp/></div> */}

                <div className='home-container'>

                    <div className='home-text'>
                        <div className='name'>MARCEL KIDA</div>
                        <div className='title'>
                            I am a <span className='title-span'>creative developer</span> <br></br> who loves to make <span id='unique' className='title-span-unique'>unique</span> web experiences.
                        </div>
                    </div>

                    <Spline className='ghost' scene="https://prod.spline.design/MajUzanKcZsE6hxv/scene.splinecode" 
                    onLoad={onLoad}/>
                </div>
            </div>

        </>
    )
}

export default Home