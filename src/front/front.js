
import {createApp} from 'vue/dist/vue.esm-bundler';	//webpack等のバンドラで使う用
import App from "./component/App.vue";
//import Form from "./component/Form.vue";

/*
const app_main = createApp({
	mounted(){
		//alert("create");
	}
});
*/

const app_main = createApp(App);
//app_main.component("App", App);
app_main.mount("#container");

(window.onload = () => {
	//alert("load");
});
