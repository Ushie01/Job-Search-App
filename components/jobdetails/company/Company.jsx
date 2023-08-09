import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './company.style';
import { icon } from '../../../constants';
import { checkImageURL } from '../../../utils';

const Company = ({companyLogo, jobTitle, companyName, location}) => {
  return (
		<View className={styles.container}>
			<View>
				<Image
					source={{
						url: checkImageURL()
							? companyLogo
							: 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqz05H.jpg',
          }}
          style={styles.logoImage}
				/>
      </View>
       
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{ jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <View style={styles.locationBox}>
          <Image
            source={icon.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
		</View>
	);
}

export default Company