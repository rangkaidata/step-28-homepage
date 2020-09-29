'use strict';
// step 2: login
function Login(){
	// step 2.1:
	var html;
	var url=global_url+'login/';
	var user_name;
	var user_password;

	// step : HTML
	function formulir(){
		menu.style.display='none';
		btn.style.display='none';
		metode.style.display='none';
		sub_menu.style.display='none';
		
		/* --- app screen --- */
		main.style.width='500px';
		main.style.display='block';
		main.style.margin='0 auto';
		main.style.border='2px solid gray';
		main.style.borderRadius='10px';
		main.style.padding='30px';
		main.style.marginTop='10px';
		
		modul.innerHTML='Login';
		modul.innerHTML="&#128272; Login";
		modul.style.textAlign="center";
		metode.style.textAlign="center";

		html='<button onclick="objLogin.createData();">Login</button>'
			+'<button onclick="gotoRegister();">Register</button>'
			+'<button onclick="gotoForgot();">Forgot</button>';
		// btn.innerHTML=html;
		html='<form autocomplete="off">'
			+'<ul>'
			+'<li>&#128100; <label>User Name</label> : '
			+'<input type="text" id="user_name">'
			+'<li>&#128273; <label>Password</label> : '
			+'<input type="password" id="user_password">'
			+'<li><button type="button" id="button_create" onclick="objLogin.createData()">&#128275; Log In</button></li>'
			+'</ul>'
			+'</form>'
			+'<hr><p>Belum punya akun? <button onclick="gotoRegister()">Buat Akun Baru</button></p>'
			+'<p>Lupa password? <button onclick="gotoForgot()">Reset password</button></p>'
		app.innerHTML=html;
		
		user_name=document.getElementById('user_name');
		user_password=document.getElementById('user_password');
		user_name.focus();
	}
	
	// step 2.3:
	function createData(){
		msg.innerHTML=pleaseWait();
		var obj={
			"user_name":user_name.value,
			"user_password":user_password.value
		};
		loadXHR(url+'create.php',obj,createMessage);
	}
	
	// step 2.4:
	function createMessage(paket){
		if (paket.length==0){
			return messageBar('Server tidak terdapat API');
		}
		if (paket.err==0){
			sessionStorage.setItem("login_blok", paket.data.login_blok);
			sessionStorage.setItem("modul",'home');
			location.reload();
		}
		else{
			msg.innerHTML=paket.msg;
	    }
	}

	// global function	
	this.createData=function(){
		createData();
	}

	// initialize
	formulir();
}

function gotoRegister(){
	load_modul('register');
}

function gotoForgot(){
	alert('forgot');
}
