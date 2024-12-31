const agentButton = document.getElementById('agent-button');
const homeButton = document.getElementById('home-button');
const terminal = document.getElementById('terminal');
const textareaContainer = document.getElementById('textarea-container');
const audioBox = document.getElementById('audio-box');
const audioMeterFill = document.getElementById('audio-meter-fill');
const textarea = document.querySelector('textarea');
const charCount = document.querySelector('.char-count');
const terminalPlaceholder = document.getElementById('terminal-placeholder');
const audioConfirmButton = document.getElementById('audio-confirm-button');
let audioStream;

/* JavaScript functions and event listeners */
