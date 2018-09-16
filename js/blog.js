const addCommennt = document.querySelector(".commentary .addComment")
const section = document.querySelector("section.commentary")
addCommennt.addEventListener('click', () => {
    event.preventDefault();
     const textArea = document.getElementById("Comm");
        const person = document.getElementById("name");
        console.log(person.value);
        
        let p = document.createElement('p');
        section.appendChild(p);
        p.innerHTML = person.value + ":" + textArea.value;
         
    });