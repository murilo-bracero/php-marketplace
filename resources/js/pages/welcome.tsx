import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    external_id: string;
};

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        let ignore = false;

        fetch('/products')
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
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:p-8 dark:bg-[#0a0a0a]">
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
                <article className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {products?.map((product) => (
                        <Card className="rounded-xl">
                            <CardHeader className="px-10 pt-8 pb-0 text-center">
                                <CardTitle className="text-xl">{product.name}</CardTitle>
                                <CardDescription>{product.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="px-10 py-8">
                                <p className="text-gray-200">{product.price}</p>
                            </CardContent>
                        </Card>
                    ))}
                </article>
            </div>
        </>
    );
}
