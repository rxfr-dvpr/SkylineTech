<template>
  <main class="main">
    <section class="error__section">
        <div class="container">
            <div class="row">
                <p class="error-num">404</p>

                <p class="error-msg">{{ $t('notfound.msg') }}</p>

                <router-link to="/" class="back-link"><i class="far fa-long-arrow-left"></i> {{ $t('notfound.backMsg') }}</router-link>
            </div>
        </div>
    </section>
  </main>
</template>

<script>

export default {
    name: 'Not Found Page'
}

</script>

<style lang="scss" scoped>

.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 0 50px;

    .error__section {
        width: 100%;
        padding: 50px 0;

        .row {
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 10px;
        }

        .error-num {
            color: var(--primary-color);
            font-weight: 500;
            font-size: calc(60px + 55 * (100vw / 1920));
        }

        .error-msg {
            font-size: calc(17px + 3 * (100vw / 1920));
            color: var(--primary-color);
            margin-bottom: 15px;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .back-link {
            max-width: max-content;
            width: 100%;
            color: var(--main-gray);
            transition: .3s;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 15px;

            i {
                margin-top: 4px;
            }

            &:hover, &:active {
                color: var(--main-red);
            }

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }
}

@media (min-width: 1920px) {
    .error-msg {
        font-size: 20px !important;
    }

    .error-num {
        font-size: 115px !important;
    }
}

</style>