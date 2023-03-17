<template>
    <div class="title-desktop">
        <h1>Houses</h1>
        <RouterLink to="/new"><div class="create">
            <button class="create-icon"><img src="../images/icons/plus.png" alt="Add button" class="icon"></button>
            <button class="create-text">CREATE NEW</button>
        </div></RouterLink>
    </div>
    <div class="title-mobile">
        <h1>Houses</h1>
        <RouterLink to="/new" class="mobile-create-new">
            <button class="m-create-button"><img src="../images/icons/plus.png" alt="Add button" class="icon"></button>
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: 'Title'
}
</script>

<style lang="scss" scoped>

@import './scss/variables.scss';
/* ==========================================================================
   Title
   ========================================================================== */

.title-desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title-mobile {
    display: none;
}

.create {
    background-color: $element-primary;
    border-radius: 8px;
    padding: 0 1rem;
}

.create:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.create-text{
    // color: #fff;
    background-color: $element-primary;
}

.create-icon {
    background-color: $element-primary;
}

/* ==========================================================================
    Mobile Overview
    ========================================================================== */

@media (max-width: 87em) {
    .title-desktop {
        display: none;
    }

    .title-mobile {
        display: flex;
        margin-top: 1.5rem;
    }

    h1 {
        margin: 0 auto;
        padding-left: 3.5rem;
    }

    .mobile-create-new {
        margin-right: 1.5rem;
    }

    .m-create-button {
        background: none;
    }
}

</style>