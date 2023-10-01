<template>
  <header class="header">
    <div class="container">
        <div class="row">
            <div class="header__descr">
                <h1 class="header__descr-title all-title">{{ $t('home.header.title') }}</h1>
                <p class="header__descr-txt all-txt">{{ $t('home.header.txt') }}</p>

                <router-link :to="`/${$t('home.header.btn.url')}`" class="red-btn">{{ $t('home.header.btn.txt') }}</router-link>
            </div>
        </div>
    </div>

    <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FHeader%2Fheader-bg.png?alt=media&token=6d71c0c7-9194-49d8-bbeb-0b214b293c95" alt="" class="header-bg">
  </header>
</template>

<script>

export default {
    name: 'Header',
    mounted() {
        const headerImg = document.querySelector('.header-bg');        
        const section = document.querySelector('.services__section');
        let windowOffSet = window.pageYOffset
        let num = 0

        window.addEventListener('scroll', () => {
            windowOffSet = window.pageYOffset
            num = (windowOffSet / 2) / section.offsetTop + 1;
            headerImg.style.transform = `scale(${num})`
        })
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 170px 0 500px;
    position: relative;
    overflow: hidden;

    .row {
        justify-content: flex-start;
    }

    &__descr {
        max-width: 860px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 30px;

        &-txt {
            max-width: 415px;
            width: 100%;
        }
    }

    &-bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
}

</style>