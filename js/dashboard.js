document.addEventListener('DOMContentLoaded', () => {
  const tips = [
    'Compare universities based on both tuition fees and career opportunities.',
    'Apply to scholarships early — most deadlines fall months before the semester starts.',
    "Your coordination score isn't the only factor. Check each major's specific requirements too.",
    'Visit the housing page before results day so you already know your options nearby.',
    "A private university isn't always more expensive once you factor in scholarships.",
    "Talk to current students of a major before committing — their day-to-day view is more useful than a prospectus.",
    'Keep a shortlist of 5–6 universities: 2 ambitious, 2 realistic, 2 safe.'
  ];

  const tipEl = document.getElementById('dailyTip');
  if (tipEl) {
    const dayIndex = new Date().getDate() % tips.length;
    tipEl.textContent = tips[dayIndex];
  }

  const welcomeEl = document.querySelector('.welcome-message');
  try {
    const profile = JSON.parse(localStorage.getItem('newstep_profile') || 'null');
    if (welcomeEl && profile && profile.fullName) {
      const firstName = profile.fullName.trim().split(' ')[0];
      welcomeEl.textContent = `Good to see you, ${firstName}.`;
    }
  } catch (err) { /* no saved profile yet */ }
});