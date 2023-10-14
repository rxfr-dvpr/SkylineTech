<template>
  <section class="mission__section">
    <div class="container">
        <div class="row">

            <div class="mission__descr">
                <h2 class="mission__descr-title all-md-title">{{ $t('home.main.missionSection.title') }}</h2>

                <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FMissionSection%2Fmission-bg.png?alt=media&token=52d308f4-4cb7-431c-ad11-92e1328d816d" alt="" class="mission__descr-bg">
            </div>

            <div class="mission__info">
                <p class="mission__info-txt" v-for="(txt, idx) in $tm('home.main.missionSection.descrTxts')" :key="idx">
                    {{ txt.txt }}
                </p>

                <router-link :to="`/${$t('home.main.missionSection.btn.url')}`" class="red-btn learn-link">{{ $t('home.main.missionSection.btn.txt') }}</router-link>
            </div>

        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Mission Section'
}

</script>

<style lang="scss" scoped>

.mission__section {
    width: 100%;

    .row {
        justify-content: space-between;
        background: var(--main-black);
        border: solid 1px rgb(63, 67, 73);
        background: var(--main-black);
    }

    .mission__descr {
        max-width: 50%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-right: solid 1px rgb(63, 67, 73);

        &-title {
            color: var(--primary-color);
            z-index: 2;
            text-transform: capitalize;
            font-weight: 500;
        }

        &-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .mission__info {
        max-width: 350px;
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        padding: 150px 0 200px;
        row-gap: 20px;

        &-txt {
            font-size: 16px;
            color: var(--main-gray);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

@media (max-width: 992px) {
    .mission__section {
        .row {
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
        }

        .mission {
            &__descr {
                max-width: 100%;
                padding: 50px 20px;
                border-right: 0;
                text-align: center;

                &-title, &-txt {
                    max-width: 500px;
                }
            }

            &__info {
                padding: 70px 15px;
                align-items: center;
                text-align: center;
            }
        }
    }
}

</style>