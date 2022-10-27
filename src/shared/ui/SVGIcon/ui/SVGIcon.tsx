import React, {FC} from "react";

interface IconProps {
    name: string,
    color?: string,
    size: number,
}

const rootPath = "/src/icons"
const Icon: FC<IconProps> = ({name, color, size}) => (
    <svg
        className={`icon icon-${name}`}
        fill={color}
        width={size}
        height={size}
    >
        <use xlinkHref={`${rootPath}/${name}.svg`}/>
    </svg>
);


export default Icon;
