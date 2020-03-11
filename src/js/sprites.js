class Sprite {
    constructor(x,y,path){
        this.x = x * 32; //Every grid is 32x32, we are assuming that we will get an x between 0 - 35
        this.y = y * 32; //Assuming that we will get a y between 0 - 20
        this.w = 32;
        this.h = 32;
        this.img = document.createElement("img");
        this.img.src = path;
    }
    show(){
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    }
}

class Player extends Sprite{
    constructor(x,y){
        super(x,y,"src/img/player.png");
    }
}

class Walls extends Sprite{
    constructor(x,y,path,type){
        super(x,y,path);
        this.type = type;//type will be used to represent different types of tiles e.g portals, clouds, walls, or empty space
    }
}

class FallObject extends Sprite{
    constructor(x,y,path,type){
        super(x,y,path,type);
        this.type = type;
    }

    move(){
        this.y += 3
        if (this.y > canvas.height){
            this.y = 0;
        }
    }

    collision(otherX, otherY){//Assumes that the size of the other object takes up a 32x32 space

        var aX1 = this.x;
        var aX2 = this.x+32;
        var aY1 = this.y+32;
        var aY2 = this.y;
        
        var bX1 = otherX;
        var bX2 = otherX+32;
        var bY1 = otherY+32;
        var bY2 = otherY;
        
        var check2 = false;
        var check3 = false;
        
        for (var i = aX1; i <= aX2; i++){
          check2 = (i > bX1 && i < bX2) || check2;
        }
      
        for (var i = aY2; i < aY1; i++){
          check3 = (i < bY1 && i > bY2) || check3;
        }
        
        return check2 && check3;//Returns true if there is a collision, returns false if there is not
    }
}