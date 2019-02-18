		$(function(){
			
			window.onload=function(){
		 	
		 	console.log("123456");
		 	
		 }
		$(".boy_f").mouseover( function(){
			$(".boy_t").show();
			$(".girl_t").hide();
		})
			
			$(".girl_f").mouseover(function(){
				
				$(".girl_t").show();
				$(".boy_t").hide();
			})
		
		$(".Tab_title :first").mouseover(function(){
			console.log("666")
			$(".modlit").show().siblings().hide();
			
			
		})
		
				$(".Tab_title :last").mouseover(function(){
			$(".school").show().siblings().hide();
			
			
		})
		
		$(".Tab_title :nth-child(2)").mouseover(function(){
			$(".acient").show().siblings().hide();
			
			
		})
		

		
		
		})
		




