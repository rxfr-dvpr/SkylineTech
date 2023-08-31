<template>
  <section class="services__section">
    <div class="container">
        <div class="row">

            <div class="services__descr">
                <h2 class="services__descr-title">{{ $t('home.main.servicesSection.title') }}</h2>
                <p class="services__descr-txt">{{ $t('home.main.servicesSection.txt') }}</p>

                <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FServicesSection%2Fservices-bg.png?alt=media&token=7ca0123f-63b4-43ec-928b-d7e36e86e477" alt="" class="bg-img">
            </div>

            <div class="services__cards">
                <div :class="`services__cards-item item-${idx + 1}`" v-for="(card, idx) in $tm('home.main.servicesSection.cards')" :key="idx">
                    <img :src="card.icon" alt="" class="card-icon">
                    <p class="card-title">{{ card.title }}</p>
                    <p class="card-txt">{{ card.txt }}</p>
                    <span class="bottom-line"></span>
                </div>
            </div>

        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Services Section'
}

</script>

<style lang="scss" scoped>

.services__section {
    width: 100%;

    .row {
        justify-content: space-between;
        border: solid 1px rgb(63, 67, 73);
        background: var(--main-black);
        transform: translateY(-10%);
    }

    .services {
        &__descr {
            max-width: 40%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-right: solid 1px rgb(63, 67, 73);
            row-gap: 20px;
            position: relative;
            padding-top: 200px;

            &-title {
                max-width: 300px;
                font-size: 30px;
                color: var(--primary-color);
                text-transform: capitalize;
                font-weight: 500;
                z-index: 2;
            }

            &-txt {
                max-width: 300px;
                font-size: 17px;
                color: var(--main-gray);
                z-index: 2;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .bg-img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                object-fit: cover;
                user-select: none;
                pointer-events: none;
            }
        }

        &__cards {
            max-width: max-content;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(5, 1fr);
            grid-column-gap: 15px;
            grid-row-gap: 0px;
            margin: 0 auto;

            &-item {
                max-width: 240px;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 10px;
                background: #1b1c1e;
                border-radius: 10px;
                padding: 30px;
                height: max-content;
                transform: translateY(-30%);
                box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.30);

                .card {
                    &-icon {
                        max-width: 56px;
                        width: 100%;
                        filter: invert(42%) sepia(38%) saturate(4645%) hue-rotate(334deg) brightness(139%) contrast(99%);
                        margin-bottom: 20px;
                    }

                    &-title {
                        font-size: 18px;
                        color: var(--main-lt-blue);
                        font-weight: 600;
                        text-transform: capitalize;
                    }

                    &-txt {
                        font-size: 14px;
                        color: var(--main-gray);

                        &::first-letter {
                            text-transform: uppercase;
                        }
                    }
                }

                &.item-1 { grid-area: 1 / 1 / 3 / 2; }
                &.item-2 { grid-area: 2 / 2 / 4 / 3; }
                &.item-3 { grid-area: 3 / 1 / 5 / 2; }
                &.item-4 { grid-area: 4 / 2 / 6 / 3; }
            }
        }
    }
}

</style>