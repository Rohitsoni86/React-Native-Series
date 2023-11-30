import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import { s, s as tw } from "react-native-wind";
import * as Yup from 'yup';
import { Formik } from 'formik';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Min 4 length is required !")
    .max(16, "Supports only upto 16 characters !")
    .required("This is required Field !!")
})


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode);
  const [password, setPassword] = useState("")
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)

  const [uppercase, setUpperCase] = useState(false)
  const [lowercase, setLowerCase] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [numbers, setNumbers] = useState(false)

  const [passwordL, setPasswordL] = useState(0)


  const generatePasswordString = (Passwordlength: number) => {

    console.log("Yes", Passwordlength);
    let charactersList = "";

    let UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let LOWERCASE = "abcdefghijklmnopqrstuvwxyz"
    let NUMBERS = "0123456789"
    let SYMBOLS = "!@#$%^&*()_+~"

    if (uppercase || lowercase || numbers || symbol) {
      if (uppercase) {
        console.log("U");
        charactersList += UPPERCASE
      }
      if (lowercase) {
        console.log("L");
        charactersList += LOWERCASE
      }
      if (numbers) {
        console.log("N");
        charactersList += NUMBERS
      }
      if (symbol) {
        console.log("S");
        charactersList += SYMBOLS
      }
    }
    else {
      console.log("No One is Selected !!");
      charactersList = "RohitSoni"
    }





    let passwordResult = createPassword(charactersList, Passwordlength)
    console.log(passwordResult);
    setPassword(passwordResult)
    setIsPasswordGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ""

    for (let i = 0; i < passwordLength; i++) {
      const characterIndexToInclude = Math.round(Math.random() * characters.length)

      result += characters.charAt(characterIndexToInclude)

    }
    return result
  }

  const resetFields = () => {
    setPassword("")
    setIsPasswordGenerated(false)
    setLowerCase(false)
    setUpperCase(false)
    setSymbol(false)
    setNumbers(false)
  }



  return (
    <SafeAreaView style={tw` w-full h-full p-4  ${isDarkMode ? ("bg-gray-800") : ("")}`}>
      <ScrollView style={[tw`flex-1 `]}  >
        <View><Text style={tw`text-orange-400 text-center p-4 mt-5 text-2xl font-bold leading-6`}>Password Generator</Text></View>
        {/* Input Field Contaiener */}

        <Formik

          initialValues={{ passwordLength: "" }}

          validationSchema={PasswordSchema}

          onSubmit={values => {
            console.log(values);
            generatePasswordString(+values.passwordLength)
          }}

        >

          {({
            values,
            errors,
            isValid,
            touched,
            handleChange,
            handleSubmit,
            handleReset,

          }) => (

            <>
              <View style={tw`flex-1 flex-row justify-between items-center mt-5`}>
                <View style={tw`flex-1 flex-col  w-20 text-center`}>
                  <Text
                    style={[tw`${isDarkMode ? ("text-white") : ("text-black")} text-md pl-4  font-semibold `, styles.textHeadCSS]}
                  >Enter length of password : </Text></View>
                <View>
                  <TextInput
                    style={[tw` flex-1 flex-col  w-20 text-center rounded-sm mx-2 ${isDarkMode ? (" bg-orange-500 text-white") : (" bg-white text-black")}`, styles.buttonShadow]}

                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="Eg: 8"
                    keyboardType="numeric"
                  />

                </View>
              </View>

              <View
                style={tw` mt-2 p-2`}

              >
                {touched.passwordLength && errors.passwordLength && (
                  <Text
                    style={[tw`text-red-500 text-xs pl-4 `, styles.textHeadCSS]}

                  >{errors.passwordLength}</Text>

                )}
              </View>

              {/* OPTIONS */}
              <View
                style={tw`flex-1 2 `}
              >
                <View
                  style={tw`flex-1 flex-row justify-between p-4 mt-4`}
                >
                  {/* UPPERCASE */}
                  <View>
                    <Text
                      style={[tw`${isDarkMode ? ("text-white") : ("text-black")} `, styles.textCSS]}
                    >Include Uppercase Latters :</Text></View>
                  <View>
                    <BouncyCheckbox
                      size={30}
                      disableBuiltInState
                      isChecked={uppercase}
                      fillColor="#06283D"
                      unfillColor="#FFFFFF"
                      text=""
                      iconStyle={{}}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={{ fontFamily: "JosefinSans-Regular" }}
                      onPress={() => { setUpperCase(!uppercase) }}
                    />
                  </View>
                  {/* UPPERCASE */}
                </View>
                <View
                  style={tw`flex-1  flex-row justify-between p-4`}
                >
                  {/* LOWERCASE */}
                  <View><Text
                    style={[tw`${isDarkMode ? ("text-white") : ("text-black")} `, styles.textCSS]}
                  >Include Lowercase Latters :</Text></View>
                  <View>
                    <BouncyCheckbox
                      size={30}
                      disableBuiltInState
                      isChecked={lowercase}
                      fillColor="#231955"
                      unfillColor="#FFFFFF"
                      text=""
                      iconStyle={{ borderColor: "red" }}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={{ fontFamily: "JosefinSans-Regular" }}
                      onPress={() => { setLowerCase(!lowercase) }}
                    />
                  </View>
                  {/* LOWERCASE */}
                </View>
                <View
                  style={tw`flex-1  flex-row justify-between p-4`}
                >
                  {/* Numbers */}
                  <View><Text
                    style={[tw`${isDarkMode ? ("text-white") : ("text-black")} `, styles.textCSS]}
                  >Include Numbers : </Text></View>
                  <View>
                    <BouncyCheckbox
                      size={30}
                      disableBuiltInState
                      isChecked={numbers}
                      fillColor="#1F4690"
                      unfillColor="#FFFFFF"
                      text=""
                      iconStyle={{ borderColor: "red" }}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={{ fontFamily: "JosefinSans-Regular" }}
                      onPress={() => { setNumbers(!numbers) }}
                    />
                  </View>
                  {/* Numbers */}
                </View>
                <View
                  style={tw`flex-1  flex-row justify-between p-4`}
                >
                  {/* Symbols */}
                  <View><Text
                    style={[tw`${isDarkMode ? ("text-white") : ("text-black")} `, styles.textCSS]}
                  >Include Symbols : </Text></View>
                  <View>
                    <BouncyCheckbox
                      size={30}
                      disableBuiltInState
                      isChecked={symbol}
                      fillColor="#1363DF"
                      unfillColor="#FFFFFF"
                      text=""
                      iconStyle={{ borderColor: "red" }}
                      innerIconStyle={{ borderWidth: 2 }}
                      textStyle={{ fontFamily: "JosefinSans-Regular" }}
                      onPress={() => { setSymbol(!symbol) }}
                    />
                  </View>
                  {/* Symbols */}
                </View>

              </View>
              {/* OPTIONS Container */}

              {/* Buttons Container */}
              <View style={tw`flex-1 flex-row justify-center items-center mt-2`}>
                <TouchableOpacity
                  onPress={() => {
                    handleReset();
                    resetFields()
                  }}
                  style={[styles.touchStyleCSS1, styles.boxWithShadow2]}>
                  <Text style={styles.buttonText}>Rest</Text>
                </TouchableOpacity>
                <TouchableOpacity

                  onPress={(e?) => {
                    handleSubmit()
                    console.log("Pressed");
                  }
                  }
                  style={[styles.touchStyleCSS2, styles.boxWithShadow2]}>
                  <Text style={styles.buttonText}>Generate</Text>
                </TouchableOpacity>
              </View>
              {/* Buttons Container */}
            </>

          )}

        </Formik>





        {/* Result Container */}


        {isPasswordGenerated ? (<View style={tw`flex-1 flex-col justify-center items-center mt-5`} >
          <Text
            style={[tw`${isDarkMode ? ("text-white") : ("text-black")} `, styles.textCSS]}

          >Long Press To Copy</Text>
          <View  >
            <Text
              selectable={true}
              style={[tw`${isDarkMode ? ("bg-white text-black") : (" bg-blue-400 text-white")} text-lg px-8 py-2 font-bold rounded-lg mt-5`]}
            /// style={tw`bg-white text-black px-10 py-5 font-bold rounded-lg mt-5`} 

            >{password}</Text>
          </View>
        </View>) : (null)}

        {/* Result Container */}





      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textCSS: {
    // color: "#E8AA42",
    //color: "#6998AB",
    //  color: "#ADCBD7",
    //  color: "#47B5FF",
    lineHeight: 24,
    letterSpacing: 1,
  },
  textHeadCSS: {
    // color: "#E8AA42",
    //color: "#6998AB",
    //  color: "#ADCBD7",
    // color: "#47B5FF",
    lineHeight: 24,
    letterSpacing: 1,
  },

  touchStyleCSS1: {

    paddingVertical: 8,
    paddingHorizontal: 24,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "#FF731D"

  },
  touchStyleCSS2: {

    paddingVertical: 8,
    paddingHorizontal: 24,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "#5F9DF7"

  },
  buttonText: {
    fontSize: 18,
    color: "#FFF7E9",
    fontWeight: "500",
    textAlign: "center"
  },
  boxWithShadow2: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  }
});

export default App;
