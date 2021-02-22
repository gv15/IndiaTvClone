window.addEventListener('load', ()=>{
  //  document.querySelector('#date').classList.add('font-10px');
    document.querySelector('#date').innerText = giveDateString();
   
})
function giveDateString(){
    let months = {
        0:"JANUARY",
        1:"FEBRUARY",
        2:"MARCH",
        3:"APRIL",
        4:"MAY",
        5:"JUNE",
        6:"JULY",
        7:"AUGUST",
        8:"SEPTEMBER",
        9:"OCTOBER",
        10:"NOVEMBER",
        11:"DECEMBER"
    };
    let days = {
        1:"MONDAY",
        2:"TUESDAY",
        3:"WEDNESDAY",
        4:"THURSDAY",
        5:"FRIDAY",
        6:"SATURDAY",
        0:"SUNDAY"
    }
    let date =  new Date();
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}   