function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);//darkcyan background
  // Draw a triangle at the top left corner
  // Top corner at (25, 0), left corner at (0, 50), right corner at (50, 50)
    fill(100, 130, 60); // slightly darker dollar bill green
  triangle(25, 0, 0, 50, 50, 50);

  fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(25, 34, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  let cx = 25;
  let cy = 34;
  let rx = 15; // white ellipse x-radius (30/2)
  let ry = 13.5; // white ellipse y-radius (27/2)
  let rrx = 7; // red ellipse x-radius (14/2)
  let rry = 6; // red ellipse y-radius (12/2)
  let dx = mouseX - cx;
  let dy = mouseY - cy;
  let angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  let ex = cx + (rx - rrx) * cos(angle);
  let ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  let norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  let bx, by;
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

    fill(100, 130, 60); // slightly darker dollar bill green
  triangle(75, 0, 50, 50, 100, 50);
   fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(75, 34, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 75;
  cy = 34;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5;        // white ellipse y-radius (27/2)
  rrx = 7;    // red ellipse x-radius (14/2)
  rry = 6;    // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

    fill(100, 130, 60); // slightly darker dollar bill green
  triangle(125, 0, 100, 50, 150, 50);
   fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(125, 34, 30, 27);   
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 125;
  cy = 34;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(175, 0, 150, 50, 200, 50);
   fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(175, 34, 30, 27);   
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 175;
  cy = 34;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(225, 0, 200, 50, 250, 50);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(225, 34, 30, 27);   
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 225;
  cy = 34;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(275, 0, 250, 50, 300, 50);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(275, 34, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 275;
  cy = 34;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(325, 0, 300, 50, 350, 50);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(325, 34, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 325;
  cy = 34;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(375, 0, 350, 50, 400, 50);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(375, 34, 30, 27);   
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 375;
  cy = 34;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(0, 50, -50, 100, 25, 100);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(0, 84, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 0;
  cy = 84;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2) 
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(50, 50, 75, 100, 25, 100);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(50, 84, 30, 27);   
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 50;
  cy = 84;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(100, 50, 125, 100, 75, 100);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(100, 84, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 100;
  cy = 84;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(150, 50, 175, 100, 125, 100);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(150, 84, 30, 27);   
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 150;
  cy = 84;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(200, 50, 225, 100, 175, 100);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(200, 84, 30, 27);   
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 200;
  cy = 84;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(250, 50, 275, 100, 225, 100);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(250, 84, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 250;
  cy = 84;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);
  
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(300, 50, 325, 100, 275, 100);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(300, 84, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 300;
  cy = 84;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(350, 50, 375, 100, 325, 100);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(350, 84, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 350;
  cy = 84;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(400, 50, 425, 100, 375, 100);
    fill(255); // white 
  // Place white ellipse inside the triangle
  ellipse(400, 84, 30, 27);   
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 400;
  cy = 84;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(25, 100, 0, 150, 50, 150);
  fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(25, 134, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 25;
  cy = 134;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(75, 100, 50, 150, 100, 150);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(75, 134, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 75;
  cy = 134;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(125, 100, 100, 150, 150, 150);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(125, 134, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 125;
  cy = 134;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(175, 100, 150, 150, 200, 150);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(175, 134, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 175;
  cy = 134;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(225, 100, 200, 150, 250, 150);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(225, 134, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 225;
  cy = 134;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(275, 100, 250, 150, 300, 150);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(275, 134, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 275;
  cy = 134;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(325, 100, 300, 150, 350, 150);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(325, 134, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 325;
  cy = 134;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(375, 100, 350, 150, 400, 150);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(375, 134, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 375;
  cy = 134;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(0, 150, -25, 200, 25, 200);//First of fourth floor...
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(0, 184, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 0;
  cy = 184;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(50, 150, 25, 200, 75, 200);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(50, 184, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 50;
  cy = 184;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(100, 150, 75, 200, 125, 200);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(100, 184, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 100;
  cy = 184;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(150, 150, 125, 200, 175, 200);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(150, 184, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 150;
  cy = 184;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(200, 150, 175, 200, 225, 200);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(200, 184, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 200;
  cy = 184;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(250, 150, 225, 200, 275, 200);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(250, 184, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 250;
  cy = 184;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(300, 150, 275, 200, 325, 200);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(300, 184, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 300;
  cy = 184;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(350, 150, 325, 200, 375, 200);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(350, 184, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 350;
  cy = 184;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(400, 150, 375, 200, 425, 200);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(400, 184, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 400;
  cy = 184;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(25, 200, 0, 250, 50, 250);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(25, 234, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 25;
  cy = 234;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(75, 200, 50, 250, 100, 250);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(75, 234, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 75;
  cy = 234;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(125, 200, 100, 250, 150, 250);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(125, 234, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 125;
  cy = 234;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

fill(100, 130, 60); // slightly darker dollar bill green
  triangle(175, 200, 150, 250, 200, 250);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(175, 234, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 175;
  cy = 234;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(225, 200, 200, 250, 250, 250);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(225, 234, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 225;
  cy = 234;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white(t y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(275, 200, 250, 250, 300, 250);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(275, 234, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 275;
  cy = 234;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(325, 200, 300, 250, 350, 250);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(325, 234, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 325;
  cy = 234;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(375, 200, 350, 250, 400, 250);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(375, 234, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 375;
  cy = 234;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(0, 250, -25, 300, 25, 300);//First of sixth floor...
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(0, 284, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 0;
  cy = 284;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(50,250, 25, 300, 75, 300);
  fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(50, 284, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 50;
  cy = 284;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(100, 250, 75, 300, 125, 300);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(100, 284, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 100;
  cy = 284;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(150, 250, 125, 300, 175, 300);
  fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(150, 284, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 150;
  cy = 284;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(200, 250, 175, 300, 225, 300);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(200, 284, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 200;
  cy = 284;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(250, 250, 225, 300, 275, 300);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(250, 284, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 250;
  cy = 284;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(300, 250, 275, 300, 325, 300);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(300, 284, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 300;
  cy = 284;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(350, 250, 325, 300, 375, 300);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(350, 284, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 350;
  cy = 284;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(400, 250, 375, 300, 425, 300);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(400, 284, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 400;
  cy = 284;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(25, 300, 0, 350, 50, 350);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(25, 334, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 25;
  cy = 334;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(75, 300, 50, 350, 100, 350);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(75, 334, 30, 27);

  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 75;
  cy = 334;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid)
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(125, 300, 100, 350, 150, 350);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(125, 334, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 125; 
  cy = 334;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(175, 300, 150, 350, 200, 350);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(175, 334, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 175;
  cy = 334;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(225, 300, 200, 350, 250, 350);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(225, 334, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 225;
  cy = 334;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(275, 300, 250, 350, 300, 350);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(275, 334, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 275;
  cy = 334;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(325, 300, 300, 350, 350, 350);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(325, 334, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 325;
  cy = 334;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(375, 300, 350, 350, 400, 350);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(375, 334, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 375;
  cy = 334;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(425, 300, 400, 350, 450, 350);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(425, 334, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 425;
  cy = 334;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


fill(100, 130, 60); // slightly darker dollar bill green
  triangle(0, 350, -25, 400, 25, 400);//First of seventh floor...
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(0, 384, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 0;
  cy = 384;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(50, 350, 25, 400, 75, 400);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(50, 384, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 50;
  cy = 384;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  // (Continue similarly for the rest of the triangles and ellipses in the grid
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(100, 350, 75, 400, 125, 400);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(100, 384, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 100;
  cy = 384;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  // (Continue similarly for the rest of the triangles and ellipses in the grid
  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(150, 350, 125, 400, 175, 400);
  fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(150, 384, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 150;
  cy = 384;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(200, 350, 175, 400, 225, 400);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(200, 384, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 200;
  cy = 384;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(250, 350, 225, 400, 275, 400);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(250, 384, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 250;
  cy = 384;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(300, 350, 275, 400, 325, 400);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(300, 384, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 300;
  cy = 384;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(350, 350, 325, 400, 375, 400);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(350, 384, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 350;
  cy = 384;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);


  fill(100, 130, 60); // slightly darker dollar bill green
  triangle(400, 350, 375, 400, 425, 400);
    fill(255); // white
  // Place white ellipse inside the triangle
  ellipse(400, 384, 30, 27);
  fill(130,0,0); // red
  // Make the red ellipse follow the mouse but stay fully inside the white ellipse
  cx = 400;
  cy = 384;
  rx = 15; // white ellipse x-radius (30/2)
  ry = 13.5; // white ellipse y-radius (27/2)
  rrx = 7; // red ellipse x-radius (14/2)
  rry = 6; // red ellipse y-radius (12/2)
  dx = mouseX - cx;
  dy = mouseY - cy;
  angle = atan2(dy, dx);
  // Calculate the point on the inner edge of the white ellipse (so red ellipse stays inside)
  ex = cx + (rx - rrx) * cos(angle);
  ey = cy + (ry - rry) * sin(angle);
  // Check if the mouse is inside the allowed area
  norm = ((dx*dx)/((rx-rrx)*(rx-rrx))) + ((dy*dy)/((ry-rry)*(ry-rry)));
  if (norm <= 1) {
    bx = mouseX;
    by = mouseY;
  } else {
    bx = ex;
    by = ey;
  }
  ellipse(bx, by, 14, 12);

}

