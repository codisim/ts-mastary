type BaseProps = {
    id: string;
    className?: string;
}

type ButtonProps = BaseProps & {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

type LinkProps = BaseProps & {
    value: string;
    onClick: (value: string) => void;
}