<template>
    <div class="title-mobile">
        <h1>About</h1>
    </div>
    <div class="about" id="about">
        <h1>About DTT Real Estate</h1>
        <h2>About DTT Real Estate</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at porttitor sapien, nec tincidunt risus. Fusce ligula ipsum, gravida ac ex eu, bibendum fermentum massa. Praesent eu quam purus. Ut tincidunt neque sit amet ligula porta, eu dapibus orci volutpat. Donec consequat urna in sagittis bibendum. Cras vel imperdiet est. Duis luctus purus vulputate venenatis semper. Vestibulum tempor sollicitudin varius. Maecenas quis metus convallis, feugiat tellus vel, consequat turpis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at porttitor sapien, nec tincidunt risus.</p>
        <br>
        <h1>Design and Development</h1>
        <h2>Design and Development</h2>
        <div class="reference">
            <img src="./../img_logo_dtt@3x.png" alt="DTT Logo" class="logo">
            <div class="reference-text">
                <p>By DTT</p>
                <a href="https://www.d-tt.nl" target="blank" class="dtt-link">www.d-tt.nl</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style scoped>

/* ==========================================================================
   Component global
   ========================================================================== */

.about {
    margin: 0;
    padding: 7rem 17rem 0 17rem;
}

h2 {
    display: none;
}
/* ==========================================================================
   About details
   ========================================================================== */

.about p {
    margin: 1.5rem 0;
}

/* ==========================================================================
   Referenece
   ========================================================================== */

.dtt-link {
    color: var(--hyperlink);
}

.reference {
    display: flex;
    align-items: center;
}

.logo{
    max-width: 14rem;
    padding: 1rem 0 1rem 0;
}

.reference-text {
    margin-left: 2rem;
}

.reference-text p, .reference-text a {
    margin: 0;
}

/* ==========================================================================
    Mobile New & Edit
    ========================================================================== */

@media (max-width: 87em) {
    .about {
        padding: 0 1.5rem;
    }

    .title-mobile {
        display: flex;
        margin: 1.5rem;
        /* border: 1px solid red; */
        justify-content: center;
    }

    .about h1 {
        display: none;
    }

    h2 {
        display: block;
    }
}

</style>