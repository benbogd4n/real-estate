<template>
    <div class="title-mobile">
        <h1>About</h1>
    </div>
    <div class="about" id="about">
        <h1>About HRE Real Estate</h1>
        <h2>About HRE Real Estate</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at porttitor sapien, nec tincidunt risus. Fusce ligula ipsum, gravida ac ex eu, bibendum fermentum massa. Praesent eu quam purus. Ut tincidunt neque sit amet ligula porta, eu dapibus orci volutpat. Donec consequat urna in sagittis bibendum. Cras vel imperdiet est. Duis luctus purus vulputate venenatis semper. Vestibulum tempor sollicitudin varius. Maecenas quis metus convallis, feugiat tellus vel, consequat turpis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at porttitor sapien, nec tincidunt risus.</p>
        <br>
        <h1>Design and Development</h1>
        <h2>Design and Development</h2>
        <div class="reference">
            <img src="../images/logo.png" alt="HRE Logo" class="logo">
            <div class="reference-text">
                <p>By Ben Bogdan</p>
                <a href="https://benbogd4n.github.io" target="blank" class="HRE-link">benbogd4n.github.io</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang="scss" scoped>

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

.HRE-link {
    color: $hyperlink;
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