export class PersonalInfo {
  async getPersonalInfoByNumber(inputedCountryCode, inputedNumber) {
    try {

      // THIS WILL CALL API WITH NUBER AND COUNTRY CODE INPUT
      let response =  await fetch(`https://api.ekata.com/3.0/phone.json?api_key=${process.env.CIA}&phone.country_hint=${inputedCountryCode}&phone=${inputedNumber}`);

      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}

export class EvilInsult {
  async getPersonalInsult() {
    try {

      // THIS WILL CALL API WHEN INTIAL API IS RAN
      let insultResponse =  await fetch(`https://evilinsult.com/generate_insult.php?lang=en&type=json`);

      let jsonifiedResponseInsult = await insultResponse.json();
      return jsonifiedResponseInsult;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
