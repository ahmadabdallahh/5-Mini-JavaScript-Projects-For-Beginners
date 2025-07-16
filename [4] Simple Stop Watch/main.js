/**
 * Simple Stop Watch
 *
 * This script implements a basic stopwatch with Start, Stop, and Reset functionality.
 * It updates the display in the format HH:MM:SS.
 *
 * Functions:
 *   - padValue(value): Pads a number with leading zeros to ensure two digits.
 *   - setTime(): Updates the stopwatch display based on the elapsed seconds.
 *   - timer(): Increments the elapsed time and updates the display every second.
 *   - startClock(): Starts the stopwatch timer.
 *   - stopClock(): Stops/pauses the stopwatch timer.
 *   - restClock(): Resets the stopwatch to 00:00:00 and stops the timer.
 *
 * Usage:
 *   - Call startClock() to begin timing.
 *   - Call stopClock() to pause.
 *   - Call restClock() to reset.
 */

// Tracks the total number of seconds elapsed since the stopwatch started.
let secondsElapsed = 0;

// Holds the interval ID for the running timer, used to start/stop the interval.
let interval = null;

// Reference to the DOM element displaying the stopwatch time.
const time = document.querySelector('.stopwatch-display');

/**
 * Pads a numeric value with a leading zero if it is a single digit.
 * @param {number} value - The number to pad.
 * @returns {string} The padded string.
 */

function padValue(value) {
  return String(value).padStart(2, '0');
}

// Updates the stopwatch display in HH:MM:SS format.
function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  const hours = Math.floor(minutes / 60);
  time.textContent = `${padValue(hours)}:${padValue(minutes)}:${padValue(
    seconds
  )}`;
}

// Increments the elapsed time by one second and updates the display.

function timer() {
  secondsElapsed++;
  setTime();
}

// Starts the stopwatch timer. If already running, restarts it.

function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}

// Stops/pauses the stopwatch timer.

function stopClock() {
  clearInterval(interval);
}

// Resets the stopwatch to 00:00:00 and stops the timer.
function restClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}
