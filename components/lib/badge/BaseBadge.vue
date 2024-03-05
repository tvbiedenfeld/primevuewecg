<script>
import BadgeStyle from 'primevue/badge/style';
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'BaseBadge',
    extends: BaseComponent,
    props: {
        label: {
            type: [String, Number],
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        iconClass: {
            type: String,
            default: null
        },
        severity: {
            type: String,
            default: 'primary'
        },
        variant: {
            type: String,
            default: 'base'
        },
        size: {
            type: String,
            default: null
        }
    },
    style: BadgeStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
