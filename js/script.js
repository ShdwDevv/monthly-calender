const headerelement = document.querySelector('.calender h3');
const datesElement = document.querySelector('.dates');
const navs = document.querySelectorAll("#prev,#next"); 
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalender(){
    const start = new Date(year,month,1).getDay();
    const endDate = new Date(year,month+1,0).getDate();
    const end = new Date(year,month,endDate).getDay();
    const endDatePrev = new Date(year,month,0).getDate();
    console.log(end);
    // console.log(start);
    let datesHTML = '';
    for(let i = start;i > 0;i--){
        datesHTML += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }
    for(let i = 1;i <= endDate;i++){
        let className = (
            i === date.getDate() && month === date.getMonth() && year === date.getFullYear()
        ) ? `class = "today"` : `No`;
        console.log(className);
        datesHTML += `<li ${className}>${i}</li>`;
    }
    for(let i = end;i < 6;i++){
        datesHTML += `<li class="inactive">${i - end + 1}</li>`;
    }
    datesElement.innerHTML = datesHTML;
    headerelement.textContent = `${months[month]} ${year}`
}
renderCalender();

navs.forEach((nav)=>{
    nav.addEventListener('click', (e)=>{
        const btnId = e.target.id;
        if(btnId === 'prev' &&  month === 0){
            year--;
            month = 11;
        }else if(btnId === 'next' && month === 11){
            year++;
            month = 0;
        }else{
            month = (btnId === 'next') ? month + 1 : month - 1;
        }
        renderCalender();
    });
});