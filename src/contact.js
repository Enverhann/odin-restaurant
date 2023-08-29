export function loadContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('tab-content');
    contactDiv.innerHTML = `
        <h2>Contact Us</h2>
        <p>For reservations and inquiries, please contact us at:</p>
        <address>
            <p>123 Restaurant St.</p>
            <p>Cityville, ABC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@restaurant.com</p>
        </address>
    `;
    content.appendChild(contactDiv);
}
