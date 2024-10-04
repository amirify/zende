import { Interpolation } from '@emotion/react';

declare module 'react' {
    interface Attributes {
        css?: Interpolation;
    }
}
