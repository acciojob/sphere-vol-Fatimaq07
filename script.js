function volume_sphere() {
  const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);

  // Validate input
  if (isNaN(radius) || radius < 0) {
    document.getElementById("volume").value = "NaN";
    return;
  }

  // Calculate volume
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Show result rounded to 4 decimals
  document.getElementById("volume").value = volume.toFixed(4);
}
