let calculateBtn=document.getElementById('calculateBtn');
let heightInput=document.getElementById('height');
let weightInput=document.getElementById('weight');
let resultDiv=document.getElementById('bmiResult');
let bmiCategory=document.getElementById('bmiCategory');


calculateBtn.addEventListener('click',function(){
    let height= parseFloat(heightInput.value)/100;
    let weight= parseFloat(weightInput.value);
    if(height > 0 && weight > 0){
        let bmi= weight/(height*height);

        if( bmi >= 1 && bmi < 18.5){

             resultDiv.innerHTML= "Your BMI is: " + bmi.toFixed(2);
             bmiCategory.innerText= "You are underweight.";

        }else if(bmi >= 18.5 && bmi < 24.9){

                resultDiv.innerHTML= "Your BMI is: " + bmi.toFixed(2);  
                bmiCategory.innerText= "You have a normal weight.";

        }else if(bmi >= 25){

                resultDiv.innerHTML= "Your BMI is: " + bmi.toFixed(2);
                bmiCategory.innerText= "You are overweight.";
                
        }else{
                resultDiv.innerHTML= "Some error occurred. Please try again." ;
        }   
    }  
    else{
        resultDiv.innerHTML= "Please enter valid height and weight.";
    }       

});