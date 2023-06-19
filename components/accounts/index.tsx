import { Button, Input, Text } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { Breadcrumbs, Crumb, CrumbLink } from '../breadcrumb/breadcrumb.styled';
import { DotsIcon } from '../icons/accounts/dots-icon';
import { ExportIcon } from '../icons/accounts/export-icon';
import { InfoIcon } from '../icons/accounts/info-icon';
import { TrashIcon } from '../icons/accounts/trash-icon';
import { HouseIcon } from '../icons/breadcrumb/house-icon';
import { UsersIcon } from '../icons/breadcrumb/users-icon';
import { SettingsIcon } from '../icons/sidebar/settings-icon';
import { Flex } from '../styles/flex';
import { AddUser } from './add-user';
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
                  <AddUser />

               </Flex>
            </Flex>
         </Flex>
         <DataGridDemo />
      </>
   );
};
