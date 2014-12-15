$(document).ready(function(){
	$.ajax({
		url: 'http://172.160.2.69:3000/auth',
		type:'GET'
	}).success(function(data){
		 console.log(data);
	});
})