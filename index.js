const nextButton = document.getElementById("next-button");

const returnText = document.getElementById("user-instruction");
returnText.style.display = "none";


function displayImage(input) {
  const imageDisplay = document.querySelector(".image-display");

  if (input.files && input.files[0]) {
    const selectedFile = new FileReader();

    selectedFile.onload = function (e) {
      imageDisplay.innerHTML = `<img src="${e.target.result}" class="rounded-circle" alt="Uploaded Image" style="width: 100%; height: 100%; object-fit: cover;">`;
      imageDisplay.style.border = "none";

      const profileImage = `<img src="${e.target.result}" class="rounded-circle" alt="Uploaded Image" style="width: 100%; height: 100%; object-fit: cover;">`;
      sessionStorage.setItem('profileImage', profileImage);
    };

    selectedFile.readAsDataURL(input.files[0]);

    
  }
}

function onChnageLocation(event) {
  const inputValue = event.target.value;
  if (inputValue !== "") {
    nextButton.disabled = false;

    returnText.style.display = "block";
  } else {
    nextButton.disabled = true;

    returnText.style.display = "none";
  }
}


function onSelection() {

  let checkBox = document.querySelectorAll(".form-check-input").length;

  for (i = 0; i < checkBox; i++) {
    if (document.querySelectorAll(".form-check-input")[i].checked) {

        document.querySelectorAll(".form-check-content")[i].classList.add("cart-selector");
        document.querySelectorAll(".text-body")[i].style.display = "block";
        document.querySelectorAll('.user-option')[i].style.border = "3px solid pink";
        document.querySelector('.next-button').disabled = false;
        document.getElementById("user-instruction").style.display = "block";
        document.getElementById("return-instruction").style.display = "block";
        
    } else {

        document.querySelectorAll(".form-check-content")[i].classList.remove("cart-selector");
        document.querySelectorAll(".text-body")[i].style.display = "none";
        document.querySelectorAll('.user-option')[i].style.border = "none";
    }
  }
}