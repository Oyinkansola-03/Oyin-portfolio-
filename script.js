document.addEventListener('DOMContentLoaded', () => {
  // Project Data
  const projects = {
    'digital-jumi': {
      title: 'Digital Jumi',
      category: 'AI Animation · Visual Storytelling',
      description: 'Turning a static VA community flyer into an audience-focused animated story. Creative approach: turning information into a relatable question: “After learning, how do I get the experience?”',
      role: 'Developed the animation from the provided flyer and translated the original information into a short visual story.',
      process: 'Flyer → Audience Question → Story Concept → AI Visuals → Animation → Final Edit',
      tools: 'Flow · Gemini · CapCut'
    },
    'va-simulation': {
      title: 'VA Simulation Animation',
      category: 'Animation · Simulation',
      description: 'An animation created to explore the concept of simulation-based learning and practical experience.',
      role: 'Animation design and execution.',
      process: 'Concept → Visualization → Animation',
      tools: 'Various'
    },
    'marlowe-video': {
      title: 'Marlowe Video',
      category: 'AI Concept',
      description: 'An AI operating system concept developed for travel professionals.',
      role: 'Concept development.',
      process: 'Concept exploration',
      tools: 'AI Tools'
    },
    'experiments': {
      title: 'Experiments / Showreel',
      category: 'Various',
      description: 'A collection of experiments in animation, visual storytelling, motion, and UGC-style brand content.',
      role: 'Exploration and creation.',
      process: 'Experimental production',
      tools: 'Various'
    }
  };

  // Mobile Nav
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
    });
  });

  // Modal
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.getElementById('close-modal');

  const openModal = (id) => {
    const project = projects[id];
    if (!project) return;
    modalBody.innerHTML = `
      <h3 id="modal-title">${project.title}</h3>
      <p class="project-meta">${project.category}</p>
      <p>${project.description}</p>
      <p><strong>Role:</strong> ${project.role}</p>
      <p><strong>Process:</strong> ${project.process}</p>
      <p><strong>Tools:</strong> ${project.tools}</p>
      <div class="media-placeholder">Project media will be added soon.</div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
  };

  document.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.project));
  });

  closeModal.addEventListener('click', closeProjectModal);
  window.addEventListener('click', (e) => {
    if (e.target === modal) closeProjectModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // Scroll to Top
  const scrollToTop = document.getElementById('scroll-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTop.style.display = 'block';
    } else {
      scrollToTop.style.display = 'none';
    }
  });
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Form Validation
  const contactForm = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        feedback.textContent = 'Please fill out all fields.';
        feedback.style.color = 'red';
      } else if (!emailRegex.test(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.style.color = 'red';
      } else {
        feedback.textContent = 'Message sent successfully!';
        feedback.style.color = 'green';
        contactForm.reset();
      }
    });
  }
});
