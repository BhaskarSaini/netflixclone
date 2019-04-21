function changestyle1() {
	var a=document.getElementById("box1").style.opacity="1.0";
	var b=document.getElementById("box2").style.opacity="0.7";
	var c=document.getElementById("box3").style.opacity="0.7";
}
function changestyle2() {
	var a=document.getElementById("box1").style.opacity="0.7";
	var b=document.getElementById("box2").style.opacity="1.0";
	var c=document.getElementById("box3").style.opacity="0.7";
}
function changestyle3() {
	var a=document.getElementById("box1").style.opacity="0.7";
	var b=document.getElementById("box2").style.opacity="0.7";
	var c=document.getElementById("box3").style.opacity="1.0";
}
function login () {
	 var a=document.getElementById("text1");
	 var b=document.getElementById("text2");	
	 if(a.value.length<9 && b.value.length<5)
	 {	 
		 alert ("Please Fill The E-mail & Password With Atleast 9 & 5 Characters");
		 return false;
	 } 		 
}

