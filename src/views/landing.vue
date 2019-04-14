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
        <div id="landing-header">
            <h2 style="color: white; font-size: 56px;font-weight: bold;padding-bottom: 20px;" class="wow rubberBand">WELCOME</h2>
            <h1 style="color: white; font-size: 30px; font-weight: bold; ">MULTIMEDIA</h1>
            <p style="color: white; font-size: 28px;font-style: italic;margin-bottom: 30px">" We’ll show you what to learn "</p>
            <router-link to="/index.html" class="btn btn-info">GET START</router-link>
            <p class="icon-header">
                <fas icon="camera-retro"/>
                <fas icon="video"/>
                <fas icon="gamepad"/>
                <fas icon="palette"/>
            </p>
        </div>
    </b-container>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#landing {
    max-height: 100vh;
    height: 100vh;
    background: linear-gradient(to right, #F9D423, #FF4E50);
}
#landing-header {
    text-align: center;
    position: absolute;
    top: 30%;
    left: 40%;
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
