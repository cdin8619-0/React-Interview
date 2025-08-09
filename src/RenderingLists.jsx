function RenderingLists() {
    const products = [
        {title: 'Apple', price: 1.2},
        {title: 'Banana', price: 0.5},
    ];

    const listItems = products.map((product, title) => {
        return (
            <li key={title}>
                {product.title} - ${product.price.toFixed(2)}
            </li>
        );
    });
}