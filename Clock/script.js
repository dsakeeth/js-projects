const hours = document.querySelector(".hour");
const minute = document.querySelector(".Minute");
const second = document.querySelector(".second");
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const date = document.querySelector(".date");
const day = document.querySelector(".day");

// const Hour = now.getHours().toString().padStart(2, '0');
// const Minute = now.getMinutes().toString().padStart(2, '0');
// const Second = now.getSeconds().toString().padStart(2, '0');

//console.log(Hour, Minute, Second);

function updateClock() {
    const now = new Date();
    const Hour = now.getHours().toString().padStart(2, '0');
    const Minute = now.getMinutes().toString().padStart(2, '0');
    const Second = now.getSeconds().toString().padStart(2, '0');
    const Year = now.getFullYear().toString();
    let Month = (now.getMonth() + 1).toString(); // Fix here
    Month = Month.padStart(2, '0'); // Ensure month is always two digits
    const Date1 = now.getDate().toString();
    const Day = now.getDay();
    //console.log(year, month, date, day);
    hours.textContent = Hour;
    minute.textContent = Minute;
    second.textContent = Second;
    year.textContent = Year;
    month.textContent = Month;
    date.textContent = Date1;
    switch (Day) {
        case 1:
            day.textContent = "MON";
            break;
        case 2:
            day.textContent = "TUE";
            break;
        case 3:
            day.textContent = "WED";
            break;
        case 4:
            day.textContent = "THU";
            break;
        case 5:
            day.textContent = "FRI";
            break;
        case 6:
            day.textContent = "SAT";
            break;
        case 7:
            day.textContent = "SUN";
            break;
    }
}

updateClock();
setInterval(updateClock, 1000);