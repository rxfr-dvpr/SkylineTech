<template>
    <Transition name="fade">
        <nav class="nav" v-show="!scrolled" :class="lastScrollNum > 0 ? 'dark-bg': ''">
          <div class="container">
              <div class="row">

                <router-link to="/" class="nav-logo">
                  <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/skyline%20ll.png?alt=media&token=f09a519c-e62e-46af-a59b-0102ed3d0d8f" alt="" class="logo-brand">
                  <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/skyline%20pp.png?alt=media&token=c99b7471-0a5a-44f7-889c-a9651abff6ab" alt="" class="logo-name">
                </router-link>

                <div class="nav__collapse" :class="{'active': mbOpened}" @click.self="mbOpened = false">
                    <ul class="nav__list">
                        <li class="nav__list-item" v-for='(link, idx) in $tm("nav.links")' :key="idx">
                            <router-link :to="`/${link.url}`" @click="mbOpened = false" class="nav__list-link">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>

                    <select class="lang-select" @change="onChange">
                        <option :value="lang.name" class="lang-select-item" 
                        v-for="(lang, id) in $tm('nav.langs')" :key="id">
                            {{ lang.name }}
                        </option>
                    </select>
                </div>

                <router-link :to="`/${$t('nav.btn.url')}`" class="get-btn">{{ $t('nav.btn.txt') }}</router-link>

                <button class="nav-mb-btn get-btn" v-show="wWidth <= 992" @click="mbOpened = !mbOpened" :class="{'opened': mbOpened}">
                    <span class="nav-mb-btn-line" v-for="i in 3" :key="i"></span>
                </button>
              </div>
          </div>
        </nav>
    </Transition>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
    name: 'Navigation',
    data() {
        return {
            i18n: useI18n({useScope: "global"}),
            scrolled: false,
            lastScrollNum: window.scrollY,
            windowScrollY: window.scrollY,
            mbOpened: false,
            wWidth: window.innerWidth
        }
    },
    methods: {
        onChange(e) {
            this.i18n.locale = e.target.value
            this.mbOpened = false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (window.scrollY < this.lastScrollNum) {
                this.scrolled = false
            } else {
                this.scrolled = true
            }
            this.lastScrollNum = window.scrollY
        })

        window.addEventListener('resize', () => this.wWidth = window.innerWidth)
    }
}

</script>

<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: .4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.nav {
    width: 100%;
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2023;

    &.dark-bg {
        background: var(--main-black);
    }

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }

    &-logo {
        max-width: max-content;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;

        .logo-brand {
            max-width: 85px;
            width: 100%;
        }

        .logo-name {
            max-width: 260px;
            width: 100%;
        }
    }

    &__collapse {
        max-width: max-content;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 30px;
        margin-left: auto;

        .nav {
            &__list {
                max-width: max-content;
                width: 100%;
                display: flex;
                align-items: center;
                gap: 25px;
                margin-right: 40px;

                &-link {
                    color: var(--primary-color);
                    text-transform: capitalize;
                    font-size: 14px;
                    transition: .4s;

                    &:hover {
                        color: var(--main-red);
                    }

                    &.router-link-exact-active {
                        color: var(--main-red);
                    }
                }
            }
        }

        .lang-select {
            background: var(--main-black);
            color: var(--primary-color);
            text-transform: uppercase;
            padding: 5px;
            font-size: 16px;
            cursor: pointer;

            &-item {
                font-size: 16px;
                padding: 5px;
                color: var(--primary-color);
                text-transform: uppercase;
                cursor: pointer;
            }
        }
    }
}

@media (max-width: 992px) {
    .nav {
        .row {
            flex-wrap: unset;
            gap: 15px;
        }

        &-logo {
            flex-direction: column;
            align-items: center;
            max-width: 150px;

            .logo-brand {
                max-width: 50px;
                width: 100%;
            }
        }
    }

    .nav__collapse {
        position: fixed;
        top: 0;
        left: 0;
        max-width: 100%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10%;
        background: var(--main-black);
        opacity: 0;
        transform: translateX(-120%);
        transition: .4s;
        justify-content: center;

        .nav__list {
            flex-direction: column;
            align-items: center;
            margin-right: 0;

            &-link {
                font-size: 20px;
            }
        }

        .lang-select {
            order: -1;
        }

        &.active {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .get-btn {
        margin-left: auto;
    }

    .nav-mb-btn {
        z-index: 2026;
        margin-left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 7px;
        border: 0;
        background: transparent;
        
        &-line {
            width: 30px;
            height: 2px;
            display: block;
            background: var(--primary-color);
            transition: .3s;
        }

        &.opened {
            .nav-mb-btn {
                &-line:nth-child(2) {
                    opacity: 0;
                }

                &-line:first-child {
                    transform: translateY(10px) rotate(-45deg);
                }

                &-line:last-child {
                    transform: translateY(-8px) rotate(45deg);
                }
            }
        }
    }
}

</style>