import React from 'react';

export interface SearchInterface {
	searchForm: { objectif: string, members: number, budget: number };
	setSearchForm: React.Dispatch<React.SetStateAction<SearchInterface['searchForm']>>
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
