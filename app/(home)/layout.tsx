import type {ReactNode} from 'react';
import {HomeLayout} from 'fumadocs-ui/layouts/home';
import {baseOptions, linkItems} from '@/app/layout.config';
import ReactLenis from 'lenis/react';
import {Book, ComponentIcon, Pencil, PlusIcon, Server} from "lucide-react";
import {NavbarMenu, NavbarMenuContent, NavbarMenuLink, NavbarMenuTrigger} from "fumadocs-ui/layouts/home/navbar";
import Link from 'fumadocs-core/link';
import Image from 'next/image';
import Preview from '@/public/banner.png';

export default function Layout({children}: { children: ReactNode }) {
    return <HomeLayout
        {...baseOptions}
        links={[
            {
                type: 'menu',
                on: 'menu',
                text: 'Documentation',
                items: [
                    {
                        text: 'Getting Started',
                        url: '/docs/getting-started',
                        icon: <Book/>,
                    },
                    {
                        text: 'Components',
                        url: '/docs/components',
                        icon: <ComponentIcon/>,
                    },
                ],
            },
            {
                type: 'custom',
                on: 'nav',
                children: (
                    <NavbarMenu>
                        <NavbarMenuTrigger>
                            <Link href="/docs/">Documentation</Link>
                        </NavbarMenuTrigger>
                        <NavbarMenuContent className="text-[15px]">
                            <NavbarMenuLink href="/docs/getting-started" className="md:row-span-2">
                                <div className="-mx-3 -mt-3">
                                    <Image
                                        src={Preview}
                                        alt="Perview"
                                        className="rounded-t-lg object-cover"
                                        style={{
                                            maskImage:
                                                'linear-gradient(to bottom,white 60%,transparent)',
                                        }}
                                    />
                                </div>
                                <p className="font-medium">Getting Started</p>
                                <p className="text-fd-muted-foreground text-sm">
                                    Learn to use Ludwig as a starting point for your next project.
                                </p>
                            </NavbarMenuLink>

                            <NavbarMenuLink
                                href="/docs/components"
                                className="lg:col-start-2"
                            >
                                <ComponentIcon
                                    className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md"/>
                                <p className="font-medium">Components</p>
                                <p className="text-fd-muted-foreground text-sm">
                                    Add interactive experience to your docs.
                                </p>
                            </NavbarMenuLink>

                            <NavbarMenuLink
                                href="/docs/openapi"
                                className="lg:col-start-2"
                            >
                                <Server className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md"/>
                                <p className="font-medium">OpenAPI</p>
                                <p className="text-fd-muted-foreground text-sm">
                                    Generate interactive playgrounds and docs for your OpenAPI
                                    schema.
                                </p>
                            </NavbarMenuLink>

                            <NavbarMenuLink
                                href="/docs/markdown"
                                className="lg:col-start-3 lg:row-start-1"
                            >
                                <Pencil className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md"/>
                                <p className="font-medium">Markdown</p>
                                <p className="text-fd-muted-foreground text-sm">
                                    Learn the writing format/syntax of Fumadocs.
                                </p>
                            </NavbarMenuLink>

                            <NavbarMenuLink
                                href="/docs/manual-installation"
                                className="lg:col-start-3 lg:row-start-2"
                            >
                                <PlusIcon className="bg-fd-primary text-fd-primary-foreground p-1 mb-2 rounded-md"/>
                                <p className="font-medium">Manual Installation</p>
                                <p className="text-fd-muted-foreground text-sm">
                                    Setup Fumadocs for your existing Next.js app.
                                </p>
                            </NavbarMenuLink>
                        </NavbarMenuContent>
                    </NavbarMenu>
                ),
            },
            ...linkItems,
        ]}
    >
        <ReactLenis root>
            {children}
        </ReactLenis>
    </HomeLayout>;
}
