import { Button, Input, Text } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs, Crumb, CrumbLink } from '../components/breadcrumb/breadcrumb.styled';
import { DotsIcon } from '../components/icons/accounts/dots-icon';
import { ExportIcon } from '../components/icons/accounts/export-icon';
import { InfoIcon } from '../components/icons/accounts/info-icon';
import { TrashIcon } from '../components/icons/accounts/trash-icon';
import { HouseIcon } from '../components/icons/breadcrumb/house-icon';
import { UsersIcon } from '../components/icons/breadcrumb/users-icon';
import { SettingsIcon } from '../components/icons/sidebar/settings-icon';
import { Flex } from '../components/styles/flex';
import { AddUser } from '../components/accounts/add-user';
import { DataGridDemo } from '../tables/demoDataGrid';
import Head from 'next/head';


export const Accounts = () => {
   return (
      <>
         <Head>
            <title>ข้อมูลพนักงาน</title>
         </Head>
         <Flex
            css={{
              gap: "$6",
              flexWrap: "wrap",
              "@sm": { flexWrap: "nowrap" },
            }}
            justify={'center'}
            direction={'column'}
         >
            <Breadcrumbs>
               <Crumb>
                  <HouseIcon />
                  <Link href={'/'}>
                     <CrumbLink href="#">Home</CrumbLink>
                  </Link>
                  <Text>/</Text>
               </Crumb>

               <Crumb>
                  <UsersIcon />
                  <CrumbLink href="#">ข้อมูลพนักงาน</CrumbLink>
                  <Text>/</Text>
               </Crumb>
               <Crumb>
                  <CrumbLink href="#">รายชื่อ</CrumbLink>
               </Crumb>
            </Breadcrumbs>

            <Text h3>ข้อมูลพนักงาน</Text>
            <Flex
               css={{ gap: '$8' }}
               align={'center'}
               justify={'between'}
               wrap={'wrap'}
            >
               <Flex direction={'row'} css={{ gap: '$6' }} wrap={'wrap'}>
                  <AddUser/>
               </Flex>
            </Flex>
         </Flex>
      </>
   );
};
