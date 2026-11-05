import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SupcriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Supcription Details: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  );
};

export default SupcriptionDetails;
