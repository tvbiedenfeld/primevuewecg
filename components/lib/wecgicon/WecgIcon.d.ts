import { ClassComponent, GlobalComponentConstructor } from '../ts-helpers';
export interface WecgIconProps {
    label?: string | undefined;
    spin?: boolean;
    spritesheet: string;
    variant?: string;
    size?: string;
    icon: string;
}

export interface IconSlots {}

export interface IconEmits {}

export declare class WecgIcon extends ClassComponent<WecgIconProps, IconSlots, IconEmits> {}

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        WecgIcon: GlobalComponentConstructor<WecgIcon>;
    }
}

export default WecgIcon;
