const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", (event) => {
  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator
      .share({
        text: "Check This Out: ",
        url: "http://127.0.0.1:5500/index.html",
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert(
      "The current browser does not support the share function. Please, manually share the link"
    );
  }
});
