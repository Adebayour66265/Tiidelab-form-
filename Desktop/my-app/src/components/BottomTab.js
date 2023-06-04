import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors';
import Icons, { icons } from './Icons';

const tabIcons = [
  { ico1: "home", ico2: "home", type: icons.Feather, routeName: 'Feeds' },
  // { ico1: 'grid', ico2: 'grid', type: icons.Feather, routeName: '' },
  { ico1: 'appstore-o', ico2: 'appstore-o', type: icons.AntDesign, routeName: '' },
  { ico1: 'eye', ico2: 'eye', type: icons.Feather, routeName: '' },
  { ico1: 'eye', ico2: 'eye', type: icons.Feather, routeName: '' },
  { ico1: 'message1', ico2: 'message1', type: icons.AntDesign, routeName: '' },
  { ico1: 'shopping-cart', ico2: 'shopping-cart', type: icons.FontAwesome5, routeName: '' },
  { ico1: 'user-circle', ico2: 'user-circle', type: icons.FontAwesome, routeName: '' },

]

const BottomTab = ({ navigation }) => {
  const [focused, setFocused] = useState('home');
  const navigate = (routeName) =>
    routeName !== '' ? navigation.navigate(routeName) : null;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setFocused('home');
    })
    return () => unsubscribe;
  }, [navigation])
  return (
    <>
      {tabIcons.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setFocused(item.ico1);
            navigate(item.routeName)
          }}
          style={[index === 2 && styles.plusIconStyle]}>
          <Icons icon={item.type} name={focused === item.ico1 ? item.ico1 : item.ico2}
            color={index === 2 && Colors.white}
            size={index === 2 && 34}
          />
        </TouchableOpacity>
      ))}
    </>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  plusIconStyle: {
    height: 60,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
    display: 'none'
  },


})
