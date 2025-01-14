const x = 1500;
const y = 771;
let lineLength = 15;    ll = lineLength;
lineThickness = 2.5;  lt = lineThickness;

let buffer = 5;
let numberOfFigurs = 2; nof = numberOfFigurs;

function setup() {   
    createCanvas(x, y);
    //thickness
    strokeWeight(lt);

    for(let b=0;b < x; b = b+1){
        for(let h=0;h < y; h = h+1){
            
            let x1 = ll*b;
            let y1 = ll*h;

            let x2 = ll*b;
            let y2 = ll*h;


            let r = Math.floor((Math.random() * nof)+1);

            if(r==1) { //left to right
                line(x1-ll + buffer,y1-ll + buffer, x1 + buffer, y1 + buffer);
    
            }else if(r==2){ //right to left
                line(x2 + buffer,y2-ll + buffer, x2-ll + buffer, y2 + buffer);
                
            }else if (r==3){ //x figur
                line(x1-ll + buffer,y1-ll + buffer, x1 + buffer, y1 + buffer);
                line(x2 + buffer,y2-ll + buffer, x2-ll + buffer, y2 + buffer);

            }else if (r=4) { //cross
                
                line(x2+buffer, y2, x2-ll+buffer, y2);
                line(x2+buffer-(ll/2), y2-(ll/2), x2+buffer-(ll/2), y2+(ll/2));
                
            }
        }
    }   
}

