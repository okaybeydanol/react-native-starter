// Types
import {RootStack} from '@routes/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack {}
  }
}
