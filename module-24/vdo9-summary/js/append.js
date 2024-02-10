const mainContainer = document.getElementById('main-container')

const section = document.createElement('section');

section.innerHTML = `
    <h1 class="section-title">section title - 3A</h1>
    <p>Extra create a section using JS-append child</p>
    <ul>
        <li>list item -1A</li>
        <li>list item -2A</li>
        <li>list item -3A</li>
        <li>list item -4A</li>
    </ul>
`
mainContainer.appendChild(section);