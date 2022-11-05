import styled from '@emotion/styled';
import { FC, ReactElement } from 'react';

interface ValidateErrProps {
  children: string,
  theme: string,
}

const Validate = styled.h5`
  text-align:center;
  margin: 10px 0 0;
  color: red;
  display: ${((props: ValidateErrProps) => props.theme)};
`
const ValidationErr: FC<ValidateErrProps> = ({children, theme}): ReactElement => {  
  return <Validate theme={theme}>{children}</Validate>
}
export default ValidationErr;