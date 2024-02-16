declare module "reusable_components/input" {
    type InputVariants = "floatinglabel" | "sidelabel" | "whitebgwithicon";
    type Labelside = "left" | "right";

    export type PropsInputs = {
        label: string;
        value?: string;
        variant?: InputVariants;
        /** Label side for sidelabel variant */
        labelside?: Labelside;
        /** Icon for a input side (for floatinglabel variant)*/
        iconside?: JSX.Element;
        /** Icon side alignment (for floatinglabel variant) */
        iconsidealign?: "left" | "right";
        btnicon?: string;
        texterror?: string;
        /** For button in variant:  whitebgwithicon */
        actionicon?: () => void;
        noinputcircle?: boolean;
        validationshapes?: boolean;
        parentinputstyles?: CSSProperties;
    } & React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;

    const Component: React.FC<PropsInputs>;

    export default Component;
}

declare module "reusable_components/button" {
    // Define tus props aquí
    type OriginalProps = React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >;

    type PropsButton = {
        size?: "small" | "medium" | "large" | "fullwidth";
        colorVariant?: "normalstyle" | "darkblue" | "whitebg";
    } & OriginalProps;

    const Component: React.FC<PropsButton>;

    export default Component;
}

declare module "reusable_components/select" {
    type PropsSelectType = React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > & {
        label: string;
        disabled?: boolean;
        options: ListItem[];
        value?: string;
        onChange?: (value: string) => void;
        noinputcircle?: boolean;
        texterror?: string;
    };

    const Component: React.FC<PropsSelectType>;

    export default Component;
}

declare module "reusable_components/input-checkbox" {
    type PropsInputCheckbox = React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;

    const Component: React.FC<PropsInputCheckbox>;

    export default Component;
}

declare module "reusable_components/input-radio" {
    type PropsInputRadio = React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > & { label: string };

    const Component: React.FC<PropsInputRadio>;

    export default Component;
}
