import { Button, Input, Text, Avatar, Grid } from '@nextui-org/react';
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
import { AddDepartment } from './add-department';
import { AddBranch } from './add-branch';
import { Adion } from './Adion';
import Head from 'next/head'

export const Department = () => {
   return (
      <>
         <Head>
            <title>ข้อมูลองค์กร / แผนกงาน</title>
         </Head>

         <Flex
            css={{
               'mt': '$5',
               'px': '$6',
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
                  <CrumbLink href="#">องค์กร</CrumbLink>
                  <Text>/</Text>
               </Crumb>
               <Crumb>
                  <CrumbLink href="#">แผนกในองค์กร</CrumbLink>
               </Crumb>
            </Breadcrumbs>

            <Text h3>หน่วยงาน องค์กร</Text>
            <Grid.Container gap={2}>
               <Grid>
                  <Avatar
                     src="https://www.r-scan.com/SChool/000/pic/rscancom_test_LOGO_splash.jpg"
                     css={{ size: "$30" }}
                  />
               </Grid>
            </Grid.Container>
            <Text> <h4>บริษัท แอนนาดิจิทกรุ๊ป จำกัด</h4></Text>


            <Flex
               css={{ gap: '$8' }}
               align={'center'}
               justify={'between'}
               wrap={'wrap'}
            >
               <Flex
                  css={{
                     'gap': '$6',
                     'flexWrap': 'wrap',
                     '@sm': { flexWrap: 'nowrap' },
                  }}
                  align={'center'}
               >
                  <Input
                     css={{ width: '100%', maxW: '410px' }}
                     placeholder="Search department..."
                  />
                  <SettingsIcon />
                  <TrashIcon />
                  <InfoIcon />
                  <DotsIcon />
               </Flex>
               <Flex direction={'row'} css={{ gap: '$6' }} wrap={'wrap'}>
                  <AddDepartment />
                  <AddBranch />
                  <Button auto iconRight={<ExportIcon />}>
                     แก้ไของค์กร
                  </Button>
               </Flex>
            </Flex>
            <Adion />

         </Flex>
      </>
   );
};
