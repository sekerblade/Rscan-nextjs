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
import { DataGridDemo } from '../tables/demoDataGrid';
import { MuiDrawer } from '../tables/muiDrawer';
import Head from 'next/head';

export const Accounts = () => {
   return (
      <>
         <Head>
            <title>ข้อมูลพนักงาน</title>
         </Head>
         <Flex
            css={{
               mt: '$5',
               px: '$6',
               '@sm': {
                  mt: '$10',
                  px: '$16',
               },
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
            <Text>ข้อมูลพนักงาน</Text>
               <MuiDrawer/> 
         </Flex>
      </>
   );
};
