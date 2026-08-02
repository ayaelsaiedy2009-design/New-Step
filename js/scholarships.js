document.addEventListener('DOMContentLoaded', () => {

  const scholarships = [
    {
      name: 'Chevening Scholarship', country: 'United Kingdom', funding: 'Fully Funded', degree: "Master's",
      deadline: 'November 2026',
      desc: "The UK government's global scholarship program, covering tuition, flights, and a monthly stipend for one-year master's degrees.",
      website: 'https://www.chevening.org',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKplDgmYJ-H615-n6OxxMRT0LJZyvonIgRisSoYrWqIUdu5ZIWQmRaHXk&s=10'
    },
    {
      name: 'DAAD Scholarship', country: 'Germany', funding: 'Fully Funded', degree: "Bachelor's / Master's",
      deadline: 'Rolling, varies by program',
      desc: 'German Academic Exchange Service funding covering tuition, health insurance, and monthly stipends across a wide range of fields.',
      website: 'https://www.daad.de',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_qs_E8j0R5mWPCBx7ob4cs8qObo18uCOUuZT8CGZ2BJOXNrrjUGaw0I&s=10'
    },
    {
      name: 'Fulbright Foreign Student Program', country: 'United States', funding: 'Fully Funded', degree: "Master's / PhD",
      deadline: 'May 2026',
      desc: "The US State Department's flagship exchange program, covering tuition, living costs, and health insurance for graduate study.",
      website: 'https://foreign.fulbrightonline.org',
      img: 'https://mg.usembassy.gov/wp-content/uploads/sites/47/2023/03/fulbright-foreign-student-program3.jpeg'
    },
    {
      name: 'MEXT Scholarship', country: 'Japan', funding: 'Fully Funded', degree: "Bachelor's / Master's",
      deadline: 'June 2026',
      desc: 'Japanese government scholarship covering tuition, a monthly allowance, and round-trip airfare, including a year of Japanese language prep.',
      website: 'https://www.studyinjapan.go.jp',
      img: 'https://www.nz.emb-japan.go.jp/culture_education/images/mext_logo.gif'
    },
    {
      name: 'Türkiye Bursları', country: 'Turkey', funding: 'Fully Funded', degree: "Bachelor's / Master's / PhD",
      deadline: 'February 2027',
      desc: 'Turkish government scholarship covering tuition, housing, a monthly stipend, and a year of Turkish language training beforehand.',
      website: 'https://www.turkiyeburslari.gov.tr',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRNxSpFphVM6wwmUJjaJpCrJQwFoGPKlaC1ysW5JDLw&s=10'
    },
    {
      name: 'Chinese Government Scholarship (CSC)', country: 'China', funding: 'Fully Funded', degree: "Bachelor's / Master's / PhD",
      deadline: 'April 2026',
      desc: 'Covers tuition, accommodation, and a monthly stipend for study at partner Chinese universities across most academic fields.',
      website: 'https://www.campuschina.org',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0D5OofBmEc_OTxERgITptFyb8IUcyZVgv_4bKlK4oTMJx2BIQuU23y99&s=10'
    },
    {
      name: 'Australia Awards', country: 'Australia', funding: 'Fully Funded', degree: "Master's",
      deadline: 'April 2026',
      desc: 'Long-running Australian government program funding tuition, travel, and living costs for postgraduate study.',
      website: 'https://www.australiaawards.gov.au',
      img: 'https://static.youthop.com/uploads/2024/02/australia-awards-scholarship-2025.png'
    },
    {
      name: 'Swiss Government Excellence Scholarship', country: 'Switzerland', funding: 'Fully Funded', degree: 'PhD / Postdoc',
      deadline: 'December 2026',
      desc: 'Funds research-based degrees at Swiss universities, including a monthly stipend and health insurance contribution.',
      website: 'https://www.sbfi.admin.ch',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOILklbo1t0BRsZOB4HxRhQ7u4bv09KlHYyPiWtgumpg&s=10'
    },
    {
      name: 'Erasmus Mundus Joint Master Degrees', country: 'European Union', funding: 'Fully Funded', degree: "Master's",
      deadline: 'January 2027',
      desc: "EU-funded joint master's programs taught across two or more European countries, covering tuition, travel, and a monthly living allowance.",
      website: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en',
      img: 'https://i0.wp.com/opportunitiesforyouth.org/wp-content/uploads/2023/11/1631619171488.jpeg?resize=1280%2C640&ssl=1'
    },
    {
      name: 'Gates Cambridge Scholarship', country: 'United Kingdom', funding: 'Fully Funded', degree: "Master's / PhD",
      deadline: 'December 2026',
      desc: 'Funds full-time postgraduate study at the University of Cambridge for outstanding applicants from any country outside the UK.',
      website: 'https://www.gatescambridge.org',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzkhltsX10vrdHCxilz6IcExc81fJPNZFavwz0m89Ku_7D3kslnX6DSJO&s=10'
    },
    {
      name: 'Knight-Hennessy Scholars', country: 'United States', funding: 'Fully Funded', degree: "Master's / PhD",
      deadline: 'October 2026',
      desc: 'Funds any graduate degree at Stanford University, covering tuition, living stipend, and travel, open to applicants worldwide.',
      website: 'https://knight-hennessy.stanford.edu',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfj5U9DHIpNBbW6cPbVySlAUoJ_85sdsaRttKn-vgFvYK-Ek-MXmIlW04&s=10'
    },
    {
      name: 'Vanier Canada Graduate Scholarships', country: 'Canada', funding: 'Fully Funded', degree: 'PhD',
      deadline: 'November 2026',
      desc: 'A prestigious Canadian government award for doctoral students at Canadian universities, open to international applicants.',
      website: 'https://vanier.gc.ca',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkd717uoIbQtl1fyWT9x0AOu0cAAEzBNBEDngLbrPow&s=10'
    },
    {
      name: 'Eiffel Excellence Scholarship', country: 'France', funding: 'Fully Funded', degree: "Master's / PhD",
      deadline: 'January 2027',
      desc: "French government scholarship covering a monthly allowance, travel, health coverage, and cultural activities for top international students.",
      website: 'https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence',
      img: 'https://www.singapour.campusfrance.org/sites/pays/files/singapour/The%20Eiffel%20Scholarship%20of%20Excellence.jpeg'
    },
    {
      name: 'Holland Scholarship', country: 'Netherlands', funding: 'Partially Funded', degree: "Bachelor's / Master's",
      deadline: 'May 2026',
      desc: 'A one-time grant from the Dutch government and participating universities to help cover tuition and living costs in year one.',
      website: 'https://www.studyinnl.org/finances/holland-scholarship',
      img: 'https://opportunitytracker.ug/wp-content/uploads/2025/07/F10AF1D1-56F1-44F5-B95A-8A3105BC89D8.jpeg'
    },
    {
      name: 'Stipendium Hungaricum', country: 'Hungary', funding: 'Fully Funded', degree: "Bachelor's / Master's / PhD",
      deadline: 'January 2027',
      desc: 'Hungarian government scholarship covering tuition, a monthly stipend, accommodation contribution, and health insurance.',
      website: 'https://stipendiumhungaricum.hu',
      img: 'https://stipendiumhungaricum.hu/wp-content/uploads/2022/06/SH_logo_vertical_color.jpg'
    },
    {
      name: 'Global Korea Scholarship (GKS)', country: 'South Korea', funding: 'Fully Funded', degree: "Bachelor's / Master's / PhD",
      deadline: 'September 2026 (undergrad) · February 2027 (grad)',
      desc: 'South Korean government scholarship covering tuition, airfare, a monthly stipend, and a year of Korean language training beforehand.',
      website: 'https://www.studyinkorea.go.kr',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3ctg3bNiUEAo2eS5_OpERSFLII0mCMWFcEHFAUtXpS-lkafnThGPNSEi&s=10'
    },
    {
      name: 'KAUST Fellowship', country: 'Saudi Arabia', funding: 'Fully Funded', degree: "Master's / PhD",
      deadline: 'Rolling, varies by intake',
      desc: 'Every student admitted to KAUST receives full tuition, housing, medical coverage, and a living stipend for the length of their degree.',
      website: 'https://www.kaust.edu.sa/en/study',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RwX1MfilbEC-n15YmwNIhefWAgp1t_axH1SvknJw7IOlYArokaAetlY&s=10'
    },
    {
      name: 'Italian Government Scholarship', country: 'Italy', funding: 'Fully Funded', degree: "Bachelor's / Master's / PhD",
      deadline: 'May 2026',
      desc: 'Covers a monthly stipend, tuition waiver, and health insurance for study at Italian public universities across most subjects.',
      website: 'https://studyinitaly.esteri.it',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdtB0UPELofMG80uDdqeU8imAji2KySUbqfZ8bM0dMKwHTvxs8hQ_Zmg7&s=10'
    },
    {
      name: 'AUC Merit Scholarship', country: 'Egypt', funding: 'Partially Funded', degree: "Bachelor's",
      deadline: 'March 2027',
      desc: "Awarded by the American University in Cairo based on academic merit, covering 25–100% of tuition depending on your Thanaweya/IB/IGCSE score.",
      website: 'https://www.aucegypt.edu',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLT1lLpI8ZoYMOVorFHJadoGiGnRD1CAY-yT5uSkCWQ&s=10'
    },
    {
      name: 'GUC Merit Scholarship', country: 'Egypt', funding: 'Partially Funded', degree: "Bachelor's",
      deadline: 'August 2026',
      desc: 'Tuition discounts offered by the German University in Cairo to incoming students with high Thanaweya Amma, IGCSE, or IB scores.',
      website: 'https://www.guc.edu.eg',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnOlVlvPOf6DPiGG1u1h52UmVy62NcllltpuUSLJQlzoyUUWn5z_2N4kO&s=10'
    },
    {
      name: 'Rhodes Scholarship', country: 'United Kingdom', funding: 'Fully Funded', degree: "Master's / DPhil",
      deadline: 'October 2026',
      desc: 'One of the oldest and most prestigious international scholarships, funding full postgraduate study at the University of Oxford for outstanding students from around the world.',
      website: 'https://www.rhodeshouse.ox.ac.uk',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfC4BV5N4fK3yjYdakURdgmdU_ZdweBfaUs1RPOBT2A&s=10'
    }
  ];

  const searchInput = document.getElementById('searchInput');
  const countryFilter = document.getElementById('countryFilter');
  const fundingFilter = document.getElementById('fundingFilter');
  const container = document.getElementById('scholarshipsContainer');

  function render() {
    const q = searchInput.value.trim().toLowerCase();
    const country = countryFilter.value;
    const funding = fundingFilter.value;

    const filtered = scholarships.filter(s =>
      s.name.toLowerCase().includes(q) &&
      (country === 'all' || s.country === country) &&
      (funding === 'all' || s.funding === funding)
    );

    container.innerHTML = '';

    if (filtered.length === 0) {
      container.innerHTML = '<p class="no-results">No scholarships match these filters — try widening your search.</p>';
      return;
    }

    filtered.forEach(s => {
      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6 mb-4';
      col.innerHTML = `
        <div class="result-card">
          <div class="result-img"><img src="${s.img}" alt="${s.name}" loading="lazy"></div>
          <div class="result-body">
            <h5>${s.name}</h5>
            <div class="badge-row">
              <span class="pill">${s.country}</span>
              <span class="pill">${s.funding}</span>
            </div>
            <p class="desc">${s.desc}</p>
            <div class="card-footer-row"><span>${s.degree}</span><span>→</span></div>
          </div>
        </div>
      `;
      col.querySelector('.result-card').addEventListener('click', () => openModal(s));
      container.appendChild(col);
    });
  }

  function openModal(s) {
    document.getElementById('modalTitle').textContent = s.name;
    document.getElementById('modalImage').src = s.img;
    document.getElementById('modalCountry').innerHTML = `<strong>Country:</strong> ${s.country}`;
    document.getElementById('modalFunding').innerHTML = `<strong>Funding:</strong> ${s.funding}`;
    document.getElementById('modalDegree').innerHTML = `<strong>Degree level:</strong> ${s.degree}`;
    document.getElementById('modalDeadline').innerHTML = `<strong>Typical deadline:</strong> ${s.deadline}`;
    document.getElementById('modalDescription').textContent = s.desc;
    document.getElementById('modalWebsite').href = s.website;

    const modalEl = document.getElementById('scholarshipModal');
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }

  searchInput.addEventListener('input', render);
  [countryFilter, fundingFilter].forEach(el => el.addEventListener('change', render));

  render();
});