declare type ListItem = {
    label: string;
    value?: string;
    onClick?: (value?: string | number | object | undefined) => void;
};

declare module "reusable_components/card" {
    type PropsCard = React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > & {
        bgcolor?: string;
        titleCard?: JSX.Element;
        body: JSX.Element;
    };

    const Component: React.FC<PropsCard>;

    export default Component;
}
