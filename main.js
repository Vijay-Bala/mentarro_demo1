let x=[[0,0,0],[0,0,0],[0,0,0]]
let f=1;
const a=document.querySelectorAll(".items")
const a00=document.querySelector(".item00");
const a01=document.querySelector(".item01");
const a02=document.querySelector(".item02");
const a10=document.querySelector(".item10");
const a11=document.querySelector(".item11");
const a12=document.querySelector(".item12");
const a20=document.querySelector(".item20");
const a21=document.querySelector(".item21");
const a22=document.querySelector(".item22");
const turn=document.querySelector("span");

a00.addEventListener('click',function(){
        if(x[0][0]==0 ){
                if(f===1){
                        x[0][0]=1;
                        f=2
                        a00.innerHTML='<div>x</div>';
                        turn.innerHTML="2";
                }else{
                        x[0][0]=2;
                        f=1
                        a00.innerHTML='<div>o</div>';
                        turn.innerHTML="1";
                }
                game();
        }
})

a01.addEventListener('click',function(){
        if(x[0][1]==0 ){
                if(f===1){
                        x[0][1]=1;
                        f=2
                        a01.innerHTML='<div>x</div>';
                        turn.innerHTML="2";
                }else{
                        x[0][1]=2;
                        f=1
                        a01.innerHTML='<div>o</div>';
                        turn.innerHTML="1";
                }
                game();
        }
})


a02.addEventListener('click',function(){
        if(x[0][2]==0 ){
                if(f===1){
                        x[0][2]=1;
                        f=2
                        a02.innerHTML='<div>x</div>';
                        turn.innerHTML="2";
                }else{
                        x[0][2]=2;
                        f=1
                        a02.innerHTML='<div>o</div>';
                        turn.innerHTML="1";
                }
                game();
        }
})


a10.addEventListener('click',function(){
        if(x[1][0]==0 ){
                if(f===1){
                        x[1][0]=1;
                        f=2
                        a10.innerHTML='<div>x</div>';
                        turn.innerHTML="2";
                }else{
                        x[1][0]=2;
                        f=1
                        a10.innerHTML='<div>o</div>';
                        turn.innerHTML="1";
                }
                game();
        }
})


a11.addEventListener('click',function(){
        if(x[1][1]==0 ){
                if(f===1){
                        x[1][1]=1;
                        f=2
                        a11.innerHTML='<div>x</div>';
                        turn.innerHTML="2";
                }else{
                        x[1][1]=2;
                        f=1
                        a11.innerHTML='<div>o</div>';
                        turn.innerHTML="1";
                }
                game();
        }
})


a12.addEventListener('click',function(){
        if(x[1][2]==0 ){
                if(f===1){
                        x[1][2]=1;
                        f=2
                        a12.innerHTML='<div>x</div>';
                        turn.innerHTML="2";
                }else{
                        x[1][2]=2;
                        f=1
                        a12.innerHTML='<div>o</div>';
                        turn.innerHTML="1";
                }
                game();
        }
})


a20.addEventListener('click',function(){
        if(x[2][0]==0){
                if(f===1){
                        x[2][0]=1;
                        f=2
                        a20.innerHTML='<div>x</div>';
                        turn.innerHTML="2";
                }else{
                        x[2][0]=2;
                        f=1
                        a20.innerHTML='<div>o</div>';
                        turn.innerHTML="1";
                }
                game();
        }
})


a21.addEventListener('click',function(){
        if(x[2][1]==0){
                if(f===1){
                        x[2][1]=1;
                        f=2
                        a21.innerHTML='<div>x</div>';
                        turn.innerHTML="2";
                }else{
                        x[2][1]=2;
                        f=1
                        a21.innerHTML='<div>o</div>';
                        turn.innerHTML="1";
                }
                game();
        }
})


a22.addEventListener('click',function(){
        if(x[2][2]==0){
                if(f===1){
                        x[2][2]=1;
                        f=2
                        a22.innerHTML='<div>x</div>';
                        turn.innerHTML="2";
                }else{
                        x[2][2]=2;
                        f=1
                        a22.innerHTML='<div>o</div>';
                        turn.innerHTML="1";
                }
                game();
        }
})

function check(){
        for(var i=0;i<3;i++){
                for(var j=0;j<3;j++){
                        if(x[i][j]===0){
                                return true;
                        }
                }
        }
        return false
}


let c=0;
function game(){
        let f2=1;
        if((x[0][0]===1 && x[0][1]===1 && x[0][2]===1) || (x[1][0]===1 && x[1][1]===1 && x[1][2]===1) || (x[2][0]===1 && x[2][1]===1 && x[2][2]===1) || (x[0][0]===1 && x[1][0]===1 && x[2][0]===1) || (x[0][1]===1 && x[1][1]===1 && x[2][1]===1) || (x[0][2]===1 && x[1][2]===1 && x[2][2]===1) || (x[0][0]===1 && x[1][1]===1 && x[2][2]===1) || (x[0][2]===1 && x[1][1]===1 && x[2][0]===1)){
                alert("PLAYER 1 WON!!!");
                again();
        }else if((x[0][0]===2 && x[0][1]===2 && x[0][2]===2) || (x[1][0]===2 && x[1][1]===2 && x[1][2]===2) || (x[2][0]===2 && x[2][1]===2 && x[2][2]===2) || (x[0][0]===2 && x[1][0]===2 && x[2][0]===2) || (x[0][1]===2 && x[1][1]===2 && x[2][1]===2) || (x[0][2]===2 && x[1][2]===2 && x[2][2]===2) || (x[0][0]===2 && x[1][1]===2 && x[2][2]===2) || (x[0][2]===2 && x[1][1]===2 && x[2][0]===2)){
                alert("PLAYER 2 WON!!!");
                again();
        }
        else{
                if(!check()){
                        alert("DRAW!!!");
                        again();
                }
        }
}


function again(){
        window.location.reload();
        // let x=[[0,0,0],[0,0,0],[0,0,0]];
        // for(var i=0;i<a.length;i++){
        //         a[i].innerHTML='<div></div>';
        // }
}



