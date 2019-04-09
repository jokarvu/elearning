<template>
    <div>
        <img src="/img/work.png" class="img-fluid" alt="">
        <b-col md="12" class="footer p-5 text-white bg-primary">
            <b-row>
                <b-col md="3" offset-md="1">
                    <h2>Courses</h2>
                    <ul>
                        <li>Graphic Design 2D/3D</li>
                        <li>Cartoon Design 2D/3D</li>
                        <li>Game Design 2D/3D</li>
                        <li>R&D Product Design</li>
                        <li>Advertising Design</li>
                        <li>Web Design</li>
                    </ul>
                </b-col>
                <b-col md="4">
                    <h2>Contact</h2>
                    <p>Trụ sở chính: 122 Hoàng Quốc Việt, Q.Cầu Giấy, Hà Nội.</p>
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
</style>

