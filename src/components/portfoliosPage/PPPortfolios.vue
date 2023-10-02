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

            <div class="portfolios__list">
                <div class="portfolios__list-item multiple" v-show="typesShowList[0].visible">
                    <div class="portfolios-project" v-for="(prj, idd) in $tm('portfolios.main.programsSection.typesList')" :key="idd">
                        <img :src="prj.img" alt="" class="project-img">

                        <div class="project-descr">
                            <p class="project-descr-name">{{ prj.name }}</p>
                            <p class="project-descr-ptcpt" v-if="prj.ptp.num">{{ prj.ptp.num }} {{ prj.ptp.txt }}</p>

                            <span class="line-through"></span>

                            <button class="project-descr-btn red-btn">{{ prj.btnTxt }}</button>
                        </div>
                    </div>
                </div>

                <div class="portfolios__list-item" v-for="(item, id) in $tm('portfolios.main.programsSection.typesList')" :key="id" v-show="typesShowList[id + 1].visible">
                    <div class="portfolios-project">
                        <img :src="item.img" alt="" class="project-img">

                        <div class="project-descr">
                            <p class="project-descr-name">{{ item.name }}</p>
                            <p class="project-descr-ptcpt" v-if="item.ptp.num">{{ item.ptp.num }} {{ item.ptp.txt }}</p>

                            <span class="line-through"></span>

                            <button class="project-descr-btn red-btn">{{ item.btnTxt }}</button>
                        </div>
                    </div>
                </div>
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
    padding-bottom: 150px;

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

    .portfolios__list {
        max-width: 100%;
        width: 100%;
        
        .portfolios__list-item {
            width: 100%;
            
            .portfolios-project {
                width: 100%;
                display: flex;
                flex-direction: column;
                border: solid 1px var(--border-clr);

                .project-descr {
                    width: 100%;
                    height: 100%;
                    padding: 30px 50px;
                    display: flex;
                    flex-direction: column;
                    row-gap: 15px;
                    justify-content: space-between;

                    &-name {
                        font-size: 21px;
                        color: var(--primary-color);
                        text-transform: capitalize;
                    }

                    &-btn {
                        max-width: 135px !important;
                        padding: 10px 15px;
                    }

                    .line-through {
                        width: 15%;
                        height: 1px;
                        background: var(--border-clr);
                    }

                    &-ptcpt {
                        font-size: 15px;
                        color: var(--primary-color);
                    }
                }
            }

            &:not(.multiple) {
                .project-img {
                    width: 100%;
                }
            }

            &.multiple {
                display: flex;
                flex-wrap: wrap;

                .portfolios-project {
                    max-width: 578px;
                }
            }
        }
    }
}

</style>