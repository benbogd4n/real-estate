<template>
    <div class="result-counter">
        <h2 v-if="listingCounter > 0 && this.$store.state.searchQuery.length != 0 ">{{ listingCounter }} results found</h2>
        <div v-if="listingCounter == 0" class="no-results">
            <img src="./Frontend_Internship_Test_Slices/img_empty_houses@3x.png" alt="No results found" class="error-house">
            <div class="no-results-text">
                <p>No results found.</p>
                <p>Please try another keyword.</p>
            </div>
        </div>
    </div>
    <div class="results">
        <RouterLink :to="{ name: 'Details', params: {houseId: listing.id}}" class="result" v-for="listing in filteredListings" :key="listing.id">
            <div class="house-container">
                <img :src="listing.image" alt="House image" class="house-img">
            </div>
            <div class="listing">
                <div class="street">
                    <h2>{{listing.location.street}}</h2>
                </div>
                <div class="price">
                    <span>€ {{listing.price}}</span>
                </div>
                <div class="address">
                    <div class="postcode">
                        <span>{{listing.location.zip}}</span>
                    </div>
                    <div class="city">
                        <span>{{listing.location.city}}</span>
                    </div>
                </div>
                <div class="amenities">
                    <div class="amenity">
                        <img src="./Frontend_Internship_Test_Slices/ic_bed@3x.png" alt="Bedroom icon" class="icon">
                        <span>{{listing.rooms.bedrooms}}</span>
                    </div>
                    <div class="amenity">
                        <img src="./Frontend_Internship_Test_Slices/ic_bath@3x.png" alt="Bathroom icon" class="icon">
                        <span>{{listing.rooms.bathrooms}}</span>
                    </div>
                    <div class="amenity">
                        <img src="./Frontend_Internship_Test_Slices/ic_size@3x.png" alt="Area icon" class="icon">
                        <span>{{listing.size}} m2</span>
                    </div>
                </div>
            </div>
            <div class="edit-icons">
                <RouterLink :to="{ name: 'Edit', params: {houseId: listing.id}}" ><button class="edit"><img src="./Frontend_Internship_Test_Slices/ic_edit@3x.png" alt="Edit icon" class="icon"></button></RouterLink>
                <RouterLink :to="{ name: 'Delete', params: {houseId: listing.id}}" ><button class="delete" @click="toggleModal"><img src="./Frontend_Internship_Test_Slices/ic_delete@3x.png" alt="Delete icon" class="icon"></button></RouterLink>
            </div>
        </RouterLink>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
    name: "Results",
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
/* ==========================================================================
   Results
   ========================================================================== */

h2 {
    color: var(--text-primary);
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

.price {
    color: var(--text-primary);
}

.result {
    display: flex;
    align-items: center;
    background-color: var(--background-light);
    border-radius: 8px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    margin: 1.5rem 0;
    cursor: pointer;
}

.result:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
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
    color: var(--text-primary);
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
    color: var(--tertiary-dark);
}

.edit-icons {
    align-self: flex-start;
    padding-top: 1rem;
    padding-right: 1.5rem;
}

.edit, .delete {
    background-color: var(--background-light);
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

.edit-icons .icon:hover {
    max-width: 1.1rem;
    max-height: 1.1rem;
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