# React Data Jam

React Data Jam is a versatile data table component designed for displaying tabular data in React applications. It provides a rich set of features including sorting, filtering, pagination, row selection, and customizable column rendering.

### Features:

- Sorting: Easily sort columns in ascending or descending order.
- Filtering: Filter rows based on custom criteria to focus on relevant data.
- Pagination: Navigate through large datasets with built-in pagination controls.
- Row Selection: Select individual rows or multiple rows for further actions.
- Customizable Column Rendering: Customize the appearance and behavior of columns to suit your needs.

### Installation

To install React Data Jam in your React project, you can use npm or yarn:

`npm install react-data-jam`

or

`yarn add react-data-jam`

### Usage

```
import React from 'react';
import DataJam from 'react-data-jam';

const MyComponent = () => {
  // Your tabular data array
  const data = [/* Your data here */];

  return (
    <div>
      <h1>My Data Jam</h1>
      <DataJam data={data} />
    </div>
  );
};

export default MyComponent;
```

### Props (WIP)

Prop Type Description:

`data` : Tabular data array to be displayed
`[options]`: Customization options (optional)

Examples

For more usage examples and customization options, refer to the examples directory.

###License

This project is licensed under the MIT License - see the LICENSE file for details.
