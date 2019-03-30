const reStrKeepSign = (s) => {
    let i = 0;
    let j = s.length - 1;
    let a = s.split('');
    while(i <= j) {
      if (a[i].search(/[a-zA-Z]/) === 0) {   //alpha
          if (a[j].search(/[a-zA-Z]/) === 0) {  //alpha
              [a[i], a[j]] = [a[j], a[i]];
              i++;
              j--;
          } else if (a[j].search(/[1231231]/) === -1) {
              j--;
          }
      } else if (a[i].search(/[a-zA-Z]/) === -1) {
          i++;
      }
    }
    console.log(a);
    console.log(b)
    return a.join('');

}
console.log(reStrKeepSign('Abc:def@gh$ijk')); //  output 'kji:hgf@ed$cbA'