<template>
    <button v-ripple :class="cx('root')" type="button" :aria-label="defaultAriaLabel" :disabled="disabled" v-bind="getPTOptions('root')" :data-p-severity="severity">
        <slot>
            <slot v-if="loading" name="loadingIcon" :class="[cx('loadingIcon'), cx('icon')]">
                <WecgIcon icon="loading" :class="cx('iconClass')" v-bind="getPTOptions('loadingIcon')" label="loading" :size="size" :variant="variant" :disabled="disabled" spin></WecgIcon>
            </slot>
            <slot v-else name="icon" :class="[cx('icon')]">
                <WecgIcon v-if="icon" :icon="icon" :class="cx('iconClass')" v-bind="getPTOptions('icon')" :label="icon" :size="size" :variant="variant" :disabled="disabled"></WecgIcon>
            </slot>
            <span :class="cx('label')" v-bind="ptm('label')">{{ label || '&nbsp;' }}</span>
            <Badge v-if="badge" :value="badge" :class="badgeClass" :severity="badgeSeverity" :unstyled="unstyled" v-bind="ptm('badge')"></Badge>
        </slot>
    </button>
</template>

<script>
import Badge from 'primevue/badge';
import Ripple from 'primevue/ripple';
import BaseButton from './BaseButton.vue';
import WecgIcon from 'primevue/wecgicon/';

export default {
    name: 'Button',
    extends: BaseButton,
    inheritAttrs: false,
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    disabled: this.disabled
                }
            });
        }
    },
    computed: {
        disabled() {
            return this.$attrs.disabled || this.$attrs.disabled === '' || this.loading;
        },
        defaultAriaLabel() {
            return this.label ? this.label + (this.badge ? ' ' + this.badge : '') : this.$attrs.ariaLabel;
        },
        hasIcon() {
            return this.icon || this.$slots.icon;
        }
    },
    components: {
        Badge,
        WecgIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>
