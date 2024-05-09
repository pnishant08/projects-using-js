const form = document.querySelector('form');
// const height= parseInt(document.querySelector('#height').value)
// agr yha likhoge to jaise page load hoga to empty value le lega


form.addEventListener('submit',function(e){
    e.preventDefault();

   const height= parseInt(document.querySelector('#height').value)
   const weight= parseInt(document.querySelector('#weight').value)
   const results= document.querySelector('#results')
   
   if(height==='' || height < 0 || isNaN(height) ){
       results.innerHTML=`Please enter valid height ${height}`;
   }
    // results.innerHTML=`${height}`;
    else if(weight==='' || weight < 0 || isNaN(weight) ){
        results.innerHTML=`Please enter valid weight ${weight}`;
    }
    else{
      const bmi= (weight/((height*height)/10000)).toFixed(2)
      //show the result
      results.innerHTML=`<span>${bmi}</span>`

      if(bmi<18.6){
        results.innerHTML=`You are Under Weight`;
      }
      else if(bmi>18.6&&bmi<24.9){
        results.innerHTML=`Normal Range`;
      }
      if(bmi>24.9){
        results.innerHTML=`You are Overweight`;
      }
    }

});