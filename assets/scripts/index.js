let contactMe = document.forms.ContactMe;
let firstName = contactMe.firstName;
let lastName = contactMe.lastName;
let email = contactMe.email;
let message = contactMe.message;
let submitBtn = contactMe.submitBtn;
let errorMsg = document.querySelector(".errorMsg");
let lists = [firstName, lastName, email, message];

submitBtn.addEventListener("click", handleClick, false);

function isAllTrue(arr) {
  return arr.every(element => element === true);
}
function toCapital(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}
function handleClick(evt){
evt.preventDefault();
errorMsg.textContent = "Fields are required:";

boolenList = lists.map(item=>{
	if (item.value == "") {
		item.classList.remove("valid");
		item.classList.add("invalid");
		errorMsg.textContent += " " + toCapital(item.name) + ",";
		return false;
        }
	item.classList.remove("invalid");
	item.classList.add("valid");
	return true;
});
temp = errorMsg.textContent.split("");
temp.pop();
temp = temp.join("");
errorMsg.textContent = temp;
errorMsg.style.visibility = "visible";
if (isAllTrue(boolenList)){
errorMsg.style.visibility = "hidden";
contactMe.submit();
}
}

function handleClicks(evt){
evt.preventDefault();
errorMsg.textContent = "Fields are required:";

boolenList = [];
	if (firstName.value == "") {
		firstName.classList.add("invalid");
		errorMsg.textContent += " " + firstName.name + ",";
		boolenList.push(false);
        }else{
		boolenList.push(true);
		firstName.classList.remove("invalid");
		firstName.classList.add("valid");
}
	if (lastName.value == "") {
		lastName.classList.add("invalid");
		errorMsg.textContent += " " + lastName.name + ",";
		boolenList.push(false);
        }else{
		boolenList.push(true);
		lastName.remove("invalid");
		lastName.classList.add("valid");
}
	if (email.value == "") {
		email.classList.add("invalid");
		errorMsg.textContent += " " + email.name + ",";
		boolenList.push(false);
        }else{
		boolenList.push(true);
		email.classList.remove("invalid");
		email.classList.add("valid");
}
	if (message.value == "") {
		message.classList.add("invalid");
		errorMsg.textContent += " " + message.name + ",";
		boolenList.push(false);
        }else{
		boolenList.push(true);
		message.classList.remove("invalid");
		message.classList.add("valid");
}
temp = errorMsg.textContent.split("");
temp.pop();
temp = temp.join("");
errorMsg.textContent = temp;

isAllTrue(boolenList) && contactMe.submit();
}
