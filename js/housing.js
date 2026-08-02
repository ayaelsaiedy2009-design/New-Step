document.addEventListener('DOMContentLoaded', () => {

  const listings = [
    {
      id: 1, title: 'Shared apartment near AUC New Cairo', city: 'Cairo', type: 'Shared Apartment',
      price: 4500, rating: 4.6, beds: 3,
      img: 'https://www.vitastudent.com/wp-content/uploads/2024/04/ULTIMATE-V239-VITA-CARDIFF-AUG-20235868_RT-e1713968356133.jpg',
      desc: "A furnished 3-bedroom flat five minutes' walk from AUC's main gate. Shared kitchen and living room, weekly cleaning included, fast internet."
    },
    {
      id: 2, title: 'Studio in Zamalek', city: 'Cairo', type: 'Studio',
      price: 7200, rating: 4.8, beds: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNX2gLfB2Glc6whgagoax_MYNm14_EBcRgISdRRloLqlZqVNU90haucMu&s=10',
      desc: 'A quiet studio on a tree-lined street, close to Cairo University and the metro. Fully furnished with a small kitchenette and AC.'
    },
    {
      id: 3, title: 'University dorm — Ain Shams', city: 'Cairo', type: 'Dorm',
      price: 1800, rating: 4.1, beds: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfUTCEOvpTVNMrOm8zJVRse5EDxeqMoEshHHop3azlDA&s=10',
      desc: 'Official Ain Shams University dorm room, shared with one roommate. Includes meals, laundry service, and a study hall on-site.'
    },
    {
      id: 4, title: 'Shared flat near Alexandria University', city: 'Alexandria', type: 'Shared Apartment',
      price: 3200, rating: 4.4, beds: 4,
      img: 'https://www.hellostudent.co.uk/wp-content/uploads/2024/07/Victoria-Point-Student-accommodation-in-Manchester.png',
      desc: 'Sea-breeze apartment ten minutes from the medical campus. Four bedrooms, shared kitchen, and a balcony overlooking the corniche.'
    },
    {
      id: 5, title: 'Studio in Smouha', city: 'Alexandria', type: 'Studio',
      price: 5000, rating: 4.5, beds: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGK-eISCHwugYfx59mdkqCZ5EO08TvFedUUuGOcikIqQowZhM0clL82E&s=10',
      desc: 'Modern studio in a well-connected neighborhood, close to tram lines and a short ride to most Alexandria campuses.'
    },
    {
      id: 6, title: 'Shared apartment near Mansoura University', city: 'Mansoura', type: 'Shared Apartment',
      price: 2600, rating: 4.3, beds: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSI9qGQi9HHTQaoV5rxzILoM_m6SfLZzLBEHdN_74YR7m3-VBw1P3nq2E&s=10',
      desc: 'Popular with medical and engineering students. Walking distance from the faculty of medicine, with a shared study room.'
    },
    {
      id: 7, title: 'University dorm — Assiut University', city: 'Assiut', type: 'Dorm',
      price: 1500, rating: 4.0, beds: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrWQ8m_h4NdQB2RpUSe3yJPWtxl4N5fRnF8ULkLyUHMOuQ_1Y6mYlzmM&s=10',
      desc: 'On-campus housing with meals included and a shuttle to the main lecture halls. Most affordable option on this list.'
    },
    {
      id: 8, title: 'Shared flat near Tanta University', city: 'Tanta', type: 'Shared Apartment',
      price: 2400, rating: 4.2, beds: 3,
      img: 'https://www.hellostudent.co.uk/wp-content/uploads/2024/07/Premium-shared-apartment-ensuite2-1.jpg',
      desc: 'Recently renovated apartment close to the Faculty of Engineering. Includes furnished bedrooms and a shared kitchen.'
    },
    {
      id: 9, title: 'Studio near German University in Cairo', city: 'Cairo', type: 'Studio',
      price: 6300, rating: 4.7, beds: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qRgukEBU0_3NHwAlEuROaQhy8o6V7ls7KxQoBF6BydObAqfgyRHikKxd&s=10',
      desc: 'Compact studio in New Cairo, a short drive from GUC and the AUC. Furnished, with 24/7 building security.'
    },
    {
      id: 10, title: 'Shared apartment near Suez Canal University', city: 'Ismailia', type: 'Shared Apartment',
      price: 2100, rating: 4.1, beds: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy_PKX7LcIhQzdjwfN94K8_5nmPtNxMPaLyYVgRCVpg525npyLM7CckAE&s=10',
      desc: 'Calm residential building close to campus, popular with out-of-town students. Utilities included in rent.'
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
        <img src="${l.img}" alt="${l.title}">
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
