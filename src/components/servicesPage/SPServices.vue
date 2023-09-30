<template>
  <section class="sp-services__section">
    <div class="container">
        <div class="row">
            <h2 class="services-title">{{ $t('services.main.servicesSection.title') }}</h2>

            <div class="services__list">
                <div class="services__list-item" 
                v-for="(item, idx) in $tm('services.main.servicesSection.list')" :key="idx">
                    <div class="item-icon-box">
                        <div class="item-icon-bg">
                            <img :src="item.icon" alt="icon" class="item-icon">
                        </div>
                    </div>

                    <div class="item-descr">
                        <p class="item-descr-title">{{ item.name }}</p>
                        <p class="item-descr-txt">{{ item.txt }}</p>
                    </div>
                </div>
            </div>

            <div class="services__info">
                <div class="services__info-box">
                    <p class="services__info-name">{{ $t('services.main.servicesSection.info.title') }}</p>
                    <img :src="servicesInfoBg" alt="" class="services__info-bg">
                </div>

                <div class="services__info-descr">
                    <p class="services__info-txt">{{ $t('services.main.servicesSection.info.txt') }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Services List',
    data() {
        return {
            servicesInfoBg: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/ServicesPage%2FservicesSection%2Fservices-info-bg.png?alt=media&token=e933231f-9835-4139-9946-b2739b8058a1&_gl=1*1he8as5*_ga*NzI1NjQ5MjIxLjE2OTU2Mzc2ODE.*_ga_CW55HF8NVT*MTY5NjA2MjE0MS4zLjEuMTY5NjA2MjE2Ny4zNC4wLjA.'
        }
    },
    mounted() {
        const spInfoBg = document.querySelector('.services__info-bg');
        
        window.addEventListener('scroll', () => {
            spInfoBg.style.transform = `translateX(-${window.scrollY / 100}%)`
        })
    }
}

</script>

<style lang="scss" scoped>

.sp-services__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: flex-start;
        transform: translateY(-150px);
    }

    .services-title {
        font-size: 30px;
        color: var(--primary-color);
        text-transform: capitalize;
        font-weight: 400;
        margin-bottom: 30px;
    }

    .services__list {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: solid 1px var(--border-clr);

        &-item {
            width: 100%;
            display: flex;
            background: var(--main-black);
            border-bottom: solid 1px var(--border-clr);

            .item-icon-box {
                max-width: 15%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 65px 0;
                border-right: solid 1px var(--border-clr);
                user-select: none;
                pointer-events: none;

                .item-icon-bg {
                    max-width: 95px;
                    width: 100%;
                    background: var(--main-lt-blue);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px 0;
                    border-radius: 10px;

                    .item-icon {
                        max-width: 50px;
                        width: 100%;
                        display: block;
                    }
                }
            }

            &:nth-child(even) .item-icon-bg.item-icon-bg {
                background: var(--main-red);
            }

            .item-descr {
                max-width: 85%;
                width: 100%;
                padding: 0 55px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                row-gap: 10px;

                &-title, &-txt {
                    max-width: 750px;
                    width: 100%;
                }

                &-title {
                    font-size: 18px;
                    color: var(--primary-color);

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }

                &-txt {
                    font-size: 14px;
                    color: var(--main-gray);

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }

            &:last-child {
                border-bottom: 0 !important;
            }
        }
    }

    .services__info {
        width: 100%;
        display: flex;
        border: solid 1px var(--border-clr);
        border-top: 0;

        &-box {
            max-width: 40%;
            width: 100%;
            position: relative;
            display: grid;
            place-items: center;
            padding: 195px 25px;
            border-right: solid 1px var(--border-clr);
            overflow: hidden;
        }

        &-name {
            max-width: 280px;
            width: 100%;
            text-align: center;
            font-size: 30px;
            color: var(--primary-color);
            text-transform: capitalize;
        }

        &-bg {
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            object-fit: cover;
        }

        &-descr {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 25px;
        }

        &-txt {
            max-width: 410px;
            width: 100%;
            font-size: 15px;
            color: var(--main-gray);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

</style>