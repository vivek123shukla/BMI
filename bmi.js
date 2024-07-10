let form=document.querySelector('form');

form.addEventListener('submit',function(e){

    e.preventDefault();
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result=document.querySelector('.result');
    let msg=document.querySelector('.msg');
    if(height===''||height<0||isNaN(height)){
        result.innerHTML="please enter height value"
    }
   else if(weight===''||weight<0||isNaN(weight)){
    result.innerHTML="please enter weight value"
   }
   else{
    let hm=height/100;
    let m=hm*hm;
    let ans=(weight/m).toFixed(2);
    result.innerHTML=`Your BMI is ${ans}`;

    if(ans<18.6){
       msg.innerHTML="You are in Under Weight";
    }else if(ans>=18.6&&ans<=24.9){
        msg.innerHTML="You are in Normal Range";
    }
    else{
        msg.innerHTML="OverWeight ::"
    }


   }



})