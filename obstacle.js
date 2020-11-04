class Obstacle {
    constructor(x,y,obstacleimg){

        
        this.x = x
        this.y = y
        this.scale = 0.1;
        this.body = createSprite(this.x,this.y,50,50)
        this.body.addImage(obstacleimg);
        this.body.scale = this.scale;
        this.body.visible = false;
        this.body.isStatic = false;
        

    }

    display(){
     this.body.visible = true;
    }

    size(){
        this.scale = 0.26;
        this.body.scale = this.scale;
    }
    sizefood(){
        this.scale = 0.04;
        this.body.scale = this.scale;
    }

    sizearc(){
        this.scale = 0.09;
        this.body.scale = this.scale;
    }

    invisible(){
        this.body.visible = false;
    }
    
}