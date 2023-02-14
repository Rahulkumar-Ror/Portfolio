// Magic mouse sparkle trail effect
console.log("hii")
const trail = document.createElement("div");
trail.style.position = "fixed";
trail.style.top = 0;
trail.style.left = 0;
trail.style.pointerEvents = "none";
trail.style.zIndex = -1;
document.body.appendChild(trail);

let sparkles = [];

for (let i = 0; i < 20; i++) {
  const sparkle = document.createElement("div");
  sparkle.style.position = "fixed";
  sparkle.style.top = 0;
  sparkle.style.left = 0;
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = -1;
  sparkle.style.opacity = 0;
  sparkle.style.transition = "all 0.5s ease";
  trail.appendChild(sparkle);
  sparkles.push(sparkle);
}

document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const color = `rgb(${clientX % 255}, ${clientY % 255}, 100)`;
  const size = Math.min(Math.max(clientX / 7, 20), 50);
  trail.style.background = color;
  trail.style.width = `${size}px`;
  trail.style.height = `${size}px`;
  trail.style.borderRadius = `${size / 2}px`;
  trail.style.transform = `translate(${clientX - size / 2}px, ${clientY -
    size / 2}px)`;

  sparkles.forEach((sparkle, index) => {
    setTimeout(() => {
      sparkle.style.top = `${clientY - (index + 1) * 5}px`;
      sparkle.style.left = `${clientX - (index + 1) * 5}px`;
      sparkle.style.opacity = 1;
      setTimeout(() => {
        sparkle.style.opacity = 0;
      }, 500);
    }, index * 50);
  });
});

// Animation for about section
const about = document.querySelector("#about");
const aboutP = about.querySelector("p");
about.style.opacity = 0;
aboutP.style.transform = "translateX(-100%)";

window.addEventListener("scroll", () => {
  const { top } = about.getBoundingClientRect();
  if (top < window.innerHeight) {
    about.style.opacity = 1;
    aboutP.style.transform = "translateX(0)";
  }
});


// Visitor count
// let count = 0;
// const visitorCount = document.querySelector("#visitor-count");
// visitorCount.innerText = count;

// // Check if the visitor count is stored in local storage
// if (localStorage.getItem("visitor-count")) {
//   count = parseInt(localStorage.getItem("visitor-count"), 10);
//   visitorCount.innerText = count;
// }

// // Increment the visitor count and update local storage
// count += 1;
// localStorage.setItem("visitor-count", count);

document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const color = `rgb(${clientX % 255}, ${clientY % 255}, 100)`;
  const size = Math.min(Math.max(clientX / 7, 20), 50);

  // Create a sparkle trail
  const sparkle = document.createElement("div");
  sparkle.style.position = "fixed";
  sparkle.style.width = `${size / 2}px`;
  sparkle.style.height = `${size / 2}px`;
  sparkle.style.background = color;
  sparkle.style.borderRadius = "50%";
  sparkle.style.transform = `translate(${clientX - size / 4}px, ${clientY -
    size / 4}px)`;
  sparkle.style.opacity = 0;
  document.body.appendChild(sparkle);

  // Animate the sparkle trail
  setTimeout(() => {
    sparkle.style.transform = `translate(${clientX - size / 4}px, ${clientY -
      size / 4}px) scale(2)`;
    sparkle.style.opacity = 1;
  }, 10);

  setTimeout(() => {
    sparkle.style.opacity = 0;
  }, 50);

  setTimeout(() => {
    document.body.removeChild(sparkle);
  }, 100);
});
