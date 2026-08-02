document.addEventListener('DOMContentLoaded', () => {

  const listings = [
    {
      id: 1, title: 'Shared apartment near AUC New Cairo', city: 'Cairo', type: 'Shared Apartment',
      price: 4500, rating: 4.6, beds: 3,
      img: 'https://images.pexels.com/photos/6585628/pexels-photo-6585628.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: "A furnished 3-bedroom flat five minutes' walk from AUC's main gate. Shared kitchen and living room, weekly cleaning included, fast internet."
    },
    {
      id: 2, title: 'Studio in Zamalek', city: 'Cairo', type: 'Studio',
      price: 7200, rating: 4.8, beds: 1,
      img: 'https://images.pexels.com/photos/8082559/pexels-photo-8082559.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'A quiet studio on a tree-lined street, close to Cairo University and the metro. Fully furnished with a small kitchenette and AC.'
    },
    {
      id: 3, title: 'University dorm — Ain Shams', city: 'Cairo', type: 'Dorm',
      price: 1800, rating: 4.1, beds: 2,
      img: 'https://images.pexels.com/photos/4769481/pexels-photo-4769481.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Official Ain Shams University dorm room, shared with one roommate. Includes meals, laundry service, and a study hall on-site.'
    },
    {
      id: 4, title: 'Shared flat near Alexandria University', city: 'Alexandria', type: 'Shared Apartment',
      price: 3200, rating: 4.4, beds: 4,
      img: 'https://images.pexels.com/photos/7019013/pexels-photo-7019013.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Sea-breeze apartment ten minutes from the medical campus. Four bedrooms, shared kitchen, and a balcony overlooking the corniche.'
    },
    {
      id: 5, title: 'Studio in Smouha', city: 'Alexandria', type: 'Studio',
      price: 5000, rating: 4.5, beds: 1,
      img: 'https://images.pexels.com/photos/6312076/pexels-photo-6312076.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Modern studio in a well-connected neighborhood, close to tram lines and a short ride to most Alexandria campuses.'
    },
    {
      id: 6, title: 'Shared apartment near Mansoura University', city: 'Mansoura', type: 'Shared Apartment',
      price: 2600, rating: 4.3, beds: 3,
      img: 'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Popular with medical and engineering students. Walking distance from the faculty of medicine, with a shared study room.'
    },
    {
      id: 7, title: 'University dorm — Assiut University', city: 'Assiut', type: 'Dorm',
      price: 1500, rating: 4.0, beds: 2,
      img: 'https://images.pexels.com/photos/19836795/pexels-photo-19836795.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'On-campus housing with meals included and a shuttle to the main lecture halls. Most affordable option on this list.'
    },
    {
      id: 8, title: 'Shared flat near Tanta University', city: 'Tanta', type: 'Shared Apartment',
      price: 2400, rating: 4.2, beds: 3,
      img: 'https://images.pexels.com/photos/18470959/pexels-photo-18470959.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Recently renovated apartment close to the Faculty of Engineering. Includes furnished bedrooms and a shared kitchen.'
    },
    {
      id: 9, title: 'Studio near German University in Cairo', city: 'Cairo', type: 'Studio',
      price: 6300, rating: 4.7, beds: 1,
      img: 'https://images.pexels.com/photos/7060814/pexels-photo-7060814.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Compact studio in New Cairo, a short drive from GUC and the AUC. Furnished, with 24/7 building security.'
    },
    {
      id: 10, title: 'Shared apartment near Suez Canal University', city: 'Ismailia', type: 'Shared Apartment',
      price: 2100, rating: 4.1, beds: 3,
      img: 'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Calm residential building close to campus, popular with out-of-town students. Utilities included in rent.'
    },
    {
      id: 11, title: 'Studio near Nile University', city: 'Cairo', type: 'Studio',
      price: 6800, rating: 4.6, beds: 1,
      img: 'https://images.pexels.com/photos/4208390/pexels-photo-4208390.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Bright studio in Sheikh Zayed, a short ride from Nile University and 6th of October campuses. Furnished with high-speed internet.'
    },
    {
      id: 12, title: 'Shared apartment near Helwan University', city: 'Cairo', type: 'Shared Apartment',
      price: 2900, rating: 4.2, beds: 3,
      img: 'https://images.pexels.com/photos/4740580/pexels-photo-4740580.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Simple furnished flat near the Faculty of Engineering, ten minutes from the metro station. Shared kitchen and living space.'
    },
    {
      id: 13, title: 'University dorm — Cairo University', city: 'Cairo', type: 'Dorm',
      price: 2000, rating: 4.3, beds: 2,
      img: 'https://images.pexels.com/photos/4221413/pexels-photo-4221413.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'On-campus dorm room with meals and laundry included, a five-minute walk from the main faculties.'
    },
    {
      id: 14, title: 'Shared flat near Alexandria Faculty of Engineering', city: 'Alexandria', type: 'Shared Apartment',
      price: 3600, rating: 4.5, beds: 3,
      img: 'https://images.pexels.com/photos/19737839/pexels-photo-19737839.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Bright apartment near Sidi Gaber, close to tram lines and a short walk from the engineering campus.'
    },
    {
      id: 15, title: 'Studio near Pharos University', city: 'Alexandria', type: 'Studio',
      price: 4700, rating: 4.4, beds: 1,
      img: 'https://images.pexels.com/photos/8082559/pexels-photo-8082559.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Cozy studio close to Miami, near Pharos University with easy access to public transport.'
    },
    {
      id: 16, title: 'Shared apartment near Zagazig University', city: 'Zagazig', type: 'Shared Apartment',
      price: 2200, rating: 4.1, beds: 3,
      img: 'https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Affordable shared flat a few minutes from campus, popular with students from nearby governorates.'
    },
    {
      id: 17, title: 'University dorm — Minya University', city: 'Minya', type: 'Dorm',
      price: 1400, rating: 3.9, beds: 2,
      img: 'https://images.pexels.com/photos/2082093/pexels-photo-2082093.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Basic on-campus housing with meals included, close to the main lecture halls and library.'
    },
    {
      id: 18, title: 'Shared flat near Beni Suef University', city: 'Beni Suef', type: 'Shared Apartment',
      price: 2000, rating: 4.0, beds: 3,
      img: 'https://images.pexels.com/photos/18470959/pexels-photo-18470959.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Quiet residential building near campus, furnished bedrooms with a shared kitchen and study area.'
    },
    {
      id: 19, title: 'Studio near Damietta University', city: 'Damietta', type: 'Studio',
      price: 3400, rating: 4.3, beds: 1,
      img: 'https://images.pexels.com/photos/6312076/pexels-photo-6312076.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Compact studio close to the coast and a short ride from the main university campus.'
    },
    {
      id: 20, title: 'Shared apartment near Fayoum University', city: 'Fayoum', type: 'Shared Apartment',
      price: 1900, rating: 4.0, beds: 4,
      img: 'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Spacious flat shared between four students, a short walk from the Faculty of Science.'
    },
    {
      id: 21, title: 'Studio near Sohag University', city: 'Sohag', type: 'Studio',
      price: 2800, rating: 4.2, beds: 1,
      img: 'https://images.pexels.com/photos/7060814/pexels-photo-7060814.jpeg?auto=compress&cs=tinysrgb&w=800',
      desc: 'Newly furnished studio a short walk from campus, with reliable internet and a small kitchenette.'
    }
  ];

  const citySelect = document.getElementById('citySelect');
  const typeSelect = document.getElementById('typeSelect');
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  const sortSelect = document.getElementById('sortSelect');
  const cardsGrid = document.getElementById('cardsGrid');
  const resultsCount = document.getElementById('resultsCount');
  const emptyState = document.getElementById('emptyState');
  const overlay = document.getElementById('detailOverlay');
  const detailContent = document.getElementById('detailContent');
  const closeDetail = document.getElementById('closeDetail');

  [...new Set(listings.map(l => l.city))].sort().forEach(city => {
    const opt = document.createElement('option');
    opt.value = city; opt.textContent = city;
    citySelect.appendChild(opt);
  });
  [...new Set(listings.map(l => l.type))].forEach(type => {
    const opt = document.createElement('option');
    opt.value = type; opt.textContent = type;
    typeSelect.appendChild(opt);
  });

  function render() {
    const city = citySelect.value;
    const type = typeSelect.value;
    const maxPrice = parseInt(priceRange.value, 10);
    const sort = sortSelect.value;

    let filtered = listings.filter(l =>
      (city === 'all' || l.city === city) &&
      (type === 'all' || l.type === type) &&
      l.price <= maxPrice
    );

    if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
    else filtered.sort((a, b) => b.rating - a.rating);

    resultsCount.textContent = `${filtered.length} place${filtered.length === 1 ? '' : 's'} found`;
    cardsGrid.innerHTML = '';

    if (filtered.length === 0) {
      emptyState.classList.remove('hidden');
      return;
    }
    emptyState.classList.add('hidden');

    filtered.forEach(l => {
      const card = document.createElement('div');
      card.className = 'house-card';
      card.innerHTML = `
        <img src="${l.img}" alt="${l.title}" loading="lazy">
        <div class="house-body">
          <div class="house-top">
            <h5>${l.title}</h5>
            <span class="house-rating">★ ${l.rating}</span>
          </div>
          <p class="house-loc">${l.city} · ${l.beds} bedroom${l.beds > 1 ? 's' : ''}</p>
          <div class="house-tags"><span class="pill">${l.type}</span></div>
          <div class="house-price">${l.price.toLocaleString('en-US')} <span>EGP / month</span></div>
        </div>
      `;
      card.addEventListener('click', () => openDetail(l));
      cardsGrid.appendChild(card);
    });
  }

  function openDetail(l) {
    detailContent.innerHTML = `
      <img src="${l.img}" alt="${l.title}">
      <div class="detail-body">
        <h3>${l.title}</h3>
        <p class="loc">${l.city}</p>
        <p class="desc">${l.desc}</p>
        <div class="detail-facts">
          <div class="fact"><span class="fact-label">Type</span><span class="fact-value">${l.type}</span></div>
          <div class="fact"><span class="fact-label">Bedrooms</span><span class="fact-value">${l.beds}</span></div>
          <div class="fact"><span class="fact-label">Rating</span><span class="fact-value">★ ${l.rating}</span></div>
          <div class="fact"><span class="fact-label">Price</span><span class="fact-value">${l.price.toLocaleString('en-US')} EGP/mo</span></div>
        </div>
      </div>
    `;
    overlay.classList.remove('hidden');
  }

  closeDetail.addEventListener('click', () => overlay.classList.add('hidden'));
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.add('hidden'); });

  citySelect.addEventListener('change', render);
  typeSelect.addEventListener('change', render);
  sortSelect.addEventListener('change', render);
  priceRange.addEventListener('input', () => {
    priceValue.textContent = parseInt(priceRange.value, 10).toLocaleString('en-US');
    render();
  });

  render();
});