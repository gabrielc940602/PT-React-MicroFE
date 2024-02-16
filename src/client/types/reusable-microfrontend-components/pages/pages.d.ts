declare module "payment_portal/index" {
    import { FC } from "react";

    // Define tus props aquí
    type ContentProps = {
        prop1: string;
        prop2: number;
        // Agrega más props según sea necesario
    };

    // Declara el componente con los props
    export const Content: FC<ContentProps>;
}
