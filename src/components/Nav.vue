<template>
  <div class="nav">
    <RouterLink to="/"><img src="../images/logo.png" alt="HRE logo" class="HRE-logo"></RouterLink>
    <div class="nav-links">
        <RouterLink to="/" active-class="active" class="houses">Houses</RouterLink>
        <RouterLink to="/about" active-class="active" class="about">About</RouterLink>
    </div>
  </div>
  <!-- / desktop nav -->
  <div class="mobile-nav">
    <div class="nav-links">
        <RouterLink to="/" active-class="active" class="h-nav-button"><img src="../images/icons/home.png" alt="Home page" class="h-nav-button"></RouterLink>
        <RouterLink to="/about" active-class="active" class="i-nav-button"><img src="../images/icons/info.png" alt="About page" class="i-nav-button"></RouterLink>
    </div>
  </div>
  <!-- / mobile nav -->
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
  /* ==========================================================================
     Navigation bar
     ========================================================================== */
.nav {
    background-color: $background-light;
    display: flex;
    padding: 0 17rem 0 17rem;
    position: fixed;
    width: 100vw;
    top: 0;
    box-shadow: 0 1px 50px rgba(0, 0, 0, 0.1);
    z-index: 100;
}

.mobile-nav {
  display: none;
}

.nav-links{
    display: flex;
    gap: 4rem;
    align-items: center;
    margin-left: 3.5rem;
    font-family: $font-primary;
    font-weight: $regular;
    font-size: $large;
    color: $tertiary-dark;
  }

.HRE-logo {
  max-width: 7rem;
  padding: 1rem 0 1rem 0;
  cursor: pointer;
}

.active {
  font-family: $font-primary;
  font-weight: $bold;
  font-size: $large;
  color: $text-primary;
}

.houses {
    padding: 0;
    margin: 0;
}

.about {
    padding: 0;
    margin: 0;
}
 /* ==========================================================================
    Mobile Nav
    ========================================================================== */

@media (max-width: 87em) {
  .nav {
    display: none;
  }

  .mobile-nav {
  background-color: $background-light;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    position: fixed;
    width: 100vw;
    bottom: 0;
    box-shadow: 0 1px 50px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

  .nav-links{
    gap: 13rem;
    margin-left: 0;
  }

  .h-nav-button {
    height: 2rem;
  }
  
  .i-nav-button {
    height: 2.5rem;
  }

  .h-nav-button.active {
    height: 2.2rem;
    content: url("../images/icons/home-selected.png");
  }

  .i-nav-button.active {
    content: url("../images/icons/info-selected.png");
  }

}
</style>