// var happy = 0

// var wish = [6,4,6,2,4,5,6]

// var arr =[] // [6,4]

// for (var i=0;i<7;i++){
//     if(arr[i] > arr[i+1]){
//         arr.pop()
//         happy++;
//     }
//     arr.push(wish[i])
// }

// console.log(happy);

var count = 0

var num = [0,0,1,0,1,0]

var arr =[]

for (var i=0;i<7;i++){
    if(arr[i] ==0){
        count++;
    }if(arr[i] =1){
        arr.pop()
    }
    arr.push(num[i])
}

console.log(num);