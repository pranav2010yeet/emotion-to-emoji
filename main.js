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

    var speech=window.speechSynthesis
    var speakdata1="the first prediction is "+prediction1
    var speakdata2="the second preditction is"+prediction2
    var say_this=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    speech.speak(say_this)
}

function Identify(){

    var snapshot=document.getElementById("capture_photo")
    classifier.classify(snapshot, getresult)

    
}

function getresult(error,results){
    
    if (error) {
        console.log(error)
        
    }
    else  {
        console.log(results)

        prediction1=results[0].label
        prediction2=results[1].label
        console.log("prediction1="+ prediction1)
        console.log("prediction2="+ prediction2)

        document.getElementById("emotion1").innerHTML=prediction1
        document.getElementById("emotion2").innerHTML=prediction2
        speak()
        
        if (prediction1=="angry"){
            document.getElementById("emoji1").innerHTML="&#128545;"
        }
        if ( prediction1=="sad"){
            document.getElementById("emoji1").innerHTML="&#128532;"
        }
        if (prediction1=="HAppy"){
            document.getElementById("emoji1").innerHTML="&#128522;"

        
        }

        if (prediction1=="surprised"){
            document.getElementById("emoji1").innerHTML="&#128562;"
        }

        if (prediction1=="smiling"){
            document.getElementById("emoji1").innerHTML="&#128512;"
        }

        if (prediction2=="angry"){
            document.getElementById("emoji2").innerHTML="&#128545;"
        }
        if ( prediction2=="sad"){
            document.getElementById("emoji2").innerHTML="&#128532;"
        }
        if (prediction2=="HAppy"){
            document.getElementById("emoji2").innerHTML="&#128522;"

        
        }

        if (prediction2=="surprised"){
            document.getElementById("emoji2").innerHTML="&#128562;"
        }

        if (prediction2=="smiling"){
            document.getElementById("emoji12").innerHTML="&#128512;"
        }
    }

}
