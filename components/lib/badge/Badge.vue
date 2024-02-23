<template>
    <span :class="cx('root')" :disabled="disabled" v-bind="getPTOptions('root')" :data-pc-variant="variant">
        <slot v-if="icon" name="icon" :class="[cx('icon')]">
            <WecgIcon :icon="icon" :class="cx('iconClass')" v-bind="getPTOptions('icon')" :label="icon" :size="size" :variant="variant" :disabled="disabled"></WecgIcon>
        </slot>
        <span :class="cx('label')" v-bind="ptm('label')">{{ label || '&nbsp;' }}</span>
    </span>
</template>

<script>
import BaseBadge from './BaseBadge.vue';
import WecgIcon from 'primevue/wecgicon/';

export default {
    name: 'Badge',
    extends: BaseBadge,
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
            return this.$attrs.disabled || this.$attrs.disabled === '';
        },
        hasIcon() {
            return this.icon || this.$slots.icon;
        }
    },
    components: WecgIcon
};
</script>
