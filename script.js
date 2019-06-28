const propertyPrice = document.querySelector('input[type="number"]');
const stampDuty = document.querySelector(".stamp p");


propertyPrice.addEventListener("keyup", function() {
  let pound = "£";
  if(propertyPrice.value < 125000) {
    stampDuty.textContent = propertyPrice.value;
  } else if (propertyPrice.value > 125000 && propertyPrice.value < 250000) {
    stampDuty.textContent = pound + propertyPrice.value * 1.02;
  } else if (propertyPrice.value > 250000 && propertyPrice.value < 925000) {
    stampDuty.textContent = pound + propertyPrice.value * 1.05;
  } else {
    stampDuty.textContent = pound + Math.floor(propertyPrice.value * 1.1);
  }
});
