<template>
    <div class="details">
        <div class="m-details-nav">
            <div class="m-house-container">
                <img :src="this.$store.state.currentHouse.image" alt="House image" class="house-img">
            </div>
            <!-- / image of house mobile -->
            <div class="title-listing">
                <div class="back-arrow">
                    <RouterLink :to="{ name: 'Overview'}"><img src="./Frontend_Internship_Test_Slices/ic_back_white@3x.png" alt="Back button" class="icon mobile-back-icon"></RouterLink>
                </div>
                <!-- / back to Overview button mobile -->
                <div class="m-edit-icons">
                    <RouterLink :to="{ name: 'Edit', params: {houseId: this.houseId}}"><button class="edit"><img src="./Frontend_Internship_Test_Slices/ic_edit_white@3x.png" alt="Edit icon" class="icon"></button></RouterLink>
                    <RouterLink :to="{ name: 'Delete', params: {houseId: this.houseId}}" ><button class="delete" @click="toggleModal"><img src="./Frontend_Internship_Test_Slices/ic_delete_white@3x.png" alt="Delete icon" class="icon"></button></RouterLink>
                </div>
                <!-- / edit and delete icons mobile-->
            </div>
        </div>
        <!-- / mobile nav -->
        <div class="details-main">
            <div class="house-container">
                <img :src="this.$store.state.currentHouse.image" alt="House image" class="house-img">
            </div>
            <div class="house-description">
                <div class="listing">
                    <div class="street">
                        <h2>{{this.$store.state.currentHouse.location.street}}</h2>
                    </div>
                    <div class="address">
                        <div class="zip">
                            <img src="./Frontend_Internship_Test_Slices/ic_location@3x.png" alt="" class="icon">
                            <span>{{this.$store.state.currentHouse.location.zip}}</span>
                        </div>
                        <div class="city">
                            <span>{{this.$store.state.currentHouse.location.city}}</span>
                        </div>                        
                    </div>
                    <div class="basic-info">
                        <div class="price">
                            <img src="./Frontend_Internship_Test_Slices/ic_price@3x.png" alt="" class="icon">
                            <span>{{this.$store.state.currentHouse.price}}</span>
                        </div>
                        <div class="size">
                            <img src="./Frontend_Internship_Test_Slices/ic_size@3x.png" alt="" class="icon">
                            <span>{{this.$store.state.currentHouse.size}} m2</span>
                        </div>
                        <div class="constructionYear">
                            <img src="./Frontend_Internship_Test_Slices/ic_construction_date@3x.png" alt="" class="icon">
                            <span>Built in {{this.$store.state.currentHouse.constructionYear}}</span>
                        </div>
                    </div>
                    <div class="amenities">
                        <div class="bedrooms">
                            <img src="./Frontend_Internship_Test_Slices/ic_bed@3x.png" alt="" class="icon">
                            <span>{{this.$store.state.currentHouse.rooms.bedrooms}}</span>
                        </div>
                        <div class="bathrooms">
                            <img src="./Frontend_Internship_Test_Slices/ic_bath@3x.png" alt="" class="icon">
                            <span>{{this.$store.state.currentHouse.rooms.bathrooms}}</span>
                        </div>
                        <div class="garage">
                            <img src="./Frontend_Internship_Test_Slices/ic_garage@3x.png" alt="" class="icon">
                            <span>{{ hasGarage }}</span>
                        </div>                    
                    </div>
                </div>
                <!-- / house details -->
                <div class="edit-icons">
                    <RouterLink :to="{ name: 'Edit', params: {houseId: this.houseId}}"><button class="edit"><img src="./Frontend_Internship_Test_Slices/ic_edit@3x.png" alt="Edit icon" class="icon"></button></RouterLink>
                    <RouterLink :to="{ name: 'Delete', params: {houseId: this.houseId}}" ><button class="delete" @click="toggleModal"><img src="./Frontend_Internship_Test_Slices/ic_delete@3x.png" alt="Delete icon" class="icon"></button></RouterLink>
                </div>
                <!-- / edit and delete buttons -->
            </div>
            <div class="description">
                <p>{{this.$store.state.currentHouse.description}}</p>
            </div>
            <!-- / house description -->
        </div>
    </div>
</template>

<script>


export default {
    name:'Details',
    data() {
    return {
        houseId: this.$route.params.houseId,
        }
    },
    created() {
        console.log("Getting houses and current house")
        this.$store.dispatch("getCurrentHouse", this.$route.params.houseId);
        console.log(this.$store.state.currentHouse);
    },
    computed: {
        hasGarage: {
            get() {
                // return yes or no based on hasGarage boolean info
                if (this.$store.state.currentHouse.hasGarage) {
                    return "Yes"
                } else {
                    return "No"
                }
            }
        }
    }
}
</script>

<style scoped>
/* ==========================================================================
    Desktop Details
    ========================================================================== */
span {
    color: var(--text-secondary);
    margin: 0.5rem;
}

.title-listing {
    display: none;
}

.listing div {
    margin: 0.2rem 0 0.2rem 1rem;
}

h2 {
    margin-left: 1rem;
    margin-top: 2rem;
}

p {
    margin: 1rem 2rem;
    text-align: justify;
}

.details {
    margin: 0;
    padding: 7rem 17rem 0 17rem;
}

.details-main {
    width: 33.5rem;
    padding-bottom: 2rem;
    background-color: var(--background-light);
}

.m-house-container {
  display: none;
}

.house-container {
    margin: 0;
    padding: 0;
    height: 22rem;
    width: 33.5rem;
}

.house-img {
    height: 22rem;
    width: 100%;
}

.house-description {
    display: flex;
}

.edit-icons {
    margin-right: 1rem;
}

.edit-icons button{
    margin-top: 2rem;
    background-color: #fff;
}

.listing {
    margin: 0;
    padding: 0;
    flex-grow: 5;
}

.address {
    display: flex;
}

.basic-info {
    display: flex;
}

.amenities {
    display: flex;
}
/* ==========================================================================
    Mobile Details
    ========================================================================== */
@media (max-width: 87em) {
    
    .details {
        padding: 0;
        margin: 0;
        height: 100%;
    }

    .m-details-nav {
        position: relative;
    }

    .details-main {
        width: 100%;
        height: 100%;
        padding-top: 0.01rem;
        padding-bottom: 1rem;
        border-radius: 30px 30px 0 0;
        position: absolute;
        top: 20rem;
    }

    .title-listing {
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: absolute;
        width: 100%;
        top: 1rem;
    }

    .edit-icons {
        display: none;
    }

    .back-arrow {
        flex-grow: 5;
    }

    .m-edit-icons button{
        margin: 0;
        padding: 1rem;
        background-color: transparent;
    }

    .m-house-container {
        display: block;
        width: 100%;
        height: auto;
    }

    .house-container {
        display: none;
    }

}
</style>