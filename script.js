const buttonA = document.getElementById('button-a');
const buttonB = document.getElementById('button-b');

window.onmessage = (e) => console.log('message received from parent and message is: ', e.data)

buttonA.onclick = (e) => {
	window.parent.postMessage('button a clicked', '*');
}

buttonB.onclick = (e) => {
  window.parent.postMessage('button b clicked', '*');
}