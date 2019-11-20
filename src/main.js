import { PersonalInfo } from './../src/cia-api.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';



$(document).ready(function() {

  // TAKES USER INPUT AND HOLD TO VARIABLE
  $('#numberInput').click(function() {
    const inputedNumber = $('#number').val();
    const inputedCountryCode = $('#countryCode').val();

    // THIS WILL CALL THE API CALL FUNCTION
    (async () => {
      let personalInfo = new PersonalInfo();
      const response = await personalInfo.getPersonalInfoByNumber(inputedCountryCode,inputedNumber);
      console.log(response);
      // getElements(response);
    })();

    // THIS WILL DISPLAY API FUNCTION RETURN ON DOM
    // function getElements(response) {
    //   $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
    //   $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    // }

  });
});
