  
   var Firstname=getelementbyid('firstname');
   var Lastname=getelementbyid('lastname');
    var  Email=getelementbyid('email');
    var  Password=getelementbyid('password');
    var  Form=getelementbyid('form');
    var error=getelementbyclass('error');
    var header=getelementbyid('head3')


        function getelementbyid(id){

  	        return document.getElementById(id);
                       }
       function getelementbyclass(class_value){

  	       return document.getElementsByClassName(class_value);
                }

         Form.addEventListener('submit',(event)=>{

         	event.preventDefault();

         	 var fname=validation(Firstname,0,"First Name is mandatory");
             var lname=validation(Lastname,1,"Last Name is mandatory");
             var email=validation(Email,2,"Email is mandatory");
             var password=validation(Password,3,"Password Name is mandatory");

             console.log(fname);

             var finalObject={}
              if(fname==true && lname==true && email==true && password==true){

                  finalObject['firstname']= Firstname.value;
                  finalObject['lastname']= Lastname.value;
                  finalObject['email'] = Email.value;
                  finalObject['password']=Password.value;

                  var name = finalObject.firstname;

                  localStorage.setItem(name,JSON.stringify(finalObject));

                  header.textContent="Submitting the form. Please wait!!"

                  setTimeout(()=>{
                    header.textContent="Hurry "+finalObject.firstname.toUpperCase()+" Form Submitted!!!"
                  },1000)

              }

           
         })

          function validation(element, class_id, errorMessage ){
           if(element.value.trim() == ''){
               element.style.border="2px solid red";
               error[class_id].textContent=errorMessage;
               return false;
           }else {
                  
                  element.style.border="2px solid green"; 
                  error[class_id].textContent='';
                  return true;  
              }
       }



