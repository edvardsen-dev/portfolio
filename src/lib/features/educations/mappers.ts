import type { EducationResponse } from './dtos';
import type { Education } from './types';

export function mapEducationsResponseToEducation(res: EducationResponse): Education {
	return {
		title: res.title,
		description: res.description,
		location: res.location,
		date: {
			start: new Date(res.start),
			end: res.end ? new Date(res.end) : null
		}
	};
}
