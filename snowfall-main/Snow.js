class Snow{
    constructor(){
        
        this.x = random(0,800)
        this.y = random(0,400)
        this.image = loadImage("snow5.webp")
       
    }

    update(){     
        this.y = this.y+5
        if(this.y > 400){

            this.x = random(0,800)
        this.y = random(0,400)
        }
    }

    display(){
       
        imageMode(CENTER);
        image(this.image,this.x,this.y,100,100);
    }
}