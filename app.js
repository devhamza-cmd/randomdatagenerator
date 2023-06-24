const tbdoy=document.querySelector("tbody");
const btn=document.querySelector("button");
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(obj) {
    let results=obj['results'][0];
    let imgurl=results['picture']['large'];
    let username=results['login']['username'];
    let password=results['login']['password'];
    let email=results['email'];
    let phone =results['phone'];
    let age=results['dob']['age'];
    let fullname=`${results['name']['title']} ${results['name']['first']} ${results['name']['last'] }`;
    let gender=results['gender'];
    let state=results['location']['state'];
    let country=results['location']['country'];
    let city=results['location']['city'];
    let postcode=results['location']['postcode'];
    let street=`${results['location']['street']['number']} ${results['location']['street']['name']}`
    tbdoy.innerHTML+=`<tr>
    <td><img src="${imgurl}" ></td>
    <td>${username}</td>
    <td>${password}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${fullname}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${country}</td>
    <td>${state}</td>
    <td>${city}</td>
    <td>${postcode}</td>
    <td>${street}</td>
    </tr>`;
  }
});
btn.addEventListener("click",()=>{
  const number=+document.querySelector("input").value;
for(i=0;i<number;i++){
  $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(obj) {
    let results=obj['results'][0];
    let imgurl=results['picture']['large'];
    let username=results['login']['username'];
    let password=results['login']['password'];
    let email=results['email'];
    let phone =results['phone'];
    let age=results['dob']['age'];
    let fullname=`${results['name']['title']} ${results['name']['first']} ${results['name']['last'] }`;
    let gender=results['gender'];
    let state=results['location']['state'];
    let country=results['location']['country'];
    let city=results['location']['city'];
    let postcode=results['location']['postcode'];
    let street=`${results['location']['street']['number']} ${results['location']['street']['name']}`
    tbdoy.innerHTML+=`<tr>
    <td><img src="${imgurl}" ></td>
    <td>${username}</td>
    <td>${password}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${fullname}</td>
    <td>${age}</td>
    <td>${gender}</td>
    <td>${country}</td>
    <td>${state}</td>
    <td>${city}</td>
    <td>${postcode}</td>
    <td>${street}</td>
    </tr>`;
  }
});
}
})


