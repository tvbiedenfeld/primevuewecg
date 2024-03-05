<template>
    <div role="alert" aria-live="assertive" aria-atomic="true" :class="cx('root')" v-bind="ptmi('root')">
        <slot name="icon">
            <WecgIcon v-if="icon" :icon="icon" :class="cx('icon')" v-bind="getPTOptions('icon')" :label="icon" :variant="variant"></WecgIcon>
            <WecgIcon v-else :icon="iconCalculation" :class="cx('icon')" v-bind="getPTOptions('icon')" :label="iconCalculation" :variant="variant"></WecgIcon>
        </slot>
        <span :class="cx('text')" v-bind="ptm('text')">
            <slot />
        </span>
    </div>
</template>

<script>
import BaseInlineMessage from './BaseInlineMessage.vue';
import WecgIcon from 'primevue/wecgicon';

export default {
    name: 'InlineMessage',
    extends: BaseInlineMessage,
    inheritAttrs: false,
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    mounted() {
        if (!this.sticky) {
            setTimeout(() => {
                this.visible = false;
            }, this.life);
        }
    },
    computed: {
        iconCalculation() {
            return {
                info: 'info',
                success: 'check',
                warn: 'trianglewarning',
                danger: 'error',
                error: 'error',
                help: 'help',
                base: 'bell'
            }[this.variant];
        }
    },
    components: {
        WecgIcon
    }
};
</script>
