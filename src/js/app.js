import '../css/main.css';
import '../css/element.css';
import {btn, para } from './dom-loader';


var show = false;

btn.addEventListener('click', toggleState);
updatePara();


function toggleState(){
	show  = !show;
	updatePara();
	updateBtn();
}

function updateBtn(){
	if(show){
		btn.textContent = 'Hide Paragraph';
	}else{
		btn.textContent = 'Show Paragraph';
	}
}

function updatePara(){
	if(show){
		para.style.display = 'block';
	}else{
		para.style.display = 'none';
	}
}