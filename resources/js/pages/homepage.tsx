import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageLayout from '@/layouts/page-layout';
import { Product, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const { auth } = usePage<SharedData>().props;

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let ignore = false;

        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => {
                if (ignore) return;
                setProducts(data);
            });

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <PageLayout title="Homepage" description="Home page">
            <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                <nav className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-gray-400">
                            <span className="font-bold text-indigo-600 dark:text-indigo-400">Market</span>place
                        </p>
                    </div>

                    <div>
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
            <div className="flex max-h-[50px] w-full justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                <main className="flex w-full flex-row lg:max-w-4xl">
                    <input className="flex-9 rounded-tl-lg rounded-bl-lg bg-white p-4 text-[18px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]" />
                    <div className="-mb-px flex aspect-[335/376] w-full flex-1 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-tr-lg rounded-br-lg bg-indigo-200 lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] dark:bg-indigo-400">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                </main>
            </div>
            <div className="hidden h-14.5 lg:block"></div>
            <article className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-6 lg:pt-0">
                {products?.map((product) => (
                    <Card key={product.id} className="rounded-xl py-0">
                        <img className="rounded-t-lg" src={product.imageUrl} alt={product.name} />
                        <CardHeader className="flex-1 px-10 pt-8 pb-0 text-center">
                            <CardTitle className="text-xl">{product.name}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="px-10 py-8">
                            <div className="align-center flex w-full flex-row">
                                <p className="flex-2 self-center text-white">EUR {product.price}</p>
                                <Button className="flex-1">Add to cart</Button>
                            </div>
                            <Button className="mt-4 w-full">
                                <Link className="h-full w-full" href={route(`product`, { id: product.id })}>
                                    More info
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </article>
        </PageLayout>
    );
}
