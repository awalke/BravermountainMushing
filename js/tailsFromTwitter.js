$(document).ready(function (){
  // Get the modal
  var uglyDogsModal = document.getElementById('uglyDogsModal');
  var chickenFlameModal = document.getElementById('chickenFlameModal');
  var ateFatModal = document.getElementById('ateFatModal');
  var donutExModal = document.getElementById('donutExModal');
  var outdoorWrModal = document.getElementById('outdoorWrModal');
  var loveStoryModal = document.getElementById('loveStoryModal');
  var roundDogsModal = document.getElementById('roundDogsModal');
  var moreRoundDogsModal = document.getElementById('moreRoundDogsModal');
  var hariBeesModal = document.getElementById('hariBeesModal');
  var dogsledCampingModal = document.getElementById('dogsledCampingModal');
  var dogsledCampModal = document.getElementById('dogsledCampModal');
  var prayJengaModal = document.getElementById('prayJengaModal');
  var sledDogsModal = document.getElementById('sledDogsModal');
  var kindDogsModal = document.getElementById('kindDogsModal');
  var menAndWomenModal = document.getElementById('menAndWomenModal');
  var meatGrinderModal = document.getElementById('meatGrinderModal');

  // Get the button that opens the modal
  var uglyDogsBtn = document.getElementById("uglyDogsButton");
  var chickenFlameBtn = document.getElementById("chickenFlameButton");
  var ateFatBtn = document.getElementById("ateFatButton");
  var donutExBtn = document.getElementById("donutExButton");
  var outdoorWrBtn = document.getElementById("outdoorWrButton");
  var loveStoryBtn = document.getElementById("loveStoryButton");
  var roundDogsBtn = document.getElementById("roundDogsButton");
  var moreRoundDogsBtn = document.getElementById("moreRoundDogsButton");
  var hariBeesBtn = document.getElementById("hariBeesButton");
  var dogsledCampingBtn = document.getElementById("dogsledCampingButton");
  var dogsledCampBtn = document.getElementById("dogsledCampButton");
  var prayJengaBtn = document.getElementById("prayJengaButton");
  var sledDogsBtn = document.getElementById("sledDogsButton");
  var kindDogsBtn = document.getElementById("kindDogsButton");
  var menAndWomenBtn = document.getElementById("menAndWomenButton");
  var meatGrinderBtn = document.getElementById("meatGrinderButton");

  // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  uglyDogsBtn.onclick = function() {
      uglyDogsModal.style.display = "block";
  }
  chickenFlameBtn.onclick = function() {
      chickenFlameModal.style.display = "block";
  }
  ateFatBtn.onclick = function() {
      ateFatModal.style.display = "block";
  }
  donutExBtn.onclick = function() {
      donutExModal.style.display = "block";
  }
  outdoorWrBtn.onclick = function() {
      outdoorWrModal.style.display = "block";
  }
  loveStoryBtn.onclick = function() {
      loveStoryModal.style.display = "block";
  }
  roundDogsBtn.onclick = function() {
      roundDogsModal.style.display = "block";
  }
  moreRoundDogsBtn.onclick = function() {
      moreRoundDogsModal.style.display = "block";
  }
  hariBeesBtn.onclick = function() {
      hariBeesModal.style.display = "block";
  }
  dogsledCampingBtn.onclick = function() {
      dogsledCampingModal.style.display = "block";
  }
  dogsledCampBtn.onclick = function() {
      dogsledCampModal.style.display = "block";
  }
  prayJengaBtn.onclick = function() {
      prayJengaModal.style.display = "block";
  }
  sledDogsBtn.onclick = function() {
      sledDogsModal.style.display = "block";
  }
  kindDogsBtn.onclick = function() {
      kindDogsModal.style.display = "block";
  }
  menAndWomenBtn.onclick = function() {
      menAndWomenModal.style.display = "block";
  }
  meatGrinderBtn.onclick = function() {
      meatGrinderModal.style.display = "block";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == uglyDogsModal) {
          uglyDogsModal.style.display = "none";
      } else if (event.target == chickenFlameModal) {
        chickenFlameModal.style.display = "none";
      } else if (event.target == ateFatModal) {
        ateFatModal.style.display = "none";
      } else if (event.target == donutExModal) {
        donutExModal.style.display = "none";
      } else if (event.target == outdoorWrModal) {
        outdoorWrModal.style.display = "none";
      } else if (event.target == loveStoryModal) {
        loveStoryModal.style.display = "none";
      } else if (event.target == roundDogsModal) {
        roundDogsModal.style.display = "none";
      } else if (event.target == moreRoundDogsModal) {
        moreRoundDogsModal.style.display = "none";
      } else if (event.target == hariBeesModal) {
        hariBeesModal.style.display = "none";
      } else if (event.target == dogsledCampingModal) {
        dogsledCampingModal.style.display = "none";
      } else if (event.target == dogsledCampModal) {
        dogsledCampModal.style.display = "none";
      } else if (event.target == prayJengaModal) {
        prayJengaModal.style.display = "none";
      } else if (event.target == sledDogsModal) {
        sledDogsModal.style.display = "none";
      } else if (event.target == kindDogsModal) {
        kindDogsModal.style.display = "none";
      } else if (event.target == menAndWomenModal) {
        menAndWomenModal.style.display = "none";
      } else if (event.target == meatGrinderModal) {
        meatGrinderModal.style.display = "none";
      }
  }
});
