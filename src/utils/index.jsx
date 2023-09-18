import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
	baseURL: productionUrl,
});
export const formatPrice = (price) => {
	const inrAmount = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "INR",
	}).format((price / 83).toFixed(2));
	return inrAmount;
};

export const generateAmountOptions = (number) => {
	return Array.from({ length: number }, (_, index) => {
		const amount = index + 1;

		return (
			<option key={amount} value={amount}>
				{amount}
			</option>
		);
	});
};
