$(document).ready(function(){
  const oldEnough = confirm("Click OK if you are 18 or older.");
  if(oldEnough){
    $("#old-enough").show();

  }
  else{
    $("#too-young").show();
  }
});