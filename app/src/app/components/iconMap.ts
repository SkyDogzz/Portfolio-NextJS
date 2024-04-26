import * as FaIcons from "react-icons/fa";

interface IconMap {
    [key: string]: any;
}

const iconMap: IconMap = {};

for (const iconKey in FaIcons) {
    const iconName = iconKey.replace("Fa", "");
    iconMap[iconName] = FaIcons[iconKey as keyof typeof FaIcons];
}

export default iconMap;
