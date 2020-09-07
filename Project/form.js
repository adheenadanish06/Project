class Form {

    constructor() {
      
      this.character = createButton('CHARACTERS');
      this.play = createButton('PLAY');
      this.rule = createButton('RULES');
     
    }
    hide(){
 
      this.character.hide();
      this.play.hide();
      this.rule.hide();
    }
  
    display(){
    
      this.character.position(displayWidth/2 + 30, displayHeight/2);
      this.play.position(displayWidth/2 + 10, displayHeight/2);
      this.rules.position(displayWidth/2 + 50, displayHeight/2);
  2
      this.button.mousePressed(()=>{
        this.play.hide();
        this.character.hide();
        this.rule.hide();
      });
  
    }
  }
  