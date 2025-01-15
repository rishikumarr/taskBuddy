interface IconProps {
    className: string;
    children: React.ReactNode;
}

const Icon = (props: IconProps) => {
    const { className, children } = props;

    return <div className={className}>{children}</div>;
};

export default Icon;