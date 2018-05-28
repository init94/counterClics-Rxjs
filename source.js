let clickSource = Rx.Observable.fromEvent(document.querySelector('button'),'click');

clickSource.bufferTime(1000)
	.map(list => list.length)
	.filter(contador => contador > 0)
	.susbcribe(conteo => {
		document.querySelector("#counter").innerHTML = conteo;
	});
