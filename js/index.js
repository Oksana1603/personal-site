const form = document.getElementsByClassName('was-validated');
const answer=document.getElementById('answer');

const testBtn = document.getElementById('testBtn');
let RandomTest=document.getElementById('RandomTest1');
const alertText =document.getElementsByClassName("alert alert-dismissible alert-danger");

const wrong = `<div class="alert alert-dismissible alert-danger">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
</div>`;
var div = document.createElement('div');
div.appendChild(document.createTextNode('top div'));


testBtn.addEventListener('click',()=>{
   console.log(answer.value);
   switch (answer.value) {
      case 'wet':
               break;
      case 'dry':
      console.log(wrong); 
      alert(wrong)
 //const alertElement = $('body').append(wrong);
   //   alertElement.alert();
         
      default:
         // code
   }
   
   
 
   
   
   
   {
//   RandomTest.appendChild(alertText);
  
          
    
}

           
});