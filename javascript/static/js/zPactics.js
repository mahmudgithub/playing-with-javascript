// // //make a array
// // const arr=['apple','orange','mango','banana'];
// // const arr2=['go','back','do','did'];
// // const arr3=[1,2,3,4,5,6,7,8,9,10];
// // //access above array
// // console.log(arr);
// // //access array by index
// // console.log(arr[2]);
// // //add new element by index number
// // arr[0]='apples'
// // console.log(arr);
// // //add new elments at end
// // arr.push('fig')
// // console.log(arr);
// // //remove last element
// // arr.pop();
// // console.log(arr);
// // //add new element at first
// // arr.unshift('fig');
// // console.log(arr);
// // //remove first elment
// // arr.shift();
// // console.log(arr);
// // //find element 
// // console.log(arr.indexOf('mango'));
// // //join eatch elments to a string
// // console.log(arr.join(','));
// // //join eatch element to string by toString
// // console.log(arr.toString(';'));
// // //merge multiple array to make new array
// // console.log(arr.concat(arr2));
// // //arrange accending form of element
// // console.log(arr.sort());
// // //arrange all elments in desending 
// // console.log(arr.reverse());
// // //numerical accending
// // console.log(arr3.sort((a,b)=>{return a-b}));
// // //numerical deccending
// // console.log(arr3.sort((a,b)=>{return b-a}));
// // //splice method to remove a portion
// // console.log(arr.splice(3));
// // //slice method to copy a part and make new aray to this elements
// // console.log(arr.slice(2));
// // ////////////////////////////////////////////////////////////////////////////////
// // //itarate array elment by map method
// // const lol=arr.map((item)=>{console.log(item);});
// // //above same example by for eatch loop
// // arr.forEach((item)=>{console.log(item);});
// // //filter method for checking a condition 
// // arr3.filter((item)=>{console.log(item%2==0); return item%2==0});
// // //reduce method use to calculate sum of all array elments
// // arr3.reduce((total,item)=>{console.log(total+item);})
// // //reduce with initial value
// // arr3.reduce((total,item)=>{console.log(total+item);},100);
// // //every method to satisfy condition of all elements
// // arr3.every((item)=>{console.log(item>10);})
// // //some method ,for find first element of passing the ciondition
// // arr3.some((item)=>{console.log(item<2);})
// //set timeout variable function
// // const fn=lol=>console.log('hello');
// // setTimeout(fn,3000);

// // //settimeout variable array
// // const arr=[1,2,3,4,5,6];
// // arr.map((item)=>{
// //     setTimeout(()=>{
// //         console.log(item);
// //     },3000);
// // });
// // arr.reduce((total,item)=>{
// //     setTimeout(()=>{
// //         console.log(total+item);
// //     },5000);
// // })

// ////function basic
// function fn(){
//     console.log('hello');
// };fn()
// fn2=()=>console.log('heloo ');fn2()
// //return function
// fn3=(x,y)=>{return x+y;};console.log(fn3(2,2));
// //callback function 
// fn4=(callback)=>{callback()};
// fn5=()=>{console.log('hellosssssssss');}
// fn4(fn5)
// //callback function share data eatch other
// fn6=(callback,names)=>{callback(names)};
// fn7=(s)=>{console.log(`i am ${s}`);}
// fn6(fn7,'mahmud')
// //return one function to anoher function
// fn8=()=>{return fn9=()=>{console.log('cool by')};}
// fn8()();
// //invock function
// (fn10=()=>{console.log('llllllllllllllllllllllllll');})();
// (fn11=()=>{return `love is good then you`});console.log(fn11());
// //invock is private proof
// (fn12=()=>{var one=10;var two=5; return one+two});console.log(fn12());


// ////seTimeout function
// setTimeout(()=>{console.log('i am setTime function');},3000)


// //setTime out function
// const lol=fn=>{setTimeout(()=>{console.log('hekki');},2000)}
// lol()

// //short from of setTimeout function
// const lol=fn=()=>{console.log('hello');}
// setTimeout(lol,2000);


