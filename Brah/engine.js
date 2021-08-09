let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint
    Bodies = Matter.Bodies;


    

let engine = Engine.create();

let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 1520,
        height: 699,
        wireframes: false
    }
});

let mouse = Mouse.create(render.canvas)
let mouseConstraint = MouseConstraint.create( engine, {
    mouse :mouse
})
render.mouse = mouse
//Alla objekt till världen
let ground = Bodies.rectangle(400, 700, 2236, 50, {isStatic:true});
let ppwall = Bodies.rectangle(0, 620, 50, 1500, {isStatic:true});
let ppwall2 = Bodies.rectangle(1520, 620, 50, 1500, {isStatic:true});
let pproof = Bodies.rectangle(400, 0, 2236, 50, {isStatic:true}); 



if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      isStatic:true;
      e.preventDefault();
    }, false);
}


let boxA = Bodies.circle(400, 230, 60, 60)
let circle1 = Bodies.circle(400,60, 60)
let boxB = Bodies.rectangle(590, 180, 300, 9)
let Char = Bodies.rectangle(40, 4, 30, 30, )

Char.render.fillStyle = 'White'
circle1.render.fillStyle = 'Gray'
boxA.render.fillStyle = 'Gray'
boxB.render.fillStyle = 'gray'
ground.render.fillStyle = 'Yellow'
ppwall.render.fillStyle = 'yellow'
ppwall2.render.fillStyle = 'yellow'
pproof.render.fillStyle = 'yellow'


World.add(engine.world, [boxA, ground, circle1, boxB, Char, ppwall, ppwall2, mouseConstraint, pproof]);

Engine.run(engine);

Render.run(render);


window.addEventListener("keydown", (eve) => {
    if (eve.key == "d") {
        Char.force.x += 0.02;
    }
    if (eve.key == "a") {
        Char.force.x += -0.02;
    }
    if (eve.key == "w") {
        Char.force = { x: 0, y: -0.02};
    }
    if (eve.key == "s") {
        Char.force = { x: 0, y: 0.02}
    }
});