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
    if(message.length<3)
    throw new Error("le message est trop court veuillez ressayer");
    else return true
}

    
     emailjs.init("me5AeYBZme7zQisSl"); 
    

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
    emailjs.send("myportfolio-ID007", "template_esklwi9", {
            name: nom,
            email: mail,
            message: msg
        })
    .then(() => {
            alert("Message envoyé avec succès !");
    balisenom.value = "";
    baliseEmail.value = "";
    baliseMessage.value = "";})
    .catch((error) => {
            const errorDiv = document.getElementById("error");
            errorDiv.textContent = "Erreur d’envoi : " + error.text;
        });
    
  
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
// Mode sombre ou clair
let darkMode=true; // par défaut le mode sombre est activé

const modeButtons = document.querySelectorAll('.mode');
// Fonction pour mettre à jour les icônes de TOUS les boutons
function updateIcons() {
    modeButtons.forEach(button => {
        const sunIcon = button.querySelector('.fa-sun');
        const moonIcon = button.querySelector('.fa-moon');
        
        if (darkMode) {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    });
}

// Ajouter l'événement click à TOUS les boutons
modeButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (darkMode) {
            document.body.classList.add('light-mode');
            darkMode = false;
        } else {
            document.body.classList.remove('light-mode');
            darkMode = true;
        }
        
        // Mettre à jour les icônes de tous les boutons
        updateIcons();
    });
});

// Initialiser les icônes au chargement
updateIcons();

window.addEventListener("scroll", () => {
    if (!document.body.classList.contains("light-mode")) return;

    const scrollY = window.scrollY;

    // Fade progressif (augmente jusqu'à 1 pour disparition complète)
    const opacity = Math.min(scrollY / 500, 1);
    document.documentElement.style.setProperty("--overlay-opacity", opacity);

    // Zoom-out appliqué au ::before (réduit jusqu'à 0.85)
    const scale = Math.max(1 - scrollY / 1500, 0.85);
    document.documentElement.style.setProperty("--scale-overlay", scale);
});



  