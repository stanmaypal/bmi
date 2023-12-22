const form=document.querySelector('.form');
 
form.addEventListener('submit',function(e){
e.preventDefault();

const h=parseInt(document.querySelector('#height').value);
const w=parseInt(document.querySelector('#weight').value);
const res=document.querySelector('#results');
//console.table(h,w);

if(h==='' || h<0 ||isNaN(h))
{
    res.innerHTML=`Plaese give a valid height ${h}`
}
else if(w==='' || w<0 ||isNaN(w))
{
    res.innerHTML=`Plaese give a valid weight ${w}`

}
else
{
    const bmi=(w/((h*h)/10000)).toFixed(2);
    //res.innerHTML=bmi;
    if(bmi==0 && bmi<=18.6)
    {
        res.innerHTML=`Under Weight BMI=${bmi}`
    }
    else if(bmi>18.7 && bmi<=24.9)
    {
        res.innerHTML=`Normal Range BMI=${bmi}`

    }
    else if(bmi>24.9)
    {
        res.innerHTML=`OverWeight BMI=${bmi}`

    }
}
})