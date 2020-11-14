function simon(){
    //settings for a new game
    var sequence=[];
    var numButtons;
    var index=0;
    var score=0;

    var scoreTally=document.createElement("p");
    document.getElementById("display").appendChild(scoreTally)
    var dButtons=document.createElement("div");
    document.getElementById("display").appendChild(dButtons);
    var gButtons=document.createElement("div");
    document.getElementById("display").appendChild(gButtons);

    //create difficulty buttons
    var db1=document.createElement("button");
    db1.classList.add("dButton")
    db1.innerHTML="4 Buttons";
    db1.onclick=function(){makeGameButtons(2)};
    dButtons.appendChild(db1);
    
    var db2=document.createElement("button");
    db2.classList.add("dButton")
    db2.innerHTML="9 Buttons";
    db2.onclick=function(){makeGameButtons(3)};
    dButtons.appendChild(db2);
    
    var db3=document.createElement("button");
    db3.classList.add("dButton")
    db3.innerHTML="16 Buttons";
    db3.onclick=function(){makeGameButtons(4)};
    dButtons.appendChild(db3);

    //creates game buttons
    function makeGameButtons(num){
        dButtons.remove();
        numButtons=num*num;
        scoreTally.innerHTML="Score: 0";
        for(q=0;q<num;q++){
            var row=document.createElement("div");
            for(w=0;w<num;w++){
                var b=document.createElement("button")
                b.classList.add("gButton");
                b.id=q*num+w;
                b.onclick=function(){submit(this.id)};
                row.appendChild(b);
            }
            gButtons.appendChild(row);
        }
        sequence[0]=Math.floor(Math.random()*numButtons);
        showSequence(0);
    }

    //submits user input
    function submit(q){
        if(sequence[index++]==q){
            if(index==sequence.length){
                scoreTally.innerHTML="Score: "+(++score);
                sequence[index]=Math.floor(Math.random()*numButtons);
                index=0;
                showSequence(0);
            }
        }
        else{
            alert("You Lost")
            gButtons.remove();
            rst=document.createElement("button");
            rst.classList.add("dButton");
            rst.innerHTML="reset"
            rst.onclick=function(){
                scoreTally.remove();
                rst.remove();
                simon();
            }
            document.getElementById("display").appendChild(rst);
        }
    }

    async function showSequence(q){
        document.getElementById(sequence[q]).style.backgroundColor="#FFFFFF";
        await new Promise(r => setTimeout(r, 1000));
        document.getElementById(sequence[q]).style.backgroundColor="#81DED6";
        if(q<sequence.length-1){
            await new Promise(r => setTimeout(r, 200));
            showSequence(++q)
        }
    }
}