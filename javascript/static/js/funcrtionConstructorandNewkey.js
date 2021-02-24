//link: https://js.zonayed.me/advance/post-3 
//ফাংশন কন্সট্রাকটর(Constructor) এবং ‘new’ কীওয়ার্ড*********************************
// //ফাংশন কন্সট্রাকটরও সেইম ভাবে ক্লাসের মতো অবজেক্ট এর ব্লু-প্রিন্ট তৈরী করতে ইউজ করা হয়।
// //আমাদের একই রকম দেখতে অনেকগুলো অবজেক্ট থাকতে পারে এরকমঃ
// var samir = { 
//     name: 'Samir Hossain',
//     age: 22,
//     job: 'Student'
//  }
//  var kinan = { 
//     name: 'Kinan Hossain',
//     age: 29,
//     job: 'Businessman'
//  }
//  var jamil = { 
//     name: 'Jemil Hossain',
//     age: 18,
//     job: 'Driver'
//  }
//  var zawad = { 
//     name: 'Zawad Ahmed',
//     age: 1,
//     job: 'Child'
//  }
//  var zonayed = { 
//     name: 'Zonayed Ahmed',
//     age: 21,
//     job: 'Developer'
//  }
//  console.log(zawad.name);
//  //এখন প্রত্যেকটা অবজেক্ট আমাদের আলাদা আলাদা করে লিখতে হচ্ছে এখানে, কিন্তু এটা মনে হচ্ছে একইরকম 
// //প্যাটার্ন আমরা বারবার রিপিট করতেছি। এমন কিছু যদি থাকতো যেটা ইউজ করে আমরা একটা প্যাটার্ন বানাবো, 
// //তারপরে জাস্ট সেটাকে আমাদের ভ্যালুগুলো দিয়ে করলেই নতুন অবজেক্ট তৈরী হয়ে যেতো, তাইলে কেমন হতো? 
// //হ্যাঁ সেজন্যেই ফাংশন কন্সট্রাকটর ইউজ করা হয়। ফাংশন কন্সট্রাকটর ইউজ করে আমরা একটা ব্লু-প্রিন্ট তৈরী করি,
// // পরে ঐটা থেকে সহজেই নতুন newঅবজেক্ট তৈরী করতে পারি। উপরের সেইম কাজটাই ফাংশন কন্সট্রাকটর দিয়ে 
// //করবো। তার আগে ব্লু-প্রিন্ট তৈরী করে নিবোঃ
// var Person=function(name,age,job){
//     this.name=name;
//     this.age=age;
//     this.job=job;
// }
// //এখানে খেয়াল করবেন Personএর Pবড় হাতের, কারন এটা একটা কনভেনশন। 
// // জাভস্ক্রিপ্ট কমিউনিটিতে ফাংশন কন্সট্রাকটর তৈরীর ক্ষেত্রে এটার নামকরনে প্রথম অক্ষর বড় 
// // হাতের দেওয়ার হয় যাতে সহজেই ধরা যায় এটা একটা ফাংশন কন্সট্রাকটর। যাই হউক উপরে
// //  this.name = nameএই লাইনটা একটু কনফিউজিং, আর্গুমেন্টস এর ভ্যারিয়েবল ও ভিতরের (সম্ভাব্য)অবজেক্ট এর 
// //  ভ্যারিয়েবল সেইম নামেই দেওয়া হয়েছে। এটাও একটা কনভেনশন, তাই আমি এভাবে দেখিয়েছি। কিন্তু এটাও সম্পূর্ণ 
// //  ভ্যালিডঃ
// var Person=function(name,age,job){
//     this.x=name;
//     this.y=age;
//     this.z=job;
// }
// //পরে আরেকটা জিনিস কনফিউজিং এখানে। সেটা হচ্ছে thisকীওয়ার্ড। ফাংশন এর ভিতরে thisকীওয়ার্ড,
// // তার মানে তো আমরা এই ভ্যালুগুলো গ্লোবাল অবজেক্ট এ অ্যাড করতে যাচ্ছি মনে হয়…? কিন্তু না! 
// //মনে করুন thisএর উপরে লেখায় আমার চারটি রুলস এর কথা। এখানে ৪ নাম্বার রুলসটা ছিলো newকীওয়ার্ড রুলস।
// // আর হ্যাঁ আমরাও এই ফাংশন কন্সট্রাকটর থেকে newকীওয়ার্ড দিয়ে নতুন অবজেক্ট তৈরী করবো। 
// //আর তাই এখানে thisদিয়েছি। আমরা প্রথমে একটা অবজেক্ট তৈরী করিঃ
// var mahmud = new Person('Samir Hossain', 22, 'Student');
// console.log(mahmud.x);
// //example
// function fn (name,city){ 
//     this.name=name; 
//     this.city=city;
// }
// var lol=new fn('mamud','raj')
// console.log(lol);
// console.log(lol.name);
////আর এভাবেই আমরা নতুন নতুন যত ইচ্ছা অবজেক্ট তৈরী করতে পারবোঃ
// var one=new fn('hossain','dha')
// var two=new fn('lamyaa','pab')
// var three=new fn('nowsin','pabna')
// console.log(one.city);
// console.log(two.name);
// console.log(three.name);
////এটাই ফাংশন কন্সট্রাকটরের কাজ মূলত।



//আপনি চাইলে সেইমভাবে ফাংশন কন্সট্রাকটরে মেথডও অ্যাড করতে পারবেন। ************************
// var lol=function (name,city,roll){
//     this.name=name;
//     this.city=city;
//     this.roll=roll;
//     this.age=function(){console.log(this.name + this.city +this.roll);}
// }
// var one=new lol('mahmud','rjshhai',12345);
// console.log(one.age());
// //এখন ভ্যারিয়েবলগুলোকে তো আগের মতোই অ্যাক্সেস করতে পারবেন, সেই সাথে মেথডটাকেও অ্যাক্সেস করতে পারবেনঃ





//আরেকটা মেথড ঢুকাতে চাই এটার ভিতরে।*******************************
// //এখন আমরা যদি আমাদের এই ফাংশন কন্সট্রাকটর এ নতুন কোনো মেথড ঢুকাতে চাই তাহলে এভাবে সহজেই করতে পারবোঃ
// const person=function(names,age,city){
//     this.names=names;
//     this.city=city;
//     this.age=age;
// }
// //এই কন্সট্রাকটরটা ডিফাইন করে ফেলছি অলরেডি। কিন্তু এখন জন্ম তারিখ() বের করার জন্যে আরেকটা মেথড 
// //ঢুকাতে চাই এটার ভিতরে।আবার নতুন করে ডিফাইন করবো?? না! অবশ্যই না। এখান আমরা prototypeইউজ
// // করে নতুন মেথডটাকে আগের থাকা Person এ ঢুকাতে পারবো এভাবেঃ
// //pototype method:::::::::::::::::::::::::
// person.prototype.board=function(){
//     console.log(this.names );
//     console.log(this.age);
//     console.log(this.city);
    
// }
// var sos=new person('mahmdu',26,'raj');
// sos.board();
// console.log(sos);
// console.log(sos.board());
// console.log(sos.age);
