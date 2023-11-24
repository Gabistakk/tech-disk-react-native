// App.jsx
import Toast, { BaseToast, ErrorToast, SuccessToast } from 'react-native-toast-message';

export const toastConfig = {
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 35
      }}
      text2Style={{
        fontSize: 20
      }}

      style={{
        width: 350,
        height: 150,
        borderColor: 'red',
        zIndex: 100,
        elevation: 10
      }}
    />
  ),
  success: (props) => (
    <SuccessToast
      {...props}
      text1Style={{
        fontSize: 35
      }}
      text2Style={{
        fontSize: 15
      }}

      style={{
        width: 370,
        height: 150,
        borderColor: 'green',
        zIndex: 100,
        elevation: 10
      }}
    />
  ),
};
