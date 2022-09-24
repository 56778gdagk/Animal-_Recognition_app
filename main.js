function detect_sound()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OQZh8MyTU/',modelReady);
}    

function modelReady()
{
    classifier.classify()
}

function gotResults()
{
    
}