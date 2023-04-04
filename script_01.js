"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Daniel !")
}
/***** Funktion 02a *********/

// ausgabeName();

function ausgabeName() 
{
    // what happens in VEGAS, stays in VEGAS
    // heißt: alles innerhalb der funktion wird
    // ausgeführt, da der wert durch "function" nur 
    // innerhalb der Funktion "{}" ausgegeben werden
    let firstName = "Alex";
    console.log("Hallo" + firstName + "!");  
}
// console.log(firstName);  // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNameParam("Alexander"); // call + Argument(e)
// ausgabeNameParam("Joe");
// ausgabeNameParam("Schlumpf");

// function ausgabeNameParam(firstName) 
// {
//      console.log("Hallo " + firstName + "!");
// }

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNameParams("Schlumpf","Blau");
// ausgabeNameParams(prompt("Vorname? :"),prompt("Namchname? :"));
// ausgabeNameParams("Schlumpf","Schwarz");

function ausgabeNameParams(firstName, familyName) 
{
     console.log("Hallo " + firstName + " " + familyName + "!");
}

/***** Funktionen 03a *****/

// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNameParams2("Schlumpf","Blau");

function ausgabeNameParams2(firstName, familyName) 
{
   // 1. Funktionalität: string composing

   const GAP = " "; 
   let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!"
   
   // 2. Funktionalität: string output    
    console.log(outputStr);
}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten | return

/* 2. Funktionalität: string output */
// output("Hi"); 
// output(2);
// output();
// output(true);
// function output(outputData) 
// {
//     console.log(outputData);
// }


// 1. Funktionalität: string composing

output(getString("Max","Mütze"));
output("Hallo Max Mütze!")
function getString(firstName,familyName) 
{
    const GAP = " "; 
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!"
    return outputStr; // return sendet Daten an den call zurück
    console.log("hi") // return bricht die Funktion ab! 
}



// output(getString("Max","Mütze")); // call
// output("Hallo Max Mütze!");

function output(outputData) 
{
    console.log(outputData);
}
