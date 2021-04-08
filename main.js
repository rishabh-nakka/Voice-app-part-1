var speech_recognition=window.webkitSpeechRecognition;
var recognition=new speech_recognition();
function record_voice(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    }
