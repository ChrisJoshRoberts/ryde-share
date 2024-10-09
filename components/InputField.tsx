import { InputFieldProps } from "@/types/type";
import {
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const InputField = ({ label, labelStyle }: InputFieldProps) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback>
        <View className="my-2 w-full">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
