import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
// import { PageProps } from '@/types'; // Adjust if you have a custom type

type Product = {
    id: number;
    name: string;
    price: number;
    image: string | null;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

export default function Index() {
    const { products } = usePage<{ products: Product[] }>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="ml-auto border-r-4">
                    <Link className="bg-indigo-500 p-2 text-white rounded" as="button" href={route('products.create')}>
                        Add Products
                    </Link>
                </div>

                <table className="w-full table-auto text-center border mt-4">
                    <thead>
                        <tr >
                            <th className="border p-2">ID</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="border p-2">{product.id}</td>
                                <td className="border p-2">{product.name}</td>
                                <td className="border p-2">${product.price}</td>
                                <td className="border p-2">
                                    {product.image ? (
                                        <img
                                            src={`/storage/${product.image}`}
                                            alt={product.name}
                                            className="h-12 w-12 object-cover mx-auto"
                                        />
                                    ) : (
                                        'N/A'
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
