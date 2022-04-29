function rot13(str) {
  let myArr = [];
 


  for(let i = 0 ; i< str.length; i++){
    //console.log(str.charCodeAt(i));
    let a = str.charCodeAt(i);
    if(a>=65 && a < 91){
    for(let b = 13; b>0; b--){
        if(a === 90){
          a = 65;
          continue;
        }
        a = a+1;
      }
    }
    myArr.push(a);
  }

  let str1 = "";
  
  for(let i = 0 ; i < str.length; i++){
  let character = String.fromCharCode(myArr[i]);
  str1 = str1.concat(character);

  }




  console.log(myArr + "\n");
  console.log(str1);

  return str1;
}


rot13("SERR PBQR PNZC");