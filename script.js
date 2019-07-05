window.onload = function() {
	const blocksArray = []; 
	blocksArray.length = 100;
	var lastMoveIndex; 
	var nextMove = document.getElementById('nextMove');
	var winner = document.getElementById("winner");
				
	for (let i=0; i<=99; i++){		
		document.getElementById('game').innerHTML += '<div class="block"></div>';
	}; // отрисовали поле

	var move = 0; //кто ходит, х или 0

	document.getElementById('game').onclick = function(event) {			
		if (blocksArray.indexOf(event.target.innerHTML) !== -1){ //если х или о уже стоит, то данный блок не кликабелен
			return;
		};
		
		if (event.target.className == "block") {//проверяем попадание в блок
			if (move % 2==0) { 
				event.target.innerHTML = "X";//четный ход, Х
				nextMove.innerHTML = "0";
			} else {          
				event.target.innerHTML = "0";//нечетный ход, 0
				nextMove.innerHTML = "X";
			};					
		}	
		move++;
		updateArray();		
		
		blocks = document.getElementsByClassName('block');		
		for (let i=0; i<blocks.length;i++) {
			if (event.target == blocks[i]) {
				lastMoveIndex = i;				
			}
		}
		console.log(lastMoveIndex);	
		console.log(blocksArray);
		checkWinner(lastMoveIndex);			
	};

	function checkWinner(lastMoveIndex) {
		if (//горизонталь
			blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-1]=="X" && blocksArray[lastMoveIndex-2]=="X" && blocksArray[lastMoveIndex-3]=="X" && blocksArray[lastMoveIndex-4]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex+1]=="X" && blocksArray[lastMoveIndex+2]=="X" && blocksArray[lastMoveIndex+3]=="X" && blocksArray[lastMoveIndex+4]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-1]=="X" && blocksArray[lastMoveIndex-2]=="X" && blocksArray[lastMoveIndex+1]=="X" && blocksArray[lastMoveIndex+2]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-1]=="X" && blocksArray[lastMoveIndex+1]=="X" && blocksArray[lastMoveIndex+2]=="X" && blocksArray[lastMoveIndex+3]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-1]=="X" && blocksArray[lastMoveIndex-2]=="X" && blocksArray[lastMoveIndex-3]=="X" && blocksArray[lastMoveIndex+1]=="X" ||
			//вертикаль
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-10]=="X" && blocksArray[lastMoveIndex-20]=="X" && blocksArray[lastMoveIndex-30]=="X" && blocksArray[lastMoveIndex-40]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex+10]=="X" && blocksArray[lastMoveIndex+20]=="X" && blocksArray[lastMoveIndex+30]=="X" && blocksArray[lastMoveIndex+40]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-10]=="X" && blocksArray[lastMoveIndex-20]=="X" && blocksArray[lastMoveIndex-30]=="X" && blocksArray[lastMoveIndex+10]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-10]=="X" && blocksArray[lastMoveIndex+10]=="X" && blocksArray[lastMoveIndex+20]=="X" && blocksArray[lastMoveIndex+30]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-10]=="X" && blocksArray[lastMoveIndex-20]=="X" && blocksArray[lastMoveIndex+10]=="X" && blocksArray[lastMoveIndex+20]=="X" ||
			//диагонали
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-11]=="X" && blocksArray[lastMoveIndex-22]=="X" && blocksArray[lastMoveIndex-33]=="X" && blocksArray[lastMoveIndex-44]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex+11]=="X" && blocksArray[lastMoveIndex+22]=="X" && blocksArray[lastMoveIndex+33]=="X" && blocksArray[lastMoveIndex+44]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-9]=="X" && blocksArray[lastMoveIndex-18]=="X" && blocksArray[lastMoveIndex-27]=="X" && blocksArray[lastMoveIndex-36]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex+9]=="X" && blocksArray[lastMoveIndex+18]=="X" && blocksArray[lastMoveIndex+27]=="X" && blocksArray[lastMoveIndex+36]=="X" ||	 	
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-11]=="X" && blocksArray[lastMoveIndex-22]=="X" && blocksArray[lastMoveIndex-33]=="X" && blocksArray[lastMoveIndex+11]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-11]=="X" && blocksArray[lastMoveIndex+11]=="X" && blocksArray[lastMoveIndex+22]=="X" && blocksArray[lastMoveIndex+33]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-11]=="X" && blocksArray[lastMoveIndex-22]=="X" && blocksArray[lastMoveIndex+11]=="X" && blocksArray[lastMoveIndex+22]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-9]=="X" && blocksArray[lastMoveIndex-18]=="X" && blocksArray[lastMoveIndex-27]=="X" && blocksArray[lastMoveIndex+9]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-9]=="X" && blocksArray[lastMoveIndex+9]=="X" && blocksArray[lastMoveIndex+18]=="X" && blocksArray[lastMoveIndex+27]=="X" ||
		 	blocksArray[lastMoveIndex]=="X" && blocksArray[lastMoveIndex-9]=="X" && blocksArray[lastMoveIndex-18]=="X" && blocksArray[lastMoveIndex+9]=="X" && blocksArray[lastMoveIndex+18]=="X") {
					winner.innerHTML = "X - winner!";
					winner.style.display = "block";
		}; 
		if (//горизонталь
			blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-1]=="0" && blocksArray[lastMoveIndex-2]=="0" && blocksArray[lastMoveIndex-3]=="0" && blocksArray[lastMoveIndex-4]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex+1]=="0" && blocksArray[lastMoveIndex+2]=="0" && blocksArray[lastMoveIndex+3]=="0" && blocksArray[lastMoveIndex+4]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-1]=="0" && blocksArray[lastMoveIndex-2]=="0" && blocksArray[lastMoveIndex+1]=="0" && blocksArray[lastMoveIndex+2]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-1]=="0" && blocksArray[lastMoveIndex+1]=="0" && blocksArray[lastMoveIndex+2]=="0" && blocksArray[lastMoveIndex+3]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-1]=="0" && blocksArray[lastMoveIndex-2]=="0" && blocksArray[lastMoveIndex-3]=="0" && blocksArray[lastMoveIndex+1]=="0" ||
			//вертикаль
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-10]=="0" && blocksArray[lastMoveIndex-20]=="0" && blocksArray[lastMoveIndex-30]=="0" && blocksArray[lastMoveIndex-40]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex+10]=="0" && blocksArray[lastMoveIndex+20]=="0" && blocksArray[lastMoveIndex+30]=="0" && blocksArray[lastMoveIndex+40]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-10]=="0" && blocksArray[lastMoveIndex-20]=="0" && blocksArray[lastMoveIndex-30]=="0" && blocksArray[lastMoveIndex+10]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-10]=="0" && blocksArray[lastMoveIndex+10]=="0" && blocksArray[lastMoveIndex+20]=="0" && blocksArray[lastMoveIndex+30]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-10]=="0" && blocksArray[lastMoveIndex-20]=="0" && blocksArray[lastMoveIndex+10]=="0" && blocksArray[lastMoveIndex+20]=="0" ||
			//диагонали
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-11]=="0" && blocksArray[lastMoveIndex-22]=="0" && blocksArray[lastMoveIndex-33]=="0" && blocksArray[lastMoveIndex-44]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex+11]=="0" && blocksArray[lastMoveIndex+22]=="0" && blocksArray[lastMoveIndex+33]=="0" && blocksArray[lastMoveIndex+44]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-9]=="0" && blocksArray[lastMoveIndex-18]=="0" && blocksArray[lastMoveIndex-27]=="0" && blocksArray[lastMoveIndex-36]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex+9]=="0" && blocksArray[lastMoveIndex+18]=="0" && blocksArray[lastMoveIndex+27]=="0" && blocksArray[lastMoveIndex+36]=="0" ||	 	
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-11]=="0" && blocksArray[lastMoveIndex-22]=="0" && blocksArray[lastMoveIndex-33]=="0" && blocksArray[lastMoveIndex+11]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-11]=="0" && blocksArray[lastMoveIndex+11]=="0" && blocksArray[lastMoveIndex+22]=="0" && blocksArray[lastMoveIndex+33]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-11]=="0" && blocksArray[lastMoveIndex-22]=="0" && blocksArray[lastMoveIndex+11]=="0" && blocksArray[lastMoveIndex+22]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-9]=="0" && blocksArray[lastMoveIndex-18]=="0" && blocksArray[lastMoveIndex-27]=="0" && blocksArray[lastMoveIndex+9]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-9]=="0" && blocksArray[lastMoveIndex+9]=="0" && blocksArray[lastMoveIndex+18]=="0" && blocksArray[lastMoveIndex+27]=="0" ||
		 	blocksArray[lastMoveIndex]=="0" && blocksArray[lastMoveIndex-9]=="0" && blocksArray[lastMoveIndex-18]=="0" && blocksArray[lastMoveIndex+9]=="0" && blocksArray[lastMoveIndex+18]=="0") {
				winner.innerHTML = "0 - winner!";
				winner.style.display = "block";
		}
		return
	};
	
	

	function updateArray() {
		var blocks = document.getElementsByClassName('block');
		for (let i=0;i < blocks.length; i++) {
			if (blocks[i].innerHTML) {
				blocksArray[i] = blocks[i].innerHTML;
			}
		};		
		return;	
	}
}
