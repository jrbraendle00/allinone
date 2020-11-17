//dimensions for canvas
const RADIUS=25, SPACING=10;
const WIDTH=7*(2*RADIUS+SPACING), HEIGHT=6*(2*RADIUS+SPACING);
function connectFour(){
    var turn=0;
    var counts=[0,0,0,0,0,0,0];
    var board=[['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],
        ['','','','','',''],]
    var display=document.createElement("p");
    display.innerHTML="Black's Turn"
    document.getElementById("display").appendChild(display);

    //create buttons
    var buttons=document.createElement("div");
    for(q=0;q<7;q++){
        var b=document.createElement("button");
        b.innerHTML=(q+1);
        b.id=q;
        b.onclick=function(){submitToken(this.id)};
        buttons.appendChild(b);
    }
    document.getElementById("display").appendChild(buttons);

    //create game board
    var canvas=document.createElement("canvas");
    canvas.width=WIDTH;
    canvas.height=HEIGHT;
    var draw=canvas.getContext("2d");
    draw.fillStyle="#FFFFFF";
    draw.fillRect(0,0,WIDTH,HEIGHT);
    draw.fillStyle="#D0D0D0"
    for(c=0;c<7;c++){
        for(r=0;r<6;r++){
            draw.beginPath();
            draw.arc(RADIUS+SPACING/2+(2*RADIUS+SPACING)*c,RADIUS+SPACING/2+(2*RADIUS+SPACING)*r,RADIUS,0,2*Math.PI);
            draw.fill();
        }
    }
    document.getElementById("display").appendChild(canvas);

    //handle input
    function submitToken(c){
        if(++turn%2==0){
            drawRed(c);
            board[c][counts[c]]='r';
            display.innerHTML="Black's Turn";
        }
        else{
            drawBlack(c);
            board[c][counts[c]]='b';
            display.innerHTML="Red's Turn";
        }
        if(counts[c]==5){
            document.getElementById(c).innerHTML="";
            document.getElementById(c).classList.add("hidden");
            document.getElementById(c).onclick=function(){};
        }
        checkWin(c,counts[c]++);
        }

    //draw tokens
    function drawRed(c){
        draw.fillStyle="#FF0000"
        draw.beginPath();
        draw.arc(RADIUS+SPACING/2+(2*RADIUS+SPACING)*c,HEIGHT-(RADIUS+SPACING/2+(2*RADIUS+SPACING)*counts[c]),RADIUS,0,2*Math.PI);
        draw.fill();
    }
    function drawBlack(c){
        draw.fillStyle="#000000"
        draw.beginPath();
        draw.arc(RADIUS+SPACING/2+(2*RADIUS+SPACING)*c,HEIGHT-(RADIUS+SPACING/2+(2*RADIUS+SPACING)*counts[c]),RADIUS,0,2*Math.PI);
        draw.fill();
    }

    //check for a win (or tie)
    function checkWin(c,r){
        player=board[c][r];
        var consecutive=0;
        //check for vertical win
        for(q=r;q>=0;q--){
            if(board[c][q]==player)
                consecutive++;
            else
                consecutive=0;
            if(consecutive==4){
                end(player);
                return;
            }
        }
        //check for horizontal win
        consecutive=0;
        for(q=0;q<7;q++){
            if(board[q][r]==player)
                consecutive++;
            else
                consecutive=0;
            if(consecutive==4){
                end(player);
                return;
            }
        }
        //check for diagnol win
        var col=c;
        var row=r;
        consecutive=0;
        while(col>0&&row>0){
            col--;
            row--;
        }
        while(col<7&&row<6){
            if(board[col++][row++]==player)
                consecutive++;
            else
                consecutive=0;
            if(consecutive==4){
                end(player);
                return;
            }
        }
        //check for other diagnol win
        col=c;
        row=r;
        consecutive=0;
        while(col>0&&row<5){
            col--;
            row++;
        }
        while(col<7&&row>=0){
            if(board[col++][row--]==player)
                consecutive++;
            else
                consecutive=0;
            if(consecutive==4){
                end(player);
                return;
            }
        }
        //check for tie
        for(q=0;q<7;q++){
            if(board[q][5]=='')
                return
        }
        end('t');
    }

    //ends the game and prepares the reset button
    function end(q){
        switch(q){
            case('r'):alert("red wins");break;
            case('b'):alert("black wins");break;
            case('t'):alert("tie");break;
        }
        var d=document.createElement("div");
        var r=document.createElement("button");
        r.innerHTML="reset";
        r.classList.add("reset");
        r.onclick=function(){
            d.remove();
            display.remove();
            canvas.remove();
            buttons.remove();
            connectFour();
        }
        d.appendChild(r);
        document.getElementById("display").appendChild(d);
    }
}