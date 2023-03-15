

let myTime=document.getElementById('myTime');
	myTime.addEventListener('click',funcTime);
	function stop(){
		window.clearInterval(window.timerId)
	}
	let numberTimer=document.getElementById('numberTimer');
			numberTimer.addEventListener('mouseout',timerNumber);
			function timerNumber(){
				timer.innerHTML=numberTimer.value;
			}
	function funcTime(){
		window.timerId=window.setInterval(timers,300)
		function timers(){
			let timer=document.getElementById('timer');

		let num=parseInt(timer.innerHTML)-1;
		timer.innerHTML=num;
		if(num==0){
			stop();
			
			document.body.style.background='red'
		}
		}
	}