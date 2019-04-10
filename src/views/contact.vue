<template>
    <b-container fluid id="normalize-container-fluid">
        <Header></Header>

        <b-jumbotron header="Contact" class="text-center wow bounceInUp" id="contact-header"></b-jumbotron>
        <b-container class="mt-5 mb-5 text-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d59610.06977227415!2d105.78285533468534!3d20.967394473977556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d20.951224399999997!2d105.84003829999999!4m5!1s0x3135accdcf7b0bd1%3A0xc1cf5dd00247628a!2zSOG7jWMgVmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IENow61uaCBWaeG7hW4gVGjDtG5nLCBLbTEwLCBIw6AgxJDDtG5nLCAxNTI2Mzg!3m2!1d20.9813266!2d105.7874813!5e0!3m2!1svi!2s!4v1553085059255" width="100%" height="500" frameborder="0" style="border:0" class="wow bounceInRight" allowfullscreen=""></iframe>
            <b-row class="mt-5">
                <b-col md="12" lg="4" sm="12" class="mt-2 mb-2 wow bounceInLeft">
                    <b-list-group class="text-left">
                        <b-list-group-item variant="primary" class="d-flex align-items-center">
                            <fas icon="map-marked" class="mr-4"/> Trụ Sở
                        </b-list-group-item>

                        <b-list-group-item class="d-flex align-items-center">
                            <fas icon="home" class="mr-4"/> 122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội.
                        </b-list-group-item>

                        <b-list-group-item class="d-flex align-items-center">
                            <fas icon="phone" class="mr-4"/> 04. 33525742
                        </b-list-group-item>

                        <b-list-group-item class="d-flex align-items-center">
                            <fas icon="envelope" class="mr-4"/> multimedia@ptit.edu.vn
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col md="12" lg="4" sm="12" class="mt-2 mb-2 wow bounceInUp">
                    <b-list-group class="text-left">
                        <b-list-group-item variant="primary" class="d-flex align-items-center">
                            <fas icon="map-marked" class="mr-4"/> Hà Nội
                        </b-list-group-item>

                        <b-list-group-item class="d-flex align-items-center">
                            <fas icon="home" class="mr-4"/> Km10, Đường Nguyễn Trãi, Q.Hà Đông, Hà Nội
                        </b-list-group-item>

                        <b-list-group-item class="d-flex align-items-center">
                            <fas icon="phone" class="mr-4"/> 04. 33525742
                        </b-list-group-item>

                        <b-list-group-item class="d-flex align-items-center">
                            <fas icon="envelope" class="mr-4"/> multimedia@ptit.edu.vn
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col md="12" lg="4" sm="12" class="mt-2 mb-2 wow bounceInRight">
                    <b-list-group class="text-left">
                        <b-list-group-item variant="primary" class="d-flex align-items-center">
                            <fas icon="map-marked" class="mr-4"/> TP Hồ Chí Minh
                        </b-list-group-item>

                        <b-list-group-item class="d-flex align-items-center">
                            <fas icon="home" class="mr-4"/> Đường Man Thiện, P. Hiệp Phú, Q.9 TP Hồ Chí Minh
                        </b-list-group-item>

                        <b-list-group-item class="d-flex align-items-center">
                            <fas icon="phone" class="mr-4"/> 04. 33525742
                        </b-list-group-item>

                        <b-list-group-item class="d-flex align-items-center">
                            <fas icon="envelope" class="mr-4"/> multimedia@ptit.edu.vn
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
            </b-row>
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
<style lang="scss">
#contact-header {
    background: linear-gradient(to right, #f7941e, #f0b35f);
    color: white;
    .display-3 {
        font-size: 2.5rem;
    }
}
</style>
