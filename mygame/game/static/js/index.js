//Game Variables
var game={level:1};
var current_score=0;
var update_frequency=500;
var jump_score_increment=10;
var time_interval_for_health=3000;
var jump_speed=2;
var jump_height=80;

//Game Elements
var avatar_element;
var health_bar_element;

//Avatar variables
var avatar_intial_position;
var avatar_current_position;

//HealthBar variables
var health_bar_initial_width;
var health_bar_current_width;


//Score_updation
var score_handler_variable={
    
    //continous increment(used in setInterval)
	score_update: function(){
			
		current_score=current_score+game.level;
    	var score_element  = document.getElementById("score-number");
     	score_element.innerHTML=current_score;
    
    },

    //increase the score with given value
    increase_score:function(value){
          
        current_score=current_score+value;
    }
}

//avatar_animation
function avatar_animate(){

    var jumping_action=null;
	var change_in_height=parseInt(0);
    
    //jumping_action
    this.avatar_jump=function(jump_height){

       //console.log(typeof(jump_height));

		jumping_action=setInterval(function(){jump_up(jump_height);},jump_speed);
		
		jump_up=function(jump_height){
            
            //console.log(change_in_height);
	        change_in_height++;
			if(parseInt(change_in_height)==parseInt(jump_height))
			{

			    change_in_height=0;
			    clearInterval(jumping_action);
			    jumping_action=setInterval(function(){jump_down(jump_height);},jump_speed);

			}
			avatar_current_position--;
			avatar_element.style.top=avatar_current_position+"px";

		}

		jump_down=function(jump_height){
            
            //console.log(change_in_height);
	        change_in_height++;
			if(parseInt(change_in_height)==parseInt(jump_height))
			{

			    change_in_height=0;
			    clearInterval(jumping_action);
			    //game.level++;
	

			}
			avatar_current_position++;
			avatar_element.style.top=avatar_current_position+"px";

		}
    };
}
    

//health_bar_updation
var health_bar_handler={


    //continous decrement(used in setInterval)
	health_bar_update:function(){
		if(health_bar_current_width<=0)
         {
         
         	health_bar_current_width=health_bar_initial_width;
         	
         }
         else
         {
         	health_bar_current_width--;
         	if(health_bar_current_width<0){
         		health_bar_current_width=0;
         	}
         
         	health_bar_element.style.width=health_bar_current_width+"px";

         }
	}

}

//initialization of variables and hammer.js
document.addEventListener("DOMContentLoaded", function(event) {
    
    //setInterval for continous events(score and health bar)
	var score_updator=setInterval(score_handler_variable.score_update,update_frequency);
    var health_bar_updator=setInterval(health_bar_handler.health_bar_update,time_interval_for_health/game.level);

    //Intialization of avatar related variables
	avatar_element = document.getElementById("running-man");
	avatar_intial_position=parseInt(avatar_element.offsetTop);
	avatar_current_position=avatar_intial_position;

	//Intialization of healthBar related variables
	health_bar_element=document.getElementById("health_bar_element");
    health_bar_initial_width=parseInt(health_bar_element.offsetWidth);
    health_bar_current_width=health_bar_initial_width;

    //Hammer.js
    var mc = new Hammer(avatar_element);

	mc.on("panleft panright tap press", function(ev) {
         
        
        (new avatar_animate()).avatar_jump(jump_height);
        score_handler_variable.increase_score(jump_score_increment);
   	});

   	watch(game, "level", function(){

   	   clearInterval(score_updator);
   	   clearInterval(health_bar_updator);

   	   document.getElementById("level_display").innerHTML="LEVEL "+game.level;
   	   score_updator=setInterval(score_handler_variable.score_update,update_frequency);
       health_bar_updator=setInterval(health_bar_handler.health_bar_update,time_interval_for_health/game.level);
	
	});

});



