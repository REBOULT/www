function createSnowflakes() {
  const snowflakeContainer = document.getElementById("snowflakes");
  const numberOfSnowflakes = 10;

  for (let i = 0; i < numberOfSnowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * 100}%`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflakeContainer.appendChild(snowflake);
  }
}

createSnowflakes();