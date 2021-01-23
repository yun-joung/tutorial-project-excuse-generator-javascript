
window.onload = () => {
    document.querySelector('#start').addEventListener("click", () => {
    document.querySelector('#name').innerHTML = generateDomain ();
});
    
};

let generateDomain = () => {

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action= ['ate','peed','crushed','broke'];
    let what= ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let whoIndex = Math.floor(Math.random() * who.length);
    let ActionIndex = Math.floor(Math.random() * who.length);
    let whatIndex = Math.floor(Math.random() * who.length);
    let whanIndex = Math.floor(Math.random() * who.length);

    return who[whoIndex] + ' ' + action[ActionIndex] + ' ' + what[whatIndex] + ' ' + when[whanIndex]; 
};