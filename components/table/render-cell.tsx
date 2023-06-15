import { Col, Row, User, Text, Tooltip } from '@nextui-org/react';
import React from 'react';
import { DeleteIcon } from '../icons/table/delete-icon';
import { EditIcon } from '../icons/table/edit-icon';
import { EyeIcon } from '../icons/table/eye-icon';
import { users } from './data';
import { IconButton, StyledBadge } from './table.styled';
import { Detail } from '../accounts/detail-user';
import { Edit } from '../accounts/edit-user';
import { Delete } from '../accounts/delete-user';

interface Props {
   user: typeof users[number];
   columnKey: string | React.Key;
}

export const RenderCell = ({ user, columnKey }: Props) => {
   // @ts-ignore
   const cellValue = user[columnKey];
   switch (columnKey) {
      case 'actions':
         return (
            <Row
               justify="center"
               align="center"
               css={{ 'gap': '$8', '@md': { gap: 0 } }}
            >
               <Col css={{ d: 'flex' }}>

                  <Detail />

               </Col>

               <Col css={{ d: 'flex' }}>

                  <Edit />

               </Col>
               <Col css={{d: 'flex'}}>
                  <Tooltip
                     content="Delete user"
                     color="error"
                     onClick={() => console.log('Delete user', user.id)}
                  >
                     <IconButton>x
                        <DeleteIcon size={20} fill="#FF0080" />
                     </IconButton>
                  </Tooltip>
               </Col>
            </Row >
         );
      case 'name':
         return (

            <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
               {user.email}
            </User>
         );
      case 'role':
         return (
            <Col>
               <Row>
                  <Text b size={15} css={{ tt: 'capitalize' }}>
                     {cellValue}
                  </Text>
               </Row>
               <Row>
                  <Text
                     b
                     size={13}
                     css={{ tt: 'capitalize', color: '$accents7' }}
                  >
                     {user.team}
                  </Text>
               </Row>
            </Col>
         );
      case 'status':
         return (
            // @ts-ignore
            <StyledBadge type={String(user.status)}>{cellValue}</StyledBadge>
         );

      default:
         return cellValue;
   }
};
