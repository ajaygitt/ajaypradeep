function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
    var x = document.forms["myForm"]["lname"].value;
  if (x == "") {
    alert("Last name must be filled out");
    return false;
  

  }
}



    
           $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
     