<script>
import BaseComponent from 'primevue/basecomponent';
import ToastStyle from 'primevue/toast/style';

export default {
    name: 'BaseToast',
    extends: BaseComponent,
    props: {
        group: {
            type: String,
            default: null
        },
        position: {
            type: String,
            default: 'top-right'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        breakpoints: {
            type: Object,
            default: null
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        icon: {
            type: String,
            default: undefined
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
    style: ToastStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
