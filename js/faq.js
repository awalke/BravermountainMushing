$(document).ready(function (){
  // Get the modal
  var uglyDogsModal = document.getElementById('uglyDogsModal');

  // Get the button that opens the modal
  var uglyDogsBtn = document.getElementById("uglyDogsButton");


  // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  uglyDogsBtn.onclick = function() {
      uglyDogsModal.style.display = "block";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == uglyDogsModal) {
          uglyDogsModal.style.display = "none";
      }
  }
});
