<template>
    <section class="about__section">
        <div class="container">
            <div class="row">
                <div class="about__info">
                    <h3 class="about__info-title">{{ $t('about.main.aboutSection.title') }}</h3>

                    <img :src="aboutInfoBg" alt="" class="about__info-bg">
                </div>

                <div class="about__descr">
                    <p class="about__descr-txt" v-for="(txt, idx) in $tm('about.main.aboutSection.infoTxts')" :key="idx">
                        {{ txt.txt }}
                    </p>
                </div>
            </div>
        </div>
    </section>  
</template>

<script>

export default {
    name: 'About Page About Section',
    data() {
        return {
            aboutInfoBg: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/AboutPage%2FAboutSection%2Fabout-info-bg.png?alt=media&token=520d9ca3-ce98-4c72-8543-670ad779eab7&_gl=1*1cgynd9*_ga*NzI1NjQ5MjIxLjE2OTU2Mzc2ODE.*_ga_CW55HF8NVT*MTY5NjA5ODc1Mi41LjEuMTY5NjA5ODc4MS4zMS4wLjA.'
        }
    },
    mounted() {
        const aboutInfoBg = document.querySelector('.about__info-bg');
        
        window.addEventListener('scroll', () => {
            aboutInfoBg.style.transform = `translateX(-${window.scrollY / 100}%)`
        })
    }
}

</script>

<style lang="scss" scoped>

.about__section {
    width: 100%;
    padding-bottom: 20px;

    .row {
        border: solid 1px var(--border-clr);
        transform: translateY(-100px);
        background: var(--main-black);
    }

    .about__info {
        max-width: 35%;
        width: 100%;
        border-right: solid 1px var(--border-clr);
        display: grid;
        place-items: center;
        text-align: center;
        position: relative;
        padding: 285px 0;
        overflow: hidden;

        &-title {
            font-size: 30px;
            font-weight: 600;
            text-transform: capitalize;
            color: var(--primary-color);
        }

        &-bg {
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            object-fit: cover;
            z-index: -1;
        }
    }

    .about__descr {
        max-width: 65%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 20px;

        &-txt {
            max-width: 400px;
            width: 100%;
            color: var(--main-gray);
            font-size: 15px;

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

</style>