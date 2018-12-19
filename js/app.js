/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
document.querySelector('#name1').textContent = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
document.querySelector('#position2').textContent = "Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
document.querySelector('#alias3').textContent = "Concatenation";



/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
const profiles = document.querySelectorAll('.profile');
profiles[0].textContent = "shirts vs. blouses";


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
profiles[1].textContent = "Be like water";


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
const aliases = document.querySelectorAll('.alias');
aliases[2].textContent = "Mace Windu";


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
const newDiv = document.createElement('div');
newDiv.className = "name7";
newDiv.textContent = "Peter Griffin";

 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
newDiv2 = document.createElement('div');
newDiv2.className = "alias8";
newDiv2.textContent = "Old Man Riverwalk";


//Final Boss
/*9. Create your own profile.*/
const imgs = document.querySelectorAll('img');
const block3 = document.querySelectorAll('.block3');

imgs[8].src = "../img/prison-mike.png";
const name9 = document.createElement('div');
name9.id = "name9";
name9.textContent = "Prison Mike";
block3[2].appendChild(name9);

const position9 = document.createElement('div');
position9.id = "position9";
position9.textContent = "Convict";
block3[2].appendChild(position9);

const bio9 = document.createElement('div');
bio9.id = "bio9";
bio9.textContent = "Do you really expect me not to push you up against the wall, biotch?";
block3[2].appendChild(bio9);

console.log(imgs, block3);
