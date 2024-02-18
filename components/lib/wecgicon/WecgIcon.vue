<template>
    <svg role="img" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" :stroke-width="strokeWidth" :stroke="color" v-bind="pti()">
        <use :href="`${spritesheet}#svg.${icon}`"></use>
    </svg>
</template>
<script>
import BaseComponent from 'primevue/basecomponent';
import { ObjectUtils } from 'primevue/utils';

export default {
    name: 'WecgIcon',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: undefined
        },
        spin: {
            type: Boolean,
            default: false
        },
        spritesheet: {
            type: String,
            default: '../src/assets/icons/wecg_wawi_icon_spritesheet.svg'
        },
        variant: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'large'
        },
        icon: {
            type: String
        },
        strokeWidth: {
            type: String,
            default: '0.375rem'
        },
        color: {
            type: String,
            default: '#FFFFFF'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        pti() {
            const isLabelEmpty = ObjectUtils.isEmpty(this.label);

            return {
                role: !isLabelEmpty ? 'img' : undefined,
                'aria-label': !isLabelEmpty ? this.label : undefined,
                'aria-hidden': isLabelEmpty
            };
        }
    }
};
</script>