//pactuics asychonus function
// //callback funcrtion
// const one=fn=(callback)=>{callback();};
// const two=fn2=()=>{console.log('hello world');};
// one(two)
// //settime out function with callback 
// const three=fn3=>{setTimeout(()=>{console.log('hwllo mis you');},3000)}
// one(three)

// console.log('hi');


// //map function
// const arr=[1,2,3,4,5];
// arr.map((item)=>{console.log(item);});
// const x=arr.reduce((total,item)=>{return total+item});console.log(x);


// //asychonus function
// var one=fn=()=>{console.log('i an one');}
// var two=fn2=()=>{console.log('i am two');}
// var time=setTimeout(two,5000);
// var three=fn3=()=>{console.log('i am three');}
// var four=fn4=()=>{console.log('i am four');}
// one();
// time
// three();
// four();

// //example of callback function
// var one=fn=(x)=>{console.log(`value of x :${x}`);}
// // one(5)
// // var two=one
// // two(10)
// var two=fn2=(num,callback)=>{
// callback(num);
// }
// two(100,fn)

// const one=fn1=(x,callback)=>{
//     callback(x);
    
// }
// const two=fn2=(y)=>{
//     console.log('i am callback function'+y);

// }
// one(10,two)

// var one=fn=(callback)=>{console.log('i an one');callback()}
// var two=fn2=(callback)=>{setTimeout(()=>{
//     console.log('i am two');
//     callback()
// },5000)}
// var three=fn3=(callback)=>{console.log('i am three');
// callback()}
// var four=fn4=(callback)=>{console.log('i am four');callback()}
// one(()=>{
//     two(()=>{
//         three(()=>{
//             four()
//         })
//     })
// });

// const one=fn1=(callback)=>{console.log(' i am function one'),callback()}
// const two=fn2=(callback)=>{setTimeout(()=>{console.log('i am function two');},3000),callback()}
// const three=fn3=(callback)=>{setTimeout(()=>{console.log('i am function three');},7000),callback()}
// one(()=>{
//     three(()=>{
//         two()
//     })
// })

// const arr = ['a', ['b', 'c', ['d', 'e']]]
// console.log(arr.flatMap(one => one));
// const arrOfStr = ['My name is', 'Zonayed Ahmed', 'Zonayed']
// console.log(arrOfStr.map(oneStr => oneStr.split(' ')));
// console.log(arrOfStr.flatMap(oneStr => oneStr.split(' ')));

// //callback function
// const one=fn1=(callback)=>{
//     console.log('i am function one');
//     callback()
// }
// const two=fn2=(callback)=>{
//     console.log('i am function two');
//     callback()
// }
// const three=fn3=(callback)=>{
//     console.log('i am last function');
//     callback()
// }
// one(()=>{
//     two(()=>{
//         three()
//     })
// })

// // //map function
// const lol=['i am mahmud','i alive is rajshahi']
// lol.map((item)=>{ console.log(item)});
// console.log(lol.flatMap(oneStr => oneStr.split(' ')));
// //create a promise
// const lol=fn=>{return new Promise((resolve,reject)=>{if(fn){resolve('i am true value')}else(reject(new Error('i am false value')))})}
// lol(false)
// .then((res)=>{console.log(res);})
// .catch((err)=>{console.log(err.message);})
// //create single promise only resolve
// const lol=new Promise((resolve)=>{
//     resolve('i am only resolve message')
// })
// lol.then((res)=>{console.log(res);})

// //promise distructuring
// const one=new Promise((resolve,reject)=>{
//     resolve('i am one')
// })

// const two=new Promise((resolve,reject)=>{
//     resolve('i am two')
// })
// Promise.all([one,two])
// .then(([res1,res2])=>console.log(res1,res2));

// //race function in promise ,race work with first running function
// const one=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('i am one')
//     },5000)
// })

// const two=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('i am two')
//     },2000)
// })


// const three=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('i am three')
//     },2000)
// })



