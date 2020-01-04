function registCheck()
{
 var textvalue = document.getElementsByName('phone')[0].value;
	if(textvalue.length !=10)
	{
		document.getElementById('phone').innerHTML='長度必須為10字元';
		}else{
		for(var i=0;i<textvalue.length;i++){
		if(textvalue.substr(i,1)<"0"||
		textvalue.substr(i,1)>"9"){
		document.getElementById('phone').innerHTML='必須全部是數字';
		}
	}
		var textvalue1=document.getElementsByName('password1')[0].value;
		if(textvalue1.length<8){
		document.getElementById('password1msg').innerHTML="長度不能小於8個字元";
		}
		var textvalue2=document.getElementsByName('password2')[0].value;
		if(textvalue1.length<8){
		document.getElementById('password2msg').innerHTML="長度不能小於8個字元";
		}	else{
		if(textvalue1!=textvalue2){
		document.getElementById('password2msg').innerHTML='兩次密碼必須相同';
		  }
		}
		var textvalue3=document.getElementsByName('username')[0].value;
		if(textvalue3.length>15){
		document.getElementById('usernamemsg').innerHTML='長度不能超過15字元';
		}
	}
}
function clearmsg(){
	document.getElementById('phone').innerHTML='';
}
