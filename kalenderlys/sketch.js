
const canvasWidth = 800;
const canvasHeight = 670;

function preload() {
  candleImage = loadImage('flame.jpg');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

let startDate = new Date("2024-12-01T00:00:00");
let endDate = new Date("2024-12-25T00:00:00");


function draw() {
  // Update the current time
  let currentDate = new Date(); 
  currentDate = new Date("2024-12-12T00:00:00");

  // Check if currentDate is within range
  if (currentDate >= startDate && currentDate <= endDate) {
    let rectBuffer = canvasHeight/26.8;
    let dateDecember1 = new Date("2024-12-01");
    let dateDecember24 = new Date("2024-12-25");

    let ms_december1 = dateDecember1.getTime();
    let ms_december24 = dateDecember24.getTime();
    let ms_now = currentDate.getTime();
    
    

    // 1 ms before Dec 25th
    ms_december24 -= 1;

    let ms_dif = ms_december24 - ms_december1;
    let ms_elapsed = ms_now - ms_december1;

    let numberDate = currentDate.getDate();
    console.log(currentDate + "; Date (day): " + numberDate);


  

    //Draw the background
    let backgroundColor = "000000";
    background(int(backgroundColor));
    
    //define rect values
    const candleBaseHeight = canvasHeight-canvasHeight/3.941176470588235;
    let rectCurrentHeight = (candleBaseHeight/ms_dif)*ms_elapsed;
    const candleWidth = canvasWidth/4;
    const candleXPosition = canvasWidth/2-candleWidth/2;

    //canvasWidth, canvasHeight (bottum - hight of rect, and a 1 number rectBuffer), width of rect, hight (+ a rectBuffer)
    fill(0, 255, 255);
    rect(candleXPosition,(canvasHeight-(candleBaseHeight-rectCurrentHeight)-rectBuffer-(canvasHeight/837.5)), candleWidth, candleBaseHeight-rectCurrentHeight+rectBuffer);
    
    fill(255, 255, 255);

    
    
    
    
    //draw redundant stuff
    let circleDiameter = 75;
    let circleBuffer = 5;
    let circleY = canvasHeight-((circleDiameter/2)+1);
    let circleXLeft = canvasWidth/2-candleWidth+(candleWidth/3.6);
    let circleXRight = candleXPosition+candleWidth+(circleDiameter/2)+circleBuffer;

    fill(190, 0, 0);
    //circleXLeft
    circle(circleXLeft, circleY, circleDiameter);
    circle(circleXLeft-((circleDiameter*1)+circleBuffer), circleY, circleDiameter);
    
    //circleXRight
    circle(circleXRight, circleY, circleDiameter);
    circle(circleXRight+((circleDiameter*1)+circleBuffer), circleY, circleDiameter);
    
    
    fill(255, 255, 255)
    // Draw the text at the top of the candle
    textAlign(CENTER, BOTTOM);
    let textFontSize = 18;
    textSize(textFontSize);
    
    let dayCounter = 0;
    let alternativeRectHeight = (candleBaseHeight/24)*numberDate;
    for(let i = numberDate; i<=24; i++) {

      if(numberDate < 15) {
        textFontSize = 20;
      }else if(numberDate >= 15){
        textFontSize = 21.5;
      }

      //text, canvasWidth, canvasHeight (taking number-size and room for the next number in account + a rectBuffer)
      fill(255, 0, 100);
      text(numberDate + dayCounter, (candleXPosition + candleWidth / 2), (candleWidth + alternativeRectHeight + (textFontSize + 1)*dayCounter)-(rectBuffer*2)-2.1);
      dayCounter++;
    }
    

    fill(255, 255, 255);
    let img_height = 150;
    
    image(candleImage, candleXPosition+72, (canvasHeight-(candleBaseHeight-rectCurrentHeight)-rectBuffer)-img_height, canvasWidth/15, img_height);
    fill(255, 0, 0);

    textFontSize = 20
    textSize(textFontSize);
    text(numberDate, canvasWidth-(textFontSize/2), textFontSize);

    fill(255, 255, 255);

    console.log(rectCurrentHeight)
    
    
    

    
  }else {
    let toWrite = "Not in Christmas time!"
    text(toWrite, 100, 100);
  }
}




