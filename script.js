let boxes = document.querySelectorAll(".box");
console.log(boxes);
let messagecontainer = document.querySelector(".msg-container");
let reset_btn = document.querySelector(".reset");

reset_btn.addEventListener("click",() =>{
    turn = true;
    for(let i of boxes){
        i.innerText = "";
        i.disabled = false;
    }
    messagecontainer.classList.add("hide");
})

let turn = true;
const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];



show_winner = (winner) =>{
    messagecontainer.innerText = `winner is ${winner}`;
    messagecontainer.classList.remove("hide");
    disablebtn();
} 
checkwinner = () =>  {

    
    for(let i of winner){
        let positon1 = boxes[i[0]].innerText;
        let positon2 = boxes[i[1]].innerText;
        let positon3 = boxes[i[2]].innerText;
        
        if(positon1 != "" && positon2 != "" && positon3 != ""){
            if(positon1 === positon2 && positon2 === positon3){
                
                
                show_winner(positon1);
            }
        }
    }
    

}

disablebtn = () =>{
    for(i of boxes){
        i.disabled = true;
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        
        if(turn){
            box.innerText = "O";
            
            turn = false;
        }
        else{
            box.innerText = "X";
            
            turn = true;
        }
        box.disabled = true;
        checkwinner();
        
    })
    
    
})



