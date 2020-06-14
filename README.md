## Inspiration

When I learned about the arduino piezo alarm, I recognized the wide applications it could have. I could play **my own songs**! So, I started looking at current arduino programs that play songs based on frequency, but I saw that the notes and frequencies for the songs done manually for a specific song. So I decided to make a way to play any song you want rather than converting all the notes in a song to fundamental frequencies manually.

## What it does

I built a javascript program to convert any musicxml file that plays one note at a time to the exact arduino code needed to play the song. In converts the notes in the songs (A, B, C, ..) into the exact fundamental frequencies needed to play the song on the piezo alarm (basically an arduino speaker). So all you need to do is copy-paste the arduino code into the arduino application and run the code, and hear your song on the piezo alarm. I also enabled blync (an iot app) for this program, so you can stop or play the song remotely with your blynk app. So, essentially, I created a bluetooth speaker using just a piezo alarm and an arduino.

## How I built it

I used an ArduinoMKR1010 (a wifi-enabled arduino), a battery, and a piezo alarm for the hardware. I used javascript for the software, and the javascript outputs the exact arduino code you need to play any song you want in the terminal.

## Challenges I ran into

Figuring out how to parse MusicXML files was very difficult since there is just so much text, so I converted it to JSON and used a JSON editor to find how to get the durations, octets, and letter for every note in the song. Then, I used that information to produce an array of the durations of every note and an array of the fundamental frequencies of every note.

## Accomplishments that I'm proud of

I made my own bluetooth speaker, and at a much cheaper cost because of the cheap components!

## What I learned

I learned how to use blynk to control Arduinos remotely more easily, and it was fun sliding the slider in the blync app up and down to play and stop the song!

## What's next for Music Player

I'm thinking of making the front end of the program using react so the user can just copy paste music xml into a webpage to get their arduino code instead of doing it in the code itself. I could also have a store of previous songs