// const four=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('i am four')
//     },1000)
// })
// Promise.race([one,two,three,four])
// .then((res)=>{console.log(res);})

// //callback function
// const one=fn1=(callback)=>{
// setTimeout(()=>{
//     callback();
//     console.log('i am fn1');
// },5000)
// }

// const two=fn2=(callback)=>{
//     callback();
//     console.log('i am fn2');
// }

// const three=fn3=(callback)=>{
//    setTimeout(()=>{
//     callback();
//     console.log('i am fn3');
//    },3000)
// }

// const four=fn4=(callback)=>{
//     callback();
//     console.log('i am four');

// }
// one(()=>{
//     two(()=>{
//         three(()=>{})
//     })
    
// })
// four(()=>{})

// //compire callback and promise chain
// // //sequence by callback function
// const one=fn1=(x)=>{x();console.log('i am function one');}
// const two=fn2=(x)=>{x();console.log('i am function two');}
// const three=fn3=(x)=>{x();console.log('i am function three');}
// const four=fn4=(x)=>{x();console.log('i am function four');}
// one(()=>{
//     four(()=>{
//         three(()=>{
//             two(()=>{})
//         })
//     })
// })
// console.log('*************************************');
// //sequence by promise chain
// const ONE=()=> {return new Promise((resolve,reject)=>{resolve('i am function ONE')})};
// const TWO=()=>{return new Promise((resolve,reject)=>{resolve('i am function TWO')})};
// const THREE=()=>{return new Promise((resolve,reject)=>{resolve('i am function THREE')})};
// const FOUR=()=>{return new Promise((resolve,reject)=>{resolve('i am function FOUR')})};
// ONE()
// .then((res)=>{console.log(res);})
// .then(FOUR)
// .then((res)=>{console.log(res);})
// .then(THREE)
// .then((res)=>{console.log(res);})
// .then(TWO)
// .then((res)=>{console.log(res);})


// // //use settimeout dfunction in chin promise
// const ONE=()=> {return new Promise((resolve,reject)=>{setTimeout(()=>{resolve('i am function ONE')},5000)})};
// const TWO=()=>{return new Promise((resolve,reject)=>{setTimeout(() => {resolve('i am function TWO')},5000);})};
// const THREE=()=>{return new Promise((resolve,reject)=>{setTimeout(() => {resolve('i am function THREE')}, 5000);})};
// const FOUR=()=>{return new Promise((resolve,reject)=>{setTimeout(() => {resolve('i am function FOUR')}, 1000);})};
// // ONE()
// // .then((res)=>{console.log(res);})
// // .then(FOUR)
// // .then((res)=>{console.log(res);})
// // .then(THREE)
// // .then((res)=>{console.log(res);})
// // .then(TWO)
// // .then((res)=>{console.log(res);})

// //alternative above .then(()=>{}) function
// //es5 style
// async function lol1(){
//     const x=await TWO();
//     console.log(x);
// }
// lol1()
// //es6 style
// const lol2=async()=>{
//     const a=await ONE();
//     console.log(a);
// }
// lol2()

// //map function
// lol=[1,2,3,4,5]
// lol.map((item)=>{console.log(item);})
// lol
// //create an array
// const arr=[1,2,3,4,5,5,6,7,8,9]
// console.log(arr);
// //access array elments by index number
// console.log(arr[2]);
// //add new elements to array by index
// const one=arr[1]='mahmud'
// console.log(arr);
// //length propetics of array
// const two=(arr.length)
// console.log(two);
// //use length propertics in forloop
// for (let i=0; i<arr.length;i++){
//     console.log(i);
// }
// //pactics push in array
// const three=arr.push('hossain')
// console.log(arr);
// //pop in array
// arr.pop()
// console.log(arr);
// //unshift in array
// arr.unshift('coolfee')
// console.log(arr);
// //shift in array
// arr.shift()
// console.log(arr);
// //indexOf in array
// console.log(arr.indexOf('mahmud'));
// //join in array
// const arr2=['a','b','c','d']
// const four=arr.join(arr2)
// console.log(four);
// //toString method in array
// const five=arr.toString(arr2);
// console.log(five);
// //concate method in array
// const all=arr.concat(arr2)
// console.log(all);
// const arr3=['x','y','z']
// const all2=arr3.concat(all)
// console.log(all2);
// //use sort method in array
// const six=all2.sort()
// console.log(six);
// //use reverse in array
// const seven=all2.reverse()
// console.log(seven);
// //slice in array
// const eight=all2.slice(3,6)
// console.log(eight);
// //splice method in array
// const nine=all2.splice(3,6)
// console.log(nine);

