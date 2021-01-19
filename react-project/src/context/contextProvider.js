import { cloneElement, memo } from 'react';

const ContextProvider = ({ contextProviders, children }) =>
  contextProviders.reduceRight(
    (element, parent) => cloneElement(parent, { children: element }),
    children,
  );

export default memo(ContextProvider);
