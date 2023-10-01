<template>
  <section class="contact__section">
    <div class="container">
        <div class="row">
            <div class="contact__info">
                <p class="contact__info-txt">{{ $t('contactWithUs.main.contactSection.descr.txt') }}</p>
            </div>

            <div class="contact__form-parent">
                <form method="POST" @submit.prevent="sendToBot" class="contact__form">
                    <div class="contact__form-box" v-for="(item, idx) in formInputs" :key="idx">
                        <label :for="item.class" class="inp-label">
                            {{ $t(`contactWithUs.main.contactSection.formNames.${item.class}`) }}
                        </label>

                        <input :type="item.type" required :class="`contact__form-inp ${item.class}`" :id="item.class" v-model="item.value">
                    </div>

                    <button class="contact__form-btn red-btn">
                        {{ $t('contactWithUs.main.contactSection.formNames.submitTxt') }}
                    </button>
                </form>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
    name: 'Contact page Contact Section',
    data() {
        return {
            formInputs: [
                {
                    value: '',
                    class: 'fName',
                    type: 'text'
                },
                {
                    value: '',
                    class: 'lName',
                    type: 'text'
                },
                {
                    value: '',
                    class: 'email',
                    type: 'email'
                },
                {
                    value: '',
                    class: 'company',
                    type: 'text'
                },
                {
                    value: '',
                    class: 'phone',
                    type: 'number'
                },
                {
                    value: '',
                    class: 'job',
                    type: 'text'
                }
            ],
            token: '5809623157:AAEvlf-m3w-rhzw7XuS077hqvHC3P65fVOo',
            chatId1: '1360394917',
            chatId2: '713687280'
        }
    },
    methods: {
        async sendToBot() {
            const obj = {}
            this.formInputs.map(item => {obj[item.class] = item.value})

            const fullMsg = 
            `Ismi-Familiya: ${obj.fName} ${obj.lName} | Email: ${obj.email} | Kompaniya: ${obj.company} | Tel: ${obj.phone} | Kasbi: ${obj.job}`

            axios
            .post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId1}&text=${fullMsg}`)
            .then((res) => {
                console.log('success sent');
            })
            .catch((err) => {
                console.error(err);
            })

            axios
            .post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId2}&text=${fullMsg}`)
            .then((res) => {
                console.log('success sent');
            })
            .catch((err) => {
                console.error(err);
            })

            this.formInputs.map(inp => inp.value = '')

            location.reload()
        }
    }
}

</script>

<style lang="scss" scoped>

.contact__section {
    width: 100%;

    .row {
        background: var(--main-black);
        border: solid 1px var(--border-clr);
        transform: translateY(-70px);
    }

    .contact__info {
        max-width: 35%;
        width: 100%;
        display: grid;
        place-items: center;
        text-align: center;
        padding: 210px 25px;
        border-right: solid 1px var(--border-clr);

        &-txt {
            max-width: 230px;
            width: 100%;
            color: var(--main-gray);

            &::first-letter {
                text-transform: uppercase;
            }
        }
    }

    .contact__form-parent {
        max-width: 65%;
        width: 100%;
        display: grid;
        place-items: center;

        .contact__form {
            max-width: 510px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;

            &-box {
                max-width: 245px;
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 15px;

                .inp-label {
                    font-size: 14px;
                    color: var(--main-gray);
                    text-transform: capitalize;
                }
            }

            &-inp {
                width: 100%;
                background: transparent;
                border: solid 1px var(--border-clr);
                border-radius: 5px;
                color: var(--main-red);
                padding: 15px 10px;
                background: var(--main-black);
                transition: .3s;

                &:focus {
                    border-color: var(--main-red);
                }
            }

            &-btn {
                max-width: 100%;
            }
        }
    }
}

</style>