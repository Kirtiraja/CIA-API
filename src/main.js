import { PersonalInfo } from './../src/cia-api.js';
import { EvilInsult } from './../src/cia-api.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';



$(document).ready(function() {

  // TAKES USER INPUT AND HOLD TO VARIABLE
  $('#numberInput').click(function() {
    const inputedNumber = $('#number').val();
    const inputedCountryCode = $('#countryCode').val();


    // THIS WILL CALL THE PERSONAL INFO API FUNCTION
    (async () => {
      let personalInfo = new PersonalInfo();
      const response = await personalInfo.getPersonalInfoByNumber(inputedCountryCode,inputedNumber);

      getElements(response);
    })();


    // THIS WILL CALL EVIL INSULTS API
    (async () => {
      let evilInsult = new EvilInsult();
      const insultResponse = await evilInsult.getPersonalInsult();

      getElements2(insultResponse);
    })();


    // THIS WILL DISPLAY API FUNCTION RETURN ON (DOM)
    function getElements(response) {
      $(".showPhoneNumber").text(`The phone number ${inputedNumber} belongs to ${response.belongs_to[0].name}`);
      $('.showAddress').text(`who lives at ${response.current_addresses[0].street_line_1} ${response.current_addresses[0].city}`);
      $('.showYourPeeps').text(`your peeps be: ${response.associated_people[0].name}, ${response.associated_people[1].name}, ${response.associated_people[2].name}, ${response.associated_people[3].name}, ${response.associated_people[4].name}, ${response.associated_people[5].name}, ${response.associated_people[6].name}`);
      $("#insultName").text(`Hey ${response.belongs_to[0].name},`);
    }


    // THIS WILL DISPLAY EVIL INSULT RESPONSE AND CONCATENATE WITH FIRST API RESULTS(DOM)
    function getElements2(insultResponse) {
      $('#showInsult').text(` ${insultResponse.insult}`);
    }
  });
});

// ADD INTERVAL WITH CLEAR INTERVAL TO SOME KIND OF DOM NOTICE(POSSIBLY INSULT API)
// ADD ERROR NOTICE DOM WHEN API CALL IS BAD(TEST IT) return a 200 OK??
// ADD SOME SORT OF PROMISE FUNCTIONS
// STYLING OF DOM
// UPDATE README (INSTALL WEBPACK,KEYs ETC)
// IF WE HAVE TIME PRACTICE ADDING A NEW OBJECT(COMPLAINT FORM)
