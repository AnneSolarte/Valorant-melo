import {traer_api} from "./components/data.js"
import Card from "./components/card/card.js"

class AppContainer extends HTMLElement {
    ValList: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const dataVal = await traer_api();
        this.render(dataVal);
    }

    render(dataVal:[]) {

    }
}

customElements.define("app-container", AppContainer);
