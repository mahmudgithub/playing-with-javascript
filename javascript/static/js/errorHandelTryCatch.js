//tryস্টেটমেন্টঃ ***********************************
// //যেখানে এররের সম্ভাবনা আছে, সেটা পুরোটাকে এই tryব্লকের ভিতরে রাখতে হয়। যদি কোড ঠিকঠাক\
// // রান করে তাহলে তো করলোই। কিন্তু যদি কোনো এরর আসে, তাহলে এটা নিজে থেকেই একটা এরর থ্রো করবেঃ
// //fist creat a error
// // console.log.lol('i am error');
// try{
// console.log.lol('i am error');
// }
//catchস্টেটমেন্টঃ***************************************
// // ক্যাচ স্টেটমেন্ট এর কাজ হচ্ছে সেই থ্রো করা এররটাকে ক্যাচ করা। যদি কোনো এরর না হয় তাহলে
// // এই ব্লকের ভিতরের কোড কাজ করবে না।
// //এখন শুধু এই ট্রাই ব্লকের কোড একা রান করবে না, এর সাথে আপনার আরেকটা স্টেটমেন্টও থাকা লাগবে।
// catch{
//     console.log('not work above example');
// }
// //catchব্লকে এরকম এরর প্রিন্ট করার জন্যে নয় বরং আপনি এখানে ইউজারকে সুন্দর করে কিছু লেখা বা ম্যাসেজ দিতে পারেন যে আসলে এভাবে হচ্ছে না অন্যকিছু করতে হবে। 
// //মোট কথা এখানে এররটা হ্যান্ডল করে ইউজারকে ভালো এক্সপেরিয়েন্স দেওয়া যাবে।

//throwস্টেটমেন্টঃ***********************************************
// এই স্টেটমেন্ট দিয়ে আমরা কাস্টম এরর থ্রো করতে পারি। আমাদের কোডে কোনো কন্ডিশনের উপরে ভিত্তি 
//করে আমরা কাস্টম এরর দেখাতে পারিঃ
// const age = 17;
// try {
//    if(age < 18) {
//       throw 'You are too young';
//    } else {
//       console.log('You are adult');
//    }
// } catch(err) {
//    console.log(err);
// }

//finallyস্টেটমেন্টঃ **************************************
// //এই স্টেটমেন্ট এর ভিতরের কোড সবসময়েই রান করবে, এরর হউক বা নাই 
// try {
//     console.log('No error');
//  } catch(err) {
//     console.log(err);
//  } finally {
//     console.log('I will run always');
//  }
 
//এরর অবজেক্টঃ*********************************
// //জাভাস্ক্রিপ্ট এ বিল্ট-ইন এরর অবজেক্টও আছে। আর অবজেক্ট মানে সেটার প্রপার্টিও আছে। 
// //আমরা চাইলে এরকম এরর অবজেক্ট তৈরী করতে পারি Error()কন্সট্রাকটর মেথড থেক।
// //কিন্তু এররকে আরো বাস্তব রূপ দেওয়ার জন্যে এই Error()কন্সট্রাকটর ব্যবহার করে আরো সুন্দর এরর 
// //অবজেক্ট তৈরী করা যাবে।
// //throwতে আমরা একটা কাস্টম এরর থ্রো করেছিলাম। যদিও ঐটা জাস্ট একটা মাত্র টেক্সট ছিলো। কিন্তু 
// //এখন আমরা এই এরর কন্সট্রাক্টর মেথড ব্যবহার করে আরো সুন্দর করে এররের মতো করে এরর থ্রো করতে পারবোঃ
// const ageNew = 17;
// try {
//    if(ageNew < 18) {
//       throw new Error('You are too young');
//    } else {
//       console.log('You are adult');
//    }
// } catch(err) {
//    console.log(err);
// }

//
//simple try catch application , no erro in try block
// try{
// console.log(' i am try block');
// }
// catch(err){  ////it is mandatoty to keep an variable in parenthesis
//     console.log('i am catch block ');

// }

//now create an error in try block
// try{
// x=wwww
// console.log(x);
// }
// catch(err){
// console.log(' i am catch block');
// }

//print error only 
// try{
//     console.log(s);
// }
// catch(err){
//     console.log('i am catch ');
//     console.log(err);
// }
//print error names and message
// try{
//     console.log(d);
// }
// catch(err){
//     console.log(err.name);
//     console.log(err.message);
// }
// //try catch and finally block
// try{
//     console.log(s);
// }
// catch(err){
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }
// finally{
//     console.log('i run must cause i am finally');
// }
// //try catch not handel any program error
// try{
//     console.log('hello';
// }
// catch(err){
//     console.log(err);
//     console.log(err.name);
//     console.log(err.message);
// }

// //try catch filly and throw 
// var num=10;
// try{
// if (num<15){
//     throw 'right anwser'
// }
//     else if(num>5){throw 'false anwser'}
// }
// catch(err){
// console.log(err.message);
// }
// finally{
//     console.log('i am finally blog');
// }
