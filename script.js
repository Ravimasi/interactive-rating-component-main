const labelsBG = document.querySelectorAll(".number-ratings");
const IsChecked = (element) => {
  const isChecked = element.querySelector('input[type="radio"]').checked;
  if (isChecked) {
    labelsBG.forEach((label) => {
      if (label === element) {
        label.classList.remove("color2");
        label.classList.add("checked");
        label.classList.add("color1");
      } else {
        label.classList.remove("checked");
        label.classList.add("color2");
      }
    });
  }
};

document.getElementById("RatingForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the selected rating value
  const selectedRating =
    document.getElementsByClassName("checked")[0].children[0];
  const ratingValue = selectedRating ? selectedRating.value : null;

  // Redirect to the thank-you.html page with the rating value as a query parameter
  if (ratingValue) {
    window.localStorage.setItem(
      "rating",
      JSON.stringify(Number(selectedRating.value))
    );
    window.location.href = `thank-you.html?rating=${ratingValue}`;
  }
});

function showResult() {
  document.getElementById(
    "result"
  ).innerHTML = `You selected ${window.localStorage.getItem(
    "rating"
  )} out of 5`;
}
