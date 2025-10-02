(function(){
  // année dynamique
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // thème clair/sombre (persisté)
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');

  const toggle = document.getElementById('themeToggle');
  if (toggle){
    toggle.addEventListener('click', () => {
      root.classList.toggle('light');
      const mode = root.classList.contains('light') ? 'light' : 'dark';
      localStorage.setItem('theme', mode);
    });
  }
})();

function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  // mini-validation côté client
  const email = data.get('email');
  if (!/^\S+@\S+\.\S+$/.test(email)){
    alert("Email invalide");
    return false;
  }
  alert("Message envoyé (simulation). En prod, relie ce formulaire à un service d’email ou une API.");
  form.reset();
  return false;
}
