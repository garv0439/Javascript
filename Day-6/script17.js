console.log("this is date and time");
let now = new Date();
console.log(now);

let dt = new Date(0);
console.log(dt);

let newdate = new Date("2029-09-30");
console.log(newdate);


// let newdt = new Date(year , month , date , hours , minutes , seconds ,milliseconds);
//javascript count month from 0 to 11

let newdt = new Date(2050 , 4 , 6 , 11 , 22 ,30 , 24);
console.log(newdt);

let yr =newdt.getFullYear();
console.log("this is year",yr);

let month =newdt.getMonth();
console.log("this is month",month);

let dote =newdt.getDate();
console.log("this is date",dote);

let hours =newdt.getHours();
console.log("this is hour",hours);

let day =newdt.getDay();
console.log("this is day",day);

let min =newdt.getMinutes();
console.log("this is minute",min);


newdt.setFullYear(2052);
console.log(newdt);

setInterval(updateTime, 1000);

        function updateTime() {
            time.innerHTML = new Date();
        }
