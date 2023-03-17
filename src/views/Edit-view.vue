<template>
    <div class="main-container">
        <div class="edit-view">
            <div class="back" @click="goToDetail">
                <img src="./Frontend_Internship_Test_Slices/ic_back_grey@3x.png" alt="Back button" class="icon">
                <p class="back-button">Back to details page</p>
            </div>
            <!-- / return to Details button -->
            <div class="title-listing">
                <img src="./Frontend_Internship_Test_Slices/ic_back_grey@3x.png" @click="goToDetail" alt="Back button" class="icon mobile-back-icon">
                <h1>Edit listing</h1>
            </div>
            <!-- / title + return to Details mobile button -->
            <form class="edit-field" id='form' type='submit' @submit.prevent="sendRequest" method="post">
                <div class="input-street">
                    <p class="input-title">Street Name*</p>
                    <input type="text" v-model="streetName" :placeholder=streetName @input="updateStreetName" >
                    <div id="error-bed" class="error-msg">{{ errorMessage }}</div>
                </div>
                <!-- / street name input field -->
                <div class="input-address">
                    <div class="number">
                        <p class="input-title">House number*</p>
                        <input type="text" v-model="houseNumber" :placeholder=houseNumber @input="updateHouseNumber" >
                    </div>
                    <!-- / house number input field -->
                    <div class="additional">
                        <p class="input-title">Additional (optional)</p>
                        <input type="text" v-model="numberAddition" :placeholder=numberAddition @input="updateNumberAddition" >
                    </div>
                    <!-- / house number addition input field -->
                </div>
                <div class="input-zip">
                    <p class="input-title">Postal code*</p>
                    <input type="text" v-model="zip" :placeholder=zip @input="updateZip" >
                </div>
                <!-- / zip input field -->
                <div class="input-city">
                    <p class="input-title">City*</p>
                    <input type="text" v-model="city" :placeholder=city @input="updateCity" >
                </div>
                <!-- / city input field -->
                <div class="upload">
                    <p class="input-title">Change picture (PNG or JPG)*</p>
                    <input ref="fileInput" style="display: none" type="file" :placeholder=image name="myImage" accept="image/png, image/jpeg" class="required" id="image" @change="onFileSelected">
                </div>
                <!-- / image input field -->
                <div class="input-price">
                    <p class="input-title">Price*</p>
                    <input type="text" v-model="price" :placeholder=price @input="updatePrice" >
                </div>
                <!-- / price input field -->
                <div class="input-amenities">
                    <div class="input-amenity">
                        <div class="input-size">
                            <p class="input-title">Size*</p>
                            <input type="text" v-model="size" :placeholder=size @input="updateSize" >
                        </div>
                        <!-- / size input field -->
                        <div class="input-garage">
                            <p class="input-title">Garage*</p>
                            <select name="hasGarage" @input="updateHasGarage" >
                                <option value="false" selected>{{ hasGarage }}</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <!-- / garage selection field -->
                    </div>
                    <div class="input-amenity">
                        <div class="input-bedroom">
                            <p class="input-title">Bedrooms*</p>
                            <input type="text" v-model="bedrooms" :placeholder=bedrooms @input="updateBedrooms" >
                        </div>
                        <!-- / bedroom input field -->
                        <div class="input-bathroom">
                            <p class="input-title">Bathrooms*</p>
                            <input type="text" v-model="bathrooms" :placeholder=bathrooms @input="updateBathrooms" >
                        </div>
                        <!-- / bathroom input field -->
                    </div>
                </div>
                <div class="input-date">
                    <p class="input-title">Construction date*</p>
                    <input type="text" v-model="constructionYear" :placeholder=constructionYear @input="updateConstructionYear" >
                </div>
                <!-- / construction date input field -->
                <div class="input-description">
                    <p class="input-title">Description*</p>
                    <textarea rows="10" cols="50" v-model="description" :placeholder=description @input="updateDescription" ></textarea>
                </div>
                <!-- / description input field -->
                <div class="submit">
                    <button type="submit" class="submit-button">SAVE</button>
                </div>
                <!-- / submit button -->
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Edit',
    data() {
        return {
            image: this.$store.state.currentHouse.image,
            selectedFile: "",
            beTrue: true,
            errorMessage: 'Required field missing.',
            houseId: this.$route.params.houseId,
        };
    },
    created() {
        this.$store.dispatch("getCurrentHouse", this.$route.params.houseId);
    },
    computed: {
        image: {
            get() {
                return this.$store.state.currentHouse.image;
            }
        },
        price: {
            get() {
                return "€" + this.$store.state.currentHouse.price;
            }
        },
        bedrooms: {
            get() {
                return this.$store.state.currentHouse.rooms.bedrooms;
            }
        },
        bathrooms: {
            get() {
                return this.$store.state.currentHouse.rooms.bathrooms;
            }
        },
        size: {
            get() {
                return this.$store.state.currentHouse.size;
            }
        },
        fullAddress: {
            get () {
                // regular expresson to get street, number and addition from https://gist.github.com/christiaanwesterbeek/c574beaf73adcfd74997
                var str = this.$store.state.currentHouse.location.street;
                let re = /^(\d*[\wäöüß\d '\/\\\-\.]+)[,\s]+(\d+)\s*([\wäöüß\d\-\/]*)$/i
                let match = str.match(re)
                return match
            }
        },
        streetName: {
            get() {
                this.$store.state.currentHouse.streetName = this.fullAddress[1];
                return this.fullAddress[1]
            }
        },
        houseNumber: {
            get() {
                this.$store.state.currentHouse.houseNumber = this.fullAddress[2];
                return this.fullAddress[2]
            }
        },
        numberAddition: {
            get() {
                this.$store.state.currentHouse.numberAddition = this.fullAddress[3];
                return this.fullAddress[3]
            }
        },
        zip: {
            get() {
                return this.$store.state.currentHouse.location.zip;
            }
        },
        city: {
            get() {
                return this.$store.state.currentHouse.location.city;
            }
        },
        constructionYear: {
            get() {
                return this.$store.state.currentHouse.constructionYear;
            }
        },
        hasGarage: {
            get() {
                if (this.$store.state.currentHouse.hasGarage) {
                    return "Yes"
                } else {
                    return "No"
                }
            }
        },
        description: {
            get() {
                return this.$store.state.currentHouse.description;
            }
        },
    },
    methods: {
        backToMain() {
            // go to overview page
            this.$router.push({name: 'Overview'})
        },
        goToDetail() {
            // go to detail page of house just created
            console.log(`/details?id=${this.houseId}`)
            this.$router.push({name: 'Details', params: {houseId: this.houseId}})
        },
        updateStreetName(event) {
            this.$store.state.currentHouse.streetName = event.target.value;
        },
        updateImage(event) {
            console.log(event.target.value);
            this.$store.state.currentHouse.image = event.target.value;
        },
        updatePrice(event) {
            this.$store.state.currentHouse.price = event.target.value;
        },
        updateCity(event) {
            this.$store.state.currentHouse.location.city = event.target.value;
        },
        updateSize(event) {
            this.$store.state.currentHouse.size = event.target.value;
        },
        updateHouseNumber(event) {
            this.$store.state.currentHouse.houseNumber = event.target.value;
        },
        updateNumberAddition(event) {
            if (event.target.value === "") {
                this.$store.state.currentHouse.numberAddition = "";
            } else {
                this.$store.state.currentHouse.numberAddition = event.target.value;
            }
        },
        updateZip(event) {
            this.$store.state.currentHouse.location.zip = event.target.value;
        },
        updateHasGarage(event) {
            this.$store.state.currentHouse.his.hasGarage = event.target.value;
        },
        updateBedrooms(event) {
            this.$store.state.currentHouse.rooms.bedrooms = event.target.value;
        },
        updateBathrooms(event) {
            this.$store.state.currentHouse.rooms.bathrooms = event.target.value;
        },
        updateConstructionYear(event) {
            this.$store.state.currentHouse.constructionYear = event.target.value;
        },
        updateDescription(event) {
            this.$store.state.currentHouse.description = event.target.value;
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
        },
        async uploadImage() {
            // api call to upload image
            const FormData = require('form-data');
            const form = new FormData();
            form.append('image', this.selectedFile);
            this.$store.state.houseId = this.houseId
            await this.$store.dispatch("uploadImage", form);
        },
        editHouse() {
            // post house information to the API
            const FormData = require('form-data');
            const form = new FormData();
            var url = `https://api.intern.d-tt.nl/api/houses/${this.houseId}`

            form.append('price', this.$store.state.currentHouse.price);
            form.append('bedrooms', this.$store.state.currentHouse.rooms.bedrooms);
            form.append('bathrooms', this.$store.state.currentHouse.rooms.bathrooms);
            form.append('size', this.$store.state.currentHouse.size);
            form.append('streetName', this.$store.state.currentHouse.streetName);
            form.append('houseNumber', this.$store.state.currentHouse.houseNumber);
            form.append('numberAddition', this.$store.state.currentHouse.numberAddition);
            form.append('zip', this.$store.state.currentHouse.location.zip);
            form.append('city', this.$store.state.currentHouse.location.city);
            form.append('constructionYear', this.$store.state.currentHouse.constructionYear);
            form.append('hasGarage', this.$store.state.currentHouse.hasGarage);
            form.append('description', this.$store.state.currentHouse.description);

            axios
            .post(url, form, {
                headers: {
                    'X-Api-Key': this.$store.state.apiKey
                    }
                }
            )
            .then(data => console.log(data))
            .catch(error => console.error(error));

            this.uploadImage();
            console.log("Image updated");
        },
        async sendRequest() {
            // main function call when form is filled in
            console.log("Sending request");
            this.editHouse();
            console.log("House edited")
            await this.$store.dispatch("getHouses",);
            this.backToMain();
        },
    },
}
</script>