<template>
    <transition name="p-message" appear v-bind="ptmi('transition')">
        <div v-show="visible" :class="cx('root')" role="alert" aria-live="assertive" aria-atomic="true" v-bind="ptm('root')">
            <slot v-if="$slots.container" name="container" :onClose="close" :closeCallback="close"></slot>
            <div v-else :class="cx('wrapper')" v-bind="ptm('wrapper')">
                <slot name="messageicon" class="p-message-icon">
                    <WecgIcon v-if="icon" :icon="icon" :class="cx('icon')" v-bind="getPTOptions('icon')" :label="icon" :variant="variant"></WecgIcon>
                    <WecgIcon v-else :icon="iconCalculation" :class="cx('icon')" v-bind="getPTOptions('icon')" :label="iconCalculation" :variant="variant"></WecgIcon>
                </slot>
                <div class="p-message-text" :class="cx('text')" v-bind="ptm('text')">
                    <slot></slot>
                </div>
                <button v-if="closable" v-ripple :class="cx('closeButton')" :aria-label="closeAriaLabel" type="button" @click="close($event)" v-bind="{ ...closeButtonProps, ...ptm('button'), ...ptm('closeButton') }">
                    <slot name="closeicon">
                        <WecgIcon v-if="closeIcon" :icon="closeIcon" :class="cx('closeIcon')" v-bind="{ ...getPTOptions('buttonIcon'), ...getPTOptions('closeIcon') }" :label="closeIcon" :variant="variant"></WecgIcon>
                        <WecgIcon v-else :icon="'close'" :class="cx('closeIcon')" v-bind="{ ...getPTOptions('buttonIcon'), ...getPTOptions('closeIcon') }" :label="closeIcon" :variant="variant"></WecgIcon>
                    </slot>
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
import Ripple from 'primevue/ripple';
import WecgIcon from 'primevue/wecgicon';
import BaseMessage from './BaseMessage.vue';

export default {
    name: 'Message',
    extends: BaseMessage,
    inheritAttrs: false,
    emits: ['close', 'life-end'],
    timeout: null,
    data() {
        return {
            visible: true
        };
    },
    watch: {
        sticky(newValue) {
            if (!newValue) {
                this.closeAfterDelay();
            }
        }
    },
    mounted() {
        if (!this.sticky) {
            this.closeAfterDelay();
        }
    },
    methods: {
        close(event) {
            this.visible = false;
            this.$emit('close', event);
        },
        closeAfterDelay() {
            setTimeout(() => {
                this.visible = false;
                this.$emit('life-end');
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
        },
        closeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        WecgIcon
    }
};
</script>
