// Task 1
//var r = '9' + 0;          90, string, concatenation
//var r = 9 + '0';          90, string, concatenation
//var r = 4 + 9;            13, number
//var r = null + 7;         7, number
//var r = '6' + null;       6null, string
//var r = '6' + [];         6, string
//var r = '6' + undefined;  6undefined, string

//Task 2
//`2/3 + 1 + 1/3 == 2        Бинарные JS-операторы работают попарно, слева направо, по математическому правилу приоритета 
умножения и деления над вычитанием и сложением. Но округление при делении на 3 происходить не будет, и потому 2 в сумме не получится. 
Выведет false.`

//Task 3
// var r;
// var t = ++2;
// var u = 1++;
// var w = 2--;
// r = 6 && 0 && 7;         false // тут будет возвращать 0 (останавливаеться на первой неправде и ее же возвращает)
// r = -9 && -8;            true // -8 (последняя правда которую он нашел он и возвращает)
// r = 6 && 0 && 7;         false // 0
// r = "string" && 0;       false // 0 (останавливаеться на первой неправде и ее же возвращает)
// r = [] && {} && 7;       true // 7
// r = [] || 7;             true // []
// r = {} || 0;             true // {}
// r = false || true;       true
// r = "2" > "3";           false
// r = "ab" <= "fg";        true
// r = "2k" <= "8l";        true
// r = "2" != 2;            false
// r = "2" !== 2;           true
// r = t + 2;               5
// r = t + 2--;             4
// r = u - w;               1