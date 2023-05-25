let HelpPage = true;
var help_page;
var d1;
var d2;
let bx1 = 1220;
let by1 = 70;
let bx2 = 1100;
let by2 = 100;
let var1 = 0;

let y1 = 100;

let thumbs = [];
let ty = [];

let py;
let ry;

let selected = 0

function preload() {
  for (let i = 0; i < 8; i++) {
    let thumb = loadImage("Thumbnail/" + (i + 1) + ".png");
    thumbs.push(thumb);
  }
}

function setup() {
  createCanvas(1280, 720);
  help_page = createGraphics(1000, 600); //help page
}

function draw() {
  drawHelpPage();

  background(220);

  d1 = dist(bx1, by1, mouseX, mouseY); // help button dist
  d2 = dist(bx2, by2, mouseX, mouseY); //close button dist

  //constrain thumbnails
  if (var1 > 0) {
    var1 = 0;
  } else if (var1 < -530) {
    var1 = -530;
  }

  ////////////////////////////////////////////////////
  //help button DRAW
  ////////////////////////////////////////////////////

  if (d1 < 80 && HelpPage === false) {
    fill(0, 86, 80); //hoverColor
  } else {
    fill(1, 134, 113); //staticColor
  }
  noStroke();
  circle(bx1, by1, 80);
  textSize(80);
  fill(255);
  text("?", 1204, 100);

  ////////////////////////////////////////////////////
  //help page
  ////////////////////////////////////////////////////
  if (HelpPage === true) {
    
    //help page
    image(help_page, 150, 50);
    

    ////////////////////////////////////////////////////
    //close button DRAW
    ////////////////////////////////////////////////////

    if (d2 < 80 && HelpPage === true) {
      fill(0, 86, 80); //hoverColor
    } else {
      fill(1, 134, 113); //staticColor
    }
    noStroke();
    circle(bx2, by2, 80);
    textSize(80);
    fill(255);
    text("X", 1075, 130);
  }

  //print(HelpPage);
  //print(d)
  //print(mouseX,mouseY)
  //print(var1)
  //print(ty)
  //print(selected)
}

function mousePressed() {
  py = mouseY; // mouseY when mouse pressed

  //help button CLICK
  if (HelpPage === false) {
    if (d1 < 80) {
      print("click");
      HelpPage = true;
    }
  }

  //close button CLICK
  if (HelpPage === true) {
    if (mouseX > 1050 && mouseX < 1150) {
      if (mouseY > 50 && mouseY < 150) {
        print("click");
        HelpPage = false;
      }
    }
  }
}

//thumbnail click
function doubleClicked() {
  for (let xx = 0; xx < 8; xx++) {
    if (mouseY > 55 && mouseY < 655)
      if (mouseX > 160 && mouseX < 384) {
        if (mouseY > ty[xx] + 55 && mouseY < ty[xx] + 180) {
          print(xx+1);
          selected = xx
        }
      }
  }
}

////////////////////////////////////////////////////
//help page scroll
////////////////////////////////////////////////////

function mouseDragged() {
  if (mouseX > 160 && mouseX < 384) {
    if (mouseY > py) {
      var1 = var1 + 15;
    } else {
      var1 = var1 - 15;
    }
  }
}

////////////////////////////////////////////////////
//help page
////////////////////////////////////////////////////

function drawHelpPage() {
  help_page.background(255, 0, 255);

  ty.length = 0;
  
  //thumbnails
  for (let a = 0; a < thumbs.length; a++) {
    ty.push(10 + a * 140 + var1);
    help_page.image(thumbs[a], 10, 10 + a * 140 + var1, 224, 126);
  }
  
  //selected
  help_page.image(thumbs[selected],248,110,736,414)
  
      //thumbnail hover color
    for (let xy = 0; xy < 8; xy++) {
      if (mouseY > 55 && mouseY < 655)
        if (mouseX > 160 && mouseX < 384) {
          if (mouseY > ty[xy] + 55 && mouseY < ty[xy] + 180) {
            //print(xy + 1);
            
            help_page.noStroke()
            help_page.fill(0, 50);
            help_page.rect(10, ty[xy], 224, 126);
          }
        }
    }
}
