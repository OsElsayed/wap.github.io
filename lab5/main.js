function doThis() {
    //alert('input is 1,2,3,4');
    //doSumMultiply([1,2,3,4]);
    //alert('string "jag testar" after reverse : ' + reverse('jag testar'));
    //alert('longest word in arr["osama","elsayed","tekeisham"] is '+longestWord(['osama','elsayed','tekeisham']));
    //alert('words in arr["osama","elsayed","tekeisham"] length 8  is '+filterLongWords(['osama','elsayed','tekeisham'],8));
}

function maxTwo(first, second) {
    if (first > second)
        return first;
    else
        return second;
}

function maxThree(first, second, third) {

    let max = first;
    if (second > first)
        max = second;

    if (third > max)
        max = third;

    return max;
}

function isVowel(x) {
    let vowels = 'aeuio';
    if (vowels.indexOf(x) === -1)
        return false;
    else
        return true;
}

function doSumMultiply(arr) {
    alert('sum is : ' + sum(arr));
    alert('multiply is : ' + multiply(arr));
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i]
    return sum;
}

function multiply(arr) {
    let multiply = 1;
    for (let i = 0; i < arr.length; i++)
        multiply *= arr[i]
    return multiply;
}

function reverse(s) {
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversed = reversed + s[i];
    }
    return reversed;
}

function longestWord(arr) {
    let max = arr[0];
    for (let i = 1 ; i < arr.length ; i++){
        if (arr[i].length > max.length)
            max = arr[i];
    }
    return max;
}

function filterLongWords(arr, length) {
    let max = [];
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i].length >= length)
            max.push(arr[i]);
    }
    return max;
}
