//繳交的作業三


//按鈕
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ceeaf7");
  fill(0)
  stroke(0)
  rect(80,80,150,50)
  music_btn=createButton("音樂跳舞")
  music_btn.position(10,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)
  
  fill(0)
  stroke(0)
  rect(80,80,150,50)  
  music_btn=createButton("滑鼠跳動")
  music_btn.position(400,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)

  fill(0)
  stroke(0)
  rect(80,80,150,50)  
  music_btn=createButton("語音辨識")
  music_btn.position(800,10)
  music_btn.size(350, 100);
  music_btn.style('background-color', 'black');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)
}

  function music_btn_pressed(){
    song.stop()
    song.play()
    songIsplay = true
    mosueIsplay = false
    amp=new p5.Amplitude()
      }	

      if(songIsplay){
        vol = amp.getLevel()
        face_x =map(vol,0,1,0,width) 
        face_y= map(vol,0,1,0,height)
      }
      else
      if(mosueIsplay)
      {
        face_x = mouseX
        face_y= mouseY
      
      }
      
      function mouse_btn_pressed(){
        song.pause()
        songIsplay = false
      
      }
    
    
    //音樂
  
    Speech_btn.position(10,10)
    Speech_btn.size(350, 100);
    Speech_btn.style('background-color', 'black');
    Speech_btn.style('font-size', '32px');
    Speech_btn.style('color', 'white');
    Speech_btn.mousePressed(Speech_btn_pressed)
  
      
  
  
    function preload(){
      song=loadSound("O Holy Night - DJ Williams.mp3");
    }
  
  function music_btn_pressed(){
    song.stop()
    song.play()
    songIsplay=true
    mouseIsplay=false
  }
  
  //物件
function draw() {
  createCanvas(windowWidth, windowHeight);
	 background("#ceeaf7");
	translate(width/2,height/2)

  fill("#6a4c93")
  stroke("#6a4c93")
  ellipse(0,23,390,300)//領子	
  
  fill("#b5e48c")
  stroke("#b5e48c")
  ellipse(0,0,400,300)//臉	
  
  fill("#b5e48c")
  stroke("#b5e48c")
  rect(-10,-250,10,100)//天線
  
  fill("#b5e48c")
  stroke("#b5e48c")
  ellipse(-5,-250,30,30)//天線球
  
  fill("#b5e48c")
  stroke("#b5e48c")
  triangle(150, -80, 200, -150, 220, 20)//左耳朵 
  
  fill("#b5e48c")
  stroke("#b5e48c")
  triangle(-150, -80, -200, -150, -220, 20)//右耳朵
  
  fill(255)
  stroke(255)
  ellipse(0,-70,70,50)//中間眼
  fill(255)
  stroke(255)
  ellipse(-90,-70,70,50)//左眼睛
  fill(255)
  stroke(255)
  ellipse(90,-70,70,50)//右眼睛
  
  fill(0)
  stroke(0)
  ellipse(0+mouseY/20,-70,20,20)//中間眼睛黑
  fill(0)
  stroke(0)
  ellipse(-90+mouseY/20,-70,20,20)//左眼睛黑
  fill(0)
  stroke(0)
  ellipse(90+mouseY/20,-70,20,20)//右眼睛黑
  
  fill(0)
  stroke(0)
  rect(-115,40,240,5)//嘴巴線
  fill(0)
  stroke(0)
  ellipse(0,40,50,30+mouseY/10)//嘴巴
  fill(0)
  stroke(0)
  ellipse(-115,40,15,15)//嘴巴左
  fill(0)
  stroke(0)
  ellipse(120,40,15,15)//嘴巴右

  noFill()
pop()

  function mousePressed()
 {
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
}
  }