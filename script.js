const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('project-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Projet Focus’Consulting — ${data.get('need')}`);
  const body = encodeURIComponent(`Bonjour,\n\nJe m'appelle ${data.get('name')}.\n\nMon besoin : ${data.get('need')}\n\n${data.get('message')}\n\nVous pouvez me répondre à : ${data.get('email')}`);
  const note = document.getElementById('form-note');
  note.textContent = 'Votre demande est prête : choisissez votre messagerie pour l’envoyer.';
  note.classList.add('success');
  window.location.href = `mailto:focusconsultingfirst@gmail.com?subject=${subject}&body=${body}`;
});
