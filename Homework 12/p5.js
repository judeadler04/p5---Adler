function setup() 
{

    createCanvas(500, 500);
    
    x = 400;
    y = 400;

    lightX = 397;
    lightY = 397;

    shadowX = 410;
    shadowY = 410;
    youWin = false;

    offMapBool = false;

    
    triY_One = 100;
    triY_Two = 50;
    triY_Three = 75;
    poleY = 100;


    
}

// I made a nature scene of some trees, a moon, and stars
function draw() 
{
    background(14, 74, 10);

    noStroke();
    fill(7, 128, 0);
    circle(250, 250, 400);
    fill(12, 148, 0);
    circle(250, 250, 350);

    fill('black');
    circle(200, 200, 25);

    stroke('white');
    line(200, 200, 200, poleY);

    noStroke();
    fill('red');
    triangle(200, triY_One, 200, triY_Two, 250, triY_Three);

    if (youWin === false)
    {
        //
    } else 
    {
        fill(0, 255, 0);
        textSize(32);
        text("You Win!", 150, 250);
    }

    if (offMapBool === true)
    {
        fill(255, 0, 0);
        textSize(32);
        text("You went off the map!", 50, 250);
    }

    fill(0, 0, 0);
    ellipse(shadowX, shadowY, 30, 10);

    if (mouseIsPressed === true)
{
        triY_One -= 1;
        triY_Two -= 1;
        triY_Three -= 1;
        poleY -= 1;
    }

    fill(192, 192, 192);
    circle(x, y, 20);

    fill(255, 255, 255);
    circle(lightX, lightY, 10);

    if (keyIsPressed === true)
    {
        if (key === 'w' || key === 'W') 
        {
            y -= 5;
            lightY -= 5;
            shadowY -= 5;
            win();
            offMap();
        } 
        else if (key === 's' || key === 'S') 
        {
            y += 5;
            lightY += 5;
            shadowY += 5;
            win();
            offMap();
        } 
        else if (key === 'a' || key === 'A') 
        {
            x -= 5;
            lightX -= 5;
            shadowX -= 5;
            win();
            offMap();
        } 
        else if (key === 'd' || key === 'D') 
        {
            x += 5;
            lightX += 5;
            shadowX += 5;
            win();
            offMap();
        }
    }
}

function win() 
{
  if (x >= 175 && x <= 225 && y >= 175 && y <= 225) 
{
    youWin = true;
  }
}


function offMap() 
{
  if (x < 0 || x > 500 || y < 0 || y > 500) 
  {
    offMapBool = true;
  } 
  else 
{
    offMapBool = false;
  }
}
