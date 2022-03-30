//get all Answer images
  images= ["magic/magic8ball_1.png","magic/magic8ball_2.png","magic/magic8ball_3.png","magic/magic8ball_4.png",
  "magic/magic8ball_5.png","magic/magic8ball_6.png","magic/magic8ball_7.png","magic/magic8ball_8.png",
  "magic/magic8ball_9.png","magic/magic8ball_10.png","magic/magic8ball_11.png","magic/magic8ball_12.png",
  "magic/magic8ball_13.png","magic/magic8ball_14.png","magic/magic8ball_15.png","magic/magic8ball_16.png",
  "magic/magic8ball_17.png","magic/magic8ball_18.png","magic/magic8ball_19.png","magic/magic8ball_20.png"]
function ask(){
      if(question.value.length<1){
          //Display message if did not enter question
      document.getElementById("error").innerHTML="Enter Your Question Please"
      }
      else
      {
    //Get a random index
    random_index = Math.floor(Math.random()*images.length);
    //Display the image
   document.getElementById('show_image').src = `${images[random_index]}`
    //Clear the question input field
    document.getElementById("question").value="";
   // Clear the error msg
    document.getElementById("error").innerHTML="";
}
}