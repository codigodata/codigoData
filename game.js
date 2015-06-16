$(document).ready(function(){
    // declaración de funciones
    var tecla = []; //array para capturar tecla del teclado
    var jugador = {direccion: "s", estado: 'vivo', dibujar: true, x: 1, y: 1, z: 1, width: 50, height: 60};








    // caturar tecla al presionar
    // jquery que captura la tecla presionada
$(document).keydown(function(event){  // cuando se pulsa
   tecla[event.which] = true;
   
});
$(document).keyup(function(event){ // cuado se deja de pulsar
   tecla[event.which] = false;
   jugador.direccion = "s";
});


// Parametros en los que se mueve el jugador o se desplaza en este caso 20px dependiendo de la tecla presionada
function moverJugador(){
 
    
        switch(jugador.direccion){
             case "r":
                cube.position.y += 1;
                cube.position.x-= 1;

                cube.position.z-= 1;
                
                break;
             case "l":
                cube.position.y-= 1;
                 cube.position.x += 1;
                break;
             case "t":
                cube.position.z+= 1;
                cube.position.x-= 1;
                break;
             case "d":
                cube.position.z-= 1;
                cube.position.x+= 1;
                 break; 
              default:
                  cube.position.x = cube.position.x;
                  cube.position.y = cube.position.y;             

        }
    
      }



        // movemos al jugador para el lado que de la tecla presionada
        function movimientoJugadorTeclado (){
         
 
     
         if (tecla[39]){
          // sonido del jugador cuando se despalza a un lado
            //sonidoJugador.play();
            // se desplaza a la derecha el jugador
             jugador.direccion = "r";

         }else if(tecla[37]){
          // sonido jugador cuando se desplaza
             // sonidoJugador.play();
              // se desplaza a la izquierda
              jugador.direccion = "l";

         }else if(tecla[38]){
          // sonido jugador cuando se desplaza 
              //sonidoJugador.play();
              // se desplaza hacia arriba
              jugador.direccion = "t";

         }else if(tecla[40]){
          // sonido jugador cuando se desplaza 
            //  sonidoJugador.play();
             // se desplaza hacia hacia abajo 
              jugador.direccion = "d";

         }
       }






// definimos escena, camara y renderizado
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // creamos un render y configuramos el tamaño
    var renderer = new THREE.WebGLRenderer();
    
    // definimos el color y tamaño del render
    
    renderer.setClearColorHex(0xEEEEEE);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // definimos las sombras activando esta propiedad
    renderer.shadowMapEnabled = true;





    /*
    // definimos los ejes (quitar cuando este hecho el ejemplo) y la agregamos a la escena
    
    var axe = new THREE.AxisHelper(20);
    scene.add(axe);
    */






    // definimos la dimensión del plano y color y transparencia
    
    var planeGeometry = new THREE.PlaneGeometry(100,50);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // le decimos que el plano reviba sombra de los objetos
    plane.receiveShadow = true;

    // rotacion del plano posición del mismo
    
    plane.rotation.x=-0.5*Math.PI;
    plane.position.x=15;
    plane.position.y=0;
    plane.position.z=0;
    
    // introducimos el plano en la escena
     scene.add(plane);








// CREACION Y PUESTA EN ESCENA DEL JUGADOR

     // creamos un cubo que sera el JUGADOR
     var cubeGeometry = new THREE.CubeGeometry(3,1,8);
     var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
     var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
     cube.castShadow = true;

     // posicionamos el cubo que sera el JUGADOR
     cube.position.x=-4;
     cube.position.y= 3;
     cube.position.z= 0;

     // añadimos el cubo a la escena SERA EL JUGADOR
     scene.add(cube);













     //CREACION Y PUESTA EN ESCENA DE LA PARTICULA1

     // creamos el esfera SERA LA PARTICULA1
     var sphereGeometry1 = new THREE.SphereGeometry(4,20,20);
     var sphereMaterial1= new THREE.MeshLambertMaterial({color: 0x7777ff});
     var sphere1 = new THREE.Mesh(sphereGeometry1,sphereMaterial1);
    // sphere.castShadow = true;

     // posicionamos la esfera SERA LA PARTICULA1

     sphere1.position.x=20;
     sphere1.position.y=4;
     sphere1.position.z=10;
     sphere1.castShadow = true;


     // añadimos la esfera a la escena SERA LA PARTICULA

     scene.add(sphere1);






  

//CREACION Y PUESTA ENESCENA DE LA PARTICULA2


// creamos el esfera SERA LA PARTICULA2
     var sphereGeometry2 = new THREE.SphereGeometry(4,10,20);
     var sphereMaterial2 = new THREE.MeshLambertMaterial({color: 0x7777ff});
     var sphere2= new THREE.Mesh(sphereGeometry2,sphereMaterial2);
    // sphere.castShadow = true;

     // posicionamos la esfera SERA LA PARTICULA2

     sphere2.position.x=39;
     sphere2.position.y=20;
     sphere2.position.z=2;
     sphere2.castShadow = true;


     // añadimos la esfera a la escena SERA LA PARTICULA2

     scene.add(sphere2);







     //CREACION Y PUESTA EN ESCENA DE LA PARTICULA2


// creamos el esfera SERA LA PARTICULA3
     var sphereGeometry3 = new THREE.SphereGeometry(4,2,20);
     var sphereMaterial3 = new THREE.MeshLambertMaterial({color: 0x7733ff});
     var sphere3 = new THREE.Mesh(sphereGeometry3,sphereMaterial3);
    // sphere.castShadow = true;

     // posicionamos la esfera SERA LA PARTICULA3

     sphere3.position.x=2;
     sphere3.position.y=43;
     sphere3.position.z=15;
     sphere3.castShadow = true;


     // añadimos la esfera a la escena SERA LA PARTICULA3

     scene.add(sphere3);





    // Posicionar y apuntar la cámara al centro de la escena
    
    camera.position.x = -30;
    camera.position.y = 60;
    camera.position = 30;
    camera.lookAt(scene.position);


    // añadomos spotlight para las sombras
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-40, 60, -10);
    scene.add(spotLight);

    
    // añadir salida de la rendización al elemento html
    $("#GameCanvas").append(renderer.domElement);
     // llamada a la función del intervalo en animación
     render();
      // declaramos la variable que nos valdrá para la velocidad de desplazamiento de la esfera
      var step = 0;
    // renerizar la escena
    function render(){

        //hacemos que rote en cubo y genere animación
        cube.rotation.x +=0.02;
        cube.rotation.y +=0.02;
        cube.rotation.z +=0.02;
        // velocidad de desplazamaiento esfera
        step+=0.04;
        //desplazamaiento de la esfera1 en posición x y
        sphere1.position.x = 3 + (Math.random() * Math.cos(step));
        sphere1.position.y = 3 + (Math.random() * Math.sin(step));

         //desplazamaiento de la esfera1 en posición x y
        sphere2.position.x = 20+(10*(Math.cos(step)));
        sphere2.position.y = 4 +(10*Math.abs(Math.sin(step)));

    //desplazamaiento de la esfera1 en posición x y
        sphere3.position.x = 26+(10*(Math.cos(step)));
        sphere3.position.y = 7 +(10*Math.abs(Math.sin(step)));
     
     
    

        // renderizar la escena con requestAnimationFrame
         requestAnimationFrame(render);
         renderer.render(scene, camera);


         // funciones que se ejecutan en render
               moverJugador();
               movimientoJugadorTeclado();

    }
   
    
    
    
    
    
       
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    