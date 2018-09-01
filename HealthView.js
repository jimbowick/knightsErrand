class HealthView extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback(){
        this.p = document.createElement("p");
        this.appendChild(this.p);
    }

    UpdateHealthView(health){
        this.p.innerHTML = health.toString().bold();
    }
}

window.customElements.define('health-view', HealthView);
