import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
const ProductsGrid = () => {
	const { products } = useLoaderData();

	return (
		<div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
			{products.map((product) => {
				const { title, price, image } = product.attributes;
				const RupisPrices = formatPrice(price);
				return (
					<Link
						key={product.id}
						to={`/products/${product.id}`}
						className='card w-full  shadow-md hover:shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-300 '>
						<figure className='px-4 pt-4'>
							<img
								src={image}
								alt={title}
								className='rounded-xl h-64 md:h-48 w-full object-cover'
							/>
						</figure>
						<div className='card-body items-center text-center'>
							<h2 className='card-title capitalize tracking-wider'>{title}</h2>
							<span className='text-secondary'>{RupisPrices}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};
export default ProductsGrid;
