// JavaScript Document

function validate(){	 
		// Check email
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
		var s=document.register.email.value;
   		
		if(!s.match(mailformat))  
		{
			alert("You have entered an invalid email address!");  
			return false;  
		}  
   		
		// check password
		var phoneNumber = document.register.phonenumber.value;
		//check number
		if(phoneNumber.length != 10 && phoneNumber.length != 11)
			{
				alert("Phone number must have 10 or 11 digits!");
				return false;
			}
		if(isNaN(phoneNumber) === true)
			{
				alert("Phone must be number type!");
				return false;
			}
		//check message
		var message = document.register.message.value;
		if(message.length < 100)
			{
				alert("Your message must have at least 100 character! Please enter again!");
				return false;
			}
    return true ;
}