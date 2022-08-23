import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vo2gif from '../../img/vo2gif.gif'
import counselabgif from '../../img/counselab.gif'
import playbookgif from '../../img/playbook.gif'

import { useState, useEffect } from 'react';
import './work2.scss'

function Work2Mobile(props) {
    const [hover, setHover] = useState(0)
    const useMousePosition = () => {
        const [position, setPosition] = useState({
            clientX: 0,
            clientY: 0,
        });

        const updatePosition = event => {
            const { pageX, pageY, clientX, clientY } = event;

            setPosition({
                clientX,
                clientY,
            });
        };

        useEffect(() => {
            document.addEventListener("mousemove", updatePosition, false);
            document.addEventListener("mouseenter", updatePosition, false);

            return () => {
                document.removeEventListener("mousemove", updatePosition);
                document.removeEventListener("mouseenter", updatePosition);
            };
        }, []);

        return position;
    };
    const { clientX, clientY } = useMousePosition();


    return (
        <div className='font-kollektif cursor-pointer'>
            {hover != 0 && <div
                style={{
                    position: "fixed",
                    top: "-2rem",
                    bottom: 0,
                    left: "-2rem",
                    right: 0,
                    zIndex: 9999,
                    pointerEvents: "none"
                }}
            >
                <AnimatePresence>
                    {(hover != 0 && props.done) && <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        style={{
                            position: "absolute",
                            left: clientX,
                            top: clientY,
                            transform: "translate(-50%, -50%)",
                        }}
                        className="bg-black rounded-full text-white p-4 h-16 w-16 flex justify-center align-middle items-center font-kollektif"
                    >
                        {hover == 1 && <img src={vo2gif} className="w-full h-full object-cover scale-[200%]"></img>}

                        {hover == 2 && <img src={playbookgif} className="w-full h-full object-cover scale-[200%]"></img>}

                        {hover == 3 && <img src={counselabgif} className="w-full h-full object-cover scale-[600%]"></img>}

                    </motion.div>}
                </AnimatePresence>
            </div>}
            <a href='https://www.vo2.fans/' target="_blank">
                <motion.div className='border-t-2 border-black text-[6vh] py-[4vw] mt-12 top-[5vh] bg-white vo2-section'>

                    <div className='flex justify-between pl-[4vw]'>


                        <div className=''>
                            VO2
                        </div>

                        <div className='pr-[4vw]'>
                            2022
                        </div>
                    </div>

                    <div className='px-[4vw] text-[1.5vh] opacity-70'>
                        Software Engineering Intern | I built website and designed 3D models.
                    </div>
                    <div className='px-[4vw] text-[3vh]'>
                        VO2 is a platform for fans to become stakeholders in their favorite athletes.
                    </div>


                </motion.div>
            </a>
            <a href='http://www.pennplaybook.com/' target="_blank">
                <motion.div className='border-t-2 border-black text-[4vh] py-[4vw]  top-[5vh] bg-white'>
                    <div className='flex justify-between px-[4vw]'>


                        <div className=''>
                            Penn Playbook
                        </div>
                        <div className=''>
                            2022
                        </div>
                    </div>

                    <div className='px-[4vw] text-[1.5vh] opacity-70'>
                        Software Engineer | I developed website.
                    </div>
                    <div className='px-[4vw] text-[3vh]'>
                        Penn Playbook is an interactive website about the Penn experience.
                    </div>

                </motion.div>
            </a>
            <p href="https://counselab.com/" target="_blank">
                <motion.div className='border-t-2 border-black text-[5vh] py-[4vw]   top-[5vh] bg-white'
                >
                    <div className='flex justify-between px-[4vw]'>

                        <div className=''>
                            Counselab
                        </div>

                        <div className='pr-[2vw]'>
                            2021
                        </div>
                    </div>

                    <div className='px-[4vw] text-[1.5vh] opacity-70'>
                        Software Engineering Intern | I built website and designed assets.
                    </div>
                    <div className='px-[4vw] text-[3vh]'>
                        Counselab is a platform for 1 on 1 advice.
                    </div>

                </motion.div>
            </p>
        </div>
    );
}

export default Work2Mobile;