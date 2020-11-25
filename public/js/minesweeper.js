var display=document.getElementById("display");
var height,width,bombs,map,flagging,found,revealed;
function minesweeper(){
    //important variables
    map=[],flagging=true,found=0,revealed=0;

    //create difficulty buttons
    var gButtons=document.createElement("div");
    var dButtons=document.createElement("div");
    var count=document.createElement("p");

    var db1=document.createElement("button");
    db1.innerHTML="Easy";
    db1.onclick=function(){makeGrid(9,9,10)};
    db1.classList.add("dButton");
    dButtons.appendChild(db1);

    var db2=document.createElement("button");
    db2.innerHTML="Normal";
    db2.onclick=function(){makeGrid(16,16,40)};
    db2.classList.add("dButton");
    dButtons.appendChild(db2);
    
    var db3=document.createElement("button");
    db3.innerHTML="Hard";
    db3.onclick=function(){makeGrid(16,30,99)};
    db3.classList.add("dButton");
    dButtons.appendChild(db3);
    
    var db4=document.createElement("button");
    db4.innerHTML="Custom";
    db4.onclick=function(){makeGrid(prompt("Please input Height"),prompt("Please input Width"),prompt("Please input number of bombs"))};
    db4.classList.add("dButton");
    dButtons.appendChild(db4);

    display.appendChild(dButtons);
    
    //make the game buttons and map
    function makeGrid(h,w,b){
        //set important variables
        height=h;
        width=w;
        bombs=b;
        dButtons.remove();

        //make bombs remaining display
        count.innerHTML="Bombs remaining: "+bombs;
        display.appendChild(count);

        //make mode button
        var mButton=document.createElement("button");
        mButton.innerHTML="Mode: Flagging";
        mButton.classList.add("dButton");
        mButton.onclick=function(){
            flagging=!flagging;
            if(flagging)
                this.innerHTML="Mode: Flagging";
            else
                this.innerHTML="Mode: Revealing";
        }
        gButtons.appendChild(mButton);
        
        //make game buttons
        for(r=0;r<height;r++){
            row=document.createElement("div");
            row.classList.add("buttonRow");
            for(c=0;c<width;c++){
                button=document.createElement("button");
                button.id=(r*width+c);
                button.onclick=function(){action(this.id)}
                button.classList.add("gButton");
                row.appendChild(button);
            }
            gButtons.appendChild(row);
        }
        display.appendChild(gButtons);
        
        //create map of game board
        for(r=0;r<height;r++){
            map[r]=[];
            for(c=0;c<width;c++)
                map[r][c]=0;
        }

        //randomly place bombs in map
        for(q=0;q<bombs;q++){
            r=Math.floor(Math.random()*height);
            c=Math.floor(Math.random()*width);
            if(map[r][c]==0)
                map[r][c]=-1;
            else
                q--;
        }

        //label non-bomb squares in map with number of nearby bombs
        for(r=0;r<height;r++){
            for(c=0;c<width;c++){
                if(map[r][c]==0){
                    num=0;
                    //check top edge positions
                    if(r==0){
                        if(c==0){
                            if(map[0][1]==-1) num++;
                            if(map[1][0]==-1) num++;
                            if(map[1][1]==-1) num++;
                        }
                        else if(c==width-1){
                            if(map[0][width-2]==-1) num++;
                            if(map[1][width-1]==-1) num++;
                            if(map[1][width-2]==-1) num++;
                        }
                        else{
                            for(q=c-1;q<=c+1;q++){
                                if(map[0][q]==-1) num++;
                                if(map[1][q]==-1) num++;
                            }
                        }
                    }
                    //check bottom edge positions
                    else if(r==height-1){
                        if(c==0){
                            if(map[height-2][0]==-1) num++;
                            if(map[height-1][1]==-1) num++;
                            if(map[height-2][1]==-1) num++;
                        }
                        else if(c==width-1){
                            if(map[height-2][width-1]==-1) num++;
                            if(map[height-1][width-2]==-1) num++;
                            if(map[height-2][width-2]==-1) num++;
                        }
                        else{
                            for(q=c-1;q<=c+1;q++){
                                if(map[height-2][q]==-1) num++;
                                if(map[height-1][q]==-1) num++;
                            }
                        }
                    }
                    //check left edge positions
                    else if(c==0){
                        for(q=r-1;q<=r+1;q++){
                            if(map[q][0]==-1) num++;
                            if(map[q][1]==-1) num++;
                        }
                    }
                    //check right edge positions
                    else if(c==width-1){
                        for(q=r-1;q<=r+1;q++){
                            if(map[q][width-2]==-1) num++;
                            if(map[q][width-1]==-1) num++;
                        }
                    }
                    //check mid-board positions
                    else{
                        for(q=r-1;q<=r+1;q++){
                            for(w=c-1;w<=c+1;w++){
                                if(map[q][w]==-1)
                                    num++;
                            }
                        }
                    }
                    map[r][c]=num;
                }
            }
        }

        //randomly determine start position
        r,c;
        do{
            r=Math.floor(Math.random()*height);
            c=Math.floor(Math.random()*width);
        }while(map[r][c]!=0)
        reveal(r,c)
    }

    //operate game buttons
    function action(q){
        //get button, row, and column
        b=document.getElementById(q);
        r=Math.floor(q/width);
        c=q%width;
        //flag position
        if(flagging){
            if(b.classList.contains("gButton")){
                b.classList.remove("gButton");
                b.classList.add("flagged");
                found++;
            }
            else{
                b.classList.remove("flagged");
                b.classList.add("gButton");
                found--;
            }
            count.innerHTML="Bombs Remiaining: "+(bombs-found);
        }

        //reveal position
        else{
            //check that position isn't flagged
            if(b.classList.contains("gButton")){
                //check that the player hasnt lost
                if(map[r][c]==-1){
                    alert("That was a bomb, so you lose!");
                    reset=document.createElement("button")
                    reset.innerHTML="Reset";
                    reset.classList.add("dButton");
                    reset.onclick=function(){
                        reset.remove();
                        gButtons.remove();
                        count.remove();
                        minesweeper();
                    }
                    display.appendChild(reset);
                }
                else
                    reveal(r,c);
            }
        }
    }

    function reveal(r,c){
        if(r>-1&&r<height&&c>-1&&c<width&&document.getElementById(r*width+c).classList.contains("gButton")){
            //hide button and display number of nearby bombs
            b=document.getElementById(r*width+c);
            b.classList.remove("gButton");
            b.classList.add("revealed");
            b.onclick=function(){};
            b.innerHTML=map[r][c];
            revealed++;
            //check for win
            if((revealed+bombs)==(height*width)){
                alert("All safe tiles revealed, so you win!");
                reset=document.createElement("button")
                reset.innerHTML="Reset";
                reset.classList.add("dButton");
                reset.onclick=function(){
                    reset.remove();
                    gButtons.remove();
                    count.remove();
                    minesweeper();
                }
                display.appendChild(reset);
                return;
            }
            //reveal nearby positions if they are safe
            if(map[r][c]==0){
                reveal(r-1,c-1);
                reveal(r-1,c);
                reveal(r-1,c+1);
                reveal(r,c-1);
                reveal(r,c+1);
                reveal(r+1,c-1);
                reveal(r+1,c);
                reveal(r+1,c+1);
            }
        }
    }
}