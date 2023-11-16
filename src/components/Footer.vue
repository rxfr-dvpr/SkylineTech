<template>
  <footer class="footer">
    <div class="container">
      <div class="row">

        <div class="footer__contact">
          <router-link to="/" class="footer-logo">
            <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/skyline%20ll.png?alt=media&token=233b301a-0b75-41cf-bc35-69a88e585289" alt="" class="logo-brand">
            <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/skyline%20pp.png?alt=media&token=6560ba6a-eb10-48ea-950d-dcc6ff35ecc3" alt="" class="logo-name">
          </router-link>

          <a :href="link.url" target="_blank" class="footer__contact-link" v-for="(link, idx) in $tm('footer.contacts')" :key="idx">
            {{ link.txt }}
          </a>
        </div>

        <div class="footer__list">
          <router-link :to="link.url" class="footer__list-link" 
          v-for="(link, id) in $tm('footer.links')" :key="id" exact-active-class="active">
            {{ link.name }}
          </router-link>

          <router-link :to="$t('nav.btn.url')" class="red-btn footer-btn">{{ $t('nav.btn.txt') }}</router-link>
        </div>

        <form class="footer__form" @submit.prevent>
          <p class="footer__form-title">{{ $t('footer.form.title') }}</p>

          <label for="emailInp">{{ $t('footer.form.emailInpTxt') }}*</label>
          <input type="email" id="emailInp" class="footer__form-email" v-model="emailVal">

          <button @click="this.$router.push('/contact')" class="submit-btn get-btn">{{ $t('footer.form.btnTxt') }}</button>
        </form>

        <div class="footer__social">
          <p class="footer__social-title">{{ $t('footer.socialLinks.title') }}</p>

          <div class="footer__social-links">
            <a :href="link.url" target="_blank" v-for="(link, idx) in socialLinks" :key="idx" 
            :class="`footer__social-link id-${idx + 1}`" v-html="link.icon"></a>
          </div>

          <a href="https://top-fwz1.mail.ru/jump?from=3418862">
          <img src="https://top-fwz1.mail.ru/counter?id=3418862;t=584;l=1" height="40" width="88" alt="Top.Mail.Ru" style="border:0;" /></a>

          <!-- Yandex.Metrika informer -->
          <a href="https://metrika.yandex.ru/stat/?id=95556616&amp;from=informer" target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/95556616/3_0_FF5353FF_FF3333FF_0_pageviews" style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="95556616" data-lang="ru" /></a>
          <!-- /Yandex.Metrika informer -->
        </div>

      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      emailVal: '',
      socialLinks: [
        {
          icon: '<i class="fab fa-facebook-square"></i>',
          url: 'https://www.facebook.com/'
        },
        {
          icon: '<i class="fab fa-telegram"></i>',
          url: 'https://t.me/SkylineTech_uz'
        },
        {
          icon: '<i class="fab fa-instagram"></i>',
          url: 'https://www.instagram.com/skylinetech.uz/'
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.footer {
  width: 100%;
  padding-bottom: 150px;

  .row {
    justify-content: space-between;
  }

  &__contact {
    max-width: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;

    &-link {
      font-size: 18px;
      color: var(--main-gray);
      text-transform: capitalize;
      transition: .4s;
      font-weight: 300;

      &:hover {
        color: var(--main-red);
      }
    }
  }

  &-logo {
    max-width: max-content;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;

    .logo-brand {
      max-width: 60px;
      width: 100%;
    }

    .logo-name {
      max-width: 180px;
      width: 100%;
    }
  }

  &__list {
    max-width: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    &-link {
      font-size: 18px;
      text-transform: capitalize;
      color: var(--main-gray);
      transition: .4s;
      font-weight: 300;

      &:hover {
        color: var(--main-red);
      }

      &.active {
        color: var(--main-red);
      }
    }

    .footer-btn {
      margin-top: 15px;
    }
  }

  &__form {
    max-width: 280px;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    &-title {
      font-size: 18px;
      text-transform: capitalize;
      color: var(--main-gray);
    }

    label {
      font-size: 14px;
      color: var(--main-gray);
      text-transform: capitalize;
    }

    &-email {
      width: 100%;
      background: var(--main-black);
      outline: none;
      border-radius: 5px;
      border: 1px solid #8A8A8A;
      color: var(--main-gray);
      padding: 10px 15px;
    }

    .submit-btn {
      border: 1px solid #8A8A8A;
      color: var(--main-gray);
      background: var(--main-black);
      transition: .4s;

      &:hover {
        background: var(--main-red);
        color: var(--main-black);
        border-color: var(--main-red);
      }
    }
  }

  &__social {
    max-width: max-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;

    &-title {
      font-size: 18px;
      color: var(--main-gray);
      text-transform: capitalize;
    }

    &-links {
      max-width: max-content;
      width: 100%;
      display: flex;
      gap: 15px;
      align-items: center;
    }

    &-link {
      font-size: 25px;
      transition: .7s;

      &:hover {
        transform: scale(1.3);
      }

      &.id-1 {
        color: #4267B2;
      }

      &.id-2 {
        color: #0072b1;
      }

      &.id-3 {
        color: var(--main-red);
      }
    }
  }
}

@media (max-width: 992px) {
  .footer {
    padding-bottom: 20px;
    .row {
      flex-direction: column;
      align-items: center;
      text-align: center;
      row-gap: 50px;
    }

    &__contact {
      align-items: center;
    }

    &__form {
      align-items: center;
    }

    &-logo {
      flex-direction: column;
    }

    &__social {
      align-items: center;
    }
  }
}
</style>