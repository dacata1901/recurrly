import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";

import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewindddddddd!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white">
        Go to onboard
      </Link>

      <Link href="/sign-in" className="mt-4 rounded bg-primary text-white">
        Go to Sign In
      </Link>
      <Link href="/sign-up" className="mt-4 rounded bg-primary text-white">
        Go to Sign Up
      </Link>

      <Link
        className="mt-4 rounded text-white"
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "spotify" },
        }}
      >
        Spotify Subscription
      </Link>
      <Link
        className="mt-4 rounded text-white"
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
