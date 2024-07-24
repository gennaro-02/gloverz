var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var modalTriggers = document.getElementsByClassName("modalTrigger");
var closeModal = document.getElementById("closeModal");

for (var i = 0; i < modalTriggers.length; i++) {
  modalTriggers[i].addEventListener("click", function() {
    var imageURL = this.getAttribute("src");
    modalImage.setAttribute("src", imageURL);
    modal.style.display = "block";
  });
}

closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


function filtra(filtro) {

    var filtri = document.getElementsByClassName('item')
    var immagini = document.getElementsByClassName('image')

    for (var i = 0; i < filtri.length; i++) {
        filtri[i].classList.remove('active')
    }


    document.querySelector("[data-filtro=" + filtro + "]").classList.add('active')


    for (var j = 0; j < immagini.length; j++){
        if(filtro == "tutti" || immagini[j].getAttribute('data-image') == filtro) {
            immagini[j].classList.remove('hide')
        }
        else{immagini[j].classList.add('hide')}

    }
    
}


function openNav() {
  
  var overlay = document.getElementsByClassName("overlay")
  overlay[0].style.display = "block"
}

function closeNav() {
  var overlay = document.getElementsByClassName("overlay")
  overlay[0].style.display = "none"
 }

