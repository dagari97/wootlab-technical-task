function passwordValidator(password) {
    const pattern=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (typeof password=== 'string') {
      if(/\d/.test(password)){
        if (pattern.test(password)) {
          return 3;
        } else {  
        return 2;
        }
      } else{
        return 0; 
      }
    } 
    else if(typeof password==='number') {
      return 1;
    }
  }
 
  function options(num){
    switch (num) {
      case 0:
     return 'very weak'
     case 1:
     return 'weak'
     case 2:
     return 'strong'
     case 3:
     return 'very strong'
      default:
        break;
    }
  }
 console.log(options(passwordValidator('kas3@')))
  