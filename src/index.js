import { loadHomePage } from './home.js';
import { loadMenuPage } from './menu.js';
import { loadContactPage } from './contact.js';
import './style.css';
document.addEventListener('DOMContentLoaded', () => {
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');

    homeTab.addEventListener('click', () => {
        loadHomePage();
        setActiveTab(homeTab);
    });

    menuTab.addEventListener('click', () => {
        loadMenuPage();
        setActiveTab(menuTab);
    });

    contactTab.addEventListener('click', () => {
        loadContactPage();
        setActiveTab(contactTab);
    });

    // Initial load
    loadHomePage();
    setActiveTab(homeTab);
});

function setActiveTab(tabElement) {
    const tabs = document.querySelectorAll('nav ul li');
    tabs.forEach((tab) => tab.classList.remove('active'));
    tabElement.classList.add('active');
}
