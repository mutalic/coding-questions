let numberOfClicks = 0;
document.getElementById('click-btn').addEventListener('click', function(){
    numberOfClicks++;
    document.getElementById('clicks').innerHTML = numberOfClicks;
})