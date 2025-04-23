const form = document.getElementById("mapForm");
const input = document.getElementById("locationInput");
const map = document.getElementById("map");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const location = input.value.trim();
  if (!location) return;

  const apiKey = "AIzaSyAkPEJnbamfwRpSzW9ocO_Uhl4DrRzHAms";
  const newSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
    location
  )}&key=${apiKey}`;

  map.src = newSrc;
});
