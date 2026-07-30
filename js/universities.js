const universities = [
{
    name: "Cairo University",
    country: "Egypt",
    city: "Giza",
    type: "Public",
    budget: "Medium",
    ranking: "#371 QS World University Rankings",
    majors: "Engineering, Medicine, Business, Law",
    website: "https://cu.edu.eg",
    image: "assets/images/cairo-university.jpg"
},

{
    name: "Ain Shams University",
    country: "Egypt",
    city: "Cairo",
    type: "Public",
    budget: "Medium",
    ranking: "#592 QS World University Rankings",
    majors: "Medicine, Engineering, Pharmacy, Science",
    website: "https://www.asu.edu.eg",
    image: "assets/images/ain-shams.jpg"
},

{
    name: "Alexandria University",
    country: "Egypt",
    city: "Alexandria",
    type: "Public",
    budget: "Medium",
    ranking: "#901-950 QS World University Rankings",
    majors: "Medicine, Dentistry, Engineering, Commerce",
    website: "https://www.alexu.edu.eg",
    image: "assets/images/alexandria.jpg"
},

{
    name: "German University in Cairo",
    country: "Egypt",
    city: "New Cairo",
    type: "Private",
    budget: "High",
    ranking: "Top Private University in Egypt",
    majors: "Engineering, Pharmacy, Management, Design",
    website: "https://www.guc.edu.eg",
    image: "assets/images/guc.jpg"
},

{
    name: "The American University in Cairo",
    country: "Egypt",
    city: "New Cairo",
    type: "Private",
    budget: "High",
    ranking: "Top Private University in Egypt",
    majors: "Business, Computer Science, Media, Engineering",
    website: "https://www.aucegypt.edu",
    image: "assets/images/auc.jpg"
},

{
    name: "Harvard University",
    country: "United States",
    city: "Cambridge, Massachusetts",
    type: "Private",
    budget: "High",
    ranking: "#4 QS World University Rankings",
    majors: "Medicine, Law, Business, Computer Science",
    website: "https://www.harvard.edu",
    image: "assets/images/harvard.jpg"
},

{
    name: "Massachusetts Institute of Technology",
    country: "United States",
    city: "Cambridge, Massachusetts",
    type: "Private",
    budget: "High",
    ranking: "#1 QS World University Rankings",
    majors: "Engineering, Artificial Intelligence, Computer Science",
    website: "https://web.mit.edu",
    image: "assets/images/mit.jpg"
},

{
    name: "Stanford University",
    country: "United States",
    city: "Stanford, California",
    type: "Private",
    budget: "High",
    ranking: "#6 QS World University Rankings",
    majors: "Business, Engineering, Computer Science",
    website: "https://www.stanford.edu",
    image: "assets/images/stanford.jpg"
},

{
    name: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    type: "Public",
    budget: "High",
    ranking: "#3 QS World University Rankings",
    majors: "Medicine, Law, Engineering, Business",
    website: "https://www.ox.ac.uk",
    image: "assets/images/oxford.jpg"
},

{
    name: "University of Cambridge",
    country: "United Kingdom",
    city: "Cambridge",
    type: "Public",
    budget: "High",
    ranking: "#5 QS World University Rankings",
    majors: "Engineering, Mathematics, Medicine, Computer Science",
    website: "https://www.cam.ac.uk",
    image: "assets/images/cambridge.jpg"
},
{
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    type: "Public",
    budget: "High",
    ranking: "#25 QS World University Rankings",
    majors: "Medicine, Engineering, Business, Computer Science",
    website: "https://www.utoronto.ca",
    image: "assets/images/toronto.jpg"
},

{
    name: "McGill University",
    country: "Canada",
    city: "Montreal",
    type: "Public",
    budget: "High",
    ranking: "#29 QS World University Rankings",
    majors: "Medicine, Engineering, Law, Business",
    website: "https://www.mcgill.ca",
    image: "assets/images/mcgill.jpg"
},

{
    name: "University of British Columbia",
    country: "Canada",
    city: "Vancouver",
    type: "Public",
    budget: "High",
    ranking: "#38 QS World University Rankings",
    majors: "Engineering, Forestry, Medicine, Computer Science",
    website: "https://www.ubc.ca",
    image: "assets/images/ubc.jpg"
},

{
    name: "King Abdulaziz University",
    country: "Saudi Arabia",
    city: "Jeddah",
    type: "Public",
    budget: "Low",
    ranking: "#149 QS World University Rankings",
    majors: "Medicine, Engineering, Business, Science",
    website: "https://www.kau.edu.sa",
    image: "assets/images/kau.jpg"
},

{
    name: "King Saud University",
    country: "Saudi Arabia",
    city: "Riyadh",
    type: "Public",
    budget: "Low",
    ranking: "#200 QS World University Rankings",
    majors: "Medicine, Pharmacy, Engineering, Computer Science",
    website: "https://ksu.edu.sa",
    image: "assets/images/ksu.jpg"
},

{
    name: "Qatar University",
    country: "Qatar",
    city: "Doha",
    type: "Public",
    budget: "Medium",
    ranking: "#173 QS World University Rankings",
    majors: "Engineering, Medicine, Business, Law",
    website: "https://www.qu.edu.qa",
    image: "assets/images/qatar-university.jpg"
},

{
    name: "United Arab Emirates University",
    country: "United Arab Emirates",
    city: "Al Ain",
    type: "Public",
    budget: "Medium",
    ranking: "#261 QS World University Rankings",
    majors: "Engineering, Medicine, Business, Education",
    website: "https://www.uaeu.ac.ae",
    image: "assets/images/uaeu.jpg"
},

{
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    type: "Public",
    budget: "High",
    ranking: "#13 QS World University Rankings",
    majors: "Medicine, Engineering, Law, Business",
    website: "https://www.unimelb.edu.au",
    image: "assets/images/melbourne.jpg"
},

{
    name: "University of Sydney",
    country: "Australia",
    city: "Sydney",
    type: "Public",
    budget: "High",
    ranking: "#18 QS World University Rankings",
    majors: "Medicine, Engineering, Architecture, Business",
    website: "https://www.sydney.edu.au",
    image: "assets/images/sydney.jpg"
},

{
    name: "National University of Singapore",
    country: "Singapore",
    city: "Singapore",
    type: "Public",
    budget: "High",
    ranking: "#8 QS World University Rankings",
    majors: "Engineering, Computer Science, Business, Medicine",
    website: "https://www.nus.edu.sg",
    image: "assets/images/nus.jpg"
},
{
    name: "University of California, Berkeley",
    country: "United States",
    city: "Berkeley, California",
    type: "Public",
    budget: "High",
    ranking: "#12 QS World University Rankings",
    majors: "Engineering, Computer Science, Business, Law",
    website: "https://www.berkeley.edu",
    image: "assets/images/berkeley.jpg"
},

{
    name: "Princeton University",
    country: "United States",
    city: "Princeton, New Jersey",
    type: "Private",
    budget: "High",
    ranking: "#22 QS World University Rankings",
    majors: "Mathematics, Physics, Economics, Computer Science",
    website: "https://www.princeton.edu",
    image: "assets/images/princeton.jpg"
},

{
    name: "Yale University",
    country: "United States",
    city: "New Haven, Connecticut",
    type: "Private",
    budget: "High",
    ranking: "#23 QS World University Rankings",
    majors: "Law, Medicine, History, Business",
    website: "https://www.yale.edu",
    image: "assets/images/yale.jpg"
},

{
    name: "Columbia University",
    country: "United States",
    city: "New York",
    type: "Private",
    budget: "High",
    ranking: "#34 QS World University Rankings",
    majors: "Journalism, Medicine, Engineering, Business",
    website: "https://www.columbia.edu",
    image: "assets/images/columbia.jpg"
},

{
    name: "University of Chicago",
    country: "United States",
    city: "Chicago, Illinois",
    type: "Private",
    budget: "High",
    ranking: "#21 QS World University Rankings",
    majors: "Economics, Business, Law, Mathematics",
    website: "https://www.uchicago.edu",
    image: "assets/images/chicago.jpg"
},

{
    name: "Imperial College London",
    country: "United Kingdom",
    city: "London",
    type: "Public",
    budget: "High",
    ranking: "#2 QS World University Rankings",
    majors: "Engineering, Medicine, Computer Science",
    website: "https://www.imperial.ac.uk",
    image: "assets/images/imperial.jpg"
},

{
    name: "University College London",
    country: "United Kingdom",
    city: "London",
    type: "Public",
    budget: "High",
    ranking: "#9 QS World University Rankings",
    majors: "Architecture, Medicine, Engineering, Law",
    website: "https://www.ucl.ac.uk",
    image: "assets/images/ucl.jpg"
},

{
    name: "University of Edinburgh",
    country: "United Kingdom",
    city: "Edinburgh",
    type: "Public",
    budget: "High",
    ranking: "#27 QS World University Rankings",
    majors: "Medicine, Artificial Intelligence, Business",
    website: "https://www.ed.ac.uk",
    image: "assets/images/edinburgh.jpg"
},

{
    name: "University of Manchester",
    country: "United Kingdom",
    city: "Manchester",
    type: "Public",
    budget: "Medium",
    ranking: "#35 QS World University Rankings",
    majors: "Engineering, Pharmacy, Business, Computer Science",
    website: "https://www.manchester.ac.uk",
    image: "assets/images/manchester.jpg"
},

{
    name: "ETH Zurich",
    country: "Switzerland",
    city: "Zurich",
    type: "Public",
    budget: "Medium",
    ranking: "#7 QS World University Rankings",
    majors: "Engineering, Computer Science, Mathematics",
    website: "https://ethz.ch",
    image: "assets/images/eth.jpg"
},
{
    name: "EPFL",
    country: "Switzerland",
    city: "Lausanne",
    type: "Public",
    budget: "Medium",
    ranking: "#26 QS World University Rankings",
    majors: "Engineering, Computer Science, Architecture",
    website: "https://www.epfl.ch",
    image: "assets/images/epfl.jpg"
},

{
    name: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    type: "Public",
    budget: "Low",
    ranking: "#28 QS World University Rankings",
    majors: "Engineering, Computer Science, Architecture",
    website: "https://www.tum.de",
    image: "assets/images/tum.jpg"
},

{
    name: "Heidelberg University",
    country: "Germany",
    city: "Heidelberg",
    type: "Public",
    budget: "Low",
    ranking: "#84 QS World University Rankings",
    majors: "Medicine, Biology, Law",
    website: "https://www.uni-heidelberg.de",
    image: "assets/images/heidelberg.jpg"
},

{
    name: "Sorbonne University",
    country: "France",
    city: "Paris",
    type: "Public",
    budget: "Low",
    ranking: "#63 QS World University Rankings",
    majors: "Medicine, Arts, Science",
    website: "https://www.sorbonne-universite.fr",
    image: "assets/images/sorbonne.jpg"
},

{
    name: "KU Leuven",
    country: "Belgium",
    city: "Leuven",
    type: "Public",
    budget: "Medium",
    ranking: "#61 QS World University Rankings",
    majors: "Engineering, Business, Medicine",
    website: "https://www.kuleuven.be",
    image: "assets/images/kuleuven.jpg"
},

{
    name: "Delft University of Technology",
    country: "Netherlands",
    city: "Delft",
    type: "Public",
    budget: "Medium",
    ranking: "#49 QS World University Rankings",
    majors: "Engineering, Architecture, Computer Science",
    website: "https://www.tudelft.nl",
    image: "assets/images/delft.jpg"
},

{
    name: "University of Amsterdam",
    country: "Netherlands",
    city: "Amsterdam",
    type: "Public",
    budget: "Medium",
    ranking: "#55 QS World University Rankings",
    majors: "Business, Economics, Computer Science",
    website: "https://www.uva.nl",
    image: "assets/images/amsterdam.jpg"
},

{
    name: "Seoul National University",
    country: "South Korea",
    city: "Seoul",
    type: "Public",
    budget: "Medium",
    ranking: "#31 QS World University Rankings",
    majors: "Engineering, Medicine, Business",
    website: "https://en.snu.ac.kr",
    image: "assets/images/snu.jpg"
},

{
    name: "University of Tokyo",
    country: "Japan",
    city: "Tokyo",
    type: "Public",
    budget: "Medium",
    ranking: "#32 QS World University Rankings",
    majors: "Engineering, Science, Medicine",
    website: "https://www.u-tokyo.ac.jp",
    image: "assets/images/tokyo.jpg"
},

{
    name: "Peking University",
    country: "China",
    city: "Beijing",
    type: "Public",
    budget: "Medium",
    ranking: "#14 QS World University Rankings",
    majors: "Medicine, Business, Computer Science",
    website: "https://english.pku.edu.cn",
    image: "assets/images/peking.jpg"
},

{
    name: "University of Hong Kong",
    country: "Hong Kong",
    city: "Hong Kong",
    type: "Public",
    budget: "High",
    ranking: "#17 QS World University Rankings",
    majors: "Medicine, Law, Business",
    website: "https://www.hku.hk",
    image: "assets/images/hku.jpg"
},

{
    name: "Monash University",
    country: "Australia",
    city: "Melbourne",
    type: "Public",
    budget: "High",
    ranking: "#37 QS World University Rankings",
    majors: "Engineering, Pharmacy, Business",
    website: "https://www.monash.edu",
    image: "assets/images/monash.jpg"
}
];


