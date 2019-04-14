<template>
  <div>
    <b-col md="12" sm="12" class="top-header wow bounceInRight">
        <b-row class="text-white">
            <b-col md="6" sm="8" cols="10">
                <p class="text-top-fix">Post & Telecommuniaction Institute of Technology</p>
            </b-col>
            <b-col md="6" sm="4" cols="2" class="text-top-fix text-right">
                <fasw icon="sign-out-alt"/>
                <a href="https://canvas.ptitv.ga" class="pl-2 pr-2">Login</a>
            </b-col>
        </b-row>
    </b-col>
    <b-navbar toggleable="lg" type="light" class="wow bounceInLeft">
      <b-navbar-brand href="#">
          <img src="@/assets/img/logo.png" height="50px" alt="">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/index.html">Home</b-nav-item>
          <b-nav-item href="https://canvas.ptitv.ga">Study</b-nav-item>
          <b-nav-item href="/news.html">News</b-nav-item>
          <b-nav-item href="/about.html">About</b-nav-item>
          <b-nav-item href="/contact.html">Contact</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" variant="primary"  class="my-2 my-sm-0" type="submit">
                <span class="text-white">Search</span>
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style lang="scss" scoped>
.top-header {
    background: #f7941e;
    a {
        color: white;
        text-decoration: none;
        &:hover {
            color: white;
            text-decoration: none;
        }
    }
    .text-top-fix {
        margin-bottom: 0;
        line-height: 40px;
    }
}
nav {
  line-height: 55px!important;
  .nav-link {
    font-size: 1rem;
  }
}
</style>
