const planetFacts = {
  mercury: "Mercury is the smallest planet and closest to the sun.",
  venus: "Venus has a thick atmosphere that traps heat.",
  earth: "Earth is the only planet known to support life.",
  mars: "Mars is known as the Red Planet due to iron oxide dust.",
};
document.querySelectorAll(".planet").forEach(planet => {
  planet.addEventListener("click", () => {
    const name = [...planet.classList].find(cls =>
      ["mercury", "venus", "earth", "mars"].includes(cls)
    );

    const factBox = document.getElementById("factBox");
    factBox.textContent = planetFacts[name];
    factBox.style.display = "block";

    // Optional: auto-hide after 5 seconds
    setTimeout(() => {
      factBox.style.display = "none";
    }, 5000);
  });
});
