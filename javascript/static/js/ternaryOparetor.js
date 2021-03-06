//link: https://js.zonayed.me/daily/post-8 
//কন্ডিশনাল/টার্নারি (Ternary) অপারেটর**************************************
// কন্ডিশনাল বা টার্নারি অপারেটর প্রায় ক্ষেত্রে ifelseস্টেটমেন্ট এর পরবর্তিতে 
// শর্টকাট হিসেবে ব্যবহার করা হয়। শর্টকাটে একলাইনে একটা সিদ্ধান্তের উপর ডিশিসন নিয়ে ফেলা যায়। 
// এই অপারেটর অনেকটা এভাবে কাজ করেঃ
// কন্ডিশন ? কন্ডিশন যদি সত্য হয় তাহলে এটা : কন্ডিশন যদি মিথ্যা হয় তাহলে এটা
//এখানে এই যে স্পেশাল দুইটা জিনিস ?এবং :দেখতেছেন, এগুলোই মূলত এখানে ব্যবহার হয়।
// const num=10
// let ter=num<100 ? true:false
// console.log(ter);


//compire condiional and ternary opertor********************
//using condition
// const age=18;
// if(age<18){console.log('not vote age');}
// else {console.log('voter age');}

//using ternary operetor 
// const age=18
// console.log(age<18? 'not voter':'voter age');


//এটা যেকোনো জায়গায় যেকোনোভাবে ব্যবহার করতে পারবেনঃ***** 
//like as in a function
// style es6
// const fn=(name)=>{console.log(name=='mahmud'? true:false);}
// fn('mahmud')
// fn('hossain')


//রিয়েল লাইফে এটা কিভাবে কাজে লাগতে পারে? হ্যাঁ ধরুন আপনি আপনার ইউজারকে ইমেইল দিতে বলছেন।
// ইমেইল দিয়ে সাবমিট করলে আপনি এই ফাংশনটা রান করবেনঃ
// function successFunc() {
//     console.log('Got your email');
//  }
 //ইমেইলটা আপনি এরকম একটা ভ্যারিয়েবল স্টোর করবেনঃ
//  let email;
 //এখন ইউজার ইমেইল না দিলেই সাবমিট ক্লিক করে দিলে আপনি টার্নারি অপারেটর ইউজ করে খুব সহজেই
 // ধরে ফেলতে পারবেন, আর অন্যকিছু দেখাতে পারবেন।
//  email ? successFunc() : console.log('Please provide your email!');
 //এটা কিভাবে হলো? হ্যাঁ এটা হয়েছে কারণ এখানে emailমিথ্যা falseতাই। 
 //তাহলে দেখি এখানে emailটা কি কারণে মিথ্যা falseভ্যালু দিলোঃ
//  console.log(email);
//  আচ্ছা ইমেইল তাহলে এখানে undefinedহ্যাঁ, ঠিক তাই। কারণ আমাদের ইউজার ইমেইল দেয় নাই। 
//  আর আমরা জানি undefinedমিথ্যা false। গত পর্বে আমরা দেখেছিলাম জাভাস্ক্রিপ্ট এ কিছু থাকলেই সেটা সত্য,
//   শুধুমাত্র নিচের এগুলো ছাড়াঃ
// false(বুলিয়ান false, নিজেই মিথ্যা)
// null
// NaN
// 0
// খালি ("", ''অথবা ````);
// undefined
// আর তাই এখানে emailমিথ্যা।

// এবার যদি ইউজার ইমেইল দেয়ঃ
// email='mahmud@'
//দেওয়ায়র পর সাবমিট করলো, এবার আমরা আবার আবার দেখিঃ
// email ? successFunc() : console.log('Please provide your email!');
// এখন ভাইয়া এখানে ইমেইল, ইমেইল সাবমিট-টাবমিট আসলো কোথা থেকে… হ্যাঁ এখানে এগুলো সব কাল্পনিক 
// হলেও রিয়েল লাইফ প্রোজেক্ট করতে গেলে এরকম সিচুয়েশনেই পড়বেন আর ঠিক এভাবেই টার্নারি অপারেটর ব্যবহার 
// করে সহজেই একলাইনেই কাজ সেরে ফেলতে পারবেন।



//multiple ternary operetor in one line*******************************
// এখন টার্নারি অপারেটর কিন্তু একটা ভিতরেও আরেকটা দিতে পারবেন, যতক্ষন ইচ্ছা দিতে পারবেন রুলস মেইন্টেইন 
// করে। ধরি আমাদের নিচে এরকম একটা অবজেক্ট আছেঃ
// const obj = {
//     name: 'Zonayed Ahmed',
//     age: 21,
//     job: 'Student'
//  }
//  obj.name ? obj.age ? console.log(' name and age') : obj.job ? console.log('job') : console.log('not job') : console.log('I does not');



//more example of ternary operetors
// // ternary operator pactics*******************************
// // যদি কন্ডিশন সত্য হয় ? তাইলে ভ্যালু এটা : নাইলে ভ্যালু এইটা
// condition ? exprIfTrue : exprIfFalse
// const a=100;
// const b=50;

// const c=a>b? true : false
// console.log(c);
// document.getElementById('test').innerHTML=(c)

// const isname= true;

// const s= isname ? 'yes' : 'no'
// console.log(s);
// document.getElementById('test').innerHTML=(s)

// let x=10;
// let y=20;
// if (x==y){console.log('false');}
// else{console.log('true');}

// let x='mahmud';
// let y='mahmud';
// let z=(x==y) ? 'is equal' : 'not equal'
// console.log(z);

// javascripts conditonal 
// if,else,if-else**************************************
// let x=100;
// if(5<100){console.log(('x is bigger then 5'));}
// else if(5>100){console.log(false);}
// else{console.log('both are equal');}

// using condition make voter id permission calculator

// let votage=18;
// if(votage<18){document.getElementById('test').innerHTML='no allow to vote '}
// else if(votage>=18){document.getElementById('test').innerHTML='allow to vote'}
// else{document.getElementById('test').innerHTML='missmatch id'}

// let lol=()=>{
//     let x=10;
//     let y=20;
//     if (x<y){console.log('y is bigger then x');}
//     else if (x>y){console.log('x is bigger then y');}
//     else{console.log('both are equal')}
// }
// lol()


// today 9.2.2021 pactics 

// const x=1100;
// if (x<100){document.getElementById('test').innerHTML='right '}
// else{document.getElementById('test').innerHTML=' wrong'}


// const x='mahmud';
// const y='Mahmud';

// const result=(x==y) ? true : false 
// document.getElementById('test').innerHTML=(result)

// // short circuit operetors **********************
// const a=100;
// const b=1;
// const result=(a==b) && false
// document.getElementById('test').innerHTML=(result)