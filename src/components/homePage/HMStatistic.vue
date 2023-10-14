<template>
  <section class="statistic__section">
    <div class="container">
      <div class="row">

        <h2 class="statistic__title all-md-title">{{ $t('home.main.statisticSection.title') }}</h2>

        <div class="statistic__list">
          <div class="statistic__list-item" v-for="(item, idx) in $tm('home.main.statisticSection.infoNumbers')" :key="idx">
            <p class="item-num all-title">{{ item.num }} </p>
            <p class="item-name">{{ item.name }}</p>

            <span class="bottom-line"></span>
          </div>
        </div>

      </div>
    </div>

    <img src="https://firebasestorage.googleapis.com/v0/b/skylinetech-d4da1.appspot.com/o/HomePage%2FStatisticsSection%2Fstatistics-bg.png?alt=media&token=617749ad-642c-4b94-8216-f018fed62b2c" alt="" class="moving-img">
  </section>
</template>

<script>

export default {
  name: 'Statistics Section',
  mounted() {
    const movingImg = document.querySelector('.moving-img');

    window.addEventListener('scroll', () => {
      movingImg.style.transform = `translateX(-${window.scrollY / 6}px)`
    })
  }
}

</script>

<style lang="scss" scoped>

.statistic__section {
  max-width: 2600px;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 100px 0 500px;
  margin: 0 auto;

  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 40px;
  }

  .statistic__title {
    color: var(--primary-color);
    text-transform: capitalize;
    font-weight: 500;
  }

  .statistic__list {
    max-width: 1500px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 15px;

    &-item {
      max-width: 170px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .item-num {
        color: var(--main-red);
        font-weight: 500;
      }

      .item-name {
        font-size: 14px;
        color: var(--main-gray);
        text-transform: capitalize;
        margin-bottom: 20px;
      }
    }
  }

  .moving-img {
    position: absolute;
    top: 0;
    left: 20%;
    object-fit: cover;
    z-index: -1;
  }
}

@media (max-width: 992px) {
  .statistic__section {
    padding: 70px 0 200px;
  }

  .statistic__list {
    flex-wrap: wrap;
    justify-content: center !important;
  }
}

</style>