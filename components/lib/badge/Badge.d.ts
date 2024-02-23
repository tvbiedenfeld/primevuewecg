/**
 *
 * Badge represents people using icons, labels and images.
 *
 * [Live Demo](https://www.primevue.org/badge)
 *
 * @module badge
 *
 */
import { VNode } from 'vue';
import { ComponentHooks } from '../basecomponent';
import { PassThroughOptions } from '../passthrough';
import { ClassComponent, GlobalComponentConstructor, PassThrough } from '../ts-helpers';

export declare type BadgePassThroughOptionType<T = any> = BadgePassThroughAttributes | ((options: BadgePassThroughMethodOptions<T>) => BadgePassThroughAttributes | string) | string | null | undefined;

/**
 * Custom passthrough(pt) option method.
 */
export interface BadgePassThroughMethodOptions<T> {
    /**
     * Defines instance.
     */
    instance: any;
    /**
     * Defines valid properties.
     */
    props: BadgeProps;
    /**
     * Defines current options.
     */
    context: BadgeContext;
    /**
     * Defines passthrough(pt) options in global config.
     */
    global: object | undefined;
    /**
     * Defines parent instance.
     */
    parent: T;
}

/**
 * Custom passthrough attributes for each DOM elements
 */
export interface BadgePassThroughAttributes {
    [key: string]: any;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link BadgeProps.pt}
 */
export interface BadgePassThroughOptions<T = any> {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: BadgePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: BadgePassThroughOptionType<T>;
    /**
     * Used to pass attributes to the label's DOM element.
     */
    label?: BadgePassThroughOptionType<T>;
    /**
     * Used to manage all lifecycle hooks.
     * @see {@link BaseComponent.ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Defines valid properties in Badge component.
 */
export interface BadgeProps {
    /**
     * Value to display inside the badge.
     */
    value?: string | number;
    /**
     * Name of the icon.
     */
    icon?: string | undefined;
    /**
     * Position of the icon.
     * @defaultValue left
     */
    iconPos?: 'left' | 'right' | 'top' | 'bottom' | undefined;
    /**
     * Style class of the icon.
     */
    iconClass?: string | undefined;
    /**
     * Defines the variant of the badge.
     * @defaultValue base
     */
    variant?: 'base' | 'danger' | 'warning' | 'success' | 'help' | 'info' | string | undefined;
    /**
     * Defines the size of the badge.
     */
    size?: 'small' | 'medium' | 'large' | string | undefined;
    /**
     * Used to pass attributes to DOM elements inside the component.
     * @type {BadgePassThroughOptions}
     */
    pt?: PassThrough<BadgePassThroughOptions>;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}
/**
 * Defines current options in Badge component.
 */
export interface BadgeContext {
    /**
     * Current disabled state of the element as a boolean.
     * @defaultValue false
     */
    disabled: boolean;
}

/**
 * Defines valid slots in Badge component.
 */
export interface BadgeSlots {
    /**
     * Content can easily be customized with the default slot instead of using the built-in display.
     */
    default(): VNode[];
}

/**
 * Defines valid emits in Badge component.
 */
export interface BadgeEmits {}

/**
 * **PrimeVue - Badge**
 *
 * _Badge represents people using icons, labels and images._
 *
 * [Live Demo](https://www.primevue.org/badge/)
 * --- ---
 * ![PrimeVue](https://primefaces.org/cdn/primevue/images/logo-100.png)
 *
 * @group Component
 */
declare class Badge extends ClassComponent<BadgeProps, BadgeSlots, BadgeEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Badge: GlobalComponentConstructor<Badge>;
    }
}

export default Badge;
