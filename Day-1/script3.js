var str = "This is a string";
console.log(str);
var position = str.indexOf('a');//(first occurence of substring)
console.log(position);

//after using var position you can directly write only'position' seconf time.
position = str.lastIndexOf('is');//(last occurence of substring)
console.log(position);


//substring from a string
var sub =str.slice(1,6);//starts from index 0// we can also go in negative number
var sub =str.substring(1,6);// we cannot also go in negative number
var sub =str.substr(1,6);
console.log(sub);


var replaced = str.replace('string','garv');
console.log(str);
console.log(replaced);

console.log(str.toUpperCase())
console.log(str.toLowerCase())


var newString = str.concat(' New String')
console.log(newString)


var strwithWhiteSpaces = "        this    is     my new          content       "
console.log(strwithWhiteSpaces)
console.log(strwithWhiteSpaces.trim()) //removes spaces from both start and end


var char2 = str.charAt(8);//gives output of index in selected sentence.
console.log(char2);

var char3 = str.charCodeAt(2);//not very important.
console.log(char3);
