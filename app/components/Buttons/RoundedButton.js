import styled from "styled-components/native";

// 스타일드 버튼 컴포넌트
const Button = styled.TouchableOpacity`
  padding: 4px;
  margin: ${({ margin }) => margin || "0"};
  width: ${({ width }) => width || "80px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#007bff"};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

// 스타일드 텍스트 컴포넌트
const ButtonText = styled.Text`
  color: ${({ textColor }) => textColor || "#ffffff"};
  font-size: 16px;
`;

// 버튼을 사용하는 컴포넌트
const RoundedButton = ({
  onPress,
  text,
  backgroundColor,
  textColor,
  width,
  margin,
}) => {
  return (
    <Button
      onPress={onPress}
      backgroundColor={backgroundColor}
      width={width}
      margin={margin}
    >
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </Button>
  );
};

export default RoundedButton;
