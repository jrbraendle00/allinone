const rowcols = Array.from(document.getElementsByClassName('rowcol'));
const phraseText = document.getElementById('phraseText');
const rstBtn = document.getElementById('rstBtn');
const conts = [];
const playerO = 'O';
const playerX = 'X';
let currPlayer;
const gridBoard = document.getElementById('gridBoard');

const ticTacToe = () => 
{
	rowcols.forEach((rowcol, index) => 
	{
		rowcol.addEventListener('click', rowcolClicked);
	});
};

function rowcolClicked(e)
{
	const id = e.target.id;
  
	if(!conts[id]) 
	{
		conts[id] = currPlayer;
		e.target.innerText = currPlayer;
		if(playerIsSuccessful()) 
		{
			phraseText.innerText = currPlayer + ' is Successful!';
			rowcols.forEach((rowcol, index) => 
			{
				rowcol.removeEventListener('click', rowcolClicked);
				
			});
			return;
		}
	
		currPlayer = currPlayer === playerO ? playerX : playerO;
			
	}
}

const playerIsSuccessful = () => 
{
	if(conts[0] === currPlayer)
	{
		if(conts[1] === currPlayer && conts[2] === currPlayer)
		{
			return true;
		}
		if(conts[3] === currPlayer && conts[6] === currPlayer)
		{
			return true;
		}
		if(conts[4] === currPlayer && conts[8] === currPlayer)
		{
			return true;
		}
	}
	if(conts[8] === currPlayer)
	{
		if(conts[2] === currPlayer && conts[5] === currPlayer)
		{
			return true;
		}
		if(conts[6] === currPlayer && conts[7] === currPlayer)
		{
			return true;
		}
	}
	if(conts[4] === currPlayer)
	{
		if(conts[1] === currPlayer && conts[7] === currPlayer)
		{
			return true;
		}
		if(conts[3] === currPlayer && conts[5] === currPlayer)
		{
			return true;
		}
	}
	if(conts[2] === currPlayer)
	{
		if(conts[4] === currPlayer && conts[6] === currPlayer)
			{
				return true;
			}
	}
};

const restartGame = () => 
{
	conts.forEach((cont, index)=>
	{
		conts[index] = null;
	})
	rowcols.forEach(rowcol => 
	{
		rowcol.innerText = '';
		rowcol.addEventListener('click', rowcolClicked);
	})

	phraseText.innerText = 'Welcome to Tic-Tac-Toe!';
	currPlayer = playerX;
}

rstBtn.addEventListener('click', restartGame);
restartGame();
ticTacToe();