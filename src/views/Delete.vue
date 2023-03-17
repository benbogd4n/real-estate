<template>
    <div class="backdrop">
        <div class="modal">
            <h2>Delete listing</h2>
            <p>Are you sure you want to delete "{{this.$store.state.deletedHouse}}"? This action cannot be undone.</p>
            <div class="buttons">
                <RouterLink :to="{name: 'Overview'}">
                    <button class="button accept" @click="deleteHouses" >YES, DELETE</button>
                </RouterLink>
                <RouterLink :to="{name: 'Overview'}">
                    <button class="button deny">GO BACK</button>
                </RouterLink>
                <!-- / return to Overview -->
            </div>
        </div>
        <!-- / delete modal -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            delete: [],
            houseId: this.$route.params.houseId,
            currentHouse: {},
        };
    },
    name: 'Delete',
    methods: {
        closeModal() {
            // close modal
            this.$emit('close')
        },
        async deleteHouses() {
            // post delete request to API and close modal
            axios
            .delete(`https://api.intern.d-tt.nl/api/houses/${this.houseId}`, {
                headers: {
                    'X-Api-Key': this.$store.state.apiKey
                    }
                }
            )
            .then(response => console.log(response.status))
            .catch(error => console.error(error)),
            this.closeModal()

            await this.$store.dispatch("getHouses",);
        },
    }
}
</script>

<style scoped>

/* ==========================================================================
   Desktop Delete
   ========================================================================== */

.modal {
    width: 22rem;
    height: 18rem;
    padding: 3rem 7rem 1rem 7rem;
    margin: 10rem auto;
    background: var(--background-light);
    border-radius: 8px;
}

.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

h2 {
    text-align: center;
}

p {
    text-align: center;
    line-height: 1.4;
    color: var(--text-secondary);
    margin-top: 1rem;
}

/* ==========================================================================
   Buttons
   ========================================================================== */

.buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;
}

button {
    width: 23rem;
    margin: 0.8rem;
}

.accept {
    background-color: var(--element-primary);
    color: #fff;
}

/* ==========================================================================
    Mobile Delete
    ========================================================================== */

@media (max-width: 87em) {
    .modal {
        width: 24rem;
        height: 15rem;
        padding: 2rem 2rem 1rem 2rem;
    }

    .buttons {
        margin-top: 0;
    }

    button {
        width: 15rem;
        margin: 0.5rem;
    }

    p {
        margin: 1rem 0;
    }
}

</style>