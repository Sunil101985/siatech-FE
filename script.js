(() => {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Open menu');
    }));
  }

  const chatWidget = document.querySelector('.live-chat-widget');
  if (chatWidget) {
    const toggle = chatWidget.querySelector('.live-chat-toggle');
    const panel = chatWidget.querySelector('.live-chat-panel');
    const close = chatWidget.querySelector('.chat-close');
    const input = chatWidget.querySelector('#live-chat-input');
    const form = chatWidget.querySelector('#live-chat-form');
    const setOpen = open => {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      if (open && input) input.focus();
    };
    toggle.addEventListener('click', () => setOpen(panel.hidden));
    close.addEventListener('click', () => setOpen(false));
    chatWidget.querySelectorAll('[data-chat-message]').forEach(button => {
      button.addEventListener('click', () => {
        const msg = button.getAttribute('data-chat-message') || '';
        const url = 'https://wa.me/918888088660?text=' + encodeURIComponent('Hello Siatech Solutions, ' + msg);
        window.open(url, '_blank', 'noopener');
      });
    });
    if (form) form.addEventListener('submit', event => {
      event.preventDefault();
      const message = (input.value || '').trim();
      if (!message) { input.focus(); return; }
      const url = 'https://wa.me/918888088660?text=' + encodeURIComponent('Hello Siatech Solutions, I have a question: ' + message);
      window.open(url, '_blank', 'noopener');
    });
  }


  // Home page course catalogue: four cards per step, with an accessible detail modal.
  const catalog = window.SIATECH_COURSES || [];
  const groups = { software: catalog.filter(c => c.category === 'software'), cloud: catalog.filter(c => c.category === 'cloud') };
  const positions = { software: 0, cloud: 0 };
  const pageSize = 4;
  const renderCourses = key => {
    const grid = document.getElementById(key === 'software' ? 'software-course-grid' : 'cloud-course-grid');
    if (!grid) return;
    const list = groups[key] || [];
    const pageCount = Math.ceil(list.length / pageSize);
    const start = positions[key] * pageSize;
    grid.innerHTML = list.slice(start, start + pageSize).map(course => `
      <button class="home-course-card" type="button" data-course-id="${course.id}" aria-label="View details for ${course.title.replace(/&/g,'&amp;').replace(/"/g,'&quot;')}">
        <span class="home-course-image"><img src="${course.image}" alt="" loading="lazy"></span>
        <span class="home-course-body"><span class="home-course-category">${course.kind}</span><span class="home-course-title">${course.title}</span><span class="home-course-desc">${course.description}</span><span class="home-course-more"><span>View course details</span><span>↗</span></span></span>
      </button>`).join('');
    const count = document.querySelector(`[data-carousel-count="${key}"]`);
    if (count) count.textContent = `${String(positions[key] + 1).padStart(2,'0')} / ${String(pageCount).padStart(2,'0')}`;
    const prev = document.querySelector(`[data-carousel-prev="${key}"]`);
    const next = document.querySelector(`[data-carousel-next="${key}"]`);
    if (prev) prev.disabled = positions[key] === 0;
    if (next) next.disabled = positions[key] >= pageCount - 1;
  };
  ['software','cloud'].forEach(key => {
    renderCourses(key);
    document.querySelector(`[data-carousel-prev="${key}"]`)?.addEventListener('click', () => { positions[key] = Math.max(0, positions[key] - 1); renderCourses(key); });
    document.querySelector(`[data-carousel-next="${key}"]`)?.addEventListener('click', () => { positions[key] = Math.min(Math.ceil(groups[key].length / pageSize) - 1, positions[key] + 1); renderCourses(key); });
  });
  const modal = document.getElementById('course-detail-modal');
  const closeCourseModal = () => { if (modal) modal.hidden = true; document.body.classList.remove('course-modal-open'); };
  const openCourseModal = course => {
    if (!modal || !course) return;
    document.getElementById('course-modal-title').textContent = course.title;
    document.getElementById('course-modal-description').textContent = course.description;
    document.getElementById('course-modal-category').textContent = course.kind;
    const img = document.getElementById('course-modal-image'); img.src = course.image; img.alt = course.title;
    document.getElementById('course-modal-modules').innerHTML = course.modules.map(m => `<li>${m}</li>`).join('');
    document.getElementById('course-modal-outcome').textContent = course.outcome;
    modal.hidden = false; document.body.classList.add('course-modal-open');
    modal.querySelector('[data-course-modal-close]')?.focus();
  };
  document.addEventListener('click', event => {
    const card = event.target.closest('[data-course-id]');
    if (card) openCourseModal(catalog.find(c => c.id === card.dataset.courseId));
    if (event.target.closest('[data-course-modal-close]')) closeCourseModal();
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal && !modal.hidden) closeCourseModal(); });

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const subject = encodeURIComponent(`[Siatech Solutions] ${d.get('interest')} enquiry — ${d.get('name')}`);
    const body = encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone') || 'Not provided'}\nInterest: ${d.get('interest')}\n\nMessage:\n${d.get('message')}`);
    if (status) status.textContent = 'Opening your email application. Please review and send the message there.';
    window.location.href = `mailto:info@siatechsolutions.com?subject=${subject}&body=${body}`;
  });
})();
// Siatech careers hero: six automatic slides with manual dot navigation.
(() => {
  const slider = document.querySelector('.careers-slider');
  if (!slider) return;
  const slides = [...slider.querySelectorAll('.careers-slide')];
  const dots = [...slider.querySelectorAll('.careers-slide-dots button')];
  if (!slides.length) return;
  let active = 0;
  let timer;
  const show = (index) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === active));
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === active);
      dot.setAttribute('aria-selected', i === active ? 'true' : 'false');
    });
  };
  const start = () => { clearInterval(timer); timer = setInterval(() => show(active + 1), 4500); };
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); start(); }));
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', start);
  slider.addEventListener('focusin', () => clearInterval(timer));
  slider.addEventListener('focusout', start);
  show(0); start();
})();

