import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CenteredText = styled.Text`
  font-size: 20px;
  color: #333;
`;

const SettingsScreen = () => {
  return (
    <Container>
      <CenteredText>SettingsScreen..</CenteredText>
    </Container>
  );
};

export default SettingsScreen;
