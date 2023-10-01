<template>
  <section class="portfolios__section">
    <div class="container">
        <div class="row">
            <div class="portfolios__types">
                <span class="portfolios__types-item" 
                v-for="(type, idx) in $tm('portfolios.main.programsSection.types')" 
                :key="idx" :class="{active: typesShowList[idx].visible}"
                @click="selectedType(idx)">{{ type.name }}</span>
            </div>

        </div>
    </div>
  </section>
</template>

<script>

export default {
    name: 'Portfolios Section',
    data() {
        return {
            typesShowList: []
        }
    },
    beforeMount() {
        const arr = [...this.$tm('portfolios.main.programsSection.types')]
        arr.map((item, idx) => 
        this.typesShowList.push({visible: idx == 0 ? true : false, type: item.type}))
    },
    methods: {
        selectedType(idx) {
            this.typesShowList.map(item => item.visible = false);
            this.typesShowList[idx].visible = true;
        }
    }
}

</script>

<style lang="scss" scoped>

.portfolios__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 25px;
    }

    .portfolios__types {
        width: 100%;
        display: flex;
        justify-content: center;

        &-item {
            font-size: 15px;
            text-transform: capitalize;
            color: var(--primary-color);
            padding: 10px 40px;
            border-bottom: 2px solid var(--border-clr);
            cursor: pointer;
            transition: .4s;

            &.active {
                border-color: var(--main-red);
                color: var(--main-red);
            }
        }
    }
}

</style>