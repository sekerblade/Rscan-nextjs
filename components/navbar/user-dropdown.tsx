import { useRouter } from 'next/router';
import { Avatar, Dropdown, Navbar, Text } from '@nextui-org/react';
import React from 'react';
import { DarkModeSwitch } from './darkmodeswitch';

export const UserDropdown = () => {
   const router = useRouter();

   const handleLogout = () => {
      // Perform any logout logic here, such as clearing authentication tokens or session data

      // Redirect to the login page after logout
      if (typeof window !== 'undefined') {
         if (router.replace) {
            router.replace('/login');
         } else {
            window.location.replace('/login');
         }
      }

   };

   return (
      <Dropdown placement="bottom-right">
         <Navbar.Item>
            <Dropdown.Trigger>
               <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
               />
            </Dropdown.Trigger>
         </Navbar.Item>
         <Dropdown.Menu
            aria-label="User menu actions"
            onAction={(actionKey) => console.log({ actionKey })}
         >
            <Dropdown.Item key="profile" css={{ height: '$18' }}>
               <Text b color="inherit" css={{ d: 'flex' }}>
                  Signed in as
               </Text>
               <Text b color="inherit" css={{ d: 'flex' }}>
                  zoey@example.com
               </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
               My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
               Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
               Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" withDivider>
               <button
                  onClick={handleLogout}
                  style={{
                     display: 'flex',
                     width: '100%',
                     justifyContent: 'flex-start',
                     alignItems: 'center',
                     padding: '8px 16px',
                     backgroundColor: 'transparent',
                     border: 'none',
                     cursor: 'pointer',
                  }}
               >
                  <Text color="error" b>
                     Log Out
                  </Text>
               </button>
            </Dropdown.Item>
            <Dropdown.Item key="switch" withDivider>
               <DarkModeSwitch />
            </Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown>
   );
};
