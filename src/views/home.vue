<template>
  <b-container fluid id="normalize-container-fluid">
    <Header></Header>

    <!-- Banner slider -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024px"
      img-height="480px"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Dreams are today's answers to tomorrow's questions."
        img-src="https://via.placeholder.com/1905x450"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://via.placeholder.com/1905x450">
        <h1>A dream you dream alone is only a dream. A dream you dream together is reality.</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://via.placeholder.com/1905x450"></b-carousel-slide>
    </b-carousel>

    <!-- Main content -->
    <b-container>
        <b-col md="12">
            <h1 class="text-center mt-5 mb-5">Interested in?</h1>
            <b-row>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInLeft">
                    <b-card title="Graphic Design 2D/3D"
                        img-src="/img/1.jpg"
                        img-top
                        tag="article"
                        class="h-100 mb-2"
                    >
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                        <div slot="footer">
                            <b-button variant="primary" class="text-white">Read more</b-button>
                        </div>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInUp">
                    <b-card title="Cartoon Design"
                    img-src="/img/2.jpg"
                    img-top
                    tag="article"
                    class="mb-2 h-100"
                    >
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                        <div slot="footer">
                            <b-button variant="primary" class="text-white">Read more</b-button>
                        </div>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInRight">
                    <b-card title="Game Design"
                    img-src="/img/3.jpg"
                    img-top
                    tag="article"
                    class="mb-2 h-100"
                    >
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                        <div slot="footer">
                            <b-button variant="primary" class="text-white">Read more</b-button>
                        </div>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInLeft">
                    <b-card title="Web Design"
                    img-src="/img/4.jpg"
                    img-top
                    tag="article"
                    class="mb-2 h-100"
                    >
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                        <div slot="footer">
                            <b-button variant="primary" class="text-white">Read more</b-button>
                        </div>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInUp">
                    <b-card title="R&D Product Design"
                    img-src="/img/5.jpg"
                    img-top
                    tag="article"
                    class="mb-2 h-100"
                    >
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                        <div slot="footer">
                            <b-button variant="primary" class="text-white">Read more</b-button>
                        </div>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInRight">
                    <b-card title="Advertising Design"
                    img-src="/img/6.jpg"
                    img-top
                    tag="article"
                    class="mb-2 h-100"
                    >
                        <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>
                        <div slot="footer">
                            <b-button variant="primary" class="text-white">Read more</b-button>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-container>

    <b-col md="12" id="counter" class="text-center text-white mt-4 mb-4">
        <h2 class="pt-3 pb-3">Students have studied</h2>
        <h1 class="counter pt-2 pb-2">1000</h1>
        <h1 class="pt-3 pb-3">Join us and make your dream</h1>
        <b-button variant="info" class="mt-3 mb-3 px-5 py-3 btn-rounded">GET START</b-button>
    </b-col>

    <b-container>
        <b-col md="12" class="text-center">
            <h1 class="mt-5 mb-5">Our Teachers</h1>
            <b-row>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInRight">
                    <b-card title="Th.S Phạm Vũ Minh Tú"
                        img-src="/img/t1.png"
                        img-top
                        tag="article"
                        class="h-100 mb-2 teacher-card"
                    >
                        <b-card-text>
                           Giảng viên khoa đa phương tiện
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInUp">
                    <b-card title="Th.S Phí Công Huy"
                        img-src="/img/t2.png"
                        img-top
                        tag="article"
                        class="h-100 mb-2 teacher-card"
                    >
                        <b-card-text>
                           Giảng viên khoa đa phương tiện
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInLeft">
                    <b-card title="Th.S Nguyễn Thị Tuyết Mai"
                        img-src="/img/t3.png"
                        img-top
                        tag="article"
                        class="h-100 mb-2 teacher-card"
                    >
                        <b-card-text>
                           Giảng viên khoa đa phương tiện
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInRight">
                    <b-card title="Th.S Hà Thị Hồng Ngân"
                        img-src="/img/t4.png"
                        img-top
                        tag="article"
                        class="h-100 mb-2 teacher-card"
                    >
                        <b-card-text>
                           Giảng viên khoa đa phương tiện
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInUp">
                    <b-card title="Th.S Vũ Hữu Tiến"
                        img-src="/img/t5.png"
                        img-top
                        tag="article"
                        class="h-100 mb-2 teacher-card"
                    >
                        <b-card-text>
                           Giảng viên khoa đa phương tiện
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col sm="12" md="6" lg="4" cols="12" class="mb-4 wow bounceInLeft">
                    <b-card title="Th.S Trần Quốc Trung"
                        img-src="/img/t6.png"
                        img-top
                        tag="article"
                        class="h-100 mb-2 teacher-card"
                    >
                        <b-card-text>
                           Giảng viên khoa đa phương tiện
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-col>
    </b-container>
    
    <!-- Footer -->
    <Footer></Footer>
  </b-container>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/footer";
export default {
    data () {
        return {
            slide: 0,
            sliding: null,
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    },
    components: { Header, Footer }
};
</script>
<style lang="scss">
#normalize-container-fluid {
  padding: 0;
}
.card-footer {
    background-color: white!important;
    border: none!important;
}
#counter {
    padding: 100px 0;
    background-image: url('/img/img1.gif');
    background-repeat: no-repeat;
    background-size: cover;
}
.teacher-card {
    border: none!important;
}
.btn-rounded {
    border-radius: 50px!important;
}
</style>

