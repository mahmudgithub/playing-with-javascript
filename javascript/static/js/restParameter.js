// today 10.2.2021 
// // rest operetor pactics **********************
// //rest operetor may be accept more parameter value by one paramete as a array
// let one=(first,second,...more)=>{
//     console.log(first);
//     console.log(second);
//     console.log(more);
// }
// one('mahmud','hossain',1,2,3,4,5,6)
// const names=(...names)=>{
//     console.log(names);  //this genaral way to show output 
//     console.log(...names)  //this is spred operetor way to show output 
// }
// names('mahmud','hossain','nannau')

// const lol=(a,b, ...more)=>{
//     console.log(a ,b);
//     console.log(more);
//     console.log(...more);
// }
// lol('mahmud','hossain',1,3,4,5,5,6,7)

// const lol=(...a)=>{
//     console.log(a);
// }
// lol(1,2,3,4,5,6)


//https://js.zonayed.me/es6/post-8 
//রেস্ট(Rest) প্যারামিটার*********************************
// //এর সাহায্যে আন্ডিফাইন্ড অ্যামাউন্ট প্যারামিটার পাস করা যায় একটা ফাংশনের ভিতর দিয়ে। 
// //আমরা যখন একটা ফাংশন প্যারামিটারসহ ডিফাইন করি তখন যদি সেখানে কয়টা আর্গুমেন্ট পাস করা হতে পারে 
// //সেটা অজানা থাকে, সে সিচুয়েশনে আমরা এই রেস্ট প্যারামিটার ইউজ করি বা ইএস৫ এর argumentsঅবজেক্ট
// // ইউজ করি। জাভাস্ক্রিপ্ট ইএস৫ এর এই argumentsঅবজেক্ট মূলত সেইম কাজই করতো, কিন্তু ইএস৬ এর 
// //এই রেস্ট প্যারামিটার একটু বেশীই স্মার্ট। রেস্ট প্যারামিটারে সেইম স্প্রেড অপারেটরের মতোই …এই তিনটা ডট 
// //ইউজ করা হয়। আর তাই এই তিনটা ডটের প্লেস দেখে আপনাকে বুঝতে হবে কখন এগুলো রেস্ট প্যারামিটারের
// // জন্যে ইউজ করা হচ্ছে আর কখন স্প্রেড অপারেটর হিসাবে ইউজ করা হচ্ছে।
// //আগের argumentsঅবজেক্ট এর মতো হলেও রেস্ট প্যারামিটার একটু অন্যরকম। জাভাস্ক্রিপ্ট এর ইএস৬ 
// //এ নতুন অ্যারো ফাংশন এসেছে, অ্যারো ফাংশনে এই argumentঅবজেক্ট কাজ করবে না। আর তাই আপনি
// // যখন অ্যারো ফাংশন ইউজ করতে যাবেন তখন আপনাকে এই ক্ষেত্রে রেস্ট প্যারামিটার ইউজ করতে হবে।
// // আর তাছাড়া রেস্ট প্যারামিটার argumentsঅবজেক্ট থেকে অনেকটাই ফ্লেস্কিবল।
// function arguments() {
//     for(var i = 0; i < arguments.length; i++) {
//        console.log('Argument passed: ' + arguments[i]);
//     }
//  }
// arguments('Bangladesh', 'India', 'Sri Lanka')
// //এখন যতটাই আর্গুমেন্ট পাস করবেন এগুলো লুপ করে প্রিন্ট করবেঃ
// //কিন্তু সেইম জিনিস অ্যারো ফাংশনের ক্ষেত্রে কাজ করবে নাঃ
// const argumentsArr = () => {
//     for(var i = 0; i < arguments.length; i++) {
//        console.log('Argument passed: ' + arguments[i]);
//     }
//  }
//  arguments('Bangladesh', 'India', 'Sri Lanka');
//  //এরর আসবেঃ



//  //সেইমভাবে এই argumentsঅবজেক্ট ঠিক অ্যারে না হওয়ায় এখানে আপনি
//  // চাইলে forEach, map, filter, reduceবা এরকম বাকী যত মেথড আছে সেগুলো কাজ করাতে পারবেন নাঃ
//  function argumentsMeth() {
//     arguments.map(function(oneArgs) {
//        console.log('Argument Passed: ' + oneArgs);
//     })
//  }
//  argumentsMeth('Bangladesh', 'India', 'Sri Lanka');
//  //এখন এই ফাংশনকে কল করলে এরর আসবেঃ
////কারণ এই argumentsঅবজেক্ট এর এই ধরনের কোনো মেথড নেই। তাই কাজ করছে না।
//// এখন আমরা চাইলে একটু ট্রিক্স করে এই মেথডগুলো Arrayথেকে ইনহেরিট করে এনে কাজে লাগাতে পারিঃ


////আসুন দেখি রেস্ট প্যারামিটার কিভাবে কাজ করে। আগের সেইম একটা প্রোগ্রামই রেস্ট প্যারামিটার দিয়ে করিঃ
// function arguments(...anyName) {
//     for(var i = 0; i < anyName.length; i++) {
//        console.log(anyName[i]);
//     }
//  }
//  arguments('Bangladesh', 'India', 'Sri Lanka')
//  //প্রথমেই চোখে যেটা পড়ার কথা, সেই তিনটা ডট। এগুলোই রেস্ট প্যারামিটারে ইউজ করা হয়।
//  // আর দ্বিতীয় যে জিনিসটা চোখে পড়বে সেটা হচ্ছে আমরা যেকোনো নাম দিয়ে আমাদের মনমতো আর্গুমেন্ট 
//  //এর নাম দিতে পারবো। এবং সেই সাথে এটা অ্যারো ফাংশনের সাথেও একদম পার্ফেক্টলি কাজ করবেঃ


// //সেইমভাবে আপনি চাইলে forEach, map, filter, reduceবা এরকম বাকী যত মেথড আছে সেগুলো কাজ করাতে পারবেনঃ
// const arguments = (...anyName) => {
//     anyName.map(oneArgs => console.log('Argument Passed: ' + oneArgs))
//  }
//  arguments('Bangladesh', 'India', 'Sri Lanka')



// //তাছাড়া এই রেস্ট প্যারামিটারের আরো একটা বড় সুবিধা আছে। সেটা হচ্ছে আপনার যদি কয়েকটা প্যারামিটার 
// // আগে থেকেই জানা থাকে তাহলে সেগুলো ডিফাইন করে দিতে পারবেন, তারপর বাকিগুলো না জানা থাকলে বা 
// // আন্ডিফাইন্ড অ্যামাউন্টের প্যারামিটার হলে তখন সে জায়গায় রেস্ট প্যারামিটার ইউজ করতে পারবেন
// const restExtra = (name, age, ...others) => {
//     console.log(`My name is ${name} and I am ${age} years old!`);
//     others.map(other => console.log(`Argument Passed: ${other}`));
//  }
//  restExtra('Zonayed Ahmed', 21, 'JavaScript', 'Chrome', 'Web Developer', 'Front End Engineer')
