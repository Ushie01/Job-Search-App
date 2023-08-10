import React from 'react';
import styles from './footer.style';
import { icons } from '../../../constants';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './footer.style';

const Footer = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity>
				<Image
					source={icons.heartOutline}
					resizeMode='contain'
					style={styles.likeBtnImage}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.applyBtn}
				onPress={() => Linking.openURL(url)}>
				<Text style={styles.applyBtn}>Apply for job</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Footer;
