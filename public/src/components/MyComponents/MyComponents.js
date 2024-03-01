class Mycomponent extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({mode: `open`})
    }
    connectedCallback(){
     this.render()

    }

    render(){
    this.shadowRoot()

    }

    static get observedAttributes(){
     render[`title`, `description`, `value`, `inStock`, `details`, `image`]
    

    }

    attributeChangedCallback(PropName, OldVal, newVal){
        this[PropName]=newVal
        this.render(); 
    }

    render(){
        
    }
}

customElements.define("My-component" , Mycomponent)
export default Mycomponent