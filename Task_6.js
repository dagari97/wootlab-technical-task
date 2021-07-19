function arrFunc(arr,n){
    let answer=[];
    for (let i = 0; i < arr.length-2; i++) {
      for (let j = i+1; j < arr.length-1; j++) {
        for (let k = j+1; k < arr.length; k++) {
          if (arr[i]+arr[j]+arr[k]===n) {
            return answer=[arr[i], arr[j], arr[k]];
          } else {
            return -1;
          }
        }
      }
    }
    return answer;
  }
  var n=[1,2,3,4,5,6];
  console.log(arrFunc(n,6));