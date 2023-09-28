<template>
  <section class="partners__section">
    <div class="container">
      <div class="row">

        <div class="partner__logo-box">
          <div class="partner-logo">
            <p class="partners-title">{{ $t('home.main.partnersSection.title') }}</p>
          </div>

          <div :class="`partner-logo idx-${idx + 1}`" :title="item.title" v-for="(item, idx) in partnersLogo" :key="idx">
            <img :src="item.img" alt="" class="partners-logo-img">
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
          title: 'mikron',
          img: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FPartnersSection%2Fmikron.png?alt=media&token=e2291f5b-a8e1-4b30-a128-6581e86103b9'
        },
        {
          title: 'pome granate',
          img: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FPartnersSection%2Fpome.png?alt=media&token=65218e57-f0dd-484b-8470-8cd25b17a0c3'
        },
        {
          title: 'garmoosh',
          img: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FPartnersSection%2Fgarmoosh.png?alt=media&token=a160f249-5185-440a-a8e3-a0a757fb8cd9'
        },
        {
          title: 'velocity',
          img: 'https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FPartnersSection%2Fvelocity.png?alt=media&token=352ef178-8a0d-4e1c-83b3-d044f570e381'
        }
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
        max-width: 150px;
        width: 100%;
        object-fit: contain;
      }

      p {
        max-width: 50%;
        width: 100%;
        font-size: 30px;
        text-transform: capitalize;
        font-weight: 500;
        color: var(--primary-color);
      }

      &.idx-4 {
        border-right: #3F4349 solid 1px;
      }
    }
  }
}

</style>