// {   //promise basics
//     let p=new Promise((succ,fail) =>{
//         succ("i am successed")

//         fail("i am failure")
//     })

//     p.then(console.log)
//     p.catch(console.log)
// }


// {   //callback function in promise
//     let p=new Promise((succ,fail) =>{
//         succ()
//         fail()
//     })

//     p.then(runsuccess)
//     p.catch(runFailure)

//     function runsuccess(){
//         console.log("i am successed")       
//     }
    
//     function runFailure(){
//         console.log("i am failure")       
//     }
// }

// {   //promise settimeout
//     function a(){
//         return new Promise((a,b) =>{
//             setTimeout(() =>{
//                 a("timeout")
//                 b("sad")
//             },5000)
//         })
//     }

//     a().then(console.log)
//     a().catch(console.log)
// }

// {   //EXAMPLE = 4
//     function a(){
//         return new Promise((d,e) =>{
//             setTimeout(() =>{
//                 d("1") 
//             },2000)
//         })
//     }
    
//     function b(){
//         return new Promise((f,g) =>{
//             setTimeout(() =>{
//                 g("2")
//             },3000)
//         })
//     }

//     function c(){
//         return new Promise((h,i) =>{
//             setTimeout(() =>{
//                 h("3")
//             },1000)
//         })
//     }

//     a().then((x) =>{
//         console.log(x)
//         return b().then((y) => {
//             console.log(y)
//             return c().then(console.log)
//         })
//     })
//     .catch(console.log)
// }


// {   //EXAMPLE = 5
//     function a(){
//         return new Promise((d,e) =>{
//             setTimeout(() =>{
//                 d("1") 
//             },2000)
//         })
//     }
    
//     function b(val){
//         return new Promise((f,g) =>{
//             setTimeout(() =>{
//                 f("2",val)
//             },3000)
//         })
//     }

//     function c(valu){
//         return new Promise((h,i) =>{
//             setTimeout(() =>{
//                 h("3",valu)
//             },1000)
//         })
//     }

//     a().then((x) =>{

//         console.log(x)
    
//         return  b(x).then((y,w) => {

//             console.log(y,w)

//         return c(y).then(console.log)
//         })
//     })

//     .catch(console.log)

// }


// {  // EXAMPLE = 6
//         function a(){
//             return new Promise((d,e) =>{ 
//             d("1") 
//             })
//         }
    
//         function b(){
//             return new Promise((f,g) =>{
//             g("2")
//             })
//         }

//         function c(){
//             return new Promise((h,i) =>{
//                     h("3")
//             })
//         }

//         Promise.all([a(),b(),c()])
//         .then(console.log)
//         .catch(console.log)
// }

// {  // EXAMPLE = 7
//     function a(){
//         return new Promise((d,e) =>{ 
//     d("1") 
//         })
//     }

//     function b(){
//         return new Promise((f,g) =>{
//         g("2")
//         })
//     }

//     function c(){
//         return new Promise((h,i) =>{
//             h("3")
//         })
//     }

//     async function i(){
//         try{
//             let d=await c()
//             console.log(d)
            
//             let e=await b()
//             console.log(e)
            
//             let f=await a()
//             console.log(f)
//         }
//         catch{
//             console.log("error")
//         }
//     }

//     i()//function calling
// }

{
    //right angled triangle
    let a=5
    var sum=""
    console.log("right angled triangle")
    for(i=1;i<=a;i++){
        for(j=1;j<=i;j++){
            sum+=`${j} `
        }
        console.log(sum)
        sum=""
    }
}

{
    //right angled triangle
    let a=5
    var sum=""
    console.log("right angled triangle reverse")
    for(i=a;a>0;a--){
        for(j=1;j<=a;j++){
            sum+=`${j} `
        }
        console.log(sum)
        sum=""
    }
}

{
    //left angled triangle
    let a=5
    var sum=""
    var sumOne=""
    var res=0
    console.log("left angled triangle")
    for(i=a;i>0;i--){
        res++
        for(j=1;j<i;j++){
            sum+=" "
        }
        for(k=1;k<=res;k++){
            sumOne+=k
        }
        console.log(sum+sumOne)
    sumOne=""
    sum=""
    }
}