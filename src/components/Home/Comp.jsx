// import React, { useEffect, useState, useRef } from 'react'
// import Matter from 'matter-js'
// // import uimg from '../../img/1x/u.png'
// // import nimg from '../../img/1x/n.png'
// // import iimg from '../../img/1x/i.png'
// // import qimg from '../../img/1x/q.png'
// // import eimg from '../../img/1x/e.png'
// import uimg from '../../img/SVG/u.svg'
// import nimg from '../../img/SVG/n.svg'
// import iimg from '../../img/SVG/i.svg'
// import qimg from '../../img/SVG/q.svg'
// import eimg from '../../img/SVG/e.svg'


// const STATIC_DENSITY = 15

// function Comp() {
//   const boxRef = useRef(null)
//   const canvasRef = useRef(null)

//   const [constraints, setContraints] = useState()
//   const [scene, setScene] = useState()
//   const [first, setFirst] = useState(true)


//   const handleResize = () => {
//     setContraints(boxRef.current.getBoundingClientRect())
//   }
//   let Engine = Matter.Engine
//   let Render = Matter.Render
//   let Composite = Matter.Composite
//   let Bodies = Matter.Bodies

//   let engine = Engine.create({})

//   useEffect(() => {



//     let render = Render.create({
//       element: boxRef.current,
//       engine: engine,
//       canvas: canvasRef.current,
//       options: {
//         background: 'rgba(0, 0, 0, 0)',
//         wireframes: false,
//       },
//     })

//     const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
//       isStatic: true,
//       render: {
//         fillStyle: 'blue',
//       },
//     })

//     var bodyE = Bodies.rectangle(100, 300, 50, 50, { id: 10, isStatic: true, render: { sprite: { texture: eimg, xScale: .5, yScale: .5 } } })
//     var bodyU = Bodies.rectangle(100, 300, 50, 50, { id: 10, isStatic: true, render: { sprite: { texture: uimg, xScale: .5, yScale: .5 } } })
//     var bodyN = Bodies.rectangle(200, 300, 50, 50, { id: 11, isStatic: true, render: { sprite: { texture: nimg, xScale: .5, yScale: .5 } } })
//     var bodyI = Bodies.rectangle(300, 300, 50, 50, { id: 12, isStatic: true, render: { sprite: { texture: iimg, xScale: .5, yScale: .5 } } })
//     var bodyQ = Bodies.rectangle(400, 300, 50, 50, { id: 13, isStatic: true, render: { sprite: { texture: qimg, xScale: .5, yScale: .5 } } })
//     var bodyU2 = Bodies.rectangle(500, 300, 50, 50, { id: 14, isStatic: true, render: { sprite: { texture: uimg, xScale: .5, yScale: .5 } } })



//     if (first) {
//       Composite.add(engine.world, [floor,
//         bodyE,         
//         bodyU,
//         bodyN,
//         bodyI,
//         bodyQ,
//         bodyU2])
//       setFirst(false)
//     }

//     Matter.Runner.run(engine)
//     Render.run(render)

//     setContraints(boxRef.current.getBoundingClientRect())
//     setScene(render)

//     window.addEventListener('resize', handleResize)
//   }, [])

//   useEffect(() => {
//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   function addLetters(width, height) {

//   }

//   useEffect(() => {

//     if (constraints) {
//       const rect = document.getElementById('unique').getBoundingClientRect();
//       console.log(rect)
//       let { width, height } = constraints

//       // Dynamically update canvas and bounds
//       scene.bounds.max.x = width
//       scene.bounds.max.y = height
//       scene.options.width = width
//       scene.options.height = height
//       scene.canvas.width = width
//       scene.canvas.height = height

//       // Dynamically update floor
//       const floor = scene.engine.world.bodies[0]
//       const e = scene.engine.world.bodies[1]
//       const u = scene.engine.world.bodies[2]
//       const n = scene.engine.world.bodies[3]
//       const i = scene.engine.world.bodies[4]
//       const q = scene.engine.world.bodies[5]
//       const u2 = scene.engine.world.bodies[6]


//       console.log(scene)

//       Matter.Body.setPosition(floor, {
//         x: width / 2,
//         y: height + STATIC_DENSITY / 2,
//       })

//       Matter.Body.setVertices(floor, [
//         { x: 0, y: height },
//         { x: width, y: height },
//         { x: width, y: height + STATIC_DENSITY },
//         { x: 0, y: height + STATIC_DENSITY },
//       ])

//       Matter.Body.setPosition(u, {
//         x: rect.x,
//         y: rect.y - height * 0.08,
//       })
//       Matter.Body.scale(u, .5, .5)
//       Matter.Body.setPosition(n, {
//         x: rect.x + rect.width * (1 / 5),
//         y: rect.y - height * 0.08,
//       })
//       Matter.Body.setPosition(i, {
//         x: rect.x + rect.width * (2 / 5),
//         y: rect.y - height * 0.08,
//       })
//       Matter.Body.setPosition(q, {
//         x: rect.x + rect.width * (3 / 5),
//         y: rect.y - height * 0.08,
//       })
//       Matter.Body.setPosition(u2, {
//         x: rect.x + rect.width * (4 / 5),
//         y: rect.y - height * 0.08,
//       })


//     }

//   }, [scene, constraints])

//   return (


//     <div
//       ref={boxRef}
//       style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '88vh',
//       }}
//     >
//       <canvas ref={canvasRef} width='100%' height="100%" />
//     </div>
//   )
// }
// export default Comp