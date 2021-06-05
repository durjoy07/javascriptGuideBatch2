// var re = /\+?[0-9]+/g;
// // var text = '55645hello all how +67878ello are +7787pello you?';
// var text = 'ab4jhd 55 kdf 8 idi 70fdhu 6 sdfjh 12ddd';
// var res = text.match(re);
// console.log(res);

//var re = /\d/   // [0-9] same as \d
// [a-z]  same as \D
// [a-zA-Z0-9]   same as \w
// opsite of [a-zA-Z0-9]  -> \W

// var re = /\w+/g;
//  var text = 'ab4jhd @@ 55 kdf * + 8 idi 70fdhu &&& 6 sdfjh 12ddd'
//  var res = text.match(re);
//  console.log(res);


// var re = /\W+/g;
//  var text = 'ab4jhd @@ 55 kdf * + 8 idi 70fdhu &&& 6 sdfjh 12ddd'
//  var res = text.match(re);
//  console.log(res);

// var re = /\s/g;
//  var text = 'ab4jhd @@ 55 kdf * + 8 idi 70fdhu &&& 6 sdfjh 12ddd'
//  var res = text.match(re);
//  console.log(res.length + 1);


// var title = 'Realme$ Earp*one With Mic Ear Buds 2';
// var re = /\W/g; 
// var slug = title.toLocaleLowerCase().replace(re, '-');
// console.log(slug);


// var text = "5.25 djfidu -3.4 ahdfgy 88.21 ujsd +54.544 fuiy dfh -65.001";
// var re = /[+|-]?[\d]+[.][\d]+/g;
// var res = text.match(re);
// console.log(res);


var re = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

var phone = '01855557105';

var res = re.test(phone);
if(res) {
    console.log('Your phone number is valid');
}
else console.log('Not valid');



