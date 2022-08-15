import pageLoad from './pageload';
import aboutLoad from './aboutLoad';
import './style.css';

pageLoad();

document.getElementById("about").addEventListener("click", function(){
    aboutLoad()
 });





