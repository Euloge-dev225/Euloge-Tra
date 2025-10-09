let video=document.querySelector(".project-item2 video");
video.addEventListener("mouseenter",()=>{
    video.play();
});
video.addEventListener("mouseleave",()=>{
    video.pause();
    video.currentTime=0;
});

let video2=document.querySelector(".project-item3 video");
video2.addEventListener("mouseenter",()=>{
    video2.play();
});
video2.addEventListener("mouseleave",()=>{
    video2.pause();
    video2.currentTime=0;
});
function validerNom(nom){
    let regex = /^[a-zA-Z]+$/;
let resultat = regex.test(nom.trim());
if(!resultat || nom.length<=2)
  throw new Error(`le nom  ${nom} est invalid veuillez ressayer`);
else return true
}
function validerEmail(email){
    let regex=new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z]+\\.[a-zA-Z]{2,4}$");
    let resultat=regex.test(email);
    if(!resultat)
    throw new Error(`l'email ${email} est invalid veuillez ressayer`);
    else return true
}
function validerMessage(message){
    if(message.length<10)
    throw new Error("le message est trop court veuillez ressayer");
    else return true
}
const form=document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    try{
    const balisenom=document.getElementById("name");
    const baliseEmail=document.getElementById("email");
    const baliseMessage=document.getElementById("message");
    const nom = balisenom.value;
    const mail=baliseEmail.value;
    const msg=baliseMessage.value;
  validerNom(nom);
   validerEmail(mail);
   validerMessage(msg);
    balisenom.value = "";
    baliseEmail.value = "";
    baliseMessage.value = "";
  location.href = `mailto:euloge.tra16@gmail.com?subject=Message from
   ${encodeURIComponent(nom)}&body=${encodeURIComponent(msg)}`;
  
   }
  
   
   catch(error){
     const errorDiv = document.getElementById("error");
     if(errorDiv){
        new bootstrap.Toast(errorDiv, { delay: 3000 }).show();
     }
  errorDiv.textContent =error.message;
   }
   
});
const errorToast = document.getElementById("errorToast");
    if (errorToast) {
        new bootstrap.Toast(errorToast, { delay: 3000 }).show();
    }
    // Sélectionne tous les liens à l'intérieur de l'offcanvas
document.querySelectorAll('#offcanvasMenu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    // Récupère l'instance Bootstrap de l'offcanvas
    const offcanvasEl = document.getElementById('offcanvasMenu');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    
    // Ferme l'offcanvas si elle existe
    if(bsOffcanvas) bsOffcanvas.hide();
  });
});

  