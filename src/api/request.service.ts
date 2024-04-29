export const publicRequest = async () => {
	const { VITE_API_URL: url } = import.meta.env;
	const response = await fetch(`${url}/public`);
	const data = await response.json();
	console.log(data);
};

export const protectedRequest = async (getToken: any) => {
	const { VITE_API_URL: url } = import.meta.env;
	const token = await getToken();
	console.log({ token });
	const response = await fetch(`${url}/protected`, {
	});
	const data = await response.json();
	console.log(data);
};