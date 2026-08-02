document.addEventListener('DOMContentLoaded', () => {
  const chatWindow = document.getElementById('chatWindow');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const quickReplies = document.getElementById('quickReplies');

  const rules = [
    {
      test: /coordinat/i,
      reply: "The coordination system (تنسيق) ranks students by total score and assigns university seats by faculty demand. Public university minimums shift a bit every year depending on how many students apply to each faculty, so treat last year's numbers as a guide, not a guarantee."
    },
    {
      test: /scholarship/i,
      reply: "Most scholarships fall into two types: fully funded (tuition, housing and sometimes a stipend) and partially funded (tuition only, or a percentage off). Check the Scholarships page — you can filter by country and funding type. Deadlines usually open 6–9 months before the semester starts, so apply early."
    },
    {
      test: /major|grade|score|engineering|medicine|computer/i,
      reply: "It depends on your certificate and total score. Engineering and Medicine usually need the highest coordination scores in public universities, while private universities set their own minimums and often accept a wider range. Fill in your profile and check the Universities page — you can filter by budget and type."
    },
    {
      test: /housing|apartment|rent|dorm/i,
      reply: "The Housing page lists real listings by city with prices and ratings, and you can filter by budget and type — shared apartment, studio, or university dorm. Most students in Cairo and Alexandria pay between 2,500–6,000 EGP/month for a shared place."
    },
    {
      test: /budget|cost|expense|money/i,
      reply: "Use the Budget Calculator — enter your monthly allowance and your expected rent, bills, and food costs, and it'll show you what's realistic and where you might be tight."
    },
    {
      test: /private|public/i,
      reply: "Public universities are cheaper but admission is based purely on your coordination score. Private universities cost more but usually have their own entry requirements and more flexibility on major changes later on."
    },
    {
      test: /hi|hello|hey/i,
      reply: "Hey! Ask me about majors, scholarships, housing, or how coordination works — happy to help."
    }
  ];

  const fallback = "I'm not totally sure about that one yet. Try asking about majors, scholarships, coordination, housing, or your budget — those are the areas I know best.";

  quickReplies.addEventListener('click', (e) => {
    const btn = e.target.closest('.quick-btn');
    if (!btn) return;
    sendMessage(btn.dataset.q);
  });

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    sendMessage(text);
    chatInput.value = '';
  });

  function sendMessage(text) {
    addBubble(text, 'user');
    const typingEl = addBubble('Typing...', 'bot', true);

    const delay = 500 + Math.random() * 500;
    setTimeout(() => {
      typingEl.remove();
      const rule = rules.find(r => r.test.test(text));
      addBubble(rule ? rule.reply : fallback, 'bot');
    }, delay);
  }

  function addBubble(text, who, isTyping = false) {
    const wrap = document.createElement('div');
    wrap.className = `message ${who}${isTyping ? ' typing' : ''}`;
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = text;
    wrap.appendChild(bubble);
    chatWindow.appendChild(wrap);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return wrap;
  }
});