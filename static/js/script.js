$(document).ready(function () {

	$("p").hover(function(){
		$(this).css("color", "yellow");
	}, 
	function(){
		$(this).css("color", "red");
	});
	
	$("#new_project_button").hover(function(){
		$(this).css("background-color", "#565656");
		$("#new_project_text").css("display", "block");
	},
	function(){
		$(this).css("background-color", "#4ad0e3");
		$("#new_project_text").css("display", "none");
	});
	
	$("#new_project_button").click(function (){
		{ { return redirect(url_for("newproject")) } }
	});
});