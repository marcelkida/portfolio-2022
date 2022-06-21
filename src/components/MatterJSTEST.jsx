import React, { useEffect, useState, useRef } from 'react'
import Matter from 'matter-js'
import Vo2 from '../img/vo2.png'

const STATIC_DENSITY = 15
const PARTICLE_SIZE = 6
const PARTICLE_BOUNCYNESS = 0.9

const MatterStepThree = () => {
    const boxRef = useRef(null)
    const canvasRef = useRef(null)

    const [constraints, setContraints] = useState()
    const [scene, setScene] = useState()

    const handleResize = () => {
        setContraints(boxRef.current.getBoundingClientRect())
    }


    useEffect(() => {
        let Engine = Matter.Engine
        let Render = Matter.Render
        let World = Matter.World
        let Bodies = Matter.Bodies

        let engine = Engine.create({})

        let render = Render.create({
            element: boxRef.current,
            engine: engine,
            canvas: canvasRef.current,
            options: {
                background: 'transparent',
                wireframes: false,
            },
        })

        const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
            isStatic: true,
            render: {
                fillStyle: 'blue',
            },
        })
        const wallLeft = Bodies.rectangle(-10, 0, 10, boxRef.current.getBoundingClientRect().height * 2, {
            isStatic: true,
            render: {
                fillStyle: 'blue',
            },
        })
        console.log(boxRef.current.getBoundingClientRect())
        const wallRight = Bodies.rectangle(window.innerWidth+10, 0, 10, boxRef.current.getBoundingClientRect().height * 2, {
            isStatic: true,
            render: {
                fillStyle: 'blue',
            },
        })

        World.add(engine.world, [floor, wallLeft, wallRight])

        Engine.run(engine)
        Render.run(render)

        setContraints(boxRef.current.getBoundingClientRect())
        setScene(render)

        window.addEventListener('resize', handleResize)

        var mouse = Matter.Mouse.create(render.canvas),
        mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(engine.world, mouseConstraint);

    // keep the mouse in sync with rendering
    Render.mouse = mouse;

    var stack = Matter.Composites.stack(20, -1000, 4, 4, 300, 100, function(x, y) {
        if (Matter.Common.random() > 0.35) {
            return Bodies.rectangle(x+(Math.random()*500), y, 300, 100, {
                render: {
                    strokeStyle: '#ffffff',
                    sprite: {
                        texture: Vo2
                    }
                }
            });
        } else {
            return Bodies.circle(x+(Math.random()*500), y, 100, {
                density: 1,
                frictionAir: 0.06,
                restitution: 1,
                friction: 0.01,
                render: {
                    sprite: {
                        texture: Vo2
                    }
                }
            });
        }
    });

    World.add(engine.world, stack);
    }, [])

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (constraints) {
            let { width, height } = constraints

            // Dynamically update canvas and bounds
            scene.bounds.max.x = width
            scene.bounds.max.y = height
            scene.options.width = width
            scene.options.height = height
            scene.canvas.width = width
            scene.canvas.height = height

            // Dynamically update floor
            const floor = scene.engine.world.bodies[0]

            Matter.Body.setPosition(floor, {
                x: width / 2,
                y: height + STATIC_DENSITY / 2,
            })

            Matter.Body.setVertices(floor, [
                { x: 0, y: height },
                { x: width, y: height },
                { x: width, y: height + STATIC_DENSITY },
                { x: 0, y: height + STATIC_DENSITY },
            ])
        }
    }, [scene, constraints])


    return (
        <div
            style={{
                position: 'relative',
                border: '1px solid white',
                padding: '8px',
                height: '100vh'
            }}
        >



            <div
                ref={boxRef}
                id="check"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                <canvas ref={canvasRef} />
            </div>
        </div>
    )
}
export default MatterStepThree