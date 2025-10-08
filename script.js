function volume_sphere() {
  const radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);
  let volume;

  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
  }

  document.getElementById('volume').value = volume;
}
