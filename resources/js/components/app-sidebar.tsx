import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Calendar1Icon, ChartAreaIcon, ClipboardPenIcon, Folder, LayoutGrid, PersonStandingIcon, Receipt, User2, UserCheck2, Users2, Users2Icon, UserSquare2, UsersRound } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Patient Management',
        href: '/patients',
        icon: PersonStandingIcon,
    },
    {
        title: 'Appointments',
        href: '/appointments',
        icon: Calendar1Icon,
    },
    {
        title: 'Clients',
        href: '/clients/accounts',
        icon: Users2,
    },
    {
        title: 'Staffs',
        href: '/staffs',
        icon: UsersRound,
    },
    {
        title: 'Case Management',
        href: '/case-management',
        icon: ClipboardPenIcon,
    },
    {
        title: 'Billing',
        href: '/billing/adjustments',
        icon: Receipt,
    },
    {
        title: 'Lab Coordination',
        href: '/lab-coordination',
        icon: ClipboardPenIcon,
    },
    {
        title: 'Reports & Analytics',
        href: '/reports-analytics',
        icon: ChartAreaIcon,
    },
    {
        title: 'User Management',
        href: '/user-management',
        icon: Users2Icon,
    },
    {
        title: 'Support / Feedback',
        href: '/support-feedback',
        icon: UserCheck2,
    },
];

const footerNavItems: NavItem[] = [
    // {
    //     title: 'Repository',
    //     href: 'https://github.com/laravel/react-starter-kit',
    //     icon: Folder,
    // },
    // {
    //     title: 'Documentation',
    //     href: 'https://laravel.com/docs/starter-kits',
    //     icon: BookOpen,
    // },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