// V8 About page: accessible community-focus tabs.
(() => {
  const tabs = [...document.querySelectorAll('[data-world-tab]')];
  const title = document.getElementById('world-panel-title');
  const description = document.getElementById('world-panel-description');
  const image = document.getElementById('world-panel-image');
  if (!tabs.length || !title || !description || !image) return;
  const content = {
    bipoc: {
      title: 'BIPOC Entrepreneurship',
      description: 'We believe entrepreneurship and technology should be accessible to people from different backgrounds. We support inclusive opportunity through learning, knowledge sharing and respect for the ideas and experiences each person brings.',
      image: 'assets/about/world-bipoc.jpg', alt: 'Professionals exchanging ideas in a collaborative meeting', flag: false
    },
    pride: {
      title: 'Celebrating Pride',
      description: 'We believe everyone deserves dignity, respect and the freedom to contribute as themselves. Our commitment is to foster a welcoming environment that respects people’s identities, backgrounds and perspectives.',
      image: 'assets/about/indian-tricolour.jpg', alt: 'Indian national flag with the Ashoka Chakra', flag: true
    },
    sustainable: {
      title: 'Simply Sustainable',
      description: 'We encourage thoughtful technology choices that consider efficiency, maintainability and long-term impact. We aim to reduce unnecessary complexity and help customers build solutions that are fit for purpose.',
      image: 'assets/about/world-sustainable.jpg', alt: 'Lush green forest representing sustainability', flag: false
    },
    neurodiversity: {
      title: 'Neurodiversity Acceptance',
      description: 'Different ways of thinking can strengthen teams and create new perspectives. We value accessible communication, respect individual working styles and believe people should have opportunities to contribute their strengths.',
      image: 'assets/about/world-neurodiversity.jpg', alt: 'Colleagues collaborating around a computer', flag: false
    }
  };
  const activate = (tab) => {
    const item = content[tab.dataset.worldTab];
    if (!item) return;
    tabs.forEach((candidate) => {
      const active = candidate === tab;
      candidate.classList.toggle('active', active);
      candidate.setAttribute('aria-selected', String(active));
      candidate.tabIndex = active ? 0 : -1;
    });
    title.textContent = item.title;
    description.textContent = item.description;
    image.src = item.image;
    image.alt = item.alt;
    image.classList.toggle('flag-image', item.flag);
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      tabs[next].focus();
      activate(tabs[next]);
    });
  });
})();

// About Us: reveal one principle detail at a time when a visitor selects a card.
(() => {
  const buttons = [...document.querySelectorAll('[data-pillar-target]')];
  const region = document.getElementById('principle-details');
  if (!buttons.length || !region) return;
  const cards = [...region.querySelectorAll('.about-detail-card')];
  buttons.forEach((button) => button.addEventListener('click', () => {
    const target = button.dataset.pillarTarget;
    const wasOpen = button.getAttribute('aria-expanded') === 'true';
    buttons.forEach((item) => { item.setAttribute('aria-expanded', String(item === button && !wasOpen)); });
    cards.forEach((card) => { card.hidden = wasOpen || card.id !== target; });
    region.hidden = wasOpen;
    if (!wasOpen) { region.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }));
})();
