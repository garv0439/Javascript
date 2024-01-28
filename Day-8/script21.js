let jsonobj1={
    name: "garv",
    channel: "youtube",
    friend: "hs",
    food: "pizza"
}
console.log(jsonobj1);

let myjsonstr= JSON.stringify(jsonobj1);//stringify used to convert object into string
console.log(myjsonstr);

myjsonstr = myjsonstr.replace('garv','gk');
console.log(myjsonstr);

newjsonobj = JSON.parse(myjsonstr);//parse used to convert string into object
console.log(newjsonobj);