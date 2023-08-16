import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { FilterData } from '~/shared/types';

import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '~/store/store';
import { removeFilterData } from '~/slices/filterSlice';
import { Button } from '@mui/material';

const ListItem = styled('li')(({ theme }) => ({
	margin: theme.spacing(0.5),
}));

export default function ChipBar() {
	const filterData = useSelector((state: RootState) => state.filterData);
	const dispatch = useDispatch<AppDispatch>();

	const handleDelete = (chipToDelete: FilterData) => () => {
		dispatch(removeFilterData(chipToDelete));
	};

	return (
		<>
			<Paper
				className="m-0 mx-auto flex max-w-screen-xl flex-wrap items-center justify-center p-2 shadow-none"
				component="ul"
			>
				<div className="flex list-none flex-wrap items-center justify-center">
					{filterData.map((data, index) => {
						return (
							<ListItem key={index}>
								<Chip label={data.label} onDelete={handleDelete(data)} />
							</ListItem>
						);
					})}
				</div>
			</Paper>
			<div className="mx-auto flex max-w-screen-xl justify-end">
				{filterData.length ? (
					<Button variant="outlined" size="small" className=" self-end">
						Clear all
					</Button>
				) : null}
			</div>
		</>
	);
}
