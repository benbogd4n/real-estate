<script>
import SearchBar from '../components/SearchBar.vue'
import Title from '../components/Title.vue'
import Results from '../components/Results.vue'


export default {
    data() {
        return {
            search: '',
            showModal: false,
        };
    },
    name:'Overview',
    components: {
        SearchBar,
        Title,
        Results
    },
    methods: {
        toggleModal() {
            // toggles on/off the delete modal
            this.showModal = !this.showModal
        }
    },
    created() {
        console.log("Getting houses")
        this.$store.dispatch("getHouses",);
        console.log(this.$store.state.houses);
    }
};

</script>

<template>
    <div class="overview">
        <Title />
        <SearchBar />
        <Results />
    </div>
    <div v-if="showModal">
        <Delete @close="toggleModal" />
    </div>
</template>

<style lang="scss" scoped>

/* ==========================================================================
   Desktop Overview
   ========================================================================== */

.overview {
    margin: 0;
    padding: 7rem 17rem 0 17rem;
}

/* ==========================================================================
    Mobile Overview
    ========================================================================== */

@media (max-width: 87em) {
    .overview {
    margin: 0;
    padding: 0;
    }
}

</style>