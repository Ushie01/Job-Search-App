import React, { useCallback, useState } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	ActivityIndicator,
	RefreshControl,
} from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import {
	Company,
	JobAbout,
	JobFooter,
	JobTabs,
	ScreenHeaderBtn,
	Specifics,
} from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hooks/useFetch';

const tabs = ['About', 'Qualificatio', 'Resposibilities'];

const JobDetails = () => {
	const params = useSearchParams();
	const router = useRouter();

	const { data, isLoading, error, refresh } = useFetch('job-details', {
		job_id: params.id,
	});

	const [refreshing, setRefreshing] = useState(false);
	const [activateTab, setActivaTab] = useState(tabs[0]);
	const onRefresh = () => {};

	const displayTabContent = () => {
		switch (activateTab) {
			case 'Qualification':
				return (
					<Specifics
						title='Qualification'
						points={data[0].job_highlights?.Qualification ?? ['N/A']}
					/>
				);
			case 'About':
				return (
					<JobAbout info={data[0].job_description ?? 'No data provided'} />
				);
			case 'Responsibilities':
				return (
					<Specifics
						title='Responsibilities'
						points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
					/>
				);
			default:
				break;
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lengthWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={icons.left}
							dimension='60%'
							handlePress={() => router.back()}
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={icons.share}
							dimension='60%'
						/>
					),
					headerTitle: ' ',
				}}>
				<>
					<ScrollView
						showsVerticalScrollIndicator={false}
						refreshControl={
							<RefreshControl
								refreshing={refreshing}
								onRefresh={onRefresh}
							/>
						}>
						{isLoading ? (
							<ActivityIndicator
								size='large'
								color={COLORS.primary}
							/>
						) : error ? (
							<Text>Something went wrong</Text>
						) : data.length === 0 ? (
							<Text>No data</Text>
						) : (
							<View
								style={{
									padding: SIZES.medium,
									paddingBottom: 100,
								}}>
								<Company
									companyLogo={data[0].employer_logo}
									jobTitle={data[0].job_title}
									companyName={data[0].employer_name}
									location={data[0].job_country}
								/>
								<JobTabs
									tabs={tabs}
									activateTab={activateTab}
									setActivaTab={setActivaTab}
								/>
								{displayTabContent()}
							</View>
						)}
					</ScrollView>
					<JobFooter url={data[0]?.job_google_link ?? 'https://careers.google.com/jobs/results'} />
				</>
			</Stack.Screen>
		</SafeAreaView>
	);
};

export default JobDetails;
