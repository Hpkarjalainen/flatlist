import React from "react";
import { Text } from "react-native";

export default function Row({person}) {
    return(
        <Text>
            {person.firstname} , {person.lastname}
        </Text>
    )
}