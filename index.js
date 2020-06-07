//4 divisions = quarter = 500 ms
const notes = {
    C: 65.406,
    D: 73.416,
    E: 82.407,
    F: 87.307,
    G: 97.999,
    A: 110.000,
    B: 123.471
}; //2

let durArr=[];
let freqArr=[];
//22 total notes
const div=8; //1000 ms



const Saltarello = require('./Saltarello.js');



//const freq = notes[Saltarello["score-partwise"].part[0].measure[0].note[0].pitch.step]*(Math.pow(2,Saltarello["score-partwise"].part[0].measure[0].note[0].pitch.octave-2));

//durArr.push(dur);
//freqArr.push(freq);

Saltarello["score-partwise"].part[0].measure.forEach(m => {
    m.note.forEach(n => {
       freqArr.push(Math.round(notes[n.pitch[0].step[0]]*Math.pow(2,n.pitch[0].octave[0])));
       durArr.push(Math.round(n.duration[0]*1000/div));
    });
});

//console.log(Saltarello["score-partwise"].part[0].measure.length);
console.log("const int buzzer = 5;");
console.log("const int songspeed = 1;");
console.log("#define BLYNK_PRINT Serial");
console.log("#include <SPI.h>");
console.log("#include <WiFiNINA.h>");
console.log("#include <BlynkSimpleWiFiNINA.h>");
console.log("#include \"arduino_secrets.h\" ");
console.log("char auth[] = AUTH_TOKEN;");
console.log("char ssid[] = SECRET_SSID;");
console.log("char pass[] = SECRET_PASS;");
console.log("int pinV0 = 0;");
console.log(`int notes[] = {${JSON.stringify(freqArr).slice(1,-2)}};`);
console.log(`int duration[] = {${JSON.stringify(durArr).slice(1,-2)}};`);
console.log("void setup() {");
console.log("   Serial.begin(9600);");
console.log("   Blynk.begin(auth, ssid, pass);");
console.log("}");
console.log("BLYNK_WRITE(V0) {");
console.log("   Serial.println(param.asInt());");
console.log("   pinV0 = param.asInt();");
console.log("}");
console.log("void loop() {");
console.log("   int elementCount = sizeof(notes) / sizeof(int);");
console.log("");
console.log("   for (int i=0;i<elementCount;i++){");
console.log("       int wait = duration[i] * songspeed;");
console.log("       Blynk.run();");
console.log("       if(pinV0<100){");
console.log("           tone(buzzer,notes[i],wait);");
console.log("           delay(wait);");
console.log("       } else {");
console.log("           i--;");
console.log("           delay(1000);");
console.log("       }");
console.log("   }");
console.log("}");
