
document.addEventListener("DOMContentLoaded",()=>{
 const form=document.querySelector("[data-auth-form]");if(!form)return;
 document.querySelectorAll("[data-password-toggle]").forEach(btn=>btn.onclick=()=>{const input=document.getElementById(btn.dataset.passwordToggle);input.type=input.type==="password"?"text":"password";btn.innerHTML=input.type==="password"?"<i class='fa-regular fa-eye'></i>":"<i class='fa-regular fa-eye-slash'></i>"});
 form.addEventListener("submit",e=>{e.preventDefault();const data=new FormData(form);const mode=form.dataset.authForm;if(mode==="register"){const pass=data.get("password");if(pass.length<6){toast("Password must be at least 6 characters","error");return}Store.set("nova_user",{name:data.get("name"),email:data.get("email"),password:pass});toast("Account created");location.href="login.html"}else{const saved=Store.user();if(!saved||saved.email!==data.get("email")||saved.password!==data.get("password")){toast("Demo login details do not match","error");return}toast("Welcome back");location.href="index.html"}});
});
function logout(){localStorage.removeItem("nova_user");toast("Logged out");setTimeout(()=>location.href="index.html",400)}
