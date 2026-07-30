const tips = [

    "Choose a university based on your interests, not only your grades.",

    "Always compare tuition fees before applying.",

    "Check scholarship deadlines early.",

    "Research student housing before moving.",

    "Think about your future career while choosing a major."

];

const dailyTip = document.getElementById("dailyTip");

const randomTip = Math.floor(Math.random() * tips.length);

dailyTip.textContent = tips[randomTip];