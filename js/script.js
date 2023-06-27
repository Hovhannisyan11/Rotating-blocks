d = document.querySelector('div');
d = document.querySelectorAll('div');


for(let i = 0;i<d.length;i++){
    d[i].addEventListener('click',f);

}

function f(){

for(let i = 0;i<d.length;i++){
  d[i].style.background = 'transparent';
  d[i].style.transform = 'rotate (90deg)';
  d[i].style.borderRadius = '0';
}

let c = parseInt(Math.random() * 99999);
this.style.background = '#' + c;
this.style.borderRadius = '20px'; 
this.style.transition = '3s';
this.style.transform = 'rotate(45deg)';



}


function f1(){
 let c = parseInt(Math.random() * 99999999)
 for(let i = 0;i<d.length;i++){
  d[i].style.background = '#' + c;
  d[i].style.borderRadius = '50%';
  d[i].style.transition = '2s';
  d[i].style.transform = 'scale(1.5)';
 }


}

let x = 25;

function f3(){
 let c = parseInt(Math.random() * 99999999);
 for(let i = 0;i<d.length;i++){
    d[i].style.background = '#' + c;
    d[i].style.background = "rotate("   +   x   +  "deg)";
    x+=25;
    d[i].style.transition = '1s';
    d[i].style.borderRadius = '0';
 };
};



function f5(){
  let c = parseInt(Math.random() * 9999999);
  for(let i = 0;i<d.length;i++){
    d[i].style.background = '#' + c; 
    d[i].style.transform = 'rotate(' + x + 'deg)';
    d[i].style.transition = '1s';
    d[i].style.borderRadius = '0';


  }

  x+=25
}


function f6(){
   for(let i = 0;i<d.length;i++){
    let t =+ d[i].getAttribute('data-tox'); 
    
    
    let s =+ d[i].getAttribute('data-syun'); 
    if(t == s || (t+s) == 3){
      d[i].style.background = '#fec00055';
      d[i].style.transform = 'scale(1.5';
      d[i].style.borderRadius = '50px'
    }else {
      d[i].style.background = '#000';
    }
   }


}

