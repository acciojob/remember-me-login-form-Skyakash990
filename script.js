document.getElementById("submit").addEventListener("click",(e)=>{
	e.preventDefault();

	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	let remember=document.getElementById("checkbox").checked;

	alert(`Logged in as ${username}`);
	if(remember){
		localStorage.setItem("username",username);
		localStorage.setItem("password",password);
	}
	localstorage.removeItem("username");
	localstorage.removeItem("password");
	
	
})
let existing=document.getElementById("existing");
	existing.addEventListener("click",()=>{
		let uname=localStorage.getItem("username");
		alert(`Logged in as ${uname}`);
	})