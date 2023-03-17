<template>
    <div class="main-container">
        <div class="new-view">
            <div class="back" @click="backToMain">
                <img src="./Frontend_Internship_Test_Slices/ic_back_grey@3x.png" alt="Back button" class="icon" >
                <p class="back-button">Back to overview</p>
            </div>
            <!-- / return to Overview button -->
            <div class="title-listing">
                <router-link to="/"><img src="./Frontend_Internship_Test_Slices/ic_back_grey@3x.png" alt="Back button" class="icon mobile-back-icon" ></router-link>
                <h1>Create new listing</h1>
            </div>
            <!-- / title + return to Overview mobile button -->
            <form class="edit-field" id="form" @submit.prevent="postAndBackToMain" >
                <div class="input-street">
                    <p class="input-title">Street Name*</p>
                    <input type="text" v-model="posts.streetName" placeholder="Enter the street name" @input="removeValidate" class="required" id="street" >
                    <div id="error-street" class="error-msg">{{ errorMessage }}</div>
                </div>
                <!-- / street name input field -->
                <div class="input-address">
                    <div class="number">
                        <p class="input-title">House number*</p>
                        <input type="text" v-model="posts.houseNumber" placeholder="Enter house number" @input="removeValidate" class="required" id="number" >
                        <div id="error-number" class="error-msg">{{ errorMessage }}</div>
                    </div>
                    <!-- / house number input field -->
                    <div class="additional">
                        <p class="input-title">Additional (optional)</p>
                        <input type="text" v-model="posts.numberAddition" placeholder="e.g. A">
                    </div>
                    <!-- / house number addition input field -->
                </div>
                <div class="input-zip">
                    <p class="input-title">Postal code*</p>
                    <input type="text" v-model="posts.zip" placeholder="e.g. 1000 AA" @input="removeValidate" class="required" id="zip" >
                    <div id="error-zip" class="error-msg">{{ errorMessage }}</div>
                </div>
                <!-- / zip input field -->
                <div class="input-city">
                    <p class="input-title">City*</p>
                    <input type="text" v-model="posts.city" placeholder="e.g. Utrecht" @input="removeValidate" class="required" id="city" >
                    <div id="error-city" class="error-msg">{{ errorMessage }}</div>
                </div>
                <!-- / city input field -->
                <div class="upload">
                    <p class="input-title">Upload picture (PNG or JPG)*</p>
                    <input ref="fileInput" style="display: none" type="file" name="myImage" accept="image/png, image/jpeg" @input="removeValidate" class="required" id="image" @change="onFileSelected">
                    <button v-if="selectedFile === ''" class="upload-image" @click="$refs.fileInput.click()"></button>
                    <button v-else class="edit-image" style="background: url('https://api.intern.d-tt.nl/uploads/house1.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center;" @click="$refs.fileInput.click()"></button>
                    <div id="error-image" class="error-msg">{{ errorMessage }}</div>
                </div>
                <!-- / image input field -->
                <div class="input-price">
                    <p class="input-title">Price*</p>
                    <input type="text" v-model="posts.price" placeholder="e.g. €150.000" @input="removeValidate" class="required" id="price" >
                    <div id="error-price" class="error-msg">{{ errorMessage }}</div>
                </div>
                <!-- / price input field -->
                <div class="input-amenity">
                    <div class="input-size">
                        <p class="input-title">Size*</p>
                        <input type="text" v-model="posts.size" placeholder="e.g. 60m2" @input="removeValidate" class="required" id="size" >
                        <div id="error-size" class="error-msg">{{ errorMessage }}</div>
                    </div>
                    <!-- / size input field -->
                    <div class="input-garage">
                        <p class="input-title">Garage*</p>
                        <select name="hasGarage" @input="validateGarage" class="required" id="garage" >
                            <option value="select" selected>Select</option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <div id="error-garage" class="error-msg">{{ errorMessage }}</div>
                    </div>
                    <!-- / garage selection field -->
                </div>
                <div class="input-amenity">
                    <div class="input-bedroom">
                        <p class="input-title">Bedrooms*</p>
                        <input type="text" v-model="posts.bedrooms" placeholder="Enter amount" @input="removeValidate" class="required" id="bed" >
                        <div id="error-bed" class="error-msg">{{ errorMessage }}</div>
                    </div>
                    <!-- / bedroom input field -->
                    <div class="input-bathroom">
                        <p class="input-title">Bathrooms*</p>
                        <input type="text" v-model="posts.bathrooms" placeholder="Enter amount" @input="removeValidate" class="required" id="bath" >
                        <div id="error-bath" class="error-msg">{{ errorMessage }}</div>
                    </div>
                    <!-- / bathroom input field -->
                </div>
                <div class="input-date">
                    <p class="input-title">Construction date*</p>
                    <input type="text" v-model="posts.constructionYear" placeholder="e.g. 1990" @input="removeValidate" class="required" id="construction" >
                    <div id="error-construction" class="error-msg">{{ errorMessage }}</div>
                </div>
                <!-- / construction date input field -->
                <div class="input-description">
                    <p class="input-title">Description*</p>
                    <textarea rows="10" cols="50" v-model="posts.description" placeholder="Enter description" @input="removeValidate" class="required" id="description" ></textarea>
                    <div id="error-description" class="error-msg">{{ errorMessage }}</div>                    
                </div>
                <!-- / description input field -->
                <div class="submit">
                    <button type="submit" class="submit-button" id="valid-button" >POST</button>
                </div>
                <!-- / submit button -->
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'New',
    data() {
        return {
            houseId: '',
            selectedFile: '',
            beTrue: true,
            errorMessage: 'Required field missing.',
            posts: {
                streetName: '',
                houseNumber: '',
                numberAddition: '',
                zip: '',
                city: '',
                bathrooms: '',
                bedrooms: '',
                hasGarage: '',
                description: '',
                price: '',
                size: '',
                constructionYear: '',
            }
        }
    },
    methods: {
        validate () {
            // validate if all required form fields are actually filled in
            // set required-border when it is not filled in
            let required = document.querySelectorAll('.required')
            this.beTrue = true

            required.forEach(element =>    {    
                let selector = "#error-" + element.id

                if (element.value === "") {
                    document.querySelector(selector).style.display = "block"
                    document.getElementById(element.id).classList.add("required-border")
                    this.beTrue = false
            }})
        },
        removeValidate() {
            // remove required border if the form field is filled in
            let remove = document.querySelectorAll('.required')
     
            remove.forEach(element =>    {    
                let selector = "#error-" + element.id
                if (element.value !== "") {
                    document.querySelector(selector).style.display = "none"
                    document.getElementById(element.id).classList.remove("required-border")
            }})
        },
        backToMain() {
            // go to overview page
            this.$router.push({name: 'Overview'})
        },
        goToDetail() {
            // go to details page of house just created
            this.$router.push({name: 'Details', params: {houseId: this.houseId}})
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0]
            console.log(this.selectedFile)
        },
        async uploadImage() {
            // api call to upload image
            const FormData = require('form-data');
            const form = new FormData();
            form.append('image', this.selectedFile);
            this.$store.state.houseId = this.houseId
            await this.$store.dispatch("uploadImage", form);
        }, 
        async postAndBackToMain() {
            // main function call when form is filled in
            this.validate()
            if (this.beTrue) {
                await this.postData()
                await this.uploadImage()
                await this.$store.dispatch("getHouses",)
                this.goToDetail()
                };
        },
        handleResponse(response) {
            // get response from house creation to get houseId
            this.houseId = response.data.id
        },
        async postData(e) {
            // post house information to the API
            const form = new FormData();
            let url = 'https://api.intern.d-tt.nl/api/houses';

            form.append('price', this.posts.price);
            form.append('bedrooms', this.posts.bedrooms);
            form.append('bathrooms', this.posts.bathrooms);
            form.append('size', this.posts.size);
            form.append('streetName', this.posts.streetName);
            form.append('houseNumber', this.posts.houseNumber);
            form.append('numberAddition', this.posts.numberAddition);
            form.append('zip', this.posts.zip);
            form.append('city', this.posts.city);
            form.append('constructionYear', this.posts.constructionYear);
            form.append('hasGarage', this.posts.hasGarage);
            form.append('description', this.posts.description);

            await axios
            .post(url, form, {
                headers: {
                    'X-Api-Key': this.$store.state.apiKey
                    }
                }
            )
            .then(response => this.handleResponse(response))
            .catch(err => console.log(err.message))
        }
    }
}
</script>
