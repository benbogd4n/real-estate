<template>
    <div class="search">
        <div class="search-bar">
            <button class="search-button"><img src="../images/icons/search.png" alt="Search button" class="icon"></button>
            <input class="input" type="search" v-model="search" placeholder="Search for a house" @input="updateQuery">
        </div>
        <div class="filter-buttons">
            <button class="active" id="price-button" @click="sortPrice">Price</button>
            <button class="" id="size-button" @click="sortSize">Size</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        updateQuery(event) {
            // updates searchQuery in store on search input
            this.$store.state.searchQuery = event.target.value;
        },
        sortPrice() {
            // sort by price button active - size inactive
            this.$store.state.sortSetting = "Price";
            if (document.getElementById("price-button").classList.contains("active")) {
                document.getElementById("price-button").classList.remove("active")
            } else {
                document.getElementById("price-button").classList.add("active")
                document.getElementById("size-button").classList.remove("active")

            }
        },
        sortSize() {
            // sort by size button active - price inactive
            this.$store.state.sortSetting = "Size";
            if (document.getElementById("size-button").classList.contains("active")) {
                document.getElementById("size-button").classList.remove("active")
                this.$store.state.sortSetting = "Price";
            } else {
                document.getElementById("size-button").classList.add("active")
                document.getElementById("price-button").classList.remove("active")
            }
        },
    },
  }
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
/* ==========================================================================
   Desktop
   ========================================================================== */

.search {
    margin: 1rem 0 2rem 0;
    display: flex;
    justify-content: space-between;
}

.search-bar {
    display: flex;
    align-items: center;
}

.input {
    border: none;
    background-color: $tertiary-light;
    width: 22rem;
    height: 2.5rem;
}

.search-button {
    width: 3rem;
    background-color: $tertiary-light;
    cursor: default;
}

.search-button, #price-button {
    border-radius: 8px 0 0 8px;
}

.input, #size-button{
    border-radius: 0 8px 8px 0;
    margin: 0;
}

.filter-buttons button {
    width: 9em;
    color: #fff;
    padding: 0.2rem 1rem 0.1rem 1rem;
}

.active {
    background-color: $element-primary;
}
    
.inactive {
    background-color: $tertiary-dark;
}

/* ==========================================================================
    Mobile Overview
    ========================================================================== */

@media (max-width: 87em) {
    .search {
        flex-direction: column;
        align-items: center;
    }

    .input {
        width: 26rem;
    }

    .filter-buttons button {
        width: 14.5rem;
    }

    .search-bar {
        margin-bottom: 1.5rem;
    }

}

</style>