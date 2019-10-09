
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/AustinKelsay
*/


axios.get('https://api.github.com/users/AustinKelsay')
  .then((response) => {
    console.log(response);
    let cards = document.querySelector(".cards")
    cards.appendChild(creator(response));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

followersArray.forEach((item) => {
  axios.get('https://api.github.com/users/' + item)
  .then((response) => {
    console.log(response);
    let cards = document.querySelector(".cards")
    cards.appendChild(creator(response));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const creator = (data) => {

  let parentDiv = document.createElement('div')
  let img = document.createElement('img')
  let childDiv = document.createElement('div')
  let h3 = document.createElement('h3');
  let pUsername = document.createElement('p');
  let pLocation = document.createElement('p');
  let pProfile = document.createElement('p');
  let a = document.createElement('a');
  let pFollowers = document.createElement('p');
  let pFollowing = document.createElement('p');
  let pBio = document.createElement('p');

  parentDiv.classList.toggle('card')
  childDiv.classList.toggle('card-info')
  h3.classList.toggle('name')
  pUsername.classList.toggle('username')

  img.setAttribute('src', data.data.avatar_url)
  h3.textContent = data.name;
  pUsername.textContent = "Username: " + data.data.login;
  pLocation.textContent = "Location: " + data.data.location;
  a.textContent = "profile: " + data.data.html_url;
  a.setAttribute('href', data.data.html_url)
  pFollowers.textContent = "Followers: " + data.data.followers;
  pFollowing.textContent = "Following: " + data.data.following;
  pBio.textContent = "Bio: " + data.data.bio;

  pProfile.prepend(a);
  childDiv.append(h3, pUsername, pLocation, pProfile, pFollowers, pFollowing, pBio);
  parentDiv.prepend(img, childDiv);
  
  return parentDiv;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
