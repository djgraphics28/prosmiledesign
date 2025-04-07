import { Head } from '@inertiajs/react';

// import AppearanceTabs from '@/components/appearance-tabs';
// import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import ClientLayout from '@/layouts/clients/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Activity',
        href: '/clients/activity',
    },
];

export default function Activity() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Client Activity" />

            <ClientLayout>
                <div className="space-y-6">
                    Client Activity
                </div>
            </ClientLayout>
        </AppLayout>
    );
}
