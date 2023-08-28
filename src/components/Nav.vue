<template>
    <Transition name="fade">
        <nav class="nav" v-show="!scrolled" :class="lastScrollNum > 0 ? 'dark-bg': ''">
          <div class="container">
              <div class="row">

                  <router-link to="/" class="nav-logo">
                      <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/logo-1.png?alt=media&token=de7d2b81-04cd-4078-b868-eec18136cead" alt="" class="logo-brand">
                      <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/logo-2.png?alt=media&token=966cff9d-4c30-402b-89bb-680172db7134" alt="" class="logo-name">
                  </router-link>

                  <div class="nav__collapse">
                      <ul class="nav__list">
                          <li class="nav__list-item" v-for='(link, idx) in $tm("nav.links")' :key="idx">
                              <router-link :to="`/${link.url}`" class="nav__list-link">
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

                      <router-link :to="`/${$t('nav.btn.url')}`" class="get-btn">{{ $t('nav.btn.txt') }}</router-link>
                  </div>

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
            windowScrollY: window.scrollY
        }
    },
    methods: {
        onChange(e) {
            this.i18n.locale = e.target.value
            // localStorage.lang = e.target.value
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
    }

    &-logo {
        display: flex;
        align-items: center;
        gap: 10px;

        .logo-brand {
            max-width: 90px;
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



</style>