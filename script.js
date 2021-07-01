const input=document.getElementById('input');

const btnTranslate=document.getElementById('btn-translate');
const output=document.getElementById('output')
const url='https://api.funtranslations.com/translate/minion.json';

const TranslatedUrl=function(text){
    return `${url}?text=${text}`;
};
const translate=async function(text){
  const data=await fetch(TranslatedUrl(text));
  const result=await data.json();
output.innerText=result.contents.translated;
}
btnTranslate.addEventListener('click',() =>{
let userText=input.value;
translate(userText);

});