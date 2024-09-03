
document.querySelectorAll('body')
.forEach((button)=>{
    button.addEventListener('keydown',function (event){
        if (event.key == 'A' ||event.key=="a" ){
            Audio = document.querySelector('.kick-sound')
            Audio.play();
        }
        else if(event.key ==="W"||event.key=="w" ){
           
                Audio = document.querySelector('.crash-sound')
                Audio.play();  
         }
         else if(event.key ==="S" ||event.key=="s"){
            Audio = document.querySelector('.snare-sound')
            Audio.play(); 
     }
     else if(event.key ==="D"||event.key=="d"){
        Audio = document.querySelector('.tom1-sound')
        Audio.play();
 }
 else if(event.key ==="J"||event.key=="j"){
    Audio = document.querySelector('.tom2-sound')
    Audio.play();
}
else if(event.key ==="K"||event.key=="k"){
    Audio = document.querySelector('.tom3-sound')
        Audio.play();
}
else if(event.key ==="L"||event.key=="l"){
    Audio = document.querySelector('.tom4-sound')
        Audio.play();
}
     
     });
     
})











 
 document.querySelectorAll('button')
.forEach((button)=>{
    if(button.innerText == 'W'){
        button.addEventListener('click',()=>{
            Audio = document.querySelector('.crash-sound')
            Audio.play();  
    })
    }
  else if(button.innerText == "A"){
    button.addEventListener('click',()=>{
        
        Audio = document.querySelector('.kick-sound')
        Audio.play();
    })
    
    
  }
  else if(button.innerText == "S"){
    button.addEventListener('click',()=>{
        Audio = document.querySelector('.snare-sound')
        Audio.play();
    })
   
  }
  else if(button.innerText == "D"){
    button.addEventListener('click',()=>{
        Audio = document.querySelector('.tom1-sound')
        Audio.play();
    });
  }
  else if(button.innerText== "J"){
    button.addEventListener('click',()=>{
        Audio = document.querySelector('.tom2-sound')
        Audio.play();
    });
  }
  else if(button.innerText == "K"){
    button.addEventListener('click',()=>{
        Audio = document.querySelector('.tom3-sound')
        Audio.play();
    })
  }
  else if(button.innerText == "L"){
    button.addEventListener('click',()=>{
        Audio = document.querySelector('.tom4-sound')
        Audio.play();
    });
  }
})