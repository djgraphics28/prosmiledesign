import { Head } from '@inertiajs/react';

// import AppearanceTabs from '@/components/appearance-tabs';
// import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import BillingLayout from '@/layouts/billing/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Adjustments',
        href: '/billing/adjustments',
    },
];

export default function Adjustments() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Adjustments" />

            <BillingLayout>
                <div className="space-y-6">
                    {/* <HeadingSmall title="Accounts" description="Update your account's appearance settings" />
                    <AppearanceTabs /> */}
                </div>
            </BillingLayout>
        </AppLayout>
    );
}
