import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, ROUTES } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const Register = (props: any) => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            <Text style={styles.brandName}>Shop Kichu</Text>
          </View>

          <Text style={styles.loginContinueTxt}>Signup to continue</Text>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />

          <View style={styles.loginBtnWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.HOME)}
              activeOpacity={0.7}
              style={styles.loginBtn}
            >
              <Text style={styles.loginText}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                userId: "X0001",
              })
            }
          >
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Already have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          >
            <Text style={styles.signupBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  container: {
    padding: 15,
    width: "100%",
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  brandName: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 55,
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  linearGradient: {
    width: "100%",
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 55,
    backgroundColor: COLORS.primary,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
  forgotPassText: {
    color: COLORS.primary,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 15,
  },
  // footer
  footer: {
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    flexDirection: "row",
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: "bold",
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  // utils
  wFull: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
    height: 55,
    width: 55,
  },
});
