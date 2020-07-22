console.log("ravi shankar bhatt");


window.onload = executeProcess();

setInterval(function() {
    executeProcess();
}, 1800 * 1000);


function executeProcess(){

	if(document.getElementById('nav-xshop')!= null){
		var actualpath = window.location.toString();
		
		if( !((actualpath.includes('/gp/browse.html')) && (actualpath.includes('nav_cs_gc'))) ){
			var xshop = document.getElementById('nav-xshop');	
			var arr = xshop.getElementsByClassName("nav-a")
			for(var i = 0 ; i<arr.length ; i++){
				if(arr[i].innerText == 'Gift Cards')
					arr[i].click();
			}
		}

		var timerId = setInterval(function (){console.log('wait for some time to load the page');},1000);
		
		setTimeout(function(){
     		clearInterval(timerId); //clear above interval after 5 seconds
		},2000)


		var path = window.location.toString()
		if(path.includes('/gp/browse.html') && path.includes('nav_cs_gc')){
			var div = document.getElementById('asv-gclp-balance-widget-desktop');
			var GBbalance = div.getElementsByClassName('a-size-medium a-color-success')[0].innerText;
			console.log(GBbalance);
		}
	}

}