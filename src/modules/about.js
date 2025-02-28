export function loadAbout() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const para = document.createElement('p');

    header.textContent = 'About';
    para.textContent = 'This is my about.'

    content.appendChild(header);
    content.appendChild(para);
}