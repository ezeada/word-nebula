document.addEventListener("DOMContentLoaded", function() {
  const poems = document.querySelectorAll(".poem");

  poems.forEach(poem => {
    const words = poem.textContent.split(/\s+/).filter(word => word.trim() !== '');

    poem.innerHTML = ""; // Clear the content of the poem container

    words.forEach(word => {
      const span = document.createElement("span");
      span.textContent = word;
      span.classList.add("word");
      poem.appendChild(span);
    });
  });

  const words = document.querySelectorAll(".word");

  words.forEach(word => {
    const speed = 0.015; // Speed of motion
    let t = Math.random() * 2 * Math.PI; // Random starting parameter

    setInterval(() => {
      const x = Math.sin(t) * (Math.exp(Math.cos(t)) - 4 * Math.cos(6 * t) - Math.pow(Math.sin(t / 12), 5
      ));
      const y = Math.cos(t) * (Math.exp(Math.cos(t)) - 4 * Math.cos(6 * t) - Math.pow(Math.sin(t / 12), 5));

      t += speed;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Map x and y values to screen coordinates
      const mappedX = map(x, -8, 8, 0, windowWidth);
      const mappedY = map(y, -6, 6, 0, windowHeight);

      word.style.left = mappedX + "px";
      word.style.top = mappedY + "px";
    }, 10); // Adjust the interval to control the speed of motion

    // Function to map a value from one range to another
    function map(value, fromMin, fromMax, toMin, toMax) {
      return (value - fromMin) * (toMax - toMin) / (fromMax - fromMin) + toMin;
    }

    word.addEventListener("mouseenter", function() {
      t = Math.random() * 2 * Math.PI; // Reset the parameter to a random value
    });
  });
});
