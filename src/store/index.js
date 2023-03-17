// store.js

import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
    state: {
        houses: [],
        currentHouse: {},
        houseId: '',
        apiKey: 'WZHLAkobvQzuly6fDj8aMi27nPdR3XpF',
        searchQuery: "",
        deletedHouse: "",
        sortSetting: "Price",
        validate: ""
      },
    mutations: {
      setHouses(state, values) {
        // set state to houses received from API
        state.houses = values;
      },
      setCurrentHouse(state, houseProperties) {
        // set current house with info from API
        state.currentHouse = houseProperties;
      }
    },
    actions: {
      async getHouses({commit}) {
        // receive houses infor form API
        await axios
            .get('https://api.intern.d-tt.nl/api/houses', {
                headers: {
                  'X-Api-Key':this.state.apiKey
                }
              }
            )
            .then((response) => {
                console.log(response.data);
                commit("setHouses",response.data);
            })
            .catch(error => console.error(error));
    },
    getCurrentHouse({commit}, houseId) {
      // receives house info from house id from API
      console.log("getting properties for house " + houseId);
      this.state.houses.forEach((item, index) => {
        if (item.id == houseId) {
          this.state.currentHouse = item;
          console.log("Found house" + this.state.currentHouse)
          }
        } 
      )

    },
    async uploadImage({commit}, form) {
      // uploads image to API
      let url = `https://api.intern.d-tt.nl/api/houses/${this.state.houseId}/upload`
      await axios
      .post(url, form, {
          headers: {
              'X-Api-Key': this.state.apiKey
              }
          }
      )
      .then(data => console.log(data))
      .catch(err => console.log(err.message))
    },
    }
});