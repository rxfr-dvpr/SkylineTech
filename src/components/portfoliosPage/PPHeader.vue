<template>
    <header class="pp-header">
        <div class="container">
            <div class="row">
                <h2 class="pp-header-title all-title">{{ $t('portfolios.header.title') }}</h2>
                <p class="pp-header-txt all-txt">{{ $t('portfolios.header.txt') }}</p>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Portfolios Page Header'
}

</script>

<style lang="scss" scoped>

.pp-header {
    width: 100%;
    padding: 150px 0 120px;

    .row {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;
    }

    &-title, &-txt {
        max-width: 750px;
        width: 100%;
    }
}

</style>