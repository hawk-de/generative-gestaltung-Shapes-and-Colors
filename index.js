function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  background(128);
}
function draw() {
  ellipse(width / 2, height / 2, 100, 100);
}
