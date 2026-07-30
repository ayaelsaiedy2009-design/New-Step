const housings = [

{
    name: "Unite Students",
    country: "United Kingdom",
    city: "London",
    type: "Student Residence",
    price: "$900/month",
    image: "assets/images/housing/unite.jpg"
}

];

const container = document.getElementById("housingContainer");

function displayHousing() {

    container.innerHTML = "";

    housings.forEach(function(house){

        container.innerHTML += `

        <div class="col-lg-4 col-md-6 mb-4">

            <div class="housing-card">

                <img src="${house.image}" alt="${house.name}">

                <div class="card-body">

                    <h4>${house.name}</h4>

                    <p><i class="bi bi-geo-alt-fill"></i> ${house.city}, ${house.country}</p>

                    <p><i class="bi bi-building"></i> ${house.type}</p>

                    <p><i class="bi bi-cash-stack"></i> ${house.price}</p>

                    <button class="btn btn-primary w-100 mt-3">
                        View Details
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

displayHousing();