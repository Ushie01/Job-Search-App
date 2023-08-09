import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './popularjobcard.style';
import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
	console.log(item.job_id);
	return (
		<TouchableOpacity
			style={styles.container(selectedJob, item)}
			onPress={() => handleCardPress(item.job_id)}>
			<TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
				<Image
					source={{
						url: checkImageURL(item.employer_logo)
							? item.employer_logo
							: 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg',
					}}
					resizeMode='contain'
					style={styles.logoImage}
				/>
			</TouchableOpacity>

			<Text
				style={styles.companyName}
				numberOfLines={1}>
				{item.employer_logo}
			</Text>

			<View style={styles.infoContainer}>
				<Text
					style={styles.jobName(selectedJob, item)}
					numberOfLines={1}>
					{item.job_title}
				</Text>
				<Text style={styles.location}>{item.job_country}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PopularJobCard;
