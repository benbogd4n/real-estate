<template>
    <!-- <div class="result-counter">
        <h2 v-if="listingCounter > 0 && this.$store.state.searchQuery.length != 0 ">{{ listingCounter }} results found</h2>
        <div v-if="listingCounter == 0" class="no-results">
            <img src="./Frontend_Internship_Test_Slices/img_empty_houses@3x.png" alt="No results found" class="error-house">
            <div class="no-results-text">
                <p>No results found.</p>
                <p>Please try another keyword.</p>
            </div>
        </div>
    </div> -->
    <div class="results" v-for="house in houses" :key="house.id">
        <!-- <RouterLink to="/details" class="result" v-for="listing in filteredListings" :key="listing.id"> -->
        <router-link :to="{ name: 'Details', params: {houseId: house.id}}" @click="getCurrentHouse" class="result">
            <div class="house-container">
                <img :src="`/src/images/houses/${house.image}`" alt="House image" class="house-img">
            </div>
            <div class="listing">
                <div class="street">
                    <h2>{{house.address.street}}</h2>
                    <h2>{{house.address.number}}</h2>
                </div>
                <div class="price">
                    <span>€ {{house.price}}</span>
                </div>
                <div class="address">
                    <div class="postcode">
                        <span>{{house.address.zip}}</span>
                    </div>
                    <div class="city">
                        <span>{{house.address.city}}</span>
                    </div>
                </div>
                <div class="amenities">
                    <div class="amenity">
                        <img src="../images/icons/bed.png" alt="Bedroom icon" class="icon">
                        <span>{{house.bedroom}}</span>
                    </div>
                    <div class="amenity">
                        <img src="../images/icons/bath.png" alt="Bathroom icon" class="icon">
                        <span>{{house.bathroom}}</span>
                    </div>
                    <div class="amenity">
                        <img src="../images/icons/size.png" alt="Area icon" class="icon">
                        <span>{{house.size}} m2</span>
                    </div>
                </div>
            </div>
            <div class="edit-icons">
                <button class="favourite"><img src="../images/icons/heart.png" alt="" class="icon"></button>
                <!-- <RouterLink :to="{ name: 'Edit', params: {houseId: listing.id}}" ><button class="edit"><img src="./Frontend_Internship_Test_Slices/ic_edit@3x.png" alt="Edit icon" class="icon"></button></RouterLink> -->
                <RouterLink to="/edit"><button class="edit"><img src="../images/icons/edit.png" alt="Edit icon" class="icon"></button></RouterLink>
                <!-- <RouterLink :to="{ name: 'Delete', params: {houseId: listing.id}}" ><button class="delete" @click="toggleModal"><img src="./Frontend_Internship_Test_Slices/ic_delete@3x.png" alt="Delete icon" class="icon"></button></RouterLink> -->
                <RouterLink to="/delete"><button class="delete" @click="toggleModal"><img src="../images/icons/delete.png" alt="Delete icon" class="icon"></button></RouterLink>
            </div>
        </router-link>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
    name: "Results",
    data() {
        return {
            houses: this.$store.state.houses
        }
    },
    components: {
        SearchBar
    },
    // computed: {
    //     filteredListings() {
    //         const listings = this.$store.state.houses.filter(listing => listing.location.street.toLowerCase().includes(this.$store.state.searchQuery.toLowerCase()))
    //         if (this.$store.state.sortSetting == "Size") {
    //             // sorts ascending by size
    //             return listings.sort((a, b) => 
    //                 a.size - b.size
    //             )
    //         } else (this.$store.state.sortSetting == "Price");
    //         {   
    //             // sorts ascending by price
    //             return listings.sort((a, b) => 
    //                 a.price - b.price
    //             )
    //         };           
    //     },
    //     listingCounter() {
    //         // counts amount of corresponding listings based on searchQuery
    //         return this.filteredListings.length
    //     }
    // }
}
</script>

<style lang="scss" scoped>

@import '../scss/variables.scss';

/* ==========================================================================
   Results
   ========================================================================== */

h2 {
    color: $text-primary;
}

.no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.no-results p {
    text-align: center;
    margin: 0;
}

.no-results-text {
    margin-top: 3rem;
}

.error-house {
    margin-top: 3rem;
    width: 30rem;
}

.street {
    display: flex;
    gap: 0.5rem;
}

.price {
    color: $text-primary;
}

.result {
    display: flex;
    align-items: center;
    background-color: $background-light;
    border-radius: 8px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    margin: 1.5rem 0;
    cursor: pointer;
    transition: box-shadow 0.5s;
}

.result:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
}

.house-container {
    display: flex;
    justify-content: center;
    padding: 1.2rem 1rem;
}

.listing {
    flex-grow: 15;
}

.listing div {
    margin: 0.2rem;
}

.amenities {
    display: flex;
    gap: 0.5rem;
    color: $text-primary;
}

.amenity {
    display: flex;
    align-items: center;
}

.amenity img {
    margin-right: 0.5rem;
}

.address {
    display: flex;
    color: $tertiary-dark;
}

.edit-icons {
    align-self: flex-start;
    padding-top: 1rem;
    padding-right: 1.5rem;
}

.favourite, .edit, .delete {
    background-color: $background-light;
    padding: 0.5rem;
}

/* ==========================================================================
   Images
   ========================================================================== */

.house-img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 8px;
}

button .edit:hover {
    content: url("../images/icons/edit-hover.png");
}

button .delete:hover {
    content: url("../images/icons/delete-hover.png");
}

.edit-icons:hover {
    height: 1.3rem;
}
/* ==========================================================================
    Mobile Overview
    ========================================================================== */

@media (max-width: 87em) {

    .results {
        margin-bottom: 7rem;
    }

    .result {
        margin: 1rem;
    }
    
    .house-container {
        display: flex;
        justify-content: center;
        padding: 0.8rem 0.7rem;
    }

    .house-img {
        width: 7rem;
        height: 7rem;
        object-fit: cover;
        border-radius: 8px;
    }

    .result-counter {
        margin-left: 2rem;
    }
    
    .error-house {
        margin-top: 3rem;
        width: 20rem;
    }
    .edit-icons {
        padding-right: 0.7rem;
    }

    .edit-icons .icon {
        width: 1rem;
    }

    .listing div {
        margin: 0.1rem 0.2rem;
    }
}

</style>