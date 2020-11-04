class TajMahal {
constructor(){
this.title = createElement("h1");
this.q1 = createElement("p");
this.q2 = createElement("p");
this.q3 = createElement( "p");
this.q4 = createElement("p");
this.q5 = createElement("p");
//this.q6 = createElement("p");
this.button1 = createButton("submit");
this.button2 = createButton("submit");
this.button3 = createButton("submit");
this.button4 = createButton("submit");
this.button5 = createButton("submit");
this.input1 = createInput("");
this.input2 = createInput("");
this.input3 = createInput("");
this.input4 = createInput("");
this.input5 = createInput("");

    
}

display(){

     textSize(20)
    text("*CHOOSE THE CORRECT OPTION(NUMBER)",80,750)
    line.visible = true;

this.title.html("TAJ MAHAL ")
this.q1.html("Q1.Who do u think built the taj mahal?");
this.input1.position(100,230);
this.q2.html("Who was the architect of the Taj Mahal?")
this.input2.position(100,330);
this.q3.html("Q3.When Taj Mahal was designated as a UNESCO World Heritage Site");
this.input3.position(100,430);
this.q4.html("Q4.What is the central focus of the Taj Mahal ?")
this.input4.position(100,530);
this.q5.html("Q5.What is the english translation of Taj Mahal?")
this.input5.position(100,650);

    this.title.position(100,40);

    this.q1.position(100,160);
    textSize(15);
    stroke(10);
    fill("red");
    text("1.Shah Jahan",100,220);
    text("2.Akbar",210,220)
    text("3.Shivaji",280,220)
    text("4.Aurangzeb",370,220);
    this.q2.position(100,260);
    textSize(15);
    stroke(10);
    fill("red");
    text("1.Lal Chand Ustaad",100,310);
    text("2.Ustad Ahmad Lahouri",260,310)
    text("3.Qitub-ub-Din-Aibak",450,310)
    text("4.Alauddin Khilji",630,310);
    this.q3.position(100,360);
    textSize(15);
    stroke(10);
    fill("red");
    text("1. 1980",100,410);
    text("2. 1642",200,410)
    text("3. 1983",300,410)
    text("4. 2007",390,410);
    this.q4.position(100,460);
    textSize(15);
    stroke(10);
    fill("red");
    text("1.Minarets",100,510);
    text("2.Tomb",210,510)
    text("3.Jewellery",280,510)
    text("4.White marbel",370,510);
    this.q5.position(100,560);
    textSize(15);
    stroke(10);
    fill("red");
    text("1.The Palace Of Breeze",100,610);
    text("2.Crown Of Palaces",280,610)
    text("3.Door Of Victory",450,610)
    text("4.Four Minarets",600,610);
    //this.q6.position(100,660);
    this.button1.position(400,230);
    this.button2.position(400,330);
    this.button3.position(400,430);
    this.button4.position(400,530);
    this.button5.position(400,650);
    
    
this.button1.mousePressed(()=>{
    //alert("in button pressed")
    var answer = this.input1.value();
    //alert(answer);
    //text("hello,",500,200);

    if (answer==1) {
        //alert("hello");
        shahjahan.visible= true;
        
        
    }else{
        alert("wrong brotha");
    }
})

this.button2.mousePressed(()=>{
    //alert("in button pressed")
    var answer2 = this.input2.value();
    //alert(answer);
    //text("hello,",500,200);

    if (answer2==2) {
        //alert("hello")
        plan.visible = true;
        
        
    }else{
        alert("wrong brotha");
    }
})

this.button3.mousePressed(()=>{
    //alert("in button pressed")
    var answer3 = this.input3.value();
    //alert(answer);
    //text("hello,",500,200);

    if (answer3==3) {
        //alert("hello");
        unesco.visible = true;
        
        
    }else{
        alert("wrong brotha");
    }
})

this.button4.mousePressed(()=>{
    //alert("in button pressed")
    var answer4 = this.input4.value();
    //alert(answer);
    //text("hello,",500,200);

    if (answer4==2) {
        
        tomb.visible = true;
        
        
    }else{
        alert("wrong brotha");
    }
})

this.button5.mousePressed(()=>{
    //alert("in button pressed")
    var answer5 = this.input5.value();
    //alert(answer);
    //text("hello,",500,200);

    if (answer5==2) {
        //alert("hello")
        palace.visible = true;
        
       
        
        
        
    }else{
        alert("wrong brotha");
    }
})

if(tomb.visible===true&&palace.visible===true){
    text("ssup",300,300);
}

}





}
