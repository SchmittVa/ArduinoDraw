const j5 = require('johnny-five');
const board = new j5.Board();
//let led = undefined;
let servo = undefined
//let button = undefined
let currentAngle = 0; // speichert aktuelle Position des Servos

board.on('ready', function() {
    servo = new j5.Servo(10)
    joystick = new j5.Joystick({
        // [ x, y ]
        pins: ["A0", "A1"]
      });
    //button = new j5.Button(7)
   // button1 = new j5.Button(3)
    //led = j5.Led(11)
    //led.blink(182)

    this.repl.inject({
        servo
        //led
    // setInterval(function(){
    //     led.toggle()
    // },100)
   // button
    
     })  

     /*button.on("press", function() {
      /*  console.log( "Button pressed" );
        currentAngle += 20
        servo.to(currentAngle);


       /* if(currentAngle >= 150)
            anglePlus = false;
        else if(currentAngle <= 0)
            anglePlus = true;

        if(anglePlus)
            currentAngle += 20;
        else
            currentAngle -= 20;
      }); */


     /*button1.on("press", function() {
        console.log( "Button pressed 2" );
        currentAngle -= 20
        servo.to(currentAngle);
     })*/

     // Fragt Joystick Position alle 100ms ab (10x pro Sekunde)
     freq = 100

     // Setzt Servo Position zurück
     servo.to(0)

     // Alle freq ms wird Joystick Position abgefragt
     joystick.on("data", function() {
         // Wenn x > 0.9 (Rundungsfehler vorbeugen), bewege nach rechts
         if(this.x > 0.9)
         {
            currentAngle-=5 // legt Geschwindigkeit fest
            servo.to(currentAngle) // eigentliches Bewegen des servo
         }
        // Wenn x < -0.9 (Rundungsfehler vorbeugen), bewege nach links
         else if(this.x < -0.9)
         {
             currentAngle+=5
             servo.to(currentAngle)
         }
     })
})

