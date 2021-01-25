<template>
    <div class="pricing-section" :style="{ '--main-color': content.mainColor }">
        <div class="pricing-section__header">
            <wwLayout path="headerObjects" class="layout pricing-section__header-left -layout"></wwLayout>
            <div class="pricing-section__header-right">
                <div class="pricing-section__header-right-radio">
                    <div
                        class="pricing-section__header-right-radio-pill"
                        :style="{ left: `calc(50% * ${radio})` }"
                    ></div>
                    <div
                        class="pricing-section__header-right-radio-selector -month"
                        :class="{ '-selected': !radio }"
                        @click="radio = 0"
                    >
                        Monthly
                    </div>
                    <div
                        class="pricing-section__header-right-radio-selector -year"
                        :class="{ '-selected': radio }"
                        @click="radio = 1"
                    >
                        Yearly
                    </div>
                </div>
            </div>
        </div>
        <div class="pricing-section__range">
            <div class="pricing-section__range-preview">
                <div
                    class="pricing-section__range-preview-tooltip"
                    :style="{ left: `${((userCount - 1) / (content.maxUserCount - 1)) * 100}%` }"
                >
                    {{ userCount }} {{ usersLabel }}
                </div>
            </div>
            <input
                class="pricing-section__range-input"
                v-model="userCount"
                type="range"
                min="1"
                :max="content.maxUserCount"
                :style="{ '--ratio': `${(userCount / content.maxUserCount) * 100}%` }"
            />
        </div>
        <div class="pricing-section__plans">
            <div
                class="pricing-section__plans-plan"
                v-for="(plan, index) in content.plans"
                :key="index"
                :style="{ 'background-color': plan.color }"
            >
                <wwLayout
                    :path="`plans[${index}].planHeaderObjects`"
                    class="layout pricing-section__plans-plan-header -layout"
                ></wwLayout>
                <div class="pricing-section__plans-plan-pricing">
                    <div
                        class="pricing-section__plans-plan-pricing-price"
                        :style="{ color: plan.priceStyle.color, 'font-size': `${plan.priceStyle.fontSize}px` }"
                    >
                        {{ content.devise }}{{ userCount * plan.prices[radio] }}
                    </div>
                    <div
                        class="layout pricing-section__plans-plan-pricing-duration"
                        :style="{ color: plan.priceStyle.color }"
                    >
                        /{{ durationTexts[radio] }}
                    </div>
                </div>
                <wwLayout
                    :path="`plans[${index}].planMainObjects`"
                    class="layout pricing-section__plans-plan-main -layout"
                ></wwLayout>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        content: Object,
    },
    wwDefaultContent: {
        headerObjects: [],
        plans: [
            {
                planHeaderObjects: [],
                planPricingObjects: [],
                planMainObjects: [],
                prices: [19, 199],
                color: '#FFFFFF',
                priceStyle: {
                    color: '#000000',
                    fontSize: 30,
                },
            },
            {
                planHeaderObjects: [],
                planPricingObjects: [],
                planMainObjects: [],
                prices: [39, 399],
                color: '#FFFFFF',
                priceStyle: {
                    color: '#000000',
                    fontSize: 30,
                },
            },
            {
                planHeaderObjects: [],
                planPricingObjects: [],
                planMainObjects: [],
                prices: [99, 999],
                color: '#5F30E2',
                priceStyle: {
                    color: '#000000',
                    fontSize: 30,
                },
            },
            {
                planHeaderObjects: [],
                planPricingObjects: [],
                planMainObjects: [],
                prices: [199, 1999],
                color: '#FFFFFF',
                priceStyle: {
                    color: '#000000',
                    fontSize: 30,
                },
            },
        ],
        mainColor: '#5F30E2',
        scrollBarText: 'User',
        devise: '$',
        maxUserCount: 100,
    },
    data() {
        return {
            radio: 0,
            userCount: 1,
            durationTexts: ['Month', 'Year'],
        };
    },
    computed: {
        usersLabel() {
            return `${this.content.scrollBarText}${this.userCount > 1 ? 's' : ''}`;
        },
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.pricing-section {
    & .-layout {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    &__header {
        display: flex;
        margin: 0 50px;
        align-items: center;

        &-left {
            flex-grow: 1;
        }
        &-right {
            flex-shrink: 1;
            &-radio {
                user-select: none;
                width: 225px;
                height: 55px;
                border: 2px solid #ececf1;
                border-radius: 500px;
                overflow: hidden;
                display: flex;
                position: relative;

                &-selector {
                    width: 50%;
                    z-index: 1;
                    color: var(--main-color);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    transition: color 0.3s ease;

                    &.-selected {
                        color: white;
                    }
                }
                &-pill {
                    position: absolute;
                    top: 0;
                    left: 0;
                    pointer-events: none;
                    z-index: 0;
                    width: 50%;
                    height: 100%;
                    border: 3px solid white;
                    background-color: var(--main-color);
                    border-radius: 500px;
                    transition: left 0.3s ease;
                }
            }
        }
    }
    &__range {
        height: 20px;
        margin: 100px 50px 80px 50px;
        position: relative;

        &-preview {
            position: relative;
            margin: 0 12px;

            &-tooltip {
                position: absolute;
                top: -35px;
                transform: translate(-50%, 0);
                white-space: nowrap;
                font-size: 11px;
                color: white;
                background-color: #000000;
                border-radius: 7px;
                padding: 5px 13px;

                &:before {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(45deg);
                    background-color: #000000;
                    width: 8px;
                    height: 8px;
                }
            }
        }

        &-input {
            width: 100%;

            -webkit-appearance: none;
            background: transparent;
            &:focus {
                outline: none; // TODO: provide an accessible alternative
            }
            &::-webkit-slider-thumb {
                -webkit-appearance: none;
            }
            &::-ms-track {
                width: 100%;
                cursor: pointer;
                background: transparent;
                border-color: transparent;
                color: transparent;
            }

            @mixin thumb() {
                height: 24px;
                width: 24px;
                border-radius: 50%;
                border: 4px solid white;
                background: var(--main-color);
                box-shadow: 0px 0px 6px 0 rgba(0, 0, 0, 0.6);
                transition: box-shadow 0.2s ease;
                cursor: pointer;
            }
            @mixin track() {
                // Maybe add a padding to select the bar more easily
                width: 100%;
                height: 8px;
                border-radius: 50px;

                cursor: pointer;
                background: linear-gradient(var(--main-color), var(--main-color)) 0 / var(--ratio) 100% no-repeat
                    #ececf1;
            }

            // Need separate line for browser compatibility
            // TODO: check if postcss or autoprefixer handle this
            &::-webkit-slider-thumb {
                @include thumb();
                margin-top: -8px;
            }
            &::-moz-range-thumb {
                @include thumb();
                border: none;
            }
            &::-ms-thumb {
                @include thumb();
            }
            &::-webkit-slider-runnable-track {
                @include track();
            }
            &::-moz-range-track {
                @include track();
            }
            &::-ms-track {
                @include track();
            }
        }
    }
    &__plans {
        display: flex;
        column-gap: 40px;

        &-plan {
            width: 25%;
            border-radius: 20px;
            transition: all 0.3s ease;

            &:hover {
                box-shadow: 0px 4px 18px -8px #000000b0;
            }

            &-header {
                width: 100%;
            }
            &-pricing {
                width: 100%;
                display: flex;
                align-items: center;

                &-price {
                    margin-left: 30px;
                    flex-shrink: 1;
                    font-size: 30px;
                    font-weight: bold;
                }
                &-duration {
                    font-size: 18px;
                    font-weight: lighter;
                    padding-left: 15px;
                }
            }
            &-main {
                width: 100%;
            }
        }
    }

    @media (max-width: 991px) {
        .pricing-section__header {
            flex-direction: column;
            margin: 0 10px;
        }

        .pricing-section__plans {
            flex-direction: column;
            row-gap: 30px;

            &-plan {
                width: calc(100% - 20px);
                margin: auto;
                box-shadow: 0px 4px 18px -8px #000000b0;
            }
        }
    }
}
</style>
