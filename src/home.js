export function loadHomePage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('tab-content');
    homeDiv.innerHTML = `
    <div class="centered-content">
        <img src="images/restaurant-image.jpg" alt="Restaurant Image" class="centered-image">
        <p>Experience the finest dining in town at our restaurant. We offer a wide range of delicious dishes prepared with the freshest ingredients. Join us for an unforgettable culinary journey.</p>
    </div>
`;
    content.appendChild(homeDiv);
}
