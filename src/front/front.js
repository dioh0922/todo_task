import {createApp} from 'vue';
const axios = require("axios");
import App from "./component/app.vue";

const app_main = createApp({
	mounted(){
		alert("create");
	}
});

app_main.mount("#container");

/*
(window.onload = () => {
	//container
	alert("load");
});
*/
