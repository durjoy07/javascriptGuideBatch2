// Boolean to Number 

// var res = true + true + '4';
// console.log(res); // '24'

// var result = 4 + true;
// console.log(result);  // 5

// var result = 4 + false;
// console.log(result);  // 4

// var result = false + false;
// console.log(result);  // 0

// var result = true * true;
// console.log(result);  // 1

// null to number 

// var res = 4 + null;
// console.log(typeof res);  // 4

// var res = '5' - undefined;
// console.log(res);  // NaN 

//====================================================
//============== EXPLICIT TYPE CONVERSION ============
//====================================================

// var res = Number('126');
// console.log(res); // 126

// var res = Number(true);
// console.log(res); // 1

// var res = Number(NaN);
// console.log(res); // NaN

// var num = "12";
// var res = parseInt(45.41);
// console.log(res);

// others type to String 
// var num = 12;
// var res = String(num)
// console.log( res);

// var res = 10 + Number('10') + Number(String('10')) + 3;
// console.log(res);

// var res = true + false + false * String(true);
// console.log(res);

//=====================================
// others type to Boolean 

// var res = Boolean(0) 
// console.log(res);  // false

// var res = Boolean(0)   // 0, '', undefined, null, NaN 
// console.log(res);  // false

// var res = Boolean('any value')   // any digit without 0, string
// console.log(res);  // true



// var res = +'a'
// console.log(res);

// var res = 'b' + 'a' + +'a' + 'a'; // 'baNaNa'
// console.log(res);

// var res = + - / *   ++ --  **   %  

// var res = 2 ** 3 // 2^3
// console.log(res);

            // var a = true + false + Boolean(null) + Boolean('null');
            // console.log(a);