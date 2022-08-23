import React from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
import './home.scss'
import Comp from './Comp'
import Spline from '@splinetool/react-spline'
import Loader from './Loader'
import { motion, useMotionValue, useTransform, useMotionTemplate, useVelocity, AnimatePresence, useSpring } from 'framer-motion'
import Footer from './Footer'
import ghostGif from '../../img/yawn-anim.gif'
import Work from './Work'
import Work2 from './Work2'



function Home() {
    const yourModuleName = require('@mojs/core')

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
    const input = [-2000, -1600, -1200, -800, -400, 0, 400, 800, 1200, 1600, 2000];
    const output = ["#d0503e", "#60b92d", "#5d5e96", "#fd9865", "#db2fca", "#000", "#0b8b2f", "#f32c4e", "#baedff", "#3846a6", "#7c43f1"];
    const color = useTransform(vel, input, output);

    const banner = {
        animate: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
            },
        },
    };

    const banner2 = {
        animate: {
            transition: {
                delayChildren: 1,
                staggerChildren: 0.1,
            },
        },
    };


    const banner3 = {
        animate: {
            transition: {
                delayChildren: 1.4,
                staggerChildren: 0.4,
            },
        },
    };

    const letterAni = {
        initial: { y: 100, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
            },
        },
    };
    const letterAni2 = {
        initial: { y: 100, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1,
            },
        },
    };

    const [titleAnimComp, setTitleAnimComp] = useState(false)


    const Letter2 = ({ active, setActive, index, letter, x, y }) => {

        const colors = ["red", 'blue', 'yellow', 'green', 'purple', 'pink']

        return (
            <motion.div
                className='inline-block cursor-crosshair pointer-events-auto select-none overflow-visible'
                whileHover={{ scale: .5 }}
                whileTap={{ scale: 2, color: colors[index] }}
                onClick={() => console.log("click")}
                style={{

                }}>
                {letter}
            </motion.div>
        )
    }


    const Letter = ({ active, setActive, index, letter }) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const isDragging = active;
        const springConfig = {
            stiffness: Math.max(700 - (index - active) * 120, 0),
            damping: 20 + (index - active) * 1
        };
        const dx = useSpring(x, springConfig);
        const dy = useSpring(y, springConfig);

        return (
            <motion.div drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragTransition={{ bounceStiffness: 10, bounceDamping: 20 }}
                dragElastic={1}

                className='inline-block cursor-grab'
                whileDrag={{ cursor: 'grabbing' }}
                style={{

                }}>
                {letter} </motion.div>
        )
    }

    const AnimatedLetters = ({ title, disabled, delayN }) => (
            <motion.div
                className='row-title'
                variants={disabled ? null : banner}
                initial='initial'
                animate='animate'
                style={{ overflow: "visible", display: 'inline-block' }}
            >
                {[...title].map((letter, index) => (
                    <motion.div
                        className='row-letter pointer-events-auto overflow-visible'
                        variants={disabled ? null : letterAni} style={{ display: "inline-block" }}
                    >
                        <Letter2 index={index} letter={letter} key={index} />

                    </motion.div>
                ))}
            </motion.div>

    );


    const AnimatedLetters2 = ({ title, disabled, delayN }) => (


            <motion.div
                className='row-title'
                variants={disabled ? null : banner2}
                initial='initial'
                animate='animate'
                style={{ overflow: "visible", display: 'inline-block' }}
            >
                {[...title].map((letter, index) => (
                    <motion.div
                        className='row-letter pointer-events-auto overflow-visible'
                        variants={disabled ? null : letterAni} style={{ display: "inline-block" }}
                    >
                        <Letter index={index} letter={letter} key={index} />

                    </motion.div>
                ))}
            </motion.div>

    );


    return (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} key="home">
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
            <div className='home-main w-screen overflow-visible'>
                <div style={{ height: "10vh" }}></div>
                {/* <div className='comp'><Comp/></div> */}

                <div className='home-container'>
                    {(isLoaded && animComp) &&
                        <div className='home-text lg-mt-32 overflow-visible'>

                            <motion.div variants={banner} initial='initial'
                                animate='animate' className='name pointer-events-auto' style={{ display: 'inline' }}>
                                <AnimatedLetters title={"Marcel"} />
                            </motion.div>
                            &nbsp; &nbsp;

                            <motion.div variants={banner2} initial='initial'
                                animate='animate' className='name pointer-events-auto' style={{ display: 'inline' }}  >
                                <AnimatedLetters2 title={"Kida"} />
                            </motion.div>

                            <motion.div className='title' id='change' variants={banner3} initial="initial" animate="animate" style={{ overflow: "visible" }} >
                                <motion.div variants={(isLoaded && animComp) ? letterAni2 : null} >I am a <span className='title-span'>
                                    {[..."creative"].map((letter) => (
                                        <motion.div className='inline-block pointer-events-auto' whileHover={{ translateY: -100, color: "blue" }}>

                                            {letter}

                                        </motion.div>
                                    ))} &nbsp;
                                    {[..."developer"].map((letter) => (
                                        <motion.div className='inline-block pointer-events-auto' whileHover={{ scale: 2, color: "red" }}>

                                            {letter}

                                        </motion.div>
                                    ))}
                                </span></motion.div>
                                <motion.div className='title-2' variants={(isLoaded && animComp) ? letterAni2 : null}>
                                    who loves to make
                                    &nbsp;
                                    <div className='unique-container'>
                                        <motion.div id='unique' className='title-span-unique' drag dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                            style={{
                                                color: color, x: x,
                                                y: y,
                                                overflow: "visible"
                                            }} dragElastic={.5} dragTransition={{ bounceStiffness: 1000, bounceDamping: 5 }} whileDrag={{ scale: .8, cursor: "grabbing" }}
                                            animate={{ scale: [1, .95, 1.05, 1] }} transition={{ repeat: Infinity, repeatDelay: 3, duration: 1, }} whileHover={{ scale: 1.1, transition: { ease: 'anticipate' } }}
                                        >unique</motion.div>
                                    </div>
                                    &nbsp;
                                    web experiences.
                                </motion.div>
                            </motion.div>

                        </div>}
                    <motion.div className='ghost-container overflow-visible' variants={ghost3D} animate={(isLoaded && animComp) ? "animate" : "initial"} onAnimationComplete={refresh}>
                        <Spline className='ghost overflow-visible' scene="https://prod.spline.design/8cUszwNNQXxO9RPr/scene.splinecode"
                            onLoad={onLoad} />
                    </motion.div>

                </div>

            </div>


            <Work2 done={animComp} />


        </motion.div>
    )
}

export default Home