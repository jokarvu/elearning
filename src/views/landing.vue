<template>
    <b-container fluid id="landing">
        <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
        <div id="landing-header" class="text-center">
            <h2 style="color: white; font-size: 56px;font-weight: bold;padding-bottom: 20px;" class="wow rubberBand">WELCOME</h2>
            <h1 style="color: white; font-size: 30px; font-weight: bold; ">MULTIMEDIA</h1>
            <p style="color: white; font-size: 28px;font-style: italic;margin-bottom: 30px">" We’ll show you what to learn "</p>
            <a href="/index.html" class="text-white btn btn-info p-3">GET START</a>
            <p class="icon-header">
                <fasw icon="camera-retro"/>
                <fasw icon="video"/>
                <fasw icon="gamepad"/>
                <fasw icon="palette"/>
            </p>
        </div>
    </b-container>
</template>
<script>
export default {
    mounted () {
        $('body').css('overflow', 'hidden');
    }
}
</script>

<style lang="scss" scoped>
#landing {
    max-height: 100vh;
    height: 100vh;
    background: linear-gradient(to right, #F9D423, #FF4E50);
    a {
        text-decoration: none;
    }
}
@media screen and (min-width: 768px) {
    #landing-header {
        text-align: center;
        position: absolute;
        top: 30%;
        left: 40%;
    }
}
.icon-header {
    font-size: 5rem;
    color: white;
    svg {
        padding-left: 20px;
        padding-right: 20px;
    }
}
</style>
