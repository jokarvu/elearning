<template>
    <div>
        <img src="/img/work.png" class="img-fluid" alt="">
        <b-col md="12" class="footer p-5 text-white bg-primary">
            <b-row>
                <b-col md="3" offset-md="1">
                    <h2>Courses</h2>
                    <ul>
                        <li>
                            <p><fasw icon="graduation-cap" class="mr-2"/> Graphic Design 2D/3D</p>
                        </li>
                        <li>
                            <p><fasw icon="graduation-cap" class="mr-2"/> Cartoon Design 2D/3D</p>
                        </li>
                        <li>
                            <p><fasw icon="graduation-cap" class="mr-2"/> Game Design 2D/3D</p>
                        </li>
                        <li>
                            <p><fasw icon="graduation-cap" class="mr-2"/> R&D Product Design</p>
                        </li>
                        <li>
                            <p><fasw icon="graduation-cap" class="mr-2"/> Advertising Design</p>
                        </li>
                        <li>
                            <p><fasw icon="graduation-cap" class="mr-2"/> Web Design</p>
                        </li>
                    </ul>
                </b-col>
                <b-col md="4">
                    <h2>Contact</h2>
                    <p><fasw icon="home" class="mr-2"/>122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội.</p>
                    <p><fasw icon="phone" class="mr-2"/>04. 33525742</p>
                    <p><fasw icon="envelope" class="mr-2"/>multimedia@ptit.edu.vn</p>
                    <p class="social-icon">
                        <fasw class="mr-3" :icon="['fab', 'facebook']"/>
                        <fasw class="ml-3 mr-3" :icon="['fab', 'instagram']"/>
                        <fasw class="ml-3 mr-3" :icon="['fab', 'twitter']"/>
                        <fasw class="ml-3 mr-3" :icon="['fab', 'youtube']"/>
                    </p>
                </b-col>
                <b-col md="4">
                    <h2>Newsletter</h2>
                    <b-form-input class="newsletter-input" placeholder="email@example.com"></b-form-input>
                    <b-button variant="info" class="mt-3">Subcribe</b-button>
                </b-col>
            </b-row>
        </b-col>
    </div>
</template>
<style lang="scss">
ul {
    list-style-type: none;
    padding: 0;
}
.footer {
    input {
        width: 50%;
        background: #f7941e;
        border: none;
        color: white!important;
        border-bottom: 1px solid white;
        &::placeholder {
            color: white;
        }
        &:focus {
            background: #f7941e;
        }
    }
}
.skype-button {
    margin-bottom: -200px;
}
.social-icon {
    font-size: 1.6rem;
}
</style>

