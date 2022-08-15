Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");
webcam.attach('#camera')

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '">'
    }
    )
}

console.log('ml5 version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UUG7jqlVe/model.json',model_loaded);

function model_loaded(){
    console.log("ml5 library has been loaded successfully");

}

function check(){
    img = document.getElementById("captured_img")
    classifier.classify(img,gotresults);
}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_character_name").innerHTML = results[0].label;
        document.getElementById("result_character_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}
