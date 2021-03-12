import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react";
import {
    FilterSummary,
    AssayFilterIndicatorList,
    FilterIndicatorList,
    Flag,
    FilterDeletor,
    FilterSummaryProps,
} from "./FilterSummary";
import { SelectedFilters, SelectedFilter } from "../types/Filters";
import { List, Record, fromJS, Map } from "immutable";

const FilterSummaryTemplate: Story<FilterSummaryProps> = (args) => <FilterSummary {...args} />;
export const FilterSummaryBasic = FilterSummaryTemplate.bind({});
FilterSummaryBasic.args = {};
