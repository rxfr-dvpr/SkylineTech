<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <h1 class="header-title all-title">{{ $t('services.header.title') }}</h1>
        </div>
    </div>

    <img :src="headerBg" alt="" class="header-bg">
  </header>
</template>

<script>

export default {
    name: 'Services Header',
    data() {
        return {
            headerBg: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/ServicesPage%2FHeader%2Fservices-header-bg.png?alt=media&token=47f9c6ec-a23b-4b4c-8e1d-b1573abae344&_gl=1*8u6brc*_ga*NzI1NjQ5MjIxLjE2OTU2Mzc2ODE.*_ga_CW55HF8NVT*MTY5NjA1OTEwMi4yLjEuMTY5NjA1OTEzMC4zMi4wLjA.'
        }
    },
    mounted() {
        const spHeaderBg = document.querySelector('.header-bg');
        const section = document.querySelector('.sp-services__section');
        let windowOffSet = window.pageYOffset
        let num = 0

        window.addEventListener('scroll', () => {
            windowOffSet = window.pageYOffset
            num = (windowOffSet / 2) / section.offsetTop + 1;
            spHeaderBg.style.transform = `scale(${num})`
        })
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 160px 0 250px;
    position: relative;
    overflow: hidden;

    &-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        object-fit: cover;
    }

    &-title {
        max-width: 750px;
        width: 100%;
    }
}

</style>