class EquippedView extends HTMLElement{
    constructor(){
        super();
        
    }
    connectedCallback(){
        this.butleft = document.createElement("button");
        this.butright = document.createElement("button");
        this.appendChild(this.butleft);
        this.appendChild(this.butright);
    }
    UpdateEquippedView(leftitem,rightitem){
        this.butleft.textContent = leftitem.name;
        this.butright.textContent = rightitem.name;
    }
}
window.customElements.define('equipped-view', EquippedView);