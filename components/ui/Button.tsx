import { Button as ButtonK, ButtonProps } from '@ui-kitten/components';
import { useNavigation } from 'expo-router';
import { GestureResponderEvent } from 'react-native';

interface IProps extends ButtonProps {
  href?: {
    pathname: string;
    params?: { [key: string]: any } | null;
  };
}

export default function Button({ href, onPress, ...props }: IProps) {
  const navigation = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (href) {
      // @ts-ignore supress the warning because we don't even care, we do this all the time
      navigation.navigate(href.pathname, href.params);
    }
  }

  return <ButtonK {...props} onPress={handleOnPress} />;
}
