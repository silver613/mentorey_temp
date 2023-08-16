import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = (props: { data: HeroProps }) => {
	const { title, subtitle, callToAction, callToAction2, image } = props.data;

	return (
		<section id="heroOne">
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<div className="py-12 md:py-20">
					<div className="mx-auto max-w-4xl text-center">
						{title && (
							<h1 className="leading-tighter mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
								Join the Large platform for connecting coaches and Trainers for different purposes
							</h1>
						)}
						<div className="mx-auto max-w-3xl">
							{subtitle && <p className="mb-6 text-xl font-normal text-gray-600">{subtitle}</p>}
							<div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
								{callToAction && <CTA data={callToAction} />}
								{callToAction2 && <CTA data={callToAction2} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
