import { ReactHTML, ReactNode } from "react";
import { Text } from "../../../style/styles";

export const AccentText = (props: any) => {
    return (
        <Text
            className="font-mono text-base italic text-orange-500"
            style={{ color: "red" }}
        >
            {props.children}
        </Text>
    );
};
