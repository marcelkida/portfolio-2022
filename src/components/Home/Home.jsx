import React from 'react'
import { useState } from 'react'
import './home.scss'
import Comp from './Comp'
import Spline from '@splinetool/react-spline'
import Loader from './Loader'
import { motion, useMotionValue, useTransform, useMotionTemplate, useVelocity } from 'framer-motion'
import Footer from './Footer'
import ghostGif from '../../img/yawn-anim.gif'
import Work from './Work'
import { RGB_ETC1_Format } from 'three'



function Home() {

    const [isLoaded, setLoaded] = useState(false);
    const [myObj, setMyObj] = useState(null);
    const [mySpline, setMySpline] = useState(null);
    const [animComp, setAnimComp] = useState(false);


    function onLoad(spline) {
        console.log(spline)
        setMySpline(spline);
        setLoaded(true)

        const ghostObj = spline.findObjectById("ee0bd5c1-3e42-4d20-823e-78c0e7921294")
        const ghostObj2 = spline.findObjectById("8e112517-93b2-46df-8629-f24bd6d5bb7f")

        setMyObj(ghostObj)
        console.log(myObj)
        console.log(ghostObj)
        //ghostObj2.emitEvent('keyDown')
        if (animComp && isLoaded) {
            ghostObj2.emitEvent('keyDown')
        }
        //mySpline.emitEvent('keyDown', "8e112517-93b2-46df-8629-f24bd6d5bb7f")

    }

    function onClick() {
        myObj.position.x += 10

    }

    function triggerMouse() {
        mySpline.emitEvent('mouseDown', "ee0bd5c1-3e42-4d20-823e-78c0e7921294")
        console.log("fired")
    }

    function refresh() {
        console.log("loaded")
    }

    function handleComp() {
        console.log("completeds")
        setAnimComp(true)
        if (isLoaded) {
            mySpline.emitEvent('keyDown', "8e112517-93b2-46df-8629-f24bd6d5bb7f")
            console.log("keydown")
        }
    }

    const ghost3D = {
        initial: {
            x: 0,
        },
        animate: {
            x: ["-30vw", "0vw"],
            transition: { delay: 0, duration: 2 },
        }
    }
    const box = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 1,
            height: 0,
            transition: {
                duration: .5,
            }
        }
    }

    const ghost = {
        initial: { y: "50vh", opacity: 0 },
        animate: {
            y: "-5vh", opacity: 1,
            transition: {
                duration: 2
            },
        },
        animate2: {
            y: "-5vh", opacity: 0,
            transition: {
                duration: .5
            },
        }
    }
    

    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const vel = useVelocity(x);
    const input = [-1000, -800, -600, -400, -200, 0, 200, 400, 600 ,800, 1000];
    const output = ["#d0503e", "#60b92d", "#5d5e96", "#fd9865", "#db2fca", "#000", "#0b8b2f", "#f32c4e", "#baedff", "#3846a6", "#7c43f1"];
    const color = useTransform(vel, input, output);    



    return (
        <>
            <motion.div className='loader' id='loader'
                variants={box}
                animate={(isLoaded && animComp) ? "animate" : "initial"}

            >

            </motion.div>
            <div className='loader-container'>
                <motion.img src={ghostGif} className="ghost-gif"
                    variants={ghost} animate={(isLoaded && animComp) ? "animate2" : "animate"} initial="initial" onAnimationComplete={handleComp}

                />
            </div>
            <div className='home-main'>
                <div style={{ height: "10vh" }}></div>
                {/* <div className='comp'><Comp/></div> */}

                <div className='home-container'>

                    <div className='home-text'>
                        <div className='name'>MARCEL KIDA</div>
                        <div className='title'>
                            <div>I am a <span className='title-span'>creative developer</span></div>
                            <div className='title-2'>
                                who loves to make
                                &nbsp;
                                <div className='unique-container'>
                                    <motion.div id='unique' className='title-span-unique' drag dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                        style={{color: color,x: x,
                                        y: y}} dragElastic={.5} dragTransition={{bounceStiffness: 1000, bounceDamping: 5}} whileDrag={{scale: .8, cursor: "grabbing"}}
                                        animate={{scale: [null,.9,1.1,1]}} transition={{repeat: Infinity, repeatDelay: 3, duration: 1,}} whileHover={{scale:1.1, transition: {ease: 'anticipate'}}}
                                    >unique</motion.div>
                                </div>
                                &nbsp;
                                web experiences.
                            </div>
                        </div>
                    </div>
                    <motion.div className='ghost-container' variants={ghost3D} animate={(isLoaded && animComp) ? "animate" : "initial"} onAnimationComplete={refresh}>
                        <Spline className='ghost' scene="https://prod.spline.design/MajUzanKcZsE6hxv/scene.splinecode"
                            onLoad={onLoad} />
                    </motion.div>

                </div>

            </div>

            <Work />
            <Footer />

        </>
    )
}

export default Home