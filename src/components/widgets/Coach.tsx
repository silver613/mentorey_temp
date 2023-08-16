import React from 'react';
import { FeaturesProps } from '~/shared/types';
import { Button } from '@mui/material';
import HeaderWidget from '../common/HeaderWidget';
import CoachCard from '../common/CoachCard';

const Coach = ({ header, items }: FeaturesProps) => (
	<section className="scroll-mt-16" id="coach">
		<div className="mx-auto max-w-screen-xl px-4 pt-14 pb-6 lg:px-8 lg:py-20 lg:pb-6">
			{header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}
			<div className="mb-0 grid items-start gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
			</div>
			<Button
				variant="outlined"
				size="small"
				className="mx-auto mt-10 block w-fit hover:bg-primary-600 hover:text-white"
			>
				Explore more coaches
			</Button>
		</div>
	</section>
);

export default Coach;
