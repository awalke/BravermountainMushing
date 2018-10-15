$(document).ready(function (){
  // Get the modal
  var flameModal = document.getElementById('flameModal');
  var pepeModal = document.getElementById('pepeModal');
  var jengaModal = document.getElementById('jengaModal');
  var grinchModal = document.getElementById('grinchModal');
  var biggieModal = document.getElementById('biggieModal');
  var willowModal = document.getElementById('willowModal');
  var gloryModal = document.getElementById('gloryModal');
  var anyaModal = document.getElementById('anyaModal');
  var hariModal = document.getElementById('hariModal');
  var refriedModal = document.getElementById('refriedModal');
  var jeefModal = document.getElementById('jeefModal');
  var wixonModal = document.getElementById('wixonModal');
  var colbertModal = document.getElementById('colbertModal');
  var xanderModal = document.getElementById('xanderModal');
  var blowholeModal = document.getElementById('blowholeModal');

  // Get the button that opens the modal
  var flameBtn = document.getElementById("flameButton");
  var pepeBtn = document.getElementById("pepeButton");
  var jengaBtn = document.getElementById("jengaButton");
  var grinchBtn = document.getElementById("grinchButton");
  var biggieBtn = document.getElementById("biggieButton");
  var willowBtn = document.getElementById("willowButton");
  var gloryBtn = document.getElementById("gloryButton");
  var anyaBtn = document.getElementById("anyaButton");
  var hariBtn = document.getElementById("hariButton");
  var refriedBtn = document.getElementById("refriedButton");
  var jeefBtn = document.getElementById("jeefButton");
  var wixonBtn = document.getElementById("wixonButton");
  var colbertBtn = document.getElementById("colbertButton");
  var xanderBtn = document.getElementById("xanderButton");
  var blowholeBtn = document.getElementById("blowholeButton");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  flameBtn.onclick = function() {
      flameModal.style.display = "block";
  }
  pepeBtn.onclick = function() {
      pepeModal.style.display = "block";
  }
  jengaBtn.onclick = function() {
      jengaModal.style.display = "block";
  }
  grinchBtn.onclick = function() {
      grinchModal.style.display = "block";
  }
  biggieBtn.onclick = function() {
      biggieModal.style.display = "block";
  }
  willowBtn.onclick = function() {
      willowModal.style.display = "block";
  }
  gloryBtn.onclick = function() {
      gloryModal.style.display = "block";
  }
  anyaBtn.onclick = function() {
      anyaModal.style.display = "block";
  }
  hariBtn.onclick = function() {
      hariModal.style.display = "block";
  }
  refriedBtn.onclick = function() {
      refriedModal.style.display = "block";
  }
  jeefBtn.onclick = function() {
      jeefModal.style.display = "block";
  }
  wixonBtn.onclick = function() {
      wixonModal.style.display = "block";
  }
  colbertBtn.onclick = function() {
      colbertModal.style.display = "block";
  }
  xanderBtn.onclick = function() {
      xanderModal.style.display = "block";
  }
  blowholeBtn.onclick = function() {
      blowholeModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //     modal.style.display = "none";
  // }
  // span.onclick = function() {
  //     oaModal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == jengaModal) {
          jengaModal.style.display = "none";
      } else if (event.target == blowholeModal) {
        blowholeModal.style.display = "none";
      } else if (event.target == flameModal) {
        flameModal.style.display = "none";
      } else if (event.target == pepeModal) {
        pepeModal.style.display = "none";
      } else if (event.target == grinchModal) {
        grinchModal.style.display = "none";
      } else if (event.target == biggieModal) {
        biggieModal.style.display = "none";
      } else if (event.target == willowModal) {
        willowModal.style.display = "none";
      } else if (event.target == gloryModal) {
        gloryModal.style.display = "none";
      } else if (event.target == anyaModal) {
        anyaModal.style.display = "none";
      } else if (event.target == hariModal) {
        hariModal.style.display = "none";
      } else if (event.target == refriedModal) {
        refriedModal.style.display = "none";
      } else if (event.target == jeefModal) {
        jeefModal.style.display = "none";
      } else if (event.target == wixonModal) {
        wixonModal.style.display = "none";
      } else if (event.target == colbertModal) {
        colbertModal.style.display = "none";
      } else if (event.target == xanderModal) {
        xanderModal.style.display = "none";
      }
  }
  // window.onclick = function(event) {
  //     if (event.target == oaModal) {
  //         oaModal.style.display = "none";
  //     }
  // }
});
