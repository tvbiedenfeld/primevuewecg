<template>
    <span :class="cx('root')" :disabled="disabled" v-bind="getPTOptions('root')" :data-pc-variant="variant">
        <slot v-if="icon" name="icon" :class="[cx('icon')]">
            <span :class="[cx('icon'), icon, iconClass]" v-bind="ptm('icon')"></span>
        </slot>
        <span :class="cx('label')" v-bind="ptm('label')">{{ label || '&nbsp;' }}</span>
    </span>
</template>

<script>
import BaseBadge from './BaseBadge.vue';

export default {
    name: 'Badge',
    extends: BaseBadge,
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
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
    }
};
</script>
