const btns = document.getElementById("btns");

btns.addEventListener('click',function calcu() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    var height = height / 100 ;
    console.log(height);

    var bmi = weight / (height * height);
    var bmi = bmi.toFixed(2);
    
    document.getElementById("count").innerHTML=bmi;
    

    let bmiCategory = '';
            if (bmi < 18.5) {
                bmiCategory = 'Underweight';
            } else if (bmi < 24.9) {
                bmiCategory = 'Normal weight';
            } else if (bmi < 29.9) {
                bmiCategory = 'Overweight';
            } else {
                bmiCategory = 'Obese';
            }


    const resultMessage = `Your BMI is ${bmi}. This is categorized as: ${bmiCategory}.`;
            document.getElementById('result').textContent = resultMessage;
});
