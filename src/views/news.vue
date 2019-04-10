<template>
    <b-container fluid id="normalize-container-fluid">
        <Header></Header>
        <b-jumbotron header="News & Notifications" class="text-center wow bounceInUp" id="contact-header"></b-jumbotron>
        <b-container>

        </b-container>
        <Footer></Footer>
    </b-container>
</template>
<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
    components: {Header, Footer}
}
</script>
