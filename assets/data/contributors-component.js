import { contributorsArray } from "./contributors.js"

const contributorSection = document.getElementById("contributors-main-section")


// Builds contributorMap from contributorsArray, making a card for each contributor
const contributorMap = contributorsArray.map(contributor => 
    `<article class="contributor-card">

        <h2>${contributor.name}</h2>
        <br/>
        <div class="img-container">

            <!-- Checks if contributors avatar exists, if not renders default picture -->
            ${ contributor.avatar ? 
            `<img class="contributor-avatar" src="${contributor.avatar}" alt="${contributor.alt}"/>`
            : `<img class="contributor-avatar" src="/assets/images/contributors/placeholder-avatar.jpg" alt="placeholder avatar"/>`}
                
        </div>
        <br/>
        <h3>Find this contributor on:</h3>
        <div class="social-links">
                
            <!-- Checks if gitHub link exists, only renders icon if present -->
            ${ contributor.gitHub ? 
            `<a href="${contributor.gitHub}" class="contributor-github" aria-label="github">
            <i class="fa-brands fa-github social-icon fa-2x" aria-hidden="true" ></i></a>`
            : '' }
                
            <!-- Checks if linkedIn link exists, only renders icon if present  -->
            ${contributor.linkedIn ? `
            <a href="${contributor.linkedIn}" aria-label="linked-in">
            <i class="fa-brands fa-linkedin-in fa-2x social-icon" aria-hidden="true"></i>
            </a>` 
            : ''}

        </div>

    </article>`
).join('')


function renderContributors() {
    contributorSection.innerHTML = contributorMap
}

renderContributors()