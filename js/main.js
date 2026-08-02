document.addEventListener('DOMContentLoaded', () => {

  const contactForm = document.querySelector('.contact-box form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Message sent ✓';
      btn.disabled = true;
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 2500);
    });
  }

  document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  const profileForm = document.getElementById('profileForm');
  if (profileForm) initProfileForm();

});

function initProfileForm() {
  const fields = ['fullName', 'email', 'age', 'governorate', 'country', 'certificate', 'budget', 'field'];
  const progressBar = document.getElementById('profileProgress');
  const saveBtn = document.getElementById('saveProfile');
  const successMsgs = document.querySelectorAll('#successMessage');

  function updateProgress() {
    let filled = 0;
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (el.tagName === 'SELECT') {
        if (el.selectedIndex > 0 && el.value) filled++;
      } else if (el.value.trim() !== '') {
        filled++;
      }
    });
    const pct = Math.round((filled / fields.length) * 100);
    if (progressBar) {
      progressBar.style.width = pct + '%';
      progressBar.textContent = pct + '%';
    }
    return pct;
  }

  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(el.tagName === 'SELECT' ? 'change' : 'input', updateProgress);
  });

  try {
    const saved = JSON.parse(localStorage.getItem('newstep_profile') || 'null');
    if (saved) {
      fields.forEach(id => {
        const el = document.getElementById(id);
        if (el && saved[id]) el.value = saved[id];
      });
    }
  } catch (err) { /* ignore corrupted storage */ }

  updateProgress();

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const data = {};
      fields.forEach(id => {
        const el = document.getElementById(id);
        data[id] = el ? el.value : '';
      });
      try {
        localStorage.setItem('newstep_profile', JSON.stringify(data));
      } catch (err) { /* storage unavailable, still show confirmation */ }

      const pct = updateProgress();
      successMsgs.forEach(msg => {
        msg.classList.remove('d-none');
        msg.textContent = pct === 100
          ? '✓ Your profile has been saved successfully.'
          : `✓ Saved — ${pct}% complete. Fill in the rest for better matches.`;
      });

      setTimeout(() => {
        successMsgs.forEach(msg => msg.classList.add('d-none'));
      }, 4000);
    });
  }
}