$(document).ready(function(){
	$.ajax({
		type:'GET',
		url: 'http://0.0.0.0:3000/auth'
	}).success(function(data){
		 console.log(data);
	});
})