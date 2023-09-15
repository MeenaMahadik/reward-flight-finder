// Define constant like app name or any other constant related to application
export interface AppConfigData {
	name: string;
	sortName: string;
	logo: string;
	minLogo: string;
	logoLink: string;
	webSiteUrl: string;
}

export const AppConfig: AppConfigData = {
	name: 'Boiler plate',
	sortName: 'Boiler',
	logo: 'assets/img/brand/logo.svg',
	minLogo: 'assets/img/brand/sygnet.svg',
	logoLink: '/home',
	webSiteUrl: 'https://systango.com',
};
