import '@adonisjs/inertia/types'

import type React from 'react'
import type { Prettify } from '@adonisjs/core/types/common'

type ExtractProps<T> =
  T extends React.FC<infer Props>
    ? Prettify<Omit<Props, 'children'>>
    : T extends React.Component<infer Props>
      ? Prettify<Omit<Props, 'children'>>
      : never

declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'account': ExtractProps<(typeof import('../../inertia/pages/account.tsx'))['default']>
    'errors/not_found': ExtractProps<(typeof import('../../inertia/pages/errors/not_found.tsx'))['default']>
    'errors/server_error': ExtractProps<(typeof import('../../inertia/pages/errors/server_error.tsx'))['default']>
    'home': ExtractProps<(typeof import('../../inertia/pages/home.tsx'))['default']>
    'login/index': ExtractProps<(typeof import('../../inertia/pages/login/index.tsx'))['default']>
    'login/register': ExtractProps<(typeof import('../../inertia/pages/login/register.tsx'))['default']>
    'login/signin': ExtractProps<(typeof import('../../inertia/pages/login/signin.tsx'))['default']>
    'scan': ExtractProps<(typeof import('../../inertia/pages/scan.tsx'))['default']>
  }
}
