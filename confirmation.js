const profileImage = sessionStorage.getItem("profileImage");
const profileImgContainer = document.getElementById("profile-img");
profileImgContainer.innerHTML = profileImage;
profileImgContainer.style.width = '40px';
profileImgContainer.style.height = '40px';
profileImgContainer.style.margin = '0 4px';