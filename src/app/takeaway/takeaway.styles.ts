import styled from 'styled-components';
import { Badge } from '@mui/material';

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledBadge = styled(Badge)({
   '& .MuiBadge-badge': {
    position: 'fixed',
    right: '20px',
    top: '20px',
    transform: 'scale(1.5)', // Adjust the scale to make the badge bigger
    cursor: 'pointer'
  }
}
);