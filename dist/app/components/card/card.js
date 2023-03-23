export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["roles"] = "roles";
})(Attribute || (Attribute = {}));
class Card extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            roles: null,
            name: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
            case Attribute.roles:
                this.roles = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="">
                <section>
                <h1>Name: ${this.name}</h1>
                <p>Role: ${this.roles}</p>
                </section>
                `;
        }
    }
}
customElements.define("my-card", Card);
export default Card;
