import styled from "styled-components/native";

import Navigation from "./navigations";

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  margin: 0;
  padding: 0;
`;

export default function App() {
  return (
    <SafeAreaView>
      <Navigation />
    </SafeAreaView>
  );
}
