<template>
  <section class="partners__section">
    <div class="container">
      <div class="row">
        <div class="partner__logo-box">
          <div class="partner-logo">
            <p class="partners-title all-md-title">{{ $t('home.main.partnersSection.title') }}</p>
          </div>

          <div :class="`partner-logo idx-${idx + 1}`" :title="item.title" v-for="(item, idx) in partnersLogo" :key="idx">
            <img :src="item.img" alt="" class="partner-logo-img">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Partners Section',
  data() {
    return {
      partnersLogo: [
        {
          title: 'redfox',
          img: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FPartnersSection%2Fredfox.png?alt=media&token=354691cd-67a2-4683-8a54-2111c514e6cb&_gl=1*pidegw*_ga*MTI0MjczNTM3OC4xNjk2NjEzMjky*_ga_CW55HF8NVT*MTY5NzI2NzA2Mi4yLjEuMTY5NzI2NzE1Mi40MS4wLjA.'
        },
        {
          title: 'mod me',
          img: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FPartnersSection%2FModme.png?alt=media&token=b9816ce0-a01a-493a-b58a-4ee6473c6604&_gl=1*9dhft*_ga*MTI0MjczNTM3OC4xNjk2NjEzMjky*_ga_CW55HF8NVT*MTY5NzI2NzA2Mi4yLjEuMTY5NzI2NzU5MC41My4wLjA.'
        },
        {
          title: 'a host',
          img: 'https://www.ahost.uz/sites/all/themes/ahost/logo.png'
        },
        {
          title: 'mzuka',
          img: 'https://firebasestorage.googleapis.com/v0/b/m-zuka.appspot.com/o/logo.svg?alt=media&token=afacb956-7dd4-40c6-8b2a-06bb5078a7f3'
        },
        {
          title: 'digital ocean',
          img: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FPartnersSection%2Fdigitalocean.png?alt=media&token=2699de86-d524-4818-847a-db09a87935e3&_gl=1*xmxwhv*_ga*MTI0MjczNTM3OC4xNjk2NjEzMjky*_ga_CW55HF8NVT*MTY5NzI2NzA2Mi4yLjEuMTY5NzI2ODIyNC4zMS4wLjA.'
        },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.partners__section {
  width: 100%;

  .row {
    flex-direction: column;
    align-items: flex-start;
  }

  .partner__logo-box {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: translateY(-50%);

    .partner-logo {
      max-width: 330px;
      width: 100%;
      display: grid;
      place-items: center;
      border: solid 1px #3F4349;
      padding: 65px 0;
      border-right: 0;
      background: var(--main-black);
      word-wrap: break-word;

      &-img {
        max-width: 100px;
        object-fit: contain;
      }

      p {
        max-width: 60%;
        width: 100%;
        text-transform: capitalize;
        font-weight: 500;
        color: var(--primary-color);
      }

      &:last-child {
        border-right: #3F4349 solid 1px;
      }
    }
  }
}

@media (max-width: 992px) {

  .partners__section {
    padding-bottom: 100px;
    
    .container {
      padding: 0 !important;
    }
    .partner__logo-box {
      transform: translateY(0%) !important;
      flex-direction: column;
    }
  
    .partner-logo {
      max-width: 100% !important;
      border: none !important;
      text-align: center;
      border-top: solid 1px #3F4349 !important;
  
      &:last-child {
        border-bottom: solid 1px #3F4349 !important;
      }
    }
  }

}

</style>