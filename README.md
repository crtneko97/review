# My Next Project


## Project Overview



The project is organized with a clear separation of assets, components, and application logic. Below is an overview of the main folders and files:

```plaintext
├── public
│   ├── icons/          # Stores icon files used across the project
│   ├── images/         # Contains image assets
│   └── json/           # JSON files, if needed for static data
│
├── src
│   ├── app
│   │   ├── page.tsx            # Main page file for the app
│   │   ├── cart/
│   │   │   └── page.tsx        # Cart page file
│   │   └── layout.tsx          # Root layout for the application
│   │
│   ├── components
        ├── ratings/          # Contains components related to rating features
        ├── priceTag/         # Contains components for displaying price tags
        ├── buttons/          # Grouped folder for button components
        │   ├── addButton/    # Button for adding items
        │   ├── funcButton/   # Functional buttons with various uses
        │   └── cartButton/   # Button specifically for cart-related actions
        ├── productCard/      # Component for displaying individual product details
        ├── navbar/           # Contains navigation bar components
        └── productlist/      # Components to list and organize multiple products
    └── services/
    └── products/
        └── productService.ts  # Handles product-related data fetching
│   │
│   └── styles
│       ├── variables.scss      # Sass variables used across the project
│       └── globals.scss        # Global styles for the application
    src/
    └── types/
        └── product.d.ts  # Defines the Product interface



```plaintext