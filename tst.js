let people = [{"name": "Avi" , "age": "20"},{"name": "Ron" , "age": "30"},{"name": "Dana" , "age": "25"}];
//console.log(people);


//a.print names 22 32 years old. 

//people.forEach(x=> {if(x.age >= 22 && x.age <=32){console.log(x.name)}}); 

//people.map(x=> {if(x.age >= 22 && x.age <=32){console.log(x.name)}})

// let a = people.filter(x=> x.age >= 22 && x.age <=32)
// let b = a.map(x=> x.name)
// console.log(b);

// //print names 22 32 years old.

// let c = b.map(x=> x.length)

// console.log(c);
//////////////////////////////////////////////////////////////////////////////////////////////////
//b.function that recieve an array and returns array of the biggest numbers of each inner array.
//from the new array print those who are between  10 - 20 

//filter- only those
//map- for iterate
//reduce - operations inside the array

 let arrays = [[1,6,3,9],[6,12,5,19],[4,11,23,1],[17,2,3,1]];



// let v1 = (arr) => (arr.map(x => Math.max(...x)));

// console.log("result: " + v1(arrays).filter(x => x >=10 && x<=20));



// //console.log(a(arrays));

// // let t = [1,2,3,4];

// // let c = t.reduce((x,y)=> Math.max(x,y));
// // console.log(c);

// //let m = (arr)=> (arr.map(x=> x.reduce((a,b)=> Math.max(a,b))))

// let f = (arr)=> (arr.map(x=> Math.max(...x)));

// //console.log(m(arrays).filter(x=> x>=10 && x<=20));
// console.log(f(arrays).filter(x=> x>=10 && x<=20));


//function pointer

// function sayHello ()
// {
//     console.log("hello");
// }


// function exec_func(f){

//     f();
// }

// exec_func(sayHello);


// setTimeout((arr)=> arr.reduce(),1000)

// //Asynchronic function 
// setTimeout(() => console.log("OK"),1000);
// console.log("END");


//promise object of js that allows me to run code asyncronic


// const prom = new Promise(resolve =>
//     {
//         setTimeout(()=>//not realistic exmp. usually well call here to web services
//         {
//             resolve("OK")
//         }
//         ,1000)
//     })

//     prom.then( data => console.log(data));
//     console.log("END");

    /*
    rule 1 - any async function is a sunction with async function
    rule 2 - any async can return ONLY promise
    */ 

    //

    // function getAsyncData(num){

    //     return new Promise(resolve => //promise its an object that should end and then it will call the function that assigned to him with the data
    //         {
    //             setTimeout( () => resolve(num*2),1000)//after 1 sec resolved is called (resolve hold the func below) and passing the data num*2
    //         })
    // } 


//     //getAsyncData(5) retunrs promise. .then 
    
//     //option1 

//     // function getAsyncData2(){
    
//     //     getAsyncData(5).then(data => console.log(data));// passing the promise the function to the resolve(what inside the then is assigning a function for ther promise- function pononter(assigned to the resolve))
//     // }


//     function getAsyncData2(){
    
//         return new Promise(resolve => {
//             getAsyncData(5).then(data => resolve(data));//returning the dasta with resolve instead of print it.
//         })
    
//     }
    

//     //option2
    // async function getAsyncData3(){ // insted of using then.then.then -> awit await..
    //     let data = await getAsyncData(5);
    //     console.log(data);//insted of creating the promise manually. in this case the promise created for me automatiicaly 
    // }

    
//     //option 1 vers 1 (func2) console the result . option 1 vers 2 RETURNS the data with the resolve obj  
//    // console.log(getAsyncData2(5));
    // console.log(getAsyncData3());// returns a promise
//     console.log(getAsyncData3().then(data => console.log(data))) //return a promise therfore we will assign then to it to use the redolve and assin the console.log function 
//     console.log("end");


//function that recieve the following array [1,2,3,4,5,6] and return the average after 1 second : 

// function arrAvg(arr){

//     return new Promise(resolve =>
//         {
//             setTimeout( () =>{
//                 let avg = arr.reduce((x,y) => x+y) / arr.length;
//                 resolve(avg);
//             },1000)
//         })

// }


// console.log(arrAvg([1,2,3]).then(data => console.log(data)));



// function arrAvg(arr){

//     return new Promise(resolve => {
//         setTimeout(() => {
//             let avg = arr.reduce((x,y) => x+y) / arr.length;
//             resolve(avg); 
//         },1000)
//     })

// }

// console.log(arrAvg([1,2,3,4,5]).then(data => console.log(data)));


/*
1.4 - write a function called funcA that recieved the array of arrays in ex 2 and a promise that returns the total sum after 2 seconds.
      write a function called funcB that call funcA and returns the total sum returned from funcA*2
      call funcB from the main code and print the result
*/


let arrs = [[1,6,3,9],[6,12,5,19],[4,11,23,1],[17,2,3,1]];

function funcA(arrs){

    return new Promise(resolve =>{
        setTimeout(()=>{
            let totalSum = (arrs.map(x => x.reduce((x,y) => x+y))).reduce((x,y) => x+y);
            //let totalSum = 10;
            resolve(totalSum);
        },2000)
    })

}


async function funcB(){
    let res = await funcA(arrs);
    return res*2;
}


console.log(funcB().then(data => console.log(data)));



// function funcA(arrays){

//     return new Promise(resolve => {
//         setTimeout(() =>{
//             //let totalSum = arrays.map(x => x.reduce((x,y) => x+y)).reduce((x,y) => x+y)
//             let totalSum = 10;
//             resolve(totalSum)
//         },2000)
//     })

// }

// // //option1 funcB prints the result
// // function funcB(){
// //     funcA().then(data => console.log(data));
// // }

// //option2 - funcB returns the result
// async function funcB(){
//     let data = await funcA();
//     return data;

// }
// //option1
// //console.log(funcB());
// console.log(funcB().then(data => console.log(data)));
// //option2
// //console.log(funcB());
// console.log("END");

//console.log(arrays.map(x=> x.reduce((x,y) => x+y)).reduce((x,y) => x+y))