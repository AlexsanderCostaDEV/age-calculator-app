const currentDate = new Date();

function showDate() {
    const year = document.querySelector('#year-input').value;
    const y = currentDate.getFullYear() - year;
    const month = document.querySelector('#month-input').value;
    const m = ( currentDate.getMonth() + 1 ) - month;
    const day = document.querySelector('#day-input').value;
    const d = currentDate.getDate() - day;

    // console.log(Date())
    let error1 = document.querySelector('.error1');
    let error2 = document.querySelector('.error2');
    let error3 = document.querySelector('.error3');
    let dis1 = document.querySelector('.error1');
    let dis2 = document.querySelector('.error2');
    let dis3 = document.querySelector('.error3');
    let label1 = document.querySelector('#label1');
    let label2 = document.querySelector('#label2');
    let label3 = document.querySelector('#label3');
    let dayInput = document.querySelector('#day-input');
    let monthInput = document.querySelector('#month-input');
    let yearInput = document.querySelector('#year-input');

    if (day === ""){
        error1.style.display = 'block'; 
        dayInput.style.borderColor = 'hsl(0, 100%, 67%)'
        label1.style.color = 'hsl(0, 100%, 67%)';
    } if (month === ""){
        error2.style.display = 'block';
        monthInput.style.borderColor = 'hsl(0, 100%, 67%)'
        label2.style.color = 'hsl(0, 100%, 67%)';
    } if (year === ""){
        error3.style.display = 'block';
        yearInput.style.borderColor = 'hsl(0, 100%, 67%)'
        label3.style.color = 'hsl(0, 100%, 67%)';
    } else if (day < 1 || day > 31){
        dayInput.style.borderColor = 'hsl(0, 100%, 67%)'
        label1.style.color = 'hsl(0, 100%, 67%)';
        dis1.innerHTML = 'Must be a valid day'
        dis1.style.display = 'block';
    } else if (month < 1 || month > 12){
        monthInput.style.borderColor = 'hsl(0, 100%, 67%)'
        label2.style.color = 'hsl(0, 100%, 67%)';
        dis2.innerHTML = 'Must be a valid month'
        dis2.style.display = 'block';
    } else if (year > currentDate.getFullYear()){
        yearInput.style.borderColor = 'hsl(0, 100%, 67%)'
        label3.style.color = 'hsl(0, 100%, 67%)';
        dis3.innerHTML = 'Must be in the past'
        dis3.style.display = 'block';
    } else {
        document.querySelector('#first').innerHTML = Math.abs(y);
        document.querySelector('#second').innerHTML = Math.abs(m);
        document.querySelector('#third').innerHTML = Math.abs(d);
        error1.style.display = 'none';
        error2.style.display = 'none';
        error3.style.display = 'none';
        label1.style.color = 'hsl(0, 1%, 44%)';
        dayInput.style.borderColor = 'hsl(0, 0%, 86%)'
        label2.style.color = 'hsl(0, 1%, 44%)';
        monthInput.style.borderColor = 'hsl(0, 0%, 86%)'
        label3.style.color = 'hsl(0, 1%, 44%)';
        yearInput.style.borderColor = 'hsl(0, 0%, 86%)'
    }
}
