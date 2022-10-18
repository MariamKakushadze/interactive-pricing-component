const range=document.getElementById('range');
const label=document.querySelector('.label');
const views=document.querySelector('.pageviews');
const check=document.getElementById('checkbox');

const calculate=function(e){
    const value=+e.target.value;
    const oneK=0.16;
    const oneDollarView=1/oneK;
    const yearBill=value*12*0.75;
 
    if(!check.checked){
    label.innerHTML=`$${value}.00`;
    views.innerHTML=`${oneDollarView*value}K PAGEVIEWS`;
    }else{
    label.innerHTML=`$${yearBill}.00`;
    views.innerHTML=`${oneDollarView*value}K PAGEVIEWS`;
    }
 
}
range.addEventListener('input', calculate);

//check.addEventListener('click', calculate);
 