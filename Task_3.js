function primeArr(arr) {
    var prime=[];
    arr.forEach((num, index) => {
      if (arr[index]%2 !==0 && arr[index]%3 !==0) {
        prime.push(arr[index]);
      }     
    });
   
    return prime;
  }
  var n=[1,2,3,4,5,6,7,8,9];
  console.log(primeArr(n));
  