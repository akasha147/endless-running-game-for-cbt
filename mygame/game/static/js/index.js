function health_bar_handler()
{

	var health_bar_element=document.getElementById("health_bar_element");
	var initial_width=parseInt(health_bar_element.offsetWidth);
	var height=parseInt(health_bar_element.offsetHeight);
	var current_width=initial_width;

	var level=1;
	var time_interval=200;

	var id = setInterval(health_bar_decrement, time_interval/level);

	function health_bar_decrement()
	{
         if(current_width<=0)
         {
         
         	current_width=initial_width;
         	
         }
         else
         {
         	current_width--;
         	if(current_width<0){
         		current_width=0;
         	}
         
         	health_bar_element.style.width=current_width+"px";

         }
        
	}

	console.log(height);

}