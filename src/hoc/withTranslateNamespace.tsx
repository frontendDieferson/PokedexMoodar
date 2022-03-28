import React, { useCallback } from 'react'

import { translateNamespace } from '@lang'

export interface TranslateNamespaceProps {
  tn: ReturnType<typeof translateNamespace>
}

export const withTranslateNamespace =
  (namespace: string) =>
  <Props extends unknown>(Component: React.ComponentType<Props>) => {
    const WithTranslateNamespace: React.FC<Props> = (props: Props) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const tn = useCallback(translateNamespace(namespace), [])
      return <Component {...props} tn={tn} />
    }

    return WithTranslateNamespace
  }
