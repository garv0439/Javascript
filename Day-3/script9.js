//alert
//aleart --doesnot return anything and its undefined value
// alert("Site Contains Cookies.");


//prompt
// let name = prompt("What is your name??","Guest");//Guest is a default value
// console.log(name); //check console


//confirm
// let deletePost = confirm("do you really want to delete the post?");
// console.log(deletePost);//check console if you press ok output in console will be true and if press cancel returns false    


let deletePost = confirm("do you really want to delete the post?");

if(deletePost){//check console after selection
    console.log("your post has beem deleted");
}
else{
    console.log("your has not been deleted")
}