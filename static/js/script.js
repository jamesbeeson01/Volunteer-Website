$(document).ready(function(){
	$("p").hover(function(){
		$(this).css("color", "yellow");
	}, 
	function(){
		$(this).css("color", "red");
	});
	
	$("#new_project_button").hover(function(){
		$(this).css("background-color", "#565656");
	},
	function(){
		$(this).css("background-color", "#4ad0e3");
	});
	
	$("#new_project_button").onclick(function(){
		$("#new_project_form").css("display", "block");
	});
	
	$("#close_button").onclick(function(){
		$("#new_project_form").css("display", "none");
	});
});