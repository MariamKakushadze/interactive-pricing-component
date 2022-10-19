const range=document.getElementById('range');
const label=document.querySelector('.label');
const views=document.querySelector('.pageviews');
const check=document.getElementById('checkbox');
const month=document.querySelector('.month');

let value = (range.value-range.min)/(range.max-range.min)*100;
range.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)';

//when input hasn't started
let count=0;
if(label.innerHTML=`$16.00`){
check.addEventListener('click', function(){   
        count++
        if(count%2!=0){
            label.innerHTML=`$144.00`;
        }else{
            label.innerHTML=`$16.00`;
        } 
 })
}

const calculate=function(e){
    const value=+e.target.value;
    const oneK=16/100;
    const oneDollarView=1/oneK;
    const yearBill=value*12*0.75;

    if(!check.checked){
    label.innerHTML=`$${value}.00`;
    views.innerHTML=`${oneDollarView*value}K PAGEVIEWS`;
    }else{
    label.innerHTML=`$${yearBill}.00`;
    views.innerHTML=`${oneDollarView*value}K PAGEVIEWS`;
    }

    check.addEventListener('click', ()=>{
        if(!check.checked){
            label.innerHTML=`$${value}.00`;
            views.innerHTML=`${oneDollarView*value}K PAGEVIEWS`;
            month.innerHTML=`/ month`;
            }else{
            label.innerHTML=`$${yearBill}.00`;
            views.innerHTML=`${oneDollarView*value}K PAGEVIEWS`;
            month.innerHTML=`/ year`;
            }
    })
}

range.addEventListener('input', calculate);
//check.addEventListener('click', calculate);

//range color
document.getElementById("range").oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
  };