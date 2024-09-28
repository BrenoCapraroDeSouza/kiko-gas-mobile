import { memo, PropsWithChildren } from 'react';

import { Main } from './styled';

function Container(props: Required<PropsWithChildren>) {
  const { children } = props;

  return <Main>{children}</Main>;
}

export default memo(Container);
