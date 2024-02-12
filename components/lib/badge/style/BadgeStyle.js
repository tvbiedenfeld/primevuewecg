import BaseStyle from 'primevue/base/style';
import { ObjectUtils } from 'primevue/utils';

const classes = {
    root: ({ props, instance }) => [
        'p-badge p-component',
        {
            'p-badge-no-gutter': ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
            'p-badge-dot': ObjectUtils.isEmpty(props.value) && !instance.$slots.default,
            'p-badge-lg': props.size === 'medium',
            'p-badge-xl': props.size === 'large',
            'p-badge-info': props.variant === 'info',
            'p-badge-success': props.variant === 'success',
            'p-badge-warning': props.variant === 'warning',
            'p-badge-danger': props.variant === 'danger'
        }
    ]
};

export default BaseStyle.extend({
    name: 'badge',
    classes
});