const container = document.getElementById("universitiesContainer");
const searchInput = document.getElementById("searchInput");
const countryFilter = document.getElementById("countryFilter");
const budgetFilter = document.getElementById("budgetFilter");
const typeFilter = document.getElementById("typeFilter");

function displayUniversities(list) {

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `

        <div class="col-12 text-center">

            <h3>No universities found</h3>

            <p>Try another search.</p>

        </div>

        `;

        return;
    }

    list.forEach(function (university) {

        container.innerHTML += `

        <div class="col-lg-4 col-md-6 mb-4">

            <div class="university-card">

                <img src="${university.image}" alt="${university.name}">

                <div class="card-body">

                    <h4>${university.name}</h4>

                    <p><i class="bi bi-geo-alt-fill"></i> ${university.country}</p>

                    <p><i class="bi bi-building"></i> ${university.type}</p>

                    <p><i class="bi bi-cash-stack"></i> ${university.budget} Budget</p>

                    <div class="d-flex gap-2 mt-3">

                        <button
                            class="btn btn-primary flex-fill"
                            onclick="showDetails('${university.name}')">

                            View Details

                        </button>

                        <button
                            class="btn btn-outline-danger"
                            onclick="addToFavorites('${university.name}')">

                            <i class="bi bi-heart-fill"></i>

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

}

function filterUniversities() {

    const search = searchInput.value.toLowerCase();
    const country = countryFilter.value;
    const budget = budgetFilter.value;
    const type = typeFilter.value;

    const filtered = universities.filter(function (university) {

        const matchName = university.name.toLowerCase().includes(search);

        const matchCountry =
            country === "all" || university.country === country;

        const matchBudget =
            budget === "all" || university.budget === budget;

        const matchType =
            type === "all" || university.type === type;

        return matchName && matchCountry && matchBudget && matchType;

    });

    displayUniversities(filtered);

}

searchInput.addEventListener("keyup", filterUniversities);
countryFilter.addEventListener("change", filterUniversities);
budgetFilter.addEventListener("change", filterUniversities);
typeFilter.addEventListener("change", filterUniversities);

function showDetails(name) {

    const university = universities.find(function (item) {

        return item.name === name;

    });

    document.getElementById("modalTitle").textContent = university.name;

    document.getElementById("modalImage").src = university.image;

    document.getElementById("modalCountry").innerHTML =
        "<strong>Country:</strong> " + university.country;

    document.getElementById("modalCity").innerHTML =
"<strong>City:</strong> " + university.city;

    document.getElementById("modalType").innerHTML =
        "<strong>Type:</strong> " + university.type;

    document.getElementById("modalBudget").innerHTML =
        "<strong>Budget:</strong> " + university.budget;

    document.getElementById("modalRanking").innerHTML =
    "<strong>Ranking:</strong> " + university.ranking;

document.getElementById("modalMajors").innerHTML =
    "<strong>Popular Majors:</strong> " + university.majors;

    document.getElementById("modalDescription").innerHTML =
        "This university offers high-quality education and excellent career opportunities for students.";

    const websiteButton = document.getElementById("modalWebsite");

websiteButton.href = university.website;

websiteButton.textContent = "Visit Official Website";

    const modal = new bootstrap.Modal(
        document.getElementById("universityModal")
    );

    modal.show();

}

function addToFavorites(name) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const university = universities.find(function (item) {

        return item.name === name;

    });

    const exists = favorites.some(function (item) {

        return item.name === university.name;

    });

    if (!exists) {

        favorites.push(university);

        localStorage.setItem("favorites", JSON.stringify(favorites));

        alert("University added to favorites ❤️");

    } else {

        alert("This university is already in your favorites.");

    }

}

displayUniversities(universities);