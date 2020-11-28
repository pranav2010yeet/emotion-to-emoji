Webcam.set({
    height:300,
    width:300,
    image_format:"jpeg",
    jpeg_quality:90
})

Webcam.attach("#camera")

function capture(){

    Webcam.snap(function(selfie){

        document.getElementById("Snapshot").innerHTML=`<img src=${selfie} id="capture_photo" >`
    })
    
}
console.log("ml5version="+ml5.version)
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NPitMyz3p/model.json",loaded)

function loaded(){

    console.log("modelhasloaded" )
}

function speak(){

    var speach=window.speechSynthesis
    var speakdata1="the first prediction is "+prediction1
    var speakdata2="the second preditction is"+prediction2
    var say_this=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    speech.speak(say_this)
}