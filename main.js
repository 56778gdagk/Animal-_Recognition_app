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
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);

        radom_number_r = Math.floor(Math.random() * 255) + 1 ;
        radom_number_g = Math.floor(Math.random() * 255) + 1 ;
        radom_number_b = Math.floor(Math.random() * 255) + 1 ;

        document.getElementById("result_label").innerHtml='I can hear - ' + results[0].label;
        document.getElementById("result_label").innerHtml='I can hear - ' + (results[0].confidence * 100).toFixed(2);
    }
}