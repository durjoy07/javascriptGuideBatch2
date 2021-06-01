// var re = new RegExp('hi');
// var text = 'everyone, hi how  hi are hi you?';
// var pos = text.search(re);
// console.log(pos);

// var newText = text.replace(re, 'hello');
// console.log(newText);

// var text = '\n everyone, Hi how  hi are hi you? \n everyone, Hi how \n hi are hi you';

// var re = /hi/igm;
// var newText = text.replace(re, 'hello');
// console.log(newText);
 
// test 

// var re = /^[0-9][0-9][0-9]$/i;
// var text = '598';
// var res = re.test(text);
// console.log(res);

// match 
// var re = /hi/ig;
// var text = 'everyone, Hi how  hi are hi you?';
// var res = text.match(re);
// console.log(res);

// var re = /(ab)*/g    // 0 or more ab
// var text = 'everyone, Hi how a  hi are aaab hi aaaaaabbbb ababababab you?';

// var res = text.match(re);
// console.log(res);

// var re1 = /a+/  // 1 or more a

// var re = /(a\*)+/g 
// var text = "ow a*a*  hi are a* aaab a*a*a* hi aaa";
// var res = text.match(re);
// console.log(res);

// var re = /^ab/;   // start with ab
// var res = re.test('abkdj');
// console.log(res);

// var re = /ab$/;   // ends with ab
// var res = re.test('abkdjfab');
// console.log(res);

var re = /a{2,2}/g;
var text = 'jasdiflkj aa kdsjfl aaa kdfj a k aaa kdflkj aaa aaaaa';
var res = text.match(re);
console.log(res);