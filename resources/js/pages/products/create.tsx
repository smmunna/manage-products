import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Products',
        href: route('products.create'),
    },
];

export default function Index() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        price: '',
        image: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route('products.store'), {
            forceFormData: true,
            onSuccess: () => {
                // console.log('Success');
                alert('Product stored successfully')
                reset(); // reset form on success
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Add Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                tabIndex={1}
                                placeholder="Enter your product name"
                            />
                            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}

                            <Input
                                id="price"
                                name="price"
                                type="text"
                                value={data.price}
                                onChange={(e) => setData('price', e.target.value)}
                                tabIndex={2}
                                placeholder="Enter your product price"
                            />
                            {errors.price && <div className="text-red-500 text-sm">{errors.price}</div>}

                            <Input
                                id="image"
                                name="image"
                                type="file"
                                onChange={(e) => setData('image', e.target.files?.[0] ?? null)}
                                tabIndex={3}
                            />
                            {errors.image && <div className="text-red-500 text-sm">{errors.image}</div>}

                            <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                                Save
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
