let i,j,k,l,m,n,o;

for(i= 1; i<=5; i++){

  // lets say i=>1, i=>2
  // we begin to print spaces
  
  for(k=1; k<=(5-i); k++){
    //here k starts at 1 and runs 4 times, runs 3 times
    //it gives 4 spaces, gives 3 spaces
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  //here k finishes giving space
  // we start printin *
  // j runs from 1 to pring *
  // j is equal to 1 i.e. print 1 stars, j print 2 stars
  // 
  for(j =1; j<=i; j++){
   document.writeln("*");
  }

  // here k print the stars but starts from second line.
  // frst it ignores as loop is dependent on i which i 1 *
  //since k starts at 2, k prints 1 star ** *
  for(k=2; k<=i; k++){
    document.writeln("*");
  }
  //loop finishes and new line starts
  document.write("<br>");
  
}
for(n=1; n<=5; n++){
  
  for(p = 2; p<=n; p++){
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  for(m = 1; m<=(5-n); m++){
    document.writeln("*");
  }
  for(o=1; o<=m; o++){
    document.writeln("*");
  }
 
  document.write("</br>");
}


