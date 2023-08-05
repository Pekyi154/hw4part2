// custom-element.js
class ProjectCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
      const template = document.querySelector('#profile-card-template');
      const content = template.content.cloneNode(true);
      this.shadowRoot.appendChild(content);
  
      const imgSrc = this.getAttribute('imagesrc');
      this.shadowRoot.querySelector('img').setAttribute('src', imgSrc);
      
  
      const linkHref = this.getAttribute('project-link');
      this.shadowRoot.querySelector('a').setAttribute('href', linkHref);
    }
  
    // Define which attributes should be observed
    static get observedAttributes() {
      return ['imagesrc', 'project-link', 'alt-text'];
    }
  
    // Handle changes to observed attributes
    attributeChangedCallback(attributeName, oldValue, newValue) {
      if (attributeName === 'imagesrc') {
        // Update the image src attribute changes
        this.shadowRoot.querySelector('img').setAttribute('src', newValue);
      } else if (attributeName === 'project-link') {
        // Update the link href attribute changes
        this.shadowRoot.querySelector('a').setAttribute('href', newValue);
      } else if (attributeName === 'alt-text') {
        this.shadowRoot.querySelector('img').setAttribute('alt', newValue);
      }
    }
  }
  
  // Define the custom element 'profile-card'
  customElements.define('profile-card', ProjectCard);
  