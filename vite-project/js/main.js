import "../styles/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import {menu} from "./menu";

document.querySelector("#app").innerHTML = `
  <h1>Hello?????</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

console.log(menu)

//use extra js and css files to have certain code in place where it will be more easily accessible