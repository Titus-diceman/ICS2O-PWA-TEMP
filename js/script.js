/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html */

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-6-01-PWA/sw.js", {
    scope: "/ICS2O-UNIT-6-01-PWA/",
  })
}

/**
 * This function converts fahrenheight to celsius
 */
 function calculate () {
  // input
  const fahrenheit = parseInt(document.getElementById('fahrenheit').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = 'Celsius is: ' + celsius.toFixed(0) + '°'
}
