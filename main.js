// // Exercise 1://

// var firstInput=document.getElementById("firstInput");
// var firstButton=document.getElementById("firstButton");
// var listOfItems=document.getElementById("listOfItems");
// var newArr=[];

//     firstButton.addEventListener("click",function(){
//         if(newArr.indexOf(firstInput.value)>-1){
//             return;
//         }
//         newArr.push(firstInput.value);
//         listOfItems.innerHTML+=(`<li>${firstInput.value}</li>`);
//     })
//     console.log(newArr);

// // Exercise 2://

// var firstNum=document.getElementById("firstNum");
// var secondNum=document.getElementById("secondNum");
// var result=document.getElementById("result");

// var secondButton=document.getElementById("secondButton");
// secondButton.addEventListener("click",function(){
//     result.innerText=Number(firstNum.value)+Number(secondNum.value);
// })




// // Exercise 3://

// var thirdButton = document.getElementById("thirdButton");
// thirdButton.addEventListener("click",function(){
//     thirdButton.style.background="red";
// })

// // Exercise 4://

// var forthButton = document.getElementById("forthButton");
// var resultContainer = document.getElementById("resultContainer");
// var randomNum =Math.floor((Math.random()*100));

// forthButton.addEventListener("click",function(){
//     resultContainer.innerText=`${randomNum}`
// })

// // Exercise 5://

// var containerOfItems = document.getElementById("containerOfimages");

// var items=[
//     {
//         name:"lapetop",
//         img:"https://images.pexels.com/photos/1467435/pexels-photo-1467435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {
//         name:"car",
//         img:"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {   name:"telephone",
//         img:"https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     },
//     {   name:"tablet",
//         img:"https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//     },
// ];

// for(let i=0; i<items.length; i++){
//     containerOfItems.innerHTML+=`<h1>${items[i].name}</h1>`;
//     containerOfItems.innerHTML+=`<img src="${items[i].img}"/>`;
// }

// // Exercise 6://

// var inputContainer = document.getElementById("inputContainer");
// var sixthButton = document.getElementById("sixthButton");
// var newArr = [];

// sixthButton.addEventListener("click", function () {
//   if (inputContainer.value / 1 == inputContainer.value) {
//     newArr.push(inputContainer.value);
//   }
// });
// console.log(newArr);

// // Exercise 7://

// var paragraph=document.getElementById("paragraph7");

// paragraph.addEventListener("click",function(){
//     paragraph.innerHTML=new Date();
// })

// // Exercise 8://

// var paragraph8=document.getElementById("paragraph8");

// paragraph8.addEventListener("click",function(){
//     paragraph8.innerHTML=new Date().getHours();
// });

// // Exercise 9://

// var userAgeContainer = document.getElementById("userAgeContainer");
// var userInput = document.getElementById("inputContainerSeven");
// var userButton = document.getElementById("sevenButton");

// userButton.addEventListener("click", function () {
//   userAgeContainer.innerHTML =
//     Number(new Date().getFullYear()) - userInput.value;
// });

// // Exercise 10://

// var newArrOfNum =[34,54,23,78,66,90];
// var userNum = document.getElementById("tenInput");
// var buttonTen = document.getElementById("tenButton");
// var paraTen= document.getElementById("paraTen")

// buttonTen.addEventListener("click",function(){
//     for(let i=0; i<newArrOfNum.length; i++){
//         if(userNum.value==newArrOfNum[i]){
//             paraTen.innerHTML=userNum.value
//         }
//     }
// })

// // Exercise 11://

// var inputOfUser = document.getElementById("elevenInput");
// var buttonEleven = document.getElementById("buttonEleven");
// var para1 = document.getElementById("paraEleven1");
// var para2 = document.getElementById("paraEleven2");

// buttonEleven.onclick= function(){
//     var userInput = inputOfUser.value;
//     var firstName = userInput.substring(0,userInput.indexOf(" "));
//     var lastName = userInput.substring(userInput.indexOf(" "));
//     para1.innerHTML=firstName;
//     para2.innerHTML=`${lastName}`;
// }

// // Exercise 12://

// inputTwelve1=document.getElementById("inputTwelve1");
// inputTwelve2=document.getElementById("inputTwelve2");
// buttonOfTwelve=document.getElementById("buttonOfTwelve");

// buttonOfTwelve =addEventListener("click",function(){
//     if(inputTwelve1.value.length == inputTwelve2.value.length){
//         console.log("the inputs are equal");
//     }
//     else{
//         console.log("the inputs are not equal");
//     }
// })

// // Exercise 13://

// userName=document.getElementById("firstName13");
// userMail=document.getElementById("mail13");
// userAge=document.getElementById("userAge13");
// button13=document.getElementById("button13");
// divOfarr=document.getElementById("newAraay");

// coustomers = [];

// button13.addEventListener("click",function(){
//     var userDitels={};
//     userDitels.`name:${user.value},mail:${userMail}, age:${userAge}`
//     coustomers.push(userDitels);
//     divOfarr.innerHTML=coustomers.value;
// })