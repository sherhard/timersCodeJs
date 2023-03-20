

let myTime=document.getElementById('myTime');
	myTime.addEventListener('click',funcTime);

	let stopTime=document.getElementById('stopTime');
		stopTime.addEventListener('click',stopTimres);

	function stopTimres(){
		window.clearInterval(window.timerId);
		
		// document.body.style.background='green';

		// if(document.body.style.background=='green'){
		// 	let blockTimer=document.getElementById('block')
		// 	blockTimer.style.background='yellow';

		// }

	}
	function stop(){
		window.clearInterval(window.timerId);
	}
	
	let numberTimer=document.getElementById('numberTimer');
			numberTimer.addEventListener('mouseout',timerNumber);
			function timerNumber(){
				timer.innerHTML=numberTimer.value;
			}

	function funcTime(){
	window.timerId=window.setInterval(timers,1000);



		function timers(){
			let timer=document.getElementById('timer');
			let indecator=document.getElementById('indecator');
				indecator.style.width=timer.innerHTML+'px';

		let num=parseInt(timer.innerHTML)-1;
		timer.innerHTML=num;
		if(num==0){
			stop();
			
			document.body.style.background='red'
		}
		}
	}

	



	let  doc = document.body;
		doc.addEventListener('mousemove',docWin);

		function docWin(event){
			this.style.background='#'+event.clientX;
		}
