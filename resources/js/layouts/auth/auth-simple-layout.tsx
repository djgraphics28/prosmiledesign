import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const appearance = localStorage.getItem('appearance') || 'system';

        if (appearance === 'dark') {
            setIsDark(true);
        } else if (appearance === 'light') {
            setIsDark(false);
        } else {
            // appearance is "system" -> detect real system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(prefersDark);
        }
    }, []);

    const logoUrl = isDark
        ? 'https://danae30.sg-host.com/wp-content/uploads/2023/03/Prosmile-Logo-white.png'
        : 'https://danae30.sg-host.com/wp-content/uploads/2023/03/ProsmileDesignInlineLogoSpaced2NoTag.png';

    return (
        <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link href={route('home')} className="flex flex-col items-center gap-2 font-medium">
                            <div className="mb-1 flex w-70 items-center justify-center rounded-md">
                                <img src={logoUrl} alt="Logo" className="w-full" />
                            </div>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium">{title}</h1>
                            <p className="text-muted-foreground text-center text-sm">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
