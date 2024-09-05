document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phoneNumber").value;
    const company = document.getElementById("companyName").value;
    const services = Array.from(
      document.querySelectorAll('input[name="service_check"]:checked')
    )
      .map((service) => service.value)
      .join(", ");
    const budget =
      document.querySelector('input[name="budget"]:checked')?.value ||
      "Not selected";
    const details = document.getElementById("textArea").value;
    const fileInput = document.getElementById("file-upload");
    const file = fileInput.files[0];
    console.log("file", file);
  
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  
    document.getElementById("submittedName").textContent = "Name: " + name;
    document.getElementById("submittedEmail").textContent = "Email: " + email;
    document.getElementById("submittedPhone").textContent =
      "Phone Number: " + (phone || "Not provided");
    document.getElementById("submittedCompany").textContent =
      "Company Name: " + (company || "Not provided");
    document.getElementById("submittedServices").textContent =
      "Services: " + (services || "Not selected");
    document.getElementById("submittedBudget").textContent = "Budget: " + budget;
    document.getElementById("submittedDetails").textContent =
      "Details: " + (details || "Not provided");
  
    const imagePreview = document.getElementById("submittedImage");
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      imagePreview.style.display = "none";
    }
  });
  
  function closeModal() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
  
  window.addEventListener("click", function(event) {
    var overlay = document.getElementById("overlay");
    
    if (event.target == overlay) {
      closeModal();
    }
  });
  const fileName= document.querySelector(".attach-file").value
  const truncate= document.querySelector(".truncate").value

  fileName.addEventListener("click", function(){
if(fileName === value){
  
}
  })