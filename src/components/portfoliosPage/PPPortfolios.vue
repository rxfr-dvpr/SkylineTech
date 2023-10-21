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

                            <a :href="prj.link" target="_blank" class="project-descr-btn red-btn">{{ prj.btnTxt }}</a>
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

                            <a :href="item.link" target="_blank" class="project-descr-btn red-btn">{{ item.btnTxt }}</a>
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
        flex-wrap: wrap;

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
                    transition: .3s;

                    &-name {
                        font-size: calc(17px + 4 * (100vw / 1920));
                        color: var(--primary-color);
                        text-transform: capitalize;
                    }

                    &-btn {
                        max-width: 135px !important;
                        padding: 10px 15px;
                        display: grid;
                        place-items: center;
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

                @media (max-width: 1765px) {
                    justify-content: center;
                    gap: 15px;
                }

                .portfolios-project {
                    max-width: 578px;
                }

                .project-img {
                    max-height: 280px;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                }
            }
        }
    }
}

@media (min-width: 1920px) {
    .project-descr {
        &-name {
            font-size: 21px !important;
        }
    }
}

@media (max-width: 1110px) {
    .project-descr {
        padding: 20px 30px !important;
    }
}

@media (max-width: 386px) {
    .portfolios__types {
        flex-direction: column;
        align-items: center;

        &-item {
            width: 100%;
            text-align: center;
        }
    }
}

</style>