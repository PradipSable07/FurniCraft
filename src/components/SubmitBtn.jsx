import { useNavigation } from "react-router-dom";
const SubmitBtn = ({ text }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<button
			type='submit'
			className='btn btn-neutral btn-block'
			disabled={isSubmitting}>
			{isSubmitting ? (
				<>
					<span className='loading loading-ring loading-lg'></span>
					sending...
				</>
			) : (
				text || "submit"
			)}
		</button>
	);
};
export default SubmitBtn;
