<template>
    <div :class="[cx('container'), message.styleClass]" role="alert" aria-live="assertive" aria-atomic="true" v-bind="ptm('container')">
        <component v-if="templates.container" :is="templates.container" :message="message" :onClose="onCloseClick" :closeCallback="onCloseClick" />
        <div v-else :class="[cx('content'), message.contentStyleClass]" v-bind="ptm('content')">
            <template v-if="!templates.message">
                <WecgIcon v-if="icon" :icon="icon" :class="cx('icon')" v-bind="getPTOptions('icon')" :label="icon" :variant="variant"></WecgIcon>
                <WecgIcon v-else :icon="iconCalculation" :class="cx('icon')" v-bind="getPTOptions('icon')" :label="iconCalculation" :variant="variant"></WecgIcon>
                <div :class="cx('text')" v-bind="ptm('text')">
                    <span v-if="message.summary" :class="cx('summary')" v-bind="ptm('summary')">{{ message.summary }}</span>
                    <div :class="cx('detail')" v-bind="ptm('detail')">{{ message.detail }}</div>
                </div>
            </template>
            <component v-else :is="templates.message" :message="message"></component>
            <div v-if="message.closable !== false" v-bind="ptm('buttonContainer')">
                <button v-ripple :class="cx('closeButton')" type="button" :aria-label="closeAriaLabel" @click="onCloseClick" autofocus v-bind="{ ...closeButtonProps, ...ptm('button'), ...ptm('closeButton') }">
                    <WecgIcon v-if="closeIcon" :icon="closeIcon" :class="cx('closeIcon')" v-bind="{ ...getPTOptions('buttonIcon'), ...getPTOptions('closeIcon') }" :label="closeIcon" :variant="variant"></WecgIcon>
                    <WecgIcon v-else :icon="'close'" :class="cx('closeIcon')" v-bind="{ ...getPTOptions('buttonIcon'), ...getPTOptions('closeIcon') }" :label="closeIcon" :variant="variant"></WecgIcon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import WecgIcon from 'primevue/wecgicon';
import Ripple from 'primevue/ripple';

export default {
    name: 'ToastMessage',
    hostName: 'Toast',
    extends: BaseComponent,
    emits: ['close'],
    closeTimeout: null,
    props: {
        message: {
            type: null,
            default: null
        },
        templates: {
            type: Object,
            default: null
        },
        closeIcon: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
    mounted() {
        if (this.message.life) {
            this.closeTimeout = setTimeout(() => {
                this.close({ message: this.message, type: 'life-end' });
            }, this.message.life);
        }
    },
    beforeUnmount() {
        this.clearCloseTimeout();
    },
    methods: {
        close(params) {
            this.$emit('close', params);
        },
        onCloseClick() {
            this.clearCloseTimeout();
            this.close({ message: this.message, type: 'close' });
        },
        clearCloseTimeout() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null;
            }
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
    components: {
        WecgIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
