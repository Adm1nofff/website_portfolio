const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

setInterval(function() {
    const date = new Date();
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let currentDate = `${days[date.getDay()]}, ${shortMonths[monthIndex]} ${day}, ${year} `;
    document.getElementById("current-date").textContent = currentDate;
}, 1000);