// //all array methods
// const arr=[1,2,3,4,5,6,7,8,9]
// //use map method in array
// const one=arr.map((item,index,array)=>{console.log(index,item,array);})
// //use for on array
// for(let i=0;i<arr.length;i++){console.log(i);}
// //use forEatch method on array
// arr.forEach(item => {
// console.log(item);    
// }); 
// //reduce method on array
// const two=arr.reduce((totall,item,index,array)=>{
//     console.log('.......................');
//     return totall+item
// })
// console.log(two);
// //reduce method with initial value
// const three=arr.reduce((totall,item)=>{
//     return  totall+item

// },10)
// console.log(three);
// //filter method on array
// const four =arr.filter((item,index)=>{
//     return item%2===0;
// })
// console.log(four);
// //every method in array 
// const five=arr.every((item,index)=>{
//     return item>2;
// })
// console.log(five);
// //use find method on array 
// const six=arr.find((item,index)=>{
//     return item>8
// })
// console.log(six);

// //basic function pactics
// function one(){
//     console.log('hello world');
// }
// one()
// const ones=()=>{console.log('hello');}
// ones()
// const two=()=>{return 'hello mahmud'}
// console.log(two());
// const three=(x,y)=>{
//     return x+y
// }
// console.log(three(2,2));
// const four=(s,p=5)=>{return s+p}
// console.log(four(5));

// //invoc function
// (function one(){console.log('hello');})()
// const one=(()=>{console.log('hello mahmud');})()
// const two=(fn=()=>{console.log('i am hossain');})()
// const three=(fn2=(x,y)=>{return x+y})(console.log(fn2(2,2)))


// //callback function
// function one(x,callback){ console.log(x);  callback(x)}
// function two(y){return ('hello'+y);}
// one('mahmud',one)
// const one=(fn1=(x)=>{x()})
// const two=fn2=()=>{console.log('hello');}
// one(two)
// //return a function 
// const one=()=>{
//     return two=()=>{console.log('i am innser function');}
// }
// one()()

// //pactics setTimeout function
// const one=()=>{
//     setTimeout(()=>{
//         console.log('i am setTimeout function ');
//     },5000)
//     console.log('i am normal function ');
// }
// one()

//asychous function pactics
//first example of syconus function
// const one=(x)=>{console.log('i am one');x()}
// const two=(x)=>{console.log('i am two');x()}
// const three=(x)=>{console.log('i am three');x()}
// const four=(x)=>{console.log('i am four');x()}
// one()
// two()
// three()
// four()
//by using setTimeOut function above function can an asychonud behave
// setTimeout(one,6000)
// setTimeout(three,3000)
// setTimeout(two,1000)
// //by using callback function above function can behave as asychonus
// one(()=>{
//     three(()=>
//     two(()=>{
//         four(()=>{})
//     }))
// })


// //pactics promis
// //create a promise and handel its
// const one=fn1=>{return new Promise((resolve,reject)=>{if (fn1){resolve('i am gettind value')}else{reject('i am false value')}})}
// one(true).then((res)=>{console.log(res);})
// .catch((err)=>{console.log(err);})

// //usinng fetch ,handel a data
// const one=fetch('https://jsonplaceholder.typicode.com/users')
// one.then((data)=>{
// console.log(data);
// })
// .catch((err)=>{
//     console.log(err.message);
// })

