// App.jsx
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

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
        borderColor: 'red'
      }}
    />
  ),
};
