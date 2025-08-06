import { Button } from '@/components/ui/button';
import PageLayout from '@/layouts/page-layout';
import { cn } from '@/lib/utils';
import { ProductData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function ProductPage() {
    const { auth, product } = usePage<ProductData>().props;

    console.log({ product });

    return (
        <PageLayout title="Product" description="Product page">
            <article className="flex w-full flex-col p-4 lg:grid lg:grid-cols-4 lg:flex-row lg:px-8 lg:py-4 dark:text-white">
                <img className="lg:mr-2 dark:text-white" src={product.imageUrl} alt={`${product.name} photo image`} />
                <section className="flex flex-5 flex-col py-4 lg:col-span-2 lg:px-6 lg:py-0 dark:text-white">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="my-4 flex text-3xl">
                        <span className="self-start justify-self-start text-sm">€</span>
                        {product.price}
                    </p>
                    <h3 className="mt-6 text-2xl font-bold">About this item</h3>
                    <p className="my-4 text-xl">{product.description}</p>
                </section>
                <section className="flex w-[50%] flex-1 flex-col py-4 lg:px-6 lg:py-0 dark:text-white">
                    <p className="my-4 flex text-3xl">
                        <span className="self-start justify-self-start text-sm">€</span>
                        {product.price}
                    </p>
                    <Button disabled={!product.isInStock}>Add to cart</Button>

                    <div className="my-4 lg:my-6">
                        <p className={cn('text-xl', product.isInStock ? 'text-green-300' : 'text-red-300')}>
                            {product.isInStock ? 'In Stock' : 'Not Available'}
                        </p>
                    </div>
                </section>
            </article>
        </PageLayout>
    );
}
