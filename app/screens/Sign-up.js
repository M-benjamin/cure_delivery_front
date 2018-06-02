// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet
// } from "react-native";
// import { StackNavigator } from "react-navigation";

// export class SignUp extends React.Component {
//   static navigationOptions = () => {
//     return {
//       headerStyle: { backgroundColor: "#3c81f6" },
//       headerLeft: (
//         <View>
//           <TouchableOpacity />
//         </View>
//       )
//     };
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: " your email",
//       password: "",
//       address: "your address",
//       code_zip: "your code zip"
//     };
//   }
//   render() {
//     return (
//       <View>
//         <Text>E-mail</Text>
//         <TextInput
//           style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
//           onChangeText={email => this.setState({ email })}
//           value={this.state.email}
//         />
//         <Text>Password</Text>
//         <TextInput
//           style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
//           onChangeText={password => this.setState({ password })}
//           value={this.state.password}
//           secureTextEntry={true}
//         />
//         <Text>Address</Text>
//         <TextInput
//           style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
//           onChangeText={address => this.setState({ address })}
//           value={this.state.address}
//         />
//         <Text>Code zip</Text>
//         <TextInput
//           style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
//           onChangeText={code_zip => this.setState({ code_zip })}
//           value={this.state.code_zip}
//         />
//         <TouchableOpacity style={styles.ButtonStyle}>
//           <Text> Login </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   // MainContainer: {
//   //   flex: 1,
//   //   // justifyContent: 'center',
//   //   // alignItems: 'center',
//   //   margin: 10
//   // },

//   TextStyle: {
//     color: "#fff",
//     marginBottom: 4,
//     marginRight: 20
//   },
//   ButtonStyle: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#808080",
//     // borderWidth: .5,
//     borderColor: "#fff",
//     height: 40,
//     borderRadius: 5,
//     margin: 5
//   }
// });