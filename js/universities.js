document.addEventListener('DOMContentLoaded', () => {

  const universities = [
    {
      name: 'Cairo University', country: 'Egypt', city: 'Giza', type: 'Public', budget: 'Low',
      ranking: 'Top 5 in Egypt · QS World 401-450',
      majors: 'Medicine, Engineering, Law, Mass Communication, Economics & Political Science',
      desc: "Egypt's second-oldest and largest public university, with one of the most competitive Medicine faculties in the country.",
      website: 'https://cu.edu.eg',
      img: 'https://oktamam.com/wp-content/uploads/2024/02/5c6be7eeb5b68.jpg.webp'
    },
    {
      name: 'Ain Shams University', country: 'Egypt', city: 'Cairo', type: 'Public', budget: 'Low',
      ranking: 'Top 10 in Egypt',
      majors: 'Medicine, Pharmacy, Engineering, Education, Arts',
      desc: 'A major public university known for its Faculty of Medicine and Faculty of Engineering, with a large international student body.',
      website: 'https://asu.edu.eg',
      img: 'https://asu.edu.eg/141090/2025/news/ec0d6b6a2b5cb630845ccdf2a51b0ece.jpg'
    },
    {
      name: 'Alexandria University', country: 'Egypt', city: 'Alexandria', type: 'Public', budget: 'Low',
      ranking: 'Top 10 in Egypt · QS World 601-650',
      majors: 'Medicine, Engineering, Science, Commerce, Law',
      desc: 'One of the oldest universities in Egypt, overlooking the Mediterranean, with strong programs in Engineering and Medicine.',
      website: 'https://alexu.edu.eg',
      img: 'https://alexu.edu.eg/images/ahmedgaber/my_university.jpg'
    },
    {
      name: 'American University in Cairo (AUC)', country: 'Egypt', city: 'New Cairo', type: 'Private', budget: 'High',
      ranking: 'Top private university in Egypt',
      majors: 'Business, Engineering, Computer Science, Political Science, Journalism',
      desc: 'A US-accredited liberal arts university with an English-language curriculum and strong international recognition.',
      website: 'https://www.aucegypt.edu',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gTBLk_G4xLs5BTSUzYwudfMy53rXW4QlaJffrgQftg&s=10'
    },
    {
      name: 'German University in Cairo (GUC)', country: 'Egypt', city: 'New Cairo', type: 'Private', budget: 'High',
      ranking: 'Top German-affiliated university in Egypt',
      majors: 'Engineering, Pharmacy, Applied Sciences, Management',
      desc: 'Offers German-accredited degrees with the option to continue studies in Germany after completing core coursework.',
      website: 'https://www.guc.edu.eg',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmjc9gjBZiS2GeFSAld3mpun7o7GjQA3qiDgryZoYnnVrOXiJUkU2DlHI&s=10'
    },
    {
      name: 'Mansoura University', country: 'Egypt', city: 'Mansoura', type: 'Public', budget: 'Low',
      ranking: 'Top 5 in Egypt for Medicine',
      majors: 'Medicine, Engineering, Agriculture, Veterinary Medicine',
      desc: 'Home to the Mansoura Urology and Nephrology Center, one of the most respected medical research centers in the region.',
      website: 'https://www.mans.edu.eg',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz-t41D728I_6WNFARgazu0uwJBiq4lWg0-qzRnxtdrg&s=10'
    },
    {
      name: 'Nile University', country: 'Egypt', city: 'Giza', type: 'Private', budget: 'Medium',
      ranking: 'Research-focused private university',
      majors: 'Engineering, Computer Science, Nanotechnology, Business',
      desc: "A research-driven private university with strong ties to Egypt's tech industry and several innovation-focused programs.",
      website: 'https://nu.edu.eg',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-y7RSNg994gunms6d94IL67Y17yRgTw6XwAM7FcnUog&s'
    },
    {
      name: 'Zewail City of Science and Technology', country: 'Egypt', city: '6th of October City', type: 'Private', budget: 'Medium',
      ranking: 'Leading research university in Egypt',
      majors: 'Engineering, Biotechnology, Physics, Nanoscience',
      desc: 'Founded by Nobel laureate Ahmed Zewail, focused on science and engineering research with small class sizes and strong lab access.',
      website: 'https://www.zewailcity.edu.eg',
      img: 'https://www.zewailcity.edu.eg/_next/image?url=https%3A%2F%2Fzcadminpanel.zewailcity.edu.eg%2Fuploads%2FScreen_Shot_2018_04_19_at_3_35_48_PM_1_min_eb468ca2b5.png&w=1080&q=75'
    },
    {
      name: 'The British University in Egypt (BUE)', country: 'Egypt', city: 'El Shorouk', type: 'Private', budget: 'High',
      ranking: 'UK-validated degrees in Egypt',
      majors: 'Engineering, Pharmacy, Business, Informatics, Law',
      desc: 'Offers degrees validated by UK universities, with an English-language curriculum modeled on the British higher education system.',
      website: 'https://www.bue.edu.eg',
      img: 'https://www.bue.edu.eg/uploads/pages/2023-05-02%2015-20-54.654-home-slide-d-_1920x800.Jpeg'
    },
    {
      name: 'Misr International University (MIU)', country: 'Egypt', city: 'Cairo', type: 'Private', budget: 'Medium',
      ranking: 'Established private university',
      majors: 'Pharmacy, Engineering, Business, Mass Communication, Dentistry',
      desc: 'One of the earlier private universities in Egypt, known for its Faculty of Pharmacy and Dentistry programs.',
      website: 'https://www.miuegypt.edu.eg',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59L_6yXJEyQm3GDx0J8wkvCndXr9CT9fq96JYCYTpkE4CI5AheMPCPKBu&s=10'
    },
    {
      name: 'Future University in Egypt (FUE)', country: 'Egypt', city: 'New Cairo', type: 'Private', budget: 'Medium',
      ranking: 'Growing private university',
      majors: 'Pharmacy, Engineering, Dentistry, Business, Computer Science',
      desc: 'A newer private university in New Cairo offering flexible admission requirements across health science and engineering programs.',
      website: 'https://www.fue.edu.eg',
      img: 'https://admissions.fue.edu.eg/images/photo_img_2.jpeg'
    },
    {
      name: 'Assiut University', country: 'Egypt', city: 'Assiut', type: 'Public', budget: 'Low',
      ranking: 'Largest public university in Upper Egypt',
      majors: 'Medicine, Engineering, Agriculture, Veterinary Medicine',
      desc: 'The main public university serving Upper Egypt, with a large teaching hospital and long-established Faculty of Medicine.',
      website: 'https://www.aun.edu.eg',
      img: 'https://en.studyinegy.com/wp-content/uploads/2024/10/121142434_1335740196818008_3320137219297599351_n.webp'
    },
    {
      name: 'Tanta University', country: 'Egypt', city: 'Tanta', type: 'Public', budget: 'Low',
      ranking: 'Top public university in the Delta region',
      majors: 'Medicine, Engineering, Commerce, Agriculture',
      desc: 'A well-regarded public university in the Nile Delta, known for its Faculty of Medicine and Faculty of Engineering.',
      website: 'https://www.tanta.edu.eg',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_nl03Hs2WRnawCE4MifC8PdEDv557YYKYL_FIr4fnHSZ5vthjyKKoPk&s=10'
    },
    {
      name: 'Helwan University', country: 'Egypt', city: 'Cairo', type: 'Public', budget: 'Low',
      ranking: 'Known for Fine Arts & Applied Arts',
      majors: 'Fine Arts, Applied Arts, Engineering, Physical Education, Music Education',
      desc: 'A large public university especially known for its arts and design faculties, alongside engineering and education programs.',
      website: 'https://www.helwan.edu.eg',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuIL6NDBO3Xe5glNR-5gIpPU8Z-Xtq7BhnSqy47BrDoQpLXnyeSLCp7j0&s=10'
    },
    {
      name: 'Arizona State University', country: 'United States', city: 'Tempe', type: 'Public', budget: 'Medium',
      ranking: 'Top US university for innovation (8 years running)',
      majors: 'Engineering, Business, Computer Science, Journalism',
      desc: 'One of the largest US universities, known for flexible admissions and generous merit-based scholarships for international students.',
      website: 'https://www.asu.edu',
      img: 'https://campus.asu.edu/sites/g/files/litvpz616/files/2024-11/campus-homepage-hero.jpeg'
    },
    {
      name: 'Purdue University', country: 'United States', city: 'West Lafayette', type: 'Public', budget: 'Medium',
      ranking: 'Top 5 US Engineering programs',
      majors: 'Engineering, Computer Science, Aviation, Agriculture',
      desc: 'A leading public research university with one of the largest and most respected engineering colleges in the US.',
      website: 'https://www.purdue.edu',
      img: 'https://www.purdue.edu/home/wp-content/uploads/2026/03/Mar-TopSlider-Hovde.jpg'
    },
    {
      name: 'University of Michigan', country: 'United States', city: 'Ann Arbor', type: 'Public', budget: 'High',
      ranking: 'QS World Top 45',
      majors: 'Engineering, Business, Medicine, Computer Science',
      desc: 'A top-ranked public research university with strong programs across nearly every field and a large international community.',
      website: 'https://umich.edu',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWD8Iafm5J4YVdXKrmFNd1FSyVR6ePkN-g0XsrHgxVuQ&s=10'
    },
    {
      name: 'Boston University', country: 'United States', city: 'Boston', type: 'Private', budget: 'High',
      ranking: 'QS World Top 100',
      majors: 'Business, Communication, Computer Science, Medicine',
      desc: 'A private research university in central Boston with strong professional programs and a large undergraduate international population.',
      website: 'https://www.bu.edu',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNesHERao73cjaK2SVCKAeACNFaz1Fmm03t4zBXNsEHw&s=10'
    },
    {
      name: 'University of California, Los Angeles (UCLA)', country: 'United States', city: 'Los Angeles', type: 'Public', budget: 'High',
      ranking: 'QS World Top 40',
      majors: 'Engineering, Film, Business Economics, Life Sciences',
      desc: 'One of the most selective US public universities, known for research output and a highly competitive admissions process.',
      website: 'https://www.ucla.edu',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTc2FIQxRjfC9rRlsacICgkrI8mqM6gTQPIsMZqs5_Mub5eeg2O5MynnO3&s=10'
    },
    {
      name: 'University College London (UCL)', country: 'United Kingdom', city: 'London', type: 'Public', budget: 'High',
      ranking: 'QS World Top 10',
      majors: 'Medicine, Engineering, Architecture, Economics',
      desc: 'A leading research university in central London with a strong record of accepting Egyptian IGCSE and IB graduates.',
      website: 'https://www.ucl.ac.uk',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx0ekqvApVpKX499ElHLiC7obP5jF0IRC5biu-QwBRcw&s=10'
    },
    {
      name: 'University of Manchester', country: 'United Kingdom', city: 'Manchester', type: 'Public', budget: 'Medium',
      ranking: 'QS World Top 35',
      majors: 'Engineering, Business, Computer Science, Medicine',
      desc: 'A large research-intensive university with one of the biggest international student communities in the UK.',
      website: 'https://www.manchester.ac.uk',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTEQQdrPvayrDKDJnUDDrDXjAXXojIMg3-BnoGd7XIfpICYgic4abPkWY&s=10'
    },
    {
      name: "King's College London", country: 'United Kingdom', city: 'London', type: 'Public', budget: 'High',
      ranking: 'QS World Top 40',
      majors: 'Medicine, Dentistry, Law, International Relations',
      desc: 'A historic central London university with one of the top dental and medical schools in the UK.',
      website: 'https://www.kcl.ac.uk',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_65ZNsv5vbPnFbTTw0naCxeyAUAsShGF0A29iCtpTLsBKBn5EtQXLKmMa&s=10'
    },
    {
      name: 'University of Edinburgh', country: 'United Kingdom', city: 'Edinburgh', type: 'Public', budget: 'Medium',
      ranking: 'QS World Top 30',
      majors: 'Medicine, Veterinary Medicine, Business, Informatics',
      desc: "Scotland's top university and one of the oldest in the English-speaking world, strong across sciences and humanities.",
      website: 'https://www.ed.ac.uk',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThaiCedo17AXDvol1wjoYG9uN7b17aAVsLXcVhhWO119PHJKWNtVtDqwVh&s=10'
    },
    {
      name: 'University of Birmingham', country: 'United Kingdom', city: 'Birmingham', type: 'Public', budget: 'Medium',
      ranking: 'QS World Top 90',
      majors: 'Engineering, Business, Medicine, Computer Science',
      desc: 'A leading Russell Group university with a large, well-established international foundation program pathway.',
      website: 'https://www.birmingham.ac.uk',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GSb3GFsy7V8wRQD3OkI94tpv5AtdXEyjohiGBhQNkw&s=10'
    },
    {
      name: 'University of Toronto', country: 'Canada', city: 'Toronto', type: 'Public', budget: 'High',
      ranking: 'QS World Top 25',
      majors: 'Engineering, Computer Science, Business, Life Sciences',
      desc: "Canada's top-ranked university, known for research output and a large, diverse international student community.",
      website: 'https://www.utoronto.ca',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJdbtnDrdvJYw010nY3LHy5Nu32zQW1a1x7A21cxmr4ZVyL2k2txCP0ZA&s=10'
    },
    {
      name: 'McGill University', country: 'Canada', city: 'Montreal', type: 'Public', budget: 'High',
      ranking: 'QS World Top 30',
      majors: 'Medicine, Engineering, Law, Management',
      desc: "Often called the 'Harvard of Canada', with a bilingual city environment and strong graduate programs.",
      website: 'https://www.mcgill.ca',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTNFgbU0EsWh0mtEPYHz_cPm0WeTHbyZRCvhbl7VZwWw&s=10'
    },
    {
      name: 'University of British Columbia (UBC)', country: 'Canada', city: 'Vancouver', type: 'Public', budget: 'High',
      ranking: 'QS World Top 35',
      majors: 'Engineering, Forestry, Business, Computer Science',
      desc: 'A research-intensive university on the West Coast, known for sustainability programs and a scenic campus.',
      website: 'https://www.ubc.ca',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7cBeWzV8IGUlxOMCYeHr4Quvyx0VxU22ICMWdNC1oq3N0YxcE0W7deSw&s=10'
    },
    {
      name: 'Technical University of Munich (TUM)', country: 'Germany', city: 'Munich', type: 'Public', budget: 'Low',
      ranking: 'QS World Top 30 · #1 in Germany for Engineering',
      majors: 'Mechanical Engineering, Computer Science, Electrical Engineering',
      desc: "Germany's top technical university, with low tuition fees and many English-taught master's programs.",
      website: 'https://www.tum.de',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejUaT49y14MQiU5DsURRTqGDfXeR2nxeQqtU8XlbWu3Iv-alzEt2BJbA&s=10'
    },
    {
      name: 'RWTH Aachen University', country: 'Germany', city: 'Aachen', type: 'Public', budget: 'Low',
      ranking: 'QS World Top 100 · Leading engineering school',
      majors: 'Mechanical Engineering, Electrical Engineering, Computer Science',
      desc: "One of Europe's leading technical universities, popular with international engineering students due to low fees.",
      website: 'https://www.rwth-aachen.de',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfh-9jEzxBjF1PbbxMTBVSP8aCPngHc30h0xPVPEh8w&s=10'
    },
    {
      name: 'Heidelberg University', country: 'Germany', city: 'Heidelberg', type: 'Public', budget: 'Low',
      ranking: "Germany's oldest university · QS World Top 90",
      majors: 'Medicine, Natural Sciences, Law, Humanities',
      desc: 'A historic research university with strong programs in medicine and the natural sciences, and minimal tuition fees.',
      website: 'https://www.uni-heidelberg.de',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhINkYF0Mnn0Ox6wqp82tIL_Dq5CYSnZQRdrQHhIVte5MDpGU90mgFoPk&s=10'
    },
    {
      name: 'Istanbul Technical University', country: 'Turkey', city: 'Istanbul', type: 'Public', budget: 'Low',
      ranking: 'Top engineering university in Turkey',
      majors: 'Civil Engineering, Architecture, Computer Engineering, Aeronautics',
      desc: "One of the world's oldest technical universities, with strong engineering and architecture faculties.",
      website: 'https://www.itu.edu.tr',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgbXsrG_CnQiSFWZ4rXu-Uw6THibzwN8PraQ9vicatgcdmH3PiLxOOF1A&s=10'
    },
    {
      name: 'Bilkent University', country: 'Turkey', city: 'Ankara', type: 'Private', budget: 'Medium',
      ranking: "Turkey's first private university",
      majors: 'Computer Engineering, Business Administration, International Relations',
      desc: 'An English-medium private university known for generous scholarships and strong placement outcomes.',
      website: 'https://www.bilkent.edu.tr',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2FbjPjJH0UzBM8wCR3A5P192J72X1omEY3R2PZbLAA&s=10'
    },
    {
      name: 'Koç University', country: 'Turkey', city: 'Istanbul', type: 'Private', budget: 'High',
      ranking: 'Top-ranked private university in Turkey',
      majors: 'Business Administration, Medicine, Law, Computer Engineering',
      desc: 'A highly selective private university overlooking the Bosphorus, with a liberal-arts style curriculum.',
      website: 'https://www.ku.edu.tr',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdE7uox_1ukTA_LKvdMqknuNl9eQMjrkP062RoitVnzA&s'
    },
    {
      name: 'Khalifa University', country: 'United Arab Emirates', city: 'Abu Dhabi', type: 'Public', budget: 'High',
      ranking: 'Top research university in the UAE',
      majors: 'Engineering, Aerospace, Computer Science, Medicine',
      desc: 'A research-focused public university in Abu Dhabi with strong industry ties in aerospace and energy engineering.',
      website: 'https://www.ku.ac.ae',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26cC0K17_yEOZzpBc15tqMYPpIGSzZJZej33Oshuy_VCbNOHH9sRuVPAj&s=10'
    },
    {
      name: 'American University of Sharjah (AUS)', country: 'United Arab Emirates', city: 'Sharjah', type: 'Private', budget: 'High',
      ranking: 'Top private university in the Gulf region',
      majors: 'Engineering, Business, Architecture, Mass Communication',
      desc: 'An American-style liberal arts university with an English curriculum and a large, diverse student body from the region.',
      website: 'https://www.aus.edu',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurW3_Vu0nGzm9m8iDM-mm4thOrmGeNqMmqzL9EKo8rrLfDxap-wrmX90&s=10'
    },
    {
      name: 'King Abdullah University of Science and Technology (KAUST)', country: 'Saudi Arabia', city: 'Thuwal', type: 'Public', budget: 'High',
      ranking: 'QS World Top 150 · Fully funded graduate research',
      majors: 'Engineering, Computer Science, Environmental Science, AI',
      desc: 'A graduate research-only university that fully funds every admitted student, including tuition, housing, and a living stipend.',
      website: 'https://www.kaust.edu.sa',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg2RC9pwQsqtPuhzFWVBYu4wNf1Z6Qayt_5YU6La-HyJCd9tdWw3r1CZg&s=10'
    },
    {
      name: 'Qatar University', country: 'Qatar', city: 'Doha', type: 'Public', budget: 'Medium',
      ranking: "Qatar's flagship national university",
      majors: 'Engineering, Business, Medicine, Law',
      desc: 'The national university of Qatar, offering a wide range of programs with strong scholarship support for regional students.',
      website: 'https://www.qu.edu.qa',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkhdMIlgKGneprx2XR9yz0ab3p6j2rBYsvQJmOtlJ4BmuG0T2wa_EFNdY&s=10'
    },
    {
      name: 'University of Melbourne', country: 'Australia', city: 'Melbourne', type: 'Public', budget: 'High',
      ranking: 'QS World Top 15',
      majors: 'Medicine, Law, Engineering, Commerce',
      desc: "Australia's top-ranked university, known for research strength and a large, diverse international student population.",
      website: 'https://www.unimelb.edu.au',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXHqUMVxfSUHm9B8vDgF-At55NElzgCMCpJdy7AmGtI1yH3p2YmKTZF88&s=10'
    },
    {
      name: 'University of Malaya', country: 'Malaysia', city: 'Kuala Lumpur', type: 'Public', budget: 'Low',
      ranking: "Malaysia's top-ranked university · QS World Top 70",
      majors: 'Engineering, Medicine, Business, Computer Science',
      desc: 'A leading public university in Southeast Asia offering low tuition costs and English-taught programs across most faculties.',
      website: 'https://www.um.edu.my',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxHv7HsXxAB-0h51gE3rDDfToiBCEUCQlfnVaipLwkJJFS15wioAJj6k&s=10'
    },
    {
      name: 'Delft University of Technology (TU Delft)', country: 'Netherlands', city: 'Delft', type: 'Public', budget: 'Medium',
      ranking: 'QS World Top 50 · #1 in the Netherlands for Engineering',
      majors: 'Civil Engineering, Aerospace Engineering, Computer Science, Architecture',
      desc: "The Netherlands' leading technical university, with an English-taught curriculum and strong ties to European industry.",
      website: 'https://www.tudelft.nl',
      img: 'https://techportal.in/wp-content/uploads/2023/12/TU-Delft-building-photo-by-Frank-van-Schadewijk-1.jpg'
    },
    {
      name: 'American University of Beirut (AUB)', country: 'Lebanon', city: 'Beirut', type: 'Private', budget: 'High',
      ranking: 'QS World Top 250 · Top-ranked university in the Arab world',
      majors: 'Medicine, Engineering, Business, Arts & Sciences',
      desc: 'A US-accredited university founded in 1866, long considered one of the strongest academic institutions in the Middle East.',
      website: 'https://www.aub.edu.lb',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS732UIuVQkJKSF2V8DPItPy4Stgzrx0FeRudAHfVVUUg&s=10'
    },
    {
      name: 'University of Jordan', country: 'Jordan', city: 'Amman', type: 'Public', budget: 'Low',
      ranking: "Jordan's oldest and largest public university",
      majors: 'Medicine, Engineering, Pharmacy, Law, Business',
      desc: 'The flagship public university of Jordan, popular with Arab students for its Medicine and Pharmacy faculties.',
      website: 'https://www.ju.edu.jo',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZjFNvDOAbOyL62LdxEg2Xarti--5vZJubEkplxuX89EoZBOh-F87emcvV&s=10'
    },
    {
      name: 'King Saud University', country: 'Saudi Arabia', city: 'Riyadh', type: 'Public', budget: 'Low',
      ranking: 'Top-ranked national university in Saudi Arabia',
      majors: 'Medicine, Engineering, Computer Science, Business',
      desc: "One of Saudi Arabia's largest and oldest public universities, with a large campus and strong government funding.",
      website: 'https://www.ksu.edu.sa',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToS6sW65AwRtL9AEuW5-etCk7JO_CkYs9FHMsU66mM8w&s=10'
    },
    {
      name: 'Effat University', country: 'Saudi Arabia', city: 'Jeddah', type: 'Private', budget: 'Medium',
      ranking: "Leading private university for women in Saudi Arabia",
      majors: 'Engineering, Business, Architecture, Computer Science',
      desc: 'A private university in Jeddah known for its engineering and business programs and an internationally connected faculty.',
      website: 'https://www.effatuniversity.edu.sa',
      img: 'https://www.kff.com/wp-content/uploads/2021/07/whatsapp-image-2020-12-28-at-7.36.04-pm-1700x956.jpeg'
    },
    {
      name: 'Kuwait University', country: 'Kuwait', city: 'Kuwait City', type: 'Public', budget: 'Low',
      ranking: "Kuwait's national public university",
      majors: 'Medicine, Engineering, Business, Law, Sciences',
      desc: "The only public university in Kuwait, offering low tuition and strong government scholarship support for Arab students.",
      website: 'https://www.ku.edu.kw',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKrJCIdz-P2QIX7uiRb-lDXSJhdOcH5qtD-HlrBzpfw&s=10'
    },
    {
      name: 'Sultan Qaboos University', country: 'Oman', city: 'Muscat', type: 'Public', budget: 'Low',
      ranking: "Oman's leading national university",
      majors: 'Medicine, Engineering, Agriculture, Business',
      desc: "Oman's first and largest public university, with modern facilities and a strong College of Medicine and Health Sciences.",
      website: 'https://www.squ.edu.om',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1-Hvi-5I2wZwJCDdFvKXjETIzC_5gUH0MmvMoxkIJfH0zalU7CeDSIQ&s=10'
    },
    {
      name: 'University of Bahrain', country: 'Bahrain', city: 'Zallaq', type: 'Public', budget: 'Low',
      ranking: "Bahrain's national public university",
      majors: 'Engineering, Business, Information Technology, Arts',
      desc: "Bahrain's main public university, with a modern campus and growing engineering and IT programs.",
      website: 'https://www.uob.edu.bh',
      img: 'https://www.uob.edu.bh/wp-content/uploads/site-prod/uploads/IMG-20240612-WA0005.jpg'
    },
    {
      name: 'Al Akhawayn University in Ifrane', country: 'Morocco', city: 'Ifrane', type: 'Private', budget: 'Medium',
      ranking: "Morocco's top American-style liberal arts university",
      majors: 'Business Administration, Computer Science, International Studies, Engineering',
      desc: 'An English-medium liberal arts university modeled on the American system, set in the Middle Atlas mountains.',
      website: 'https://www.aui.ma',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4xjbBP_cK-dLn9_ZHK3JH3Q8iwqxmM5iVTkqfiOryciQMa2B2YUsdrcR&s=10'
    }
  ];

  const searchInput = document.getElementById('searchInput');
  const countryFilter = document.getElementById('countryFilter');
  const budgetFilter = document.getElementById('budgetFilter');
  const typeFilter = document.getElementById('typeFilter');
  const container = document.getElementById('universitiesContainer');

  function render() {
    const q = searchInput.value.trim().toLowerCase();
    const country = countryFilter.value;
    const budget = budgetFilter.value;
    const type = typeFilter.value;

    const filtered = universities.filter(u =>
      u.name.toLowerCase().includes(q) &&
      (country === 'all' || u.country === country) &&
      (budget === 'all' || u.budget === budget) &&
      (type === 'all' || u.type === type)
    );

    container.innerHTML = '';

    if (filtered.length === 0) {
      container.innerHTML = '<p class="no-results">No universities match these filters — try widening your search.</p>';
      return;
    }

    filtered.forEach((u, i) => {
      const col = document.createElement('div');
      col.className = 'col-lg-4 col-md-6 mb-4';
      col.innerHTML = `
        <div class="result-card" data-index="${i}">
          <div class="result-img"><img src="${u.img}" alt="${u.name}" loading="lazy"></div>
          <div class="result-body">
            <h5>${u.name}</h5>
            <div class="badge-row">
              <span class="pill">${u.country}</span>
              <span class="pill">${u.type}</span>
              <span class="pill">${u.budget} budget</span>
            </div>
            <p class="desc">${u.desc}</p>
            <div class="card-footer-row"><span>${u.city}</span><span>→</span></div>
          </div>
        </div>
      `;
      col.querySelector('.result-card').addEventListener('click', () => openModal(u));
      container.appendChild(col);
    });
  }

  function openModal(u) {
    document.getElementById('modalTitle').textContent = u.name;
    document.getElementById('modalImage').src = u.img;
    document.getElementById('modalCountry').innerHTML = `<strong>Country:</strong> ${u.country}`;
    document.getElementById('modalCity').innerHTML = `<strong>City:</strong> ${u.city}`;
    document.getElementById('modalType').innerHTML = `<strong>Type:</strong> ${u.type}`;
    document.getElementById('modalBudget').innerHTML = `<strong>Budget level:</strong> ${u.budget}`;
    document.getElementById('modalRanking').innerHTML = `<strong>Ranking:</strong> ${u.ranking}`;
    document.getElementById('modalMajors').innerHTML = `<strong>Popular majors:</strong> ${u.majors}`;
    document.getElementById('modalDescription').textContent = u.desc;
    document.getElementById('modalWebsite').href = u.website;

    const modalEl = document.getElementById('universityModal');
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }

  [searchInput].forEach(el => el.addEventListener('input', render));
  [countryFilter, budgetFilter, typeFilter].forEach(el => el.addEventListener('change', render));

  render();
